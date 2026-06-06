import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ustoz")({
  head: () => ({
    meta: [{ title: "Ustoz — France TCF O'quv Markazi" }],
  }),
  component: UstozPage,
});

function UstozPage() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Ustoz
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5">
            Bizning ustozlarimiz
          </h1>
          <p className="text-white/55 text-lg max-w-3xl leading-relaxed">
            Tajribali fransuz tili o'qituvchilarimiz bilan TCF Canada uchun tayyorgarlik borasida
            to'liq qo'llab-quvvatlash.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/boglanish"
              className="bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-7 py-3.5 rounded-lg transition-all no-underline text-sm"
            >
              Bog'lanish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
