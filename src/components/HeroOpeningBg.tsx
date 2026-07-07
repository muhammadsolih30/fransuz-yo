const HERO_OPENING_BG = "/image/opening/ckanada%20va%20firansiya.png";

export function HeroOpeningBg() {
  return (
    <div className="hero-opening-bg absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <img
        src={HERO_OPENING_BG}
        alt=""
        className="hero-opening-bg__image"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
