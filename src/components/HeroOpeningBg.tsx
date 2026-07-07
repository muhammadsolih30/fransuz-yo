const HERO_OPENING_BG = "/image/opening/ckanada%20va%20firansiya.png";

export function HeroOpeningBg() {
  return (
    <div className="hero-opening-bg absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="stripe-mesh-dark absolute inset-0" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--red" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--blue" />
      <div className="hero-opening-bg__orb hero-opening-bg__orb--navy" />
      <div className="hero-opening-bg__grid" />
      <div className="hero-opening-bg__frame">
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
    </div>
  );
}
