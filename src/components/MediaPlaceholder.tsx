import { Camera, Play, ScrollText } from "lucide-react";

type MediaPlaceholderProps = {
  type: "photo" | "video" | "certificate";
  label: string;
  sublabel?: string;
  aspect?: "square" | "video" | "portrait";
  className?: string;
};

export function MediaPlaceholder({
  type,
  label,
  sublabel = "Tez orada qo'shiladi",
  aspect = type === "video" ? "video" : type === "certificate" ? "portrait" : "square",
  className = "",
}: MediaPlaceholderProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-square";

  const gradients = {
    photo: "from-[#eaf0f8] via-[#fcefec] to-[#FAF6EF]",
    video: "from-[#a3182a] via-[#8f1622] to-[#6e1019]",
    certificate: "from-[#FAF6EF] via-white to-[#f9ddd8]",
  };

  const Icon = type === "photo" ? Camera : type === "video" ? Play : ScrollText;

  const isDark = type === "video";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed ${
        isDark ? "border-white/20" : "border-[#15233B]/15"
      } ${aspectClass} bg-gradient-to-br ${gradients[type]} ${className}`}
    >
      <div
        className={`absolute inset-0 opacity-30 ${isDark ? "bg-grid" : "bg-dots"}`}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
            isDark
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white border border-[#15233B]/10 shadow-sm text-[#d62839]"
          }`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.8} fill={type === "video" ? "currentColor" : "none"} />
        </div>
        <p
          className={`font-['Syne'] font-bold text-sm ${isDark ? "text-white" : "text-[#15233B]"}`}
        >
          {label}
        </p>
        <p className={`text-xs mt-1 ${isDark ? "text-white/60" : "text-[#646F82]"}`}>{sublabel}</p>
      </div>
      {type === "certificate" && (
        <>
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#d62839]/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#d62839]/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#d62839]/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#d62839]/40 rounded-br-lg" />
        </>
      )}
    </div>
  );
}
