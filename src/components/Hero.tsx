// Placeholder for the Hero component
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #E8192C 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #003DA5 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-gray-300 bg-gray-50 backdrop-blur px-4 py-2 rounded-full text-xs text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
            2025 — 30,000 kvota tasdiqlangan • Kanada hukumati ma'lumoti
          </div>

          <h1
            className="font-['Syne'] font-black leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Fransuz tili
            <br />
            orqali
            <br />
            <span className="text-[#E8192C]">Kanadaga.</span>
          </h1>

          <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-xl">
            TCF Canada imtihoniga professional tayyorgarlik. Offline, online, mini-guruh va
            individual darslar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/boglanish"
              className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all hover:scale-105 active:scale-95"
            >
              Bepul maslahat olish →
            </Link>
            <Link
              to="/kurslar"
              className="no-underline border border-gray-300 hover:border-gray-500 text-gray-900 font-medium px-8 py-4 rounded-xl text-sm transition-all"
            >
              Kurslar haqida
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-white animate-pulse" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
