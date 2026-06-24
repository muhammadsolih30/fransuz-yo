import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/galereya")({
  component: GalereyaPage,
});

type Tab = "rasmlar" | "ochilish" | "videolar";

const photos = [
  "photo_2025-09-15_16-53-59.jpg",
  "photo_2025-09-15_16-53-59 (2).jpg",
  "photo_2025-09-15_16-54-02.jpg",
  "photo_2025-09-15_16-54-02 (2).jpg",
  "photo_2025-09-15_17-18-25.jpg",
  "photo_2025-09-15_17-18-31.jpg",
  "photo_2025-09-15_17-18-34.jpg",
  "photo_2025-09-15_17-18-39.jpg",
  "photo_2025-11-15_20-07-32.jpg",
  "photo_2025-11-15_20-07-37.jpg",
  "photo_2025-11-15_20-07-38.jpg",
  "photo_2025-11-15_20-07-40.jpg",
  "photo_2025-11-15_20-07-42.jpg",
  "biroylik natija.jpg",
].map((name, i) => ({ id: i + 1, src: `/image/darsxona/${encodeURI(name)}` }));

const openingPhotos = [
  { id: 1, src: `/image/darsxona/${encodeURI("chiroyli page.jpg")}` },
  { id: 2, src: `/image/darsxona/${encodeURI("chiroyle page2.jpg")}` },
];

const videos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  youtubeId: null as string | null,
}));

function GalereyaPage() {
  const { content } = useSitePreferences();
  const ui = content.ui.gallery;
  const shared = content.ui.shared;
  const a11y = content.ui.a11y;

  const [tab, setTab] = useState<Tab>("rasmlar");
  useReveal([tab]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "rasmlar", label: ui.tabs.photos, count: photos.length },
    { key: "ochilish", label: ui.tabs.opening, count: openingPhotos.length },
    { key: "videolar", label: ui.tabs.videos, count: videos.length },
  ];

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="gallery" />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/opening/galariyaBo%27limi.png')", opacity: 0.95 }}
        />
        <div className="absolute -top-20 right-0 w-[500px] h-[400px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            {ui.title}
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">{ui.subtitle}</p>
        </div>
      </section>

      <div className="sticky top-24 z-30 glass-nav border-y border-[#15233B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:flex gap-1.5 sm:gap-2 py-3 sm:py-4">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center justify-center gap-1.5 px-2 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  tab === t.key
                    ? "bg-[#e83848] text-white shadow-[0_10px_24px_-8px_rgba(232,56,72,0.5)]"
                    : "bg-[#FAF6EF] text-[#3E4B62] hover:bg-[#15233B]/8"
                }`}
              >
                <span className="truncate">{t.label}</span>
                <span
                  className={`shrink-0 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${tab === t.key ? "bg-white/20" : "bg-white text-[#646F82]"}`}
                >
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-[#FAF6EF] min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tab === "rasmlar" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setLightbox(p.src)}
                  className="bg-white aspect-square overflow-hidden cursor-pointer group relative rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all border-0 p-0"
                >
                  <img
                    src={p.src}
                    alt={`${ui.classroomAlt} ${p.id}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                  <div className="absolute inset-0 bg-[#15233B]/0 group-hover:bg-[#15233B]/30 transition-all flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#e83848] text-2xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">
                      +
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {tab === "ochilish" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openingPhotos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setLightbox(p.src)}
                  className="bg-white aspect-video overflow-hidden cursor-pointer group relative rounded-3xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all border-0 p-0"
                >
                  <img
                    src={p.src}
                    alt={`${ui.openingAlt} ${p.id}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                  <div className="absolute inset-0 bg-[#15233B]/0 group-hover:bg-[#15233B]/20 transition-all" />
                </button>
              ))}
            </div>
          )}

          {tab === "videolar" && (
            <div>
              <p className="text-[#646F82] text-xs font-bold tracking-widest uppercase mb-6">
                {ui.offlineLessonClips}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {videos.slice(0, 3).map((v, i) => (
                  <div key={v.id} className="card overflow-hidden group">
                    <div className="aspect-video flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] group-hover:from-[#f9ddd8] group-hover:to-[#f4ccc6] transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-[#e83848] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-[#15233B]/40 text-xs font-medium">{ui.noVideos}</p>
                    </div>
                    <div className="px-5 py-4">
                      <span className="text-[#e83848] text-xs font-bold">{ui.offlineLesson}</span>
                      <p className="text-[#3E4B62] text-sm mt-1">
                        {ui.offlineLessonVideo} #{i + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#646F82] text-xs font-bold tracking-widest uppercase mb-6">{ui.moreVideos}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.slice(3).map((v) => (
                  <div key={v.id} className="card overflow-hidden group">
                    <div className="aspect-video flex flex-col items-center justify-center gap-2 bg-[#FAF6EF] group-hover:bg-[#fcefec] transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full border-2 border-[#15233B]/15 flex items-center justify-center group-hover:border-[#e83848] transition-colors">
                        <svg
                          className="w-4 h-4 text-[#15233B]/30 ml-0.5 group-hover:text-[#e83848] transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-[#15233B]/30 text-[10px]">#{v.id}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 card p-8 text-center panel-soft-accent">
                <p className="text-[#546074] text-sm">{ui.youtubeNote}</p>
                <a
                  href="https://t.me/Francais_languee"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline inline-flex items-center gap-2 text-[#E0A526] text-sm font-bold mt-3 hover:gap-3 transition-all"
                >
                  {ui.telegramChannel}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 bg-[#15233B]/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl font-thin transition-all flex items-center justify-center"
            onClick={() => setLightbox(null)}
            aria-label={a11y.close}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt={a11y.viewImage}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
