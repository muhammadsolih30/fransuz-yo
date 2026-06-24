import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const LENS_INNER = 172;
const ZOOM = 2.35;

type CertificateRevealProps = {
  src: string;
  alt: string;
  index?: number;
  className?: string;
};

type MagnifyState = {
  show: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
};

export function CertificateReveal({ src, alt, index = 0, className = "" }: CertificateRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [canMagnify, setCanMagnify] = useState(false);
  const [magnify, setMagnify] = useState<MagnifyState>({ show: false, x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanMagnify(finePointer);
  }, []);

  useEffect(() => {
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
          window.setTimeout(() => setActive(true), index * 220);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => setDone(true), 2600);
    return () => window.clearTimeout(timer);
  }, [active]);

  const updateMagnify = useCallback(
    (clientX: number, clientY: number) => {
      const host = hostRef.current;
      if (!host || !canMagnify || !done) return;

      const rect = host.getBoundingClientRect();
      setMagnify({
        show: true,
        x: clientX - rect.left,
        y: clientY - rect.top,
        w: rect.width,
        h: rect.height,
      });
    },
    [canMagnify, done],
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateMagnify(e.clientX, e.clientY);
  };

  const onMouseLeave = () => {
    setMagnify((prev) => ({ ...prev, show: false }));
  };

  const magnifyReady = canMagnify && done;

  return (
    <div
      ref={wrapRef}
      className={`cert-reveal-wrap aspect-[3/4] ${className}`}
      style={{ "--cert-delay": `${index * 0.12}s` } as CSSProperties}
    >
      <div
        className={`cert-reveal-card ${active ? "cert-reveal-card--spin" : ""} ${done ? "cert-reveal-card--done" : ""}`}
      >
        <div className="cert-reveal-face cert-reveal-face--front">
          <div
            ref={hostRef}
            className={`cert-magnifier-host ${magnifyReady ? "cert-magnifier-host--ready" : ""}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <img
              src={src}
              alt={alt}
              className="cert-reveal-img"
              draggable={false}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {magnify.show && magnifyReady && (
              <div
                className="cert-magnifier-tool"
                style={{ left: magnify.x, top: magnify.y }}
                aria-hidden
              >
                <div className="cert-magnifier-glass-ring">
                  <div className="cert-magnifier-viewport">
                    <img
                      src={src}
                      alt=""
                      className="cert-magnifier-lens-img"
                      draggable={false}
                      style={{
                        width: magnify.w * ZOOM,
                        height: magnify.h * ZOOM,
                        left: -(magnify.x * ZOOM - LENS_INNER / 2),
                        top: -(magnify.y * ZOOM - LENS_INNER / 2),
                      }}
                    />
                  </div>
                  <div className="cert-magnifier-glare" />
                </div>
                <div className="cert-magnifier-ferrule" />
                <div className="cert-magnifier-handle" />
              </div>
            )}
          </div>
          <div className="cert-reveal-shine" aria-hidden />
        </div>
        <div className="cert-reveal-face cert-reveal-face--back" aria-hidden>
          <div className="cert-reveal-back-pattern" />
          <span className="cert-reveal-back-logo">TCF</span>
        </div>
      </div>
    </div>
  );
}
