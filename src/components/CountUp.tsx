import { useEffect, useRef, useState } from "react";

/** "500+", "4 yil", "2" kabi qiymatlarni animatsiya qiladi */
export function parseStatNum(raw: string): { target: number; suffix: string } {
  const match = raw.trim().match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  const target = Number(match[1].replace(",", "."));
  return { target: Number.isFinite(target) ? target : 0, suffix: match[2] ?? "" };
}

export function CountUp({
  target,
  suffix = "",
  duration = 1800,
  className = "",
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    started.current = false;
    setCount(0);
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString("uz-UZ")}
      {suffix}
    </span>
  );
}

/** Hero/stat uchun string qiymat ("500+", "4 yil") */
export function StatCountUp({ value, className = "" }: { value: string; className?: string }) {
  const { target, suffix } = parseStatNum(value);
  if (!target) return <span className={className}>{value}</span>;
  return <CountUp target={target} suffix={suffix} className={className} />;
}
