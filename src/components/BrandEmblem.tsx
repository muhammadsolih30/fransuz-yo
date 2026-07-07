type Props = {
  className?: string;
};

/** Faqat emblem (PNG dagi matnsiz qism) */
export function BrandEmblem({ className = "h-10 w-10" }: Props) {
  return (
    <div className={`rounded-full overflow-hidden shrink-0 bg-[#faf6ef] ring-1 ring-black/5 ${className}`}>
      <img
        src="/image/saytlogotef.png"
        alt=""
        aria-hidden
        className="w-full h-[185%] max-w-none object-cover object-[50%_2%] pointer-events-none select-none"
        width={88}
        height={88}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
