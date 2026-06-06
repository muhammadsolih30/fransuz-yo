// Placeholder for the galereya route
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/galereya")({
  head: () => ({
    meta: [
      { title: "Galereya — France TCF O'quv Markazi" },
      {
        name: "description",
        content: "France TCF O'quv markazi darsxona rasmlari va video darslar.",
      },
    ],
  }),
  component: GalereyaPage,
});

// 25 ta video uchun joy (YouTube linklari keyinroq qo'shiladi)
const videos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  youtubeId: null as string | null, // YouTube link kelganda shu yerga qo'shiladi
  title: i < 3 ? `Offline dars jarayonidan lavha #${i + 1}` : `Video #${i + 1}`,
  type: i < 3 ? "Offline dars" : "Qo'shimcha video",
}));

// Darsxona rasmlari (zip dan kelgan rasmlar)
const photos = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/images/darsxona/photo_${i + 1}.jpg`,
  alt: `Darsxona rasmi ${i + 1}`,
}));

// Ochilish rasmlari (chiroyli_page.jpg va chiroyle_page2.jpg)
const openingPhotos = [
  { id: 1, src: `/images/opening/chiroyli_page.jpg`, alt: "Markaz ochilishi" },
  { id: 2, src: `/images/opening/chiroyle_page2.jpg`, alt: "Markaz ochilishi 2" },
];

type Tab = "rasmlar" | "videolar" | "ochilish";

function GalereyaPage() {
  const [activeTab, setActiveTab] = useState<Tab>("rasmlar");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "rasmlar", label: "Darsxona rasmlari", count: photos.length },
    { key: "ochilish", label: "Markaz ochilishi", count: openingPhotos.length },
    { key: "videolar", label: "Videolar", count: videos.length },
  ];

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-125 h-125 rounded-full bg-[#E8192C] opacity-8 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Galereya
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5 leading-tight">
            Bizning <span className="text-[#E8192C]">darsxona</span>
            <br />
            va darslar
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Haqiqiy darslar, haqiqiy muhit — France TCF O'quv markazida.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 bg-[#12121A] border border-white/5 rounded-xl p-1.5 w-fit">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === t.key ? "bg-[#E8192C] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {t.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded ${
                    activeTab === t.key ? "bg-white/20" : "bg-white/10"
                  }`}
                >
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DARSXONA RASMLARI */}
      {activeTab === "rasmlar" && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#12121A] border border-white/5 cursor-pointer group"
                  onClick={() => setLightbox(p.src)}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Placeholder rasmlar yuklanmasa */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-0">
                    <span className="text-4xl">🏫</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs text-center mt-6">
              Rasmlarni ko'rish uchun ustiga bosing
            </p>
          </div>
        </section>
      )}

      {/* OCHILISH RASMLARI */}
      {activeTab === "ochilish" && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {openingPhotos.map((p) => (
                <div
                  key={p.id}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-[#12121A] border border-white/5 cursor-pointer group"
                  onClick={() => setLightbox(p.src)}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-3xl">🔍</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {p.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIDEOLAR */}
      {activeTab === "videolar" && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            {/* Asosiy 3 ta video (offline dars) */}
            <div className="mb-8">
              <h3 className="font-['Syne'] font-semibold text-lg mb-4 text-white/80">
                Offline dars jarayonidan lavhalar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {videos.slice(0, 3).map((v) => (
                  <div
                    key={v.id}
                    className="bg-[#12121A] border border-white/5 rounded-2xl overflow-hidden group"
                  >
                    {v.youtubeId ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-[#0A0A0F] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-[#E8192C]/5 to-transparent" />
                        <div className="w-14 h-14 rounded-full bg-[#E8192C]/15 border border-[#E8192C]/25 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#E8192C] ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white/30 text-xs">Tez orada</p>
                      </div>
                    )}
                    <div className="p-4">
                      <span className="text-[#E8192C] text-xs font-medium">{v.type}</span>
                      <h4 className="font-['Syne'] font-semibold text-sm mt-1 text-white/80">
                        {v.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qolgan 22 ta video */}
            <div>
              <h3 className="font-['Syne'] font-semibold text-lg mb-4 text-white/80">
                Qo'shimcha videolar
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {videos.slice(3).map((v) => (
                  <div
                    key={v.id}
                    className="bg-[#12121A] border border-white/5 rounded-xl overflow-hidden"
                  >
                    {v.youtubeId ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-[#0A0A0F] flex flex-col items-center justify-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-[#E8192C] ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white/25 text-[10px]">Video #{v.id}</p>
                      </div>
                    )}
                    <div className="px-3 py-2.5">
                      <p className="text-white/50 text-xs truncate">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-[#12121A] border border-white/5 rounded-2xl p-6 text-center">
              <p className="text-white/40 text-sm">
                🎬 YouTube linklari qo'shilishi bilan videolar avtomatik paydo bo'ladi
              </p>
              <a
                href="https://youtube.com/@canadAli"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex mt-3 text-[#E8192C] text-sm hover:underline no-underline"
              >
                YouTube kanalimiz →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl font-light"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Kattaroq ko'rinish"
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
