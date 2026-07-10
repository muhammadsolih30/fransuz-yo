import type { FaqItem } from "../lib/faq-content";

type Props = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => (
        <details key={f.q} className="group card overflow-hidden reveal faq-accordion" data-delay={i * 60}>
          <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none">
            <span className="font-['Syne'] font-bold text-sm sm:text-base text-ink group-open:text-[#e83848] transition-colors duration-300 pr-4">
              {f.q}
            </span>
            <span
              className="shrink-0 w-8 h-8 rounded-full bg-[#e83848]/10 text-[#e83848] flex items-center justify-center text-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 group-open:bg-[#e83848] group-open:text-white group-open:scale-105"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="faq-accordion__panel">
            <div className="faq-accordion__inner">
              <div className="section-body text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 whitespace-pre-line">
                {f.a}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
