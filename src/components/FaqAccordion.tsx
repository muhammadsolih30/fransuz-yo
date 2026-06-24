import type { FaqItem } from "../lib/faq-content";

type Props = {
  items: FaqItem[];
  baseDelay?: number;
};

export function FaqAccordion({ items, baseDelay = 0 }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => (
        <details
          key={f.q}
          className="reveal group card overflow-hidden"
          data-delay={baseDelay + i * 50}
        >
          <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none">
            <span className="font-['Syne'] font-bold text-sm sm:text-base group-open:text-[#d62839] transition-colors pr-4">
              {f.q}
            </span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#d62839] group-open:text-white transition-all duration-300">
              +
            </span>
          </summary>
          <div className="text-[#3E4B62] text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 whitespace-pre-line">
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}
