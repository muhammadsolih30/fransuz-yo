import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { flushVisibleReveals, revealSectionById } from "../lib/reveal-helpers";

const NAV_OFFSET = 96;

export function useHashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname !== "/" || !hash) return;

    const id = hash.replace(/^#/, "");

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const revealAfterScroll = () => {
      revealSectionById(id);
      flushVisibleReveals();
    };

    const t1 = window.setTimeout(scrollToSection, 50);
    const t2 = window.setTimeout(revealAfterScroll, 400);
    const t3 = window.setTimeout(revealAfterScroll, 900);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [hash, pathname]);
}
