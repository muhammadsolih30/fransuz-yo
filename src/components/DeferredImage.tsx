import { useEffect, useState, type ImgHTMLAttributes } from "react";

type DeferredImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "onError"> & {
  /** Placeholder gradient / solid layer behind the image */
  placeholderClassName?: string;
  /** Wrapper classes (defaults to relative overflow-hidden) */
  wrapClassName?: string;
  /** Called when the full image is ready to show */
  onReady?: () => void;
  /** Yuklanayotganda kichik spinner ko'rsatish */
  showSpinner?: boolean;
};

/**
 * Rasm to'liq yuklanmaguncha rangli placeholder ko'rsatadi,
 * keyin birdan (fade bilan) chiqadi — sekin internetda "bo'linib" chiqishni oldini oladi.
 */
export function DeferredImage({
  src,
  alt = "",
  className = "",
  placeholderClassName = "",
  wrapClassName = "",
  onReady,
  showSpinner = false,
  ...rest
}: DeferredImageProps) {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(false);
    setVisible(false);
    if (!src) return;

    let cancelled = false;
    const probe = new Image();
    probe.decoding = "async";
    probe.src = src;

    const markReady = () => {
      if (cancelled) return;
      setReady(true);
      onReady?.();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) setVisible(true);
        });
      });
    };

    const finish = () => {
      if (typeof probe.decode === "function") {
        probe.decode().then(markReady).catch(markReady);
      } else {
        markReady();
      }
    };

    if (probe.complete && probe.naturalWidth > 0) {
      finish();
    } else {
      probe.onload = finish;
      probe.onerror = markReady;
    }

    return () => {
      cancelled = true;
      probe.onload = null;
      probe.onerror = null;
    };
  }, [src, onReady]);

  return (
    <div className={`deferred-image ${wrapClassName}`.trim()}>
      <div
        className={`deferred-image__placeholder ${placeholderClassName}`.trim()}
        aria-hidden
        data-ready={visible ? "1" : "0"}
      />
      {showSpinner && !visible && (
        <div className="deferred-image__spinner" aria-hidden>
          <span className="deferred-image__spin" />
        </div>
      )}
      {/* src faqat to'liq yuklangandan keyin — progressive JPEG "bo'linib" chiqmasin */}
      {src && ready ? (
        <img
          {...rest}
          src={src}
          alt={alt}
          className={`deferred-image__img ${className}`.trim()}
          data-ready={visible ? "1" : "0"}
          decoding="async"
          draggable={false}
        />
      ) : null}
    </div>
  );
}
