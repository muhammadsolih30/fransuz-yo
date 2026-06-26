import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const LENS_CAROUSEL = {
  viewport: 192,
  ring: 208,
  zoom: 2.1,
};

const LENS_DEFAULT = {
  viewport: 172,
  ring: 188,
  zoom: 2.35,
};

type CertificateRevealProps = {
  src: string;
  alt: string;
  index?: number;
  className?: string;
  compact?: boolean;
  animate?: boolean;
};

type ImageMetrics = {
  offsetX: number;
  offsetY: number;
  renderedW: number;
  renderedH: number;
};

type MagnifyState = {
  show: boolean;
  x: number;
  y: number;
  metrics: ImageMetrics | null;
};

function getImageMetrics(
  img: HTMLImageElement,
  containerW: number,
  containerH: number,
): ImageMetrics {
  const naturalW = img.naturalWidth || containerW;
  const naturalH = img.naturalHeight || containerH;
  const scale = Math.min(containerW / naturalW, containerH / naturalH);
  const renderedW = naturalW * scale;
  const renderedH = naturalH * scale;

  return {
    offsetX: (containerW - renderedW) / 2,
    offsetY: (containerH - renderedH) / 2,
    renderedW,
    renderedH,
  };
}

export function CertificateReveal({
  src,
  alt,
  index = 0,
  className = "",
  compact = false,
  animate = true,
}: CertificateRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(!animate);
  const [done, setDone] = useState(!animate);
  const [canMagnify, setCanMagnify] = useState(false);
  const [magnify, setMagnify] = useState<MagnifyState>({
    show: false,
    x: 0,
    y: 0,
    metrics: null,
  });

  const lens = compact ? LENS_CAROUSEL : LENS_DEFAULT;
  const half = lens.viewport / 2;

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanMagnify(finePointer);
  }, []);

  useEffect(() => {
    if (!animate) return;

    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => setActive(true), Math.min(index, 4) * 120);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, animate]);

  useEffect(() => {
    if (!active || !animate) return;
    const timer = window.setTimeout(() => setDone(true), compact ? 1800 : 2600);
    return () => window.clearTimeout(timer);
  }, [active, animate, compact]);

  const updateMagnify = useCallback(
    (clientX: number, clientY: number) => {
      const host = hostRef.current;
      const img = imgRef.current;
      if (!host || !img || !canMagnify || !done || !img.complete) return;

      const rect = host.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const metrics = getImageMetrics(img, rect.width, rect.height);

      setMagnify({
        show: true,
        x,
        y,
        metrics,
      });
    },
    [canMagnify, done],
  );

  const magnifyReady = canMagnify && done;
  const m = magnify.metrics;

  const lensImgStyle: CSSProperties | undefined =
    magnify.show && m
      ? {
          width: m.renderedW * lens.zoom,
          height: m.renderedH * lens.zoom,
          left: -((magnify.x - m.offsetX) * lens.zoom - half),
          top: -((magnify.y - m.offsetY) * lens.zoom - half),
        }
      : undefined;

  return (
    <div
      ref={wrapRef}
      className={`cert-reveal-wrap aspect-[3/4] ${compact ? "cert-reveal-wrap--carousel" : ""} ${className}`}
      style={{ "--cert-delay": `${Math.min(index, 4) * 0.08}s` } as CSSProperties}
    >
      <div
        className={`cert-reveal-card ${active && animate ? "cert-reveal-card--spin" : ""} ${done ? "cert-reveal-card--done" : ""} ${compact ? "cert-reveal-card--compact" : ""}`}
      >
        <div className="cert-reveal-face cert-reveal-face--front">
          <div
            ref={hostRef}
            className={`cert-magnifier-host ${magnifyReady ? "cert-magnifier-host--ready" : ""}`}
            onMouseMove={(e) => updateMagnify(e.clientX, e.clientY)}
            onMouseLeave={() => setMagnify((prev) => ({ ...prev, show: false }))}
          >
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className="cert-reveal-img cert-reveal-img--contain"
              draggable={false}
              loading="lazy"
              decoding="async"
              onLoad={() => {
                if (magnify.show && hostRef.current) {
                  const rect = hostRef.current.getBoundingClientRect();
                  setMagnify((prev) => ({
                    ...prev,
                    metrics: imgRef.current
                      ? getImageMetrics(imgRef.current, rect.width, rect.height)
                      : prev.metrics,
                  }));
                }
              }}
            />
            {magnify.show && magnifyReady && m && (
              <div
                className="cert-magnifier-tool"
                style={{
                  left: magnify.x,
                  top: magnify.y,
                  "--lens-ring": `${lens.ring}px`,
                  "--lens-viewport": `${lens.viewport}px`,
                } as CSSProperties}
                aria-hidden
              >
                <div className="cert-magnifier-lens-center">
                  <div className="cert-magnifier-glass-ring">
                    <div className="cert-magnifier-viewport">
                      <img
                        src={src}
                        alt=""
                        className="cert-magnifier-lens-img"
                        draggable={false}
                        style={lensImgStyle}
                      />
                    </div>
                    <div className="cert-magnifier-glare" />
                  </div>
                  <div className="cert-magnifier-ferrule" />
                  <div className="cert-magnifier-handle" />
                </div>
              </div>
            )}
          </div>
          <div className="cert-reveal-shine" aria-hidden />
        </div>
        {!compact && (
          <div className="cert-reveal-face cert-reveal-face--back" aria-hidden>
            <div className="cert-reveal-back-pattern" />
            <span className="cert-reveal-back-logo">TCF</span>
          </div>
        )}
      </div>
    </div>
  );
}
