type Props = {
  className?: string;
};

/** Faqat emblem (matnsiz doira) — favicon / navbar uchun */
export function BrandEmblem({ className = "h-10 w-10" }: Props) {
  return (
    <div className={`rounded-full overflow-hidden shrink-0 bg-white ring-1 ring-black/5 ${className}`}>
      <img
        src="/image/logo-emblem.png"
        alt=""
        aria-hidden
        className="w-full h-full object-contain p-[8%] pointer-events-none select-none"
        width={88}
        height={88}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
