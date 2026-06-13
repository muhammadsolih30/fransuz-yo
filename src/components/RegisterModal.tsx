import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Saytga kirgandan ~3.5s keyin chiqadigan "Ro'yxatdan o'tish" modali.
 * Bir marta yopilgach, sessiya davomida qayta chiqmaydi (sessionStorage).
 */
export function RegisterModal() {
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reg-modal-title"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#15233B]/60 backdrop-blur-sm" onClick={close} />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
                {/* Top accent */}
                <div className="relative bg-gradient-to-br from-[#d62839] via-[#c01f2e] to-[#15233B] px-8 pt-9 pb-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.3),transparent_55%)]" />
                    <div className="absolute -bottom-8 -left-6 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

                    {/* Close */}
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Yopish"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-xl flex items-center justify-center transition-colors"
                    >
                        ×
                    </button>

                    <div className="relative z-10">
                        <div className="text-5xl mb-3">🍁</div>
                        <h3
                            id="reg-modal-title"
                            className="font-['Syne'] font-extrabold text-2xl text-white leading-tight"
                        >
                            Bepul maslahatga yoziling
                        </h3>
                    </div>
                </div>

                {/* Body */}
                <div className="px-8 pt-7 pb-8 text-center -mt-6 relative z-10">
                    <div className="bg-white rounded-2xl">
                        <p className="text-[#3E4B62] text-sm leading-relaxed mb-1">
                            🇨🇦 Fransuz tili orqali Kanadaga — <span className="font-bold text-[#d62839]">+50 ball</span>.
                        </p>
                        <p className="text-[#546074] text-sm leading-relaxed mb-6">
                            Hozir ro'yxatdan o'ting va darajangizni bepul aniqlang. Joylar soni cheklangan!
                        </p>

                        <div className="flex flex-col gap-3">
                            <Link to="/boglanish" onClick={close} className="btn-primary w-full">
                                Ro'yxatdan o'tish →
                            </Link>
                            <button
                                type="button"
                                onClick={close}
                                className="text-[#646F82] hover:text-[#15233B] text-sm font-semibold transition-colors"
                            >
                                Keyinroq
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
