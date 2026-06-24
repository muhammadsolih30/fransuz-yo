type BrandLogoProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizeClass: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  xs: "h-9",
  sm: "h-12 sm:h-14",
  md: "h-14 sm:h-16",
  lg: "h-20 sm:h-24",
  xl: "h-32 sm:h-40 md:h-48",
};

export function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  return (
    <img
      src="/image/saytlogotef.png"
      alt="France TCF O'quv Markazi"
      width={1024}
      height={1024}
      className={`w-auto object-contain ${sizeClass[size]} ${className}`}
      decoding="async"
    />
  );
}
