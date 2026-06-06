// Placeholder for the Stats component
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(Math.floor(cur));
          }, 30);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { num: 100, suffix: "+", label: "O'quvchilar" },
  { num: 30000, suffix: "+", label: "2025 kvotasi" },
  { num: 6, suffix: " oy", label: "Kurs davomiyligi" },
  { num: 10, suffix: "+", label: "Yil tajriba" },
];

export function Stats() {
  return (
    <section className="border-y border-white/5 py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white px-10 py-10 text-center hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <div className="font-['Syne'] font-black text-5xl text-[#E8192C] mb-2">
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div className="text-gray-500 text-sm tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
