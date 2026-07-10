import { useEffect, useState } from "react";

const HERO_OPENING_BG = "/image/opening/ckanada%20va%20firansiya.png";

export function HeroOpeningBg() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = new Image();
    probe.decoding = "async";
    probe.src = HERO_OPENING_BG;

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
  }, []);

  return (
    <div className="hero-opening-bg absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="stripe-mesh-dark absolute inset-0" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--red" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--blue" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--navy" />
      <div className="hero-opening-bg__grid" />
      <div className="hero-opening-bg__frame">
        {ready ? (
          <img
            src={HERO_OPENING_BG}
            alt=""
            className="hero-opening-bg__image"
            data-ready={visible ? "1" : "0"}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        ) : null}
      </div>
    </div>
  );
}
