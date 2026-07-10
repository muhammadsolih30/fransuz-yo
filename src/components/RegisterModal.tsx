import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const REGISTER_MODAL_BG = "/image/opening/ckanada%20va%20firansiya.png";

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
      <DialogContent
        className="register-modal max-w-[20rem] sm:max-w-md border-0 p-0 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-[#15233B] shadow-[0_24px_64px_-16px_rgba(21,35,59,0.45)]"
        closeLabel={content.ui.a11y.close}
      >
        <div className="register-modal__hero relative overflow-hidden">
          <img
            src={REGISTER_MODAL_BG}
            alt=""
            className="register-modal__hero-img"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          <div className="register-modal__hero-scrim" aria-hidden />

          <div className="register-modal__hero-content relative z-10 px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-10 text-center">
            <span className="register-modal__badge">🇨🇦 France TCF</span>
            <DialogTitle className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-white leading-tight mt-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {registerModal.title}
            </DialogTitle>
          </div>
        </div>

        <div className="register-modal__body px-5 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-7 text-center">
          <p className="text-[#15233B] text-sm sm:text-[0.9375rem] font-semibold leading-snug mb-2">
            {registerModal.body1}
          </p>
          <p className="text-[#546074] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
            {registerModal.body2}
          </p>

          <div className="flex flex-col gap-2.5">
            <Link
              to="/boglanish"
              onClick={close}
              className="btn-primary w-full justify-center text-sm sm:text-base py-3 min-h-[2.85rem] no-underline"
            >
              {shared.registerArrow}
            </Link>
            <button
              type="button"
              onClick={close}
              className="register-modal__later w-full min-h-[2.5rem] rounded-full border border-[#e83848]/25 text-[#646F82] hover:text-[#e83848] hover:border-[#e83848]/45 text-xs sm:text-sm font-semibold transition-colors bg-white"
            >
              {shared.later}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
