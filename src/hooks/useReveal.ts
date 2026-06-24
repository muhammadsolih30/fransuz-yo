import { useEffect, useLayoutEffect } from "react";
import {
  flushVisibleReveals,
  revealAllInViewSoon,
  revealElement,
  revealMainViewport,
  revealSectionById,
} from "../lib/reveal-helpers";

const MAX_CHARS = 280;
const TEXT_SELECTOR = "h1, h2, h3, h4, h5, p, li, dt, dd, label, figcaption";
const RETRY_MS = [0, 80, 200, 450, 900];
const STAGGER_MS = 85;

function pickDirection(_seed: number) {
  return "bottom" as const;
}

function shouldSkip(el: HTMLElement) {
  if (el.dataset.charsWrapped === "1") return true;
  if (el.closest("[data-no-reveal]")) return true;
  if (el.closest(".cert-reveal-wrap, .cert-magnifier-tool, .admin-root, .animate-marquee")) return true;
  if (el.className && /\banimate-/.test(el.className)) return true;
  if (el.closest(".reveal") && !el.classList.contains("reveal")) return true;
  return false;
}

function assignBlockDirection(el: HTMLElement) {
  el.dataset.from = "bottom";
}

/** Bir qatordagi / ustma-ust kartalar ketma-ket pastdan chiqadi */
function staggerSiblingReveals(root: ParentNode) {
  const seen = new Set<HTMLElement>();

  root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    const parent = el.parentElement;
    if (!parent || seen.has(parent)) return;

    const siblings = Array.from(parent.children).filter(
      (c): c is HTMLElement => c.classList.contains("reveal"),
    );
    if (siblings.length < 2) return;

    seen.add(parent);
    siblings.forEach((sib, i) => {
      sib.dataset.from = "bottom";
      sib.dataset.delay = String(i * STAGGER_MS);
    });
  });
}

/** `.card` elementlariga avtomatik reveal (ichki kartalar alohida chiqadi) */
function autoTagCards(root: ParentNode) {
  root.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    if (card.classList.contains("reveal")) return;
    if (card.closest("[data-no-reveal], .admin-root")) return;

    card.classList.add("reveal");
    card.dataset.from = "bottom";
  });

  // Bir nechta karta bo'lgan ota `reveal` ni olib tashlash — kartalar alohida chiqadi
  root.querySelectorAll<HTMLElement>(".reveal").forEach((parent) => {
    if (parent.classList.contains("card")) return;

    const directCards = Array.from(parent.children).filter(
      (c): c is HTMLElement => c.classList.contains("card") && c.classList.contains("reveal"),
    );
    if (directCards.length < 2) return;

    parent.classList.remove("reveal", "is-visible");
    delete parent.dataset.from;
    delete parent.dataset.delay;
    parent.style.removeProperty("transition-delay");
  });
}

function wrapTextInChars(el: HTMLElement) {
  if (el.dataset.charsWrapped === "1") return;
  if (el.querySelector("a, button, input, select, textarea, svg, img, video, .reveal-char")) return;
  if (el.children.length > 0) return;

  const text = el.textContent ?? "";
  if (!text.trim() || text.length > MAX_CHARS) return;

  el.textContent = "";
  el.classList.remove("reveal-auto");
  el.classList.add("reveal-chars");

  let i = 0;
  for (const ch of text) {
    const span = document.createElement("span");
    span.className = "reveal-char";
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.dataset.from = pickDirection(i * 11 + text.charCodeAt(i % text.length));
    span.style.transitionDelay = `${Math.min(i * 22, 700)}ms`;
    el.appendChild(span);
    i += 1;
  }

  el.dataset.charsWrapped = "1";
}

function collectTextTargets(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter((el) => {
    if (shouldSkip(el)) return false;
    if (el.classList.contains("reveal")) return false;
    return true;
  });
}

function bindRevealObserver() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const roots = [document.querySelector("main"), document.querySelector("footer")].filter(
    Boolean,
  ) as HTMLElement[];

  roots.forEach((root) => autoTagCards(root));

  const explicit = Array.from(document.querySelectorAll<HTMLElement>(".reveal")).filter(
    (el) => !el.closest("[data-no-reveal]") && !el.closest(".admin-root"),
  );

  explicit.forEach((el) => assignBlockDirection(el));
  roots.forEach((root) => staggerSiblingReveals(root));

  const auto = roots.flatMap((root) => collectTextTargets(root));
  auto.forEach(wrapTextInChars);

  const charContainers = Array.from(document.querySelectorAll<HTMLElement>(".reveal-chars"));
  const tagged = Array.from(document.querySelectorAll<HTMLElement>(".reveal")).filter(
    (el) => !el.closest("[data-no-reveal]") && !el.closest(".admin-root"),
  );
  const all = [...new Set([...tagged, ...charContainers])];

  if (all.length === 0) return null;

  if (prefersReduced) {
    all.forEach((el) => revealElement(el));
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -6% 0px" },
  );

  all.forEach((el) => {
    if (!el.classList.contains("is-visible")) observer.observe(el);
  });

  revealAllInViewSoon();

  const hash = window.location.hash.replace(/^#/, "");
  if (hash) revealSectionById(hash);

  return observer;
}

/**
 * Scroll-reveal — bo'limlar pastdan ketma-ket chiqadi.
 * Sahifa yuklanishi kechiksa (SPA navigatsiya) qayta urinadi.
 */
export function useReveal(deps: ReadonlyArray<unknown> = []) {
  useLayoutEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      observer?.disconnect();
      observer = bindRevealObserver();
    };

    run();

    const retryTimers = RETRY_MS.map((ms) => window.setTimeout(run, ms));

    const main = document.querySelector("main");
    const mutationObserver =
      main &&
      new MutationObserver(() => {
        if (main.querySelector(".reveal, .reveal-chars, h1, p")) run();
      });
    if (main && mutationObserver) {
      mutationObserver.observe(main, { childList: true, subtree: true });
    }

    return () => {
      cancelled = true;
      retryTimers.forEach((id) => window.clearTimeout(id));
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, deps);

  useEffect(() => {
    const timers = [0, 120, 350, 700].map((ms) =>
      window.setTimeout(() => {
        revealMainViewport();
        flushVisibleReveals();
        const hash = window.location.hash.replace(/^#/, "");
        if (hash) revealSectionById(hash);
      }, ms),
    );

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, deps);
}
