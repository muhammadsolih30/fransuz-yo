import { Camera, Play, ScrollText } from "lucide-react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

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
  sublabel,
  aspect = type === "video" ? "video" : type === "certificate" ? "portrait" : "square",
  className = "",
}: MediaPlaceholderProps) {
  const { content } = useSitePreferences();
  const defaultSublabel = content.ui.shared.mediaSoon;
  const resolvedSublabel = sublabel ?? defaultSublabel;

  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-square";

  const gradients = {
    photo: "from-[#eaf0f8] via-[#f4f7fc] to-[#eef2f8]",
    video: "from-[#e8eef8] via-[#f4f7fc] to-[#eef2f8]",
    certificate: "from-[#eef2f8] via-white to-[#e8eef8]",
  };

  const Icon = type === "photo" ? Camera : type === "video" ? Play : ScrollText;

  const videoStyle = type === "video";

  return (
    <div
      className={`media-placeholder relative overflow-hidden rounded-2xl border-2 border-dashed border-[#15233B]/15 ${aspectClass} bg-gradient-to-br ${gradients[type]} ${className}`}
    >
      <div className="absolute inset-0 opacity-30 bg-dots" aria-hidden />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
            videoStyle
              ? "bg-[#e83848] text-white shadow-[0_8px_20px_-8px_rgba(232,56,72,0.5)]"
              : "bg-white border border-[#15233B]/10 shadow-sm text-[#e83848] dark:bg-[#1a2332] dark:border-white/12"
          }`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.8} fill={type === "video" ? "currentColor" : "none"} />
        </div>
        <p className="card-title font-['Syne'] font-bold text-sm">{label}</p>
        <p className="section-body text-xs mt-1 font-medium">{resolvedSublabel}</p>
      </div>
      {type === "certificate" && (
        <>
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#e83848]/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#e83848]/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#e83848]/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#e83848]/40 rounded-br-lg" />
        </>
      )}
    </div>
  );
}
