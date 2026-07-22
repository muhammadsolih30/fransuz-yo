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

  return (
    <div
      className={`media-placeholder relative overflow-hidden rounded-2xl border-2 border-dashed border-[#15233B]/15 ${aspectClass} bg-gradient-to-br ${gradients[type]} ${type === "video" ? "media-placeholder--video" : ""} ${className}`}
    >
      <div className="absolute inset-0 opacity-25 bg-dots" aria-hidden />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <img
          src="/image/logo-emblem.png"
          alt="France TCF"
          width={96}
          height={96}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 drop-shadow-sm"
          decoding="async"
          draggable={false}
        />
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
