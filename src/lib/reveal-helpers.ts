export function revealElement(el: HTMLElement) {
  if (el.classList.contains("is-visible")) return;
  const delay = el.dataset.delay ?? "0";
  el.style.transitionDelay = `${delay}ms`;
  el.classList.add("is-visible");
}

export function isElementInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.98 && rect.bottom > 0;
}

/** Viewport ichidagi yashirin elementlarni ko'rsatadi */
export function flushVisibleReveals(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-chars:not(.is-visible)").forEach((el) => {
    if (isElementInView(el)) revealElement(el);
  });
}

/** Birinchi ekran (viewport) dagi barcha reveal elementlar */
export function revealMainViewport() {
  const main = document.querySelector("main");
  if (!main) return;

  const fold = window.innerHeight * 1.35;
  main.querySelectorAll<HTMLElement>(".reveal, .reveal-chars").forEach((el) => {
    if (el.getBoundingClientRect().top < fold) revealElement(el);
  });
}

/** Berilgan bo'lim va undan yuqoridagi reveal elementlar */
export function revealSectionById(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY;
  document.querySelectorAll<HTMLElement>(".reveal, .reveal-chars").forEach((el) => {
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    if (elTop <= sectionBottom + 120) revealElement(el);
  });

  section.querySelectorAll<HTMLElement>(".reveal, .reveal-chars").forEach(revealElement);
}

export function revealAllInViewSoon() {
  flushVisibleReveals();
  requestAnimationFrame(() => {
    flushVisibleReveals();
    revealMainViewport();
    requestAnimationFrame(() => {
      flushVisibleReveals();
      revealMainViewport();
    });
  });
}
