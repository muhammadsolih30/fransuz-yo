// Placeholder for the FAQ component
type FAQItem = {
  q: string;
  a: string;
};

export function FAQ({
  items,
  title = "Ko'p so'raladigan savollar",
}: {
  items: FAQItem[];
  title?: string;
}) {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              FAQ
            </p>
            <h2
              className="font-['Syne'] font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {title.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            {items.map((f, i) => (
              <details key={i} className="group border-b border-white/5">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="font-['Syne'] font-semibold text-sm text-gray-600 group-open:text-gray-900 transition-colors">
                    {f.q}
                  </span>
                  <span className="text-[#E8192C] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed pb-5">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
