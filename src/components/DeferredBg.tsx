import { useEffect, useState, type CSSProperties } from "react";

type DeferredBgProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  /** Extra placeholder layer classes */
  placeholderClassName?: string;
};

/**
 * background-image uchun: to'liq yuklanmaguncha gradient placeholder,
 * keyin fon rasmi birdan paydo bo'ladi.
 */
export function DeferredBg({
  src,
  className = "",
  style,
  placeholderClassName = "",
}: DeferredBgProps) {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(false);
    setVisible(false);
    let cancelled = false;
    const probe = new Image();
    probe.decoding = "async";
    probe.src = src;

    const markReady = () => {
      if (cancelled) return;
      setReady(true);
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

    if (probe.complete && probe.naturalWidth > 0) finish();
    else {
      probe.onload = finish;
      probe.onerror = markReady;
    }

    return () => {
      cancelled = true;
      probe.onload = null;
      probe.onerror = null;
    };
  }, [src]);

  return (
    <>
      <div
        className={`deferred-bg__placeholder absolute inset-0 ${placeholderClassName}`.trim()}
        aria-hidden
        data-ready={visible ? "1" : "0"}
      />
      <div
        className={`deferred-bg__image absolute inset-0 ${className}`.trim()}
        style={{
          ...style,
          backgroundImage: ready ? `url("${src}")` : undefined,
        }}
        aria-hidden
        data-ready={visible ? "1" : "0"}
      />
    </>
  );
}
