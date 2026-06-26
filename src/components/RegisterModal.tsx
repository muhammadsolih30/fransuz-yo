import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

/**
 * Saytga kirgandan ~3.5s keyin chiqadigan "Ro'yxatdan o'tish" modali.
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
            if (window.scrollY > 300) trigger();
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        const timer = setTimeout(trigger, 3500);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            const onKey = (e: KeyboardEvent) => {
                if (e.key === "Escape") close();
            };
            window.addEventListener("keydown", onKey);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", onKey);
            };
        }
    }, [open]);

    const close = () => {
        setOpen(false);
        sessionStorage.setItem("regModalSeen", "1");
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reg-modal-title"
        >
            <div className="absolute inset-0 bg-[#15233B]/60 backdrop-blur-sm" onClick={close} />

            <div className="relative w-full max-w-[19rem] sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
                <div className="relative bg-gradient-to-br from-[#f46868] via-[#e83848] to-[#e84858] px-5 pt-6 pb-9 sm:px-8 sm:pt-9 sm:pb-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.3),transparent_55%)]" />
                    <div className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

                    <button
                        type="button"
                        onClick={close}
                        aria-label={shared.close}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-lg sm:text-xl flex items-center justify-center transition-colors"
                    >
                        ×
                    </button>

                    <div className="relative z-10">
                        <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">🍁</div>
                        <h3
                            id="reg-modal-title"
                            className="font-['Syne'] font-extrabold text-lg sm:text-2xl text-white leading-tight"
                        >
                            {registerModal.title}
                        </h3>
                    </div>
                </div>

                <div className="px-5 pt-5 pb-5 sm:px-8 sm:pt-7 sm:pb-8 text-center -mt-4 sm:-mt-6 relative z-10">
                    <div className="bg-white rounded-2xl">
                        <p className="text-[#3E4B62] text-xs sm:text-sm leading-relaxed mb-1">
                            {registerModal.body1}
                        </p>
                        <p className="text-[#546074] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                            {registerModal.body2}
                        </p>

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
                </div>
            </div>
        </div>
    );
}
