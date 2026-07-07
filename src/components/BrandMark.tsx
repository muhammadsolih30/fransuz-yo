import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { BrandEmblem } from "./BrandEmblem";

type Props = {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
  showIcon?: boolean;
};

export function BrandMark({ tone = "light", size = "sm", className = "", showIcon = true }: Props) {
  const { t } = useSitePreferences();

  const emblemSize = size === "sm" ? "h-10 w-10 sm:h-11 sm:w-11" : "h-11 w-11 sm:h-12 sm:w-12";
  const titleSize = size === "sm" ? "text-[1.05rem] sm:text-lg" : "text-lg sm:text-xl";
  const subSize = size === "sm" ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]";

  const titleInk = tone === "light" ? "text-[#15233B]" : "text-white";
  const subInk = tone === "light" ? "text-[#646F82]" : "text-white/55";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 min-w-0 ${className}`}>
      {showIcon && <BrandEmblem className={emblemSize} />}
      <div className={`flex flex-col justify-center min-w-0 leading-none ${titleInk}`}>
        <span className={`font-['Syne'] font-extrabold ${titleSize} truncate`}>
          France <span className="text-[#e83848]">TCF</span>
        </span>
        <span className={`${subSize} font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mt-1 truncate ${subInk}`}>
          {t.footer.centerLabel}
        </span>
      </div>
    </div>
  );
}
