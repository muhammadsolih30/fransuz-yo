import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

/**
 * Saytga kirgandan keyin chiqadigan "Ro'yxatdan o'tish" modali.
 * Bir marta yopilgach, sessiya davomida qayta chiqmaydi (sessionStorage).
 */
export function RegisterModal() {
  const { content } = useSitePreferences();
  const { registerModal } = content.ui;
  const { shared } = content.ui;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("regModalSeen") === "1") return;

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY / Math.max(doc.scrollHeight - window.innerHeight, 1);
      if (scrolled > 0.45) trigger();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = window.setTimeout(trigger, 12_000);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("regModalSeen", "1");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent className="register-modal max-w-[19rem] sm:max-w-md border-0 p-0 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-[#15233B]" closeLabel={content.ui.a11y.close}>
        <div className="relative bg-gradient-to-br from-[#f46868] via-[#e83848] to-[#e84858] px-5 pt-6 pb-9 sm:px-8 sm:pt-9 sm:pb-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.3),transparent_55%)]" />
          <div className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-3" aria-hidden>
              🍁
            </div>
            <DialogTitle className="font-['Syne'] font-extrabold text-lg sm:text-2xl text-white leading-tight">
              {registerModal.title}
            </DialogTitle>
          </div>
        </div>

        <div className="px-5 pt-5 pb-5 sm:px-8 sm:pt-7 sm:pb-8 text-center -mt-4 sm:-mt-6 relative z-10">
          <p className="text-[#3E4B62] text-xs sm:text-sm leading-relaxed mb-1">{registerModal.body1}</p>
          <p className="text-[#546074] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{registerModal.body2}</p>

          <div className="flex flex-col gap-2 sm:gap-3">
            <Link
              to="/boglanish"
              onClick={close}
              className="btn-primary w-full text-sm sm:text-base py-2.5 sm:py-3"
            >
              {shared.registerArrow}
            </Link>
            <button
              type="button"
              onClick={close}
              className="text-[#646F82] hover:text-[#15233B] text-xs sm:text-sm font-semibold transition-colors"
            >
              {shared.later}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
