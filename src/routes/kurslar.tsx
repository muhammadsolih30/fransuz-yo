import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/kurslar")({
    head: () => ({
        meta: [
            { title: "Kurslar — France TCF O'quv Markazi" },
            {
                name: "description",
                content: "Offline, online, mini-guruh va individual fransuz tili kurslari. TCF Canada tayyorgarligi.",
            },
        ],
    }),
    component: KurslarPage,
});

const courses = [
    {
        emoji: "🏫",
        type: "Offline guruh",
        prices: [
            { label: "A1–A2 daraja", price: "700 000" },
            { label: "B1+ daraja", price: "800 000" },
        ],
        schedule: "Talabga qarab jadval belgilanadi",
        students: "5–10 kishi",
        duration: "6–8 oy",
        features: [
            "Yuzma-yuz darslar",
            "Markazda materiallar",
            "Speaking amaliyoti",
            "Ustoz bilan to'g'ridan-to'g'ri",
        ],
        highlight: false,
    },
    {
        emoji: "👥",
        type: "Mini-guruh",
        prices: [{ label: "2–3 kishi", price: "900 000" }],
        schedule: "O'quvchiga qulay vaqtga moslashtiriladi",
        students: "2–3 kishi",
        duration: "6–8 oy",
        features: [
            "Intensiv darslar",
            "Har biriga alohida e'tibor",
            "Tez natija",
            "Moslashuvchan jadval",
        ],
        highlight: true,
    },
    {
        emoji: "💻",
        type: "Online guruh",
        prices: [{ label: "Zoom / Google Meet", price: "490 000" }],
        schedule: "Asosan kechki vaqtlarda",
        students: "5–12 kishi",
        duration: "6–8 oy",
        features: [
            "Istalgan joydan",
            "Zoom / Google Meet",
            "Yozib olingan darslar",
            "Online materiallar",
        ],
        highlight: false,
    },
    {
        emoji: "🎯",
        type: "Individual",
        prices: [{ label: "Online", price: "1 200 000" }],
        schedule: "To'liq moslashtiriladi",
        students: "1 kishi",
        duration: "6–8 oy",
        features: [
            "Shaxsiy tayyorgarlik",
            "O'z sur'atida",
            "Zaif tomonlarga e'tibor",
            "Maksimal natija",
        ],
        highlight: false,
    },
];

const subjects = [
    { icon: "🎧", t: "Listening", d: "TCF formatidagi audio mashqlar va vaqt boshqaruvi strategiyalari" },
    { icon: "📖", t: "Reading", d: "Matn tushunish, tez o'qish va javob topish texnikalari" },
    { icon: "✍️", t: "Writing", d: "Rasmiy va norasmiy yozuv, TCF mezonlari bo'yicha baholash" },
    { icon: "🗣️", t: "Speaking", d: "Amaliy suhbat, monolog va dialog mashqlari" },
    { icon: "📚", t: "Grammar", d: "Fransuz grammatikasi asoslari va murakkab konstruktsiyalar" },
    { icon: "💬", t: "Vocabulary", d: "TCF imtihoniga oid leksika va kundalik muloqot so'zlari" },
];

const nlcTable = [
    { section: "Speaking", score: "10–11 / 20" },
    { section: "Listening", score: "458–502 / 699" },
    { section: "Reading", score: "453–498 / 699" },
    { section: "Writing", score: "10–11 / 20" },
];

const faqs = [
    {
        q: "Darslar qaysi platformada o'tiladi?",
        a: "Online darslar Zoom va Google Meet orqali. Offline darslar Chilonzor metrodagi markazimizda o'tkaziladi.",
    },
    {
        q: "Kurs davomida materiallar beriladi mi?",
        a: "Ha, barcha o'quvchilarga kerakli materiallar, testlar va topshiriqlar beriladi.",
    },
    {
        q: "Sababsiz qoldirilgan darslar qaytariladimi?",
        a: "Yo'q. Sababsiz qoldirilgan darslar qayta o'tilmaydi — markaz qoidasi.",
    },
    {
        q: "To'lovni qanday amalga oshirish mumkin?",
        a: "To'lovlar belgilangan muddatda amalga oshirilishi shart. To'lov usullari haqida murojaat qiling.",
    },
    {
        q: "Daraja aniqlanadi mi?",
        a: "Ha. Birinchi dars oldidan boshlang'ich test o'tkaziladi va sizga mos guruh tanlanadi.",
    },
];

function KurslarPage() {
    useReveal();

    return (
        <div className="bg-white text-[#15233B] overflow-hidden">
            {/* HERO */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/image/opening/kurslarBo%27limiImg.png')",
                        opacity: 0.95,
                    }}
                />
                <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
                        <span className="w-8 h-px bg-[#d62839]" /> Kurslar
                    </p>
                    <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
                        Sizga mos <span className="text-gradient-canada">formatni</span> tanlang
                    </h1>
                    <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">
                        TCF Canada tayyorgarligi uchun 4 xil format. Har bir o'quvchining ehtiyoji, vaqti va
                        byudjetiga mos yondashuv.
                    </p>
                </div>
            </section>

            {/* KURSLAR */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 gap-5">
                        {courses.map((c, idx) => (
                            <div
                                key={c.type}
                                className={`reveal relative card p-5 lg:p-6 group ${c.highlight ? "ring-2 ring-[#d62839] shadow-[var(--shadow-glow)]" : "card-hover"}`}
                                data-delay={(idx % 2) * 100}
                            >
                                {c.highlight && (
                                    <div className="absolute -top-3 left-6 bg-[#E0A526] text-[#15233B] text-[11px] font-extrabold px-4 py-1 rounded-full shadow-lg">
                                        ⭐ Eng mashhur
                                    </div>
                                )}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">
                                        {c.emoji}
                                    </div>
                                    <div>
                                        <h3 className="font-['Syne'] font-extrabold text-lg leading-tight group-hover:text-[#d62839] transition-colors">
                                            {c.type}
                                        </h3>
                                        <p className="text-[#646F82] text-xs">
                                            👥 {c.students} • ⏱️ {c.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-3 bg-[#FAF6EF] rounded-xl px-4 py-2.5">
                                    {c.prices.map((p) => (
                                        <div key={p.label} className="flex justify-between items-center py-1.5 border-b border-[#15233B]/8 last:border-0">
                                            <span className="text-[#3E4B62] text-xs font-medium">{p.label}</span>
                                            <span className="font-['Syne'] font-extrabold text-lg text-[#15233B]">
                                                {p.price}
                                                <span className="text-[#646F82] text-[10px] font-normal ml-1">so'm/oy</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 mb-3 text-xs text-[#546074]">
                                    <span>🕐</span>
                                    <span>{c.schedule}</span>
                                </div>

                                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                                    {c.features.map((f) => (
                                        <li key={f} className="flex items-start gap-1.5 text-xs text-[#3E4B62]">
                                            <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/boglanish"
                                    className={`no-underline block text-center py-2.5 rounded-xl text-sm font-bold transition-all ${c.highlight
                                        ? "bg-[#d62839] text-white hover:bg-[#ae1b2a] shadow-[0_10px_30px_-8px_rgba(213,43,30,0.5)] hover:-translate-y-0.5"
                                        : "border-2 border-[#15233B]/12 text-[#15233B] hover:border-[#d62839] hover:text-[#d62839]"
                                        }`}
                                >
                                    Ro'yxatdan o'tish →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DARS DASTURI */}
            <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
                <div className="absolute inset-0 bg-dots opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14 reveal">
                        <p className="eyebrow text-[#d62839] mb-4">
                            <span className="w-8 h-px bg-[#d62839]" /> Dastur
                        </p>
                        <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
                            Darslarda <span className="text-gradient-canada">nima o'tiladi</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((s, i) => (
                            <div key={s.t} className="reveal card card-hover p-8 group" data-delay={(i % 3) * 100}>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#d62839] transition-colors">{s.t}</h3>
                                <p className="text-[#3E4B62] text-sm leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TCF JADVALI */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="reveal">
                            <p className="eyebrow text-[#d62839] mb-4">
                                <span className="w-8 h-px bg-[#d62839]" /> TCF Canada
                            </p>
                            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                                Kerakli <span className="text-gradient-canada">ball darajasi</span>
                            </h2>
                            <p className="text-[#3E4B62] text-base leading-relaxed mb-6">
                                Express Entry uchun TCF Canada imtihonida barcha bo'limlardan kamida{" "}
                                <span className="font-bold text-[#d62839]">CLB 7 (B2+)</span> daraja kerak.
                            </p>
                            <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                                <p className="text-[#2C3850] text-sm leading-relaxed">
                                    💡 <strong>Maslahat:</strong> Ingliz tili balingiz bo'lsa (hatto IELTS 5) —
                                    Fransuz + ingliz juda kuchli profil yaratadi va ball yanada oshadi.
                                </p>
                            </div>
                        </div>
                        <div className="reveal card overflow-hidden" data-delay={150}>
                            <div className="bg-[#15233B] px-6 py-4">
                                <span className="text-white font-['Syne'] font-bold text-sm">CLB 7 = B2+ (minimal)</span>
                            </div>
                            {nlcTable.map((row, i) => (
                                <div
                                    key={row.section}
                                    className={`flex items-center justify-between px-6 py-5 ${i < nlcTable.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}
                                >
                                    <span className="text-[#3E4B62] font-medium">{row.section}</span>
                                    <span className="font-['Syne'] font-bold text-lg text-[#d62839]">{row.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-28 bg-[#FAF6EF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 reveal">
                            <p className="eyebrow text-[#d62839] mb-4">
                                <span className="w-8 h-px bg-[#d62839]" /> FAQ
                            </p>
                            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                                Kurslar bo'yicha savollar
                            </h2>
                            <Link to="/boglanish" className="btn-primary">Bog'lanish →</Link>
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-3">
                            {faqs.map((f, i) => (
                                <details key={i} className="reveal group card overflow-hidden" data-delay={i * 60}>
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                                        <span className="font-['Syne'] font-bold text-base group-open:text-[#d62839] transition-colors pr-4">{f.q}</span>
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#d62839] group-open:text-white transition-all duration-300">+</span>
                                    </summary>
                                    <p className="text-[#3E4B62] text-sm leading-relaxed px-6 pb-6">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#d62839] via-[#c01f2e] to-[#15233B] p-12 lg:p-20 text-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.30),transparent_50%)]" />
                        <div className="absolute inset-0 bg-grid opacity-10" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                                Qaysi format sizga mos?
                            </h2>
                            <p className="text-white/85 text-lg mb-10">
                                Bepul maslahat oling — biz sizga eng mos formatni topib beramiz.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/boglanish" className="btn-gold">Hozir murojaat qiling →</Link>
                                <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm">
                                    💬 Telegram admin
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
