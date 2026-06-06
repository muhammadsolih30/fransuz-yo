import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/galereya")({
  head: () => ({
    meta: [
      { title: "Galereya — France TCF O'quv Markazi" },
      { name: "description", content: "France TCF darsxona rasmlari va video darslar." },
    ],
  }),
  component: GalereyaPage,
});

type Tab = "rasmlar" | "ochilish" | "videolar";

const photos = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/images/darsxona/photo_${i + 1}.jpg`,
}));

const openingPhotos = [
  { id: 1, src: `/images/opening/chiroyli_page.jpg` },
  { id: 2, src: `/images/opening/chiroyle_page2.jpg` },
];

const videos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  youtubeId: null as string | null,
  title: i < 3 ? `Offline dars jarayonidan lavha #${i + 1}` : `Video #${i + 1}`,
  type: i < 3 ? "Offline dars" : "Qo'shimcha",
}));

function GalereyaPage() {
  const [tab, setTab] = useState<Tab>("rasmlar");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "rasmlar", label: "Darsxona", count: 14 },
    { key: "ochilish", label: "Ochilish", count: 2 },
    { key: "videolar", label: "Videolar", count: 25 },
  ];

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #E8192C 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
          <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Galereya
          </p>
          <h1
            className="font-['Syne'] font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Bizning
            <br />
            <span className="text-[#E8192C]">darsxona</span>
          </h1>
        </div>
      </section>

      {/* TABS */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-px bg-white/5">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 px-8 py-5 text-sm font-medium transition-all ${
                  tab === t.key
                    ? "bg-black text-white border-t-2 border-[#E8192C]"
                    : "bg-black text-white/30 hover:text-white/60"
                }`}
              >
                {t.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded ${tab === t.key ? "bg-[#E8192C]/20 text-[#E8192C]" : "bg-white/5 text-white/30"}`}
                >
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Darsxona rasmlari */}
          {tab === "rasmlar" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {photos.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setLightbox(p.src)}
                  className="bg-black aspect-square overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={p.src}
                    alt={`Darsxona ${p.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-[#E8192C]/0 group-hover:bg-[#E8192C]/10 transition-all flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Ochilish */}
          {tab === "ochilish" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
              {openingPhotos.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setLightbox(p.src)}
                  className="bg-black aspect-video overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={p.src}
                    alt={`Ochilish ${p.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                </div>
              ))}
            </div>
          )}

          {/* Videolar */}
          {tab === "videolar" && (
            <div>
              {/* Asosiy 3 ta */}
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">
                Offline dars lavhalari
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-px">
                {videos.slice(0, 3).map((v) => (
                  <div key={v.id} className="bg-black">
                    {v.youtubeId ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video flex flex-col items-center justify-center gap-3 relative overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors">
                        <div className="w-16 h-16 rounded-full border border-[#E8192C]/30 flex items-center justify-center group-hover:border-[#E8192C] transition-colors">
                          <svg
                            className="w-6 h-6 text-[#E8192C] ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white/20 text-xs">Tez orada</p>
                      </div>
                    )}
                    <div className="px-5 py-4 border-t border-white/5">
                      <span className="text-[#E8192C] text-xs">{v.type}</span>
                      <p className="text-white/50 text-sm mt-1">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Qolgan 22 ta */}
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6 mt-10">
                Qo'shimcha videolar
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
                {videos.slice(3).map((v) => (
                  <div key={v.id} className="bg-black">
                    {v.youtubeId ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video flex flex-col items-center justify-center gap-2 hover:bg-white/[0.02] transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white/20 ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white/20 text-[10px]">#{v.id}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-px bg-white/5">
                <div className="bg-black px-8 py-6 text-center">
                  <p className="text-white/20 text-sm">
                    YouTube linklari qo'shilishi bilan videolar avtomatik paydo bo'ladi
                  </p>
                  <a
                    href="https://youtube.com/@canadAli"
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline text-[#E8192C] text-sm hover:underline mt-2 inline-block"
                  >
                    YouTube kanalimiz →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/40 hover:text-white text-4xl font-thin transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Ko'rish"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
