import { useLayoutEffect } from "react";

/**
 * Scroll-reveal:
 *  1) `.reveal` klassi qo'yilgan bloklarni animatsiya bilan ochadi.
 *  2) `main` ichidagi barcha matn elementlarini (h1–h4, p, li) avtomatik
 *     aniqlaydi va scroll paytida ketma-ket (stagger) chiqarib keladi.
 *  prefers-reduced-motion bo'lsa — animatsiyalar o'chiriladi.
 */
export function useReveal() {
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1) Aniq belgilangan .reveal bloklar
    const explicit = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // 2) main ichidagi matn elementlari (avtomatik)
    const main = document.querySelector("main");
    let auto: HTMLElement[] = [];
    if (main) {
      auto = Array.from(
        main.querySelectorAll<HTMLElement>("h1, h2, h3, h4, p, li"),
      ).filter((el) => {
        if (el.closest(".reveal")) return false; // blok sifatida allaqachon ochiladi
        if (el.closest("[data-no-reveal]")) return false;
        if (el.className && /\banimate-/.test(el.className)) return false; // o'zining animatsiyasi bor
        return true;
      });
    }

    const all = [...explicit, ...auto];
    if (all.length === 0) return;

    if (prefersReduced) {
      all.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Boshlang'ich yashirin holat (flash bo'lmasligi uchun layout effect ichida)
    auto.forEach((el) => {
      el.classList.add("reveal-auto");
      // bir ota-element ichidagi tartibga qarab ketma-ket kechikish
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) =>
          (c as HTMLElement).classList.contains("reveal-auto"),
        );
        const idx = siblings.indexOf(el);
        if (idx > 0) el.dataset.delay = String(Math.min(idx * 70, 350));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    all.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
