// Placeholder for the PhotoGallery component
import { useState } from "react";

type Photo = { id: number; src: string; alt?: string };

export function PhotoGallery({ photos, cols = 4 }: { photos: Photo[]; cols?: 3 | 4 }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div
        className={`grid gap-px bg-white/5 ${cols === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-3"}`}
      >
        {photos.map((p) => (
          <div
            key={p.id}
            onClick={() => setLightbox(p.src)}
            className="bg-white aspect-square overflow-hidden cursor-pointer group relative border border-gray-200"
          >
            <img
              src={p.src}
              alt={p.alt || `Rasm ${p.id}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-[#E8192C]/0 group-hover:bg-[#E8192C]/10 transition-all flex items-center justify-center">
              <span className="text-gray-900 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                +
              </span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 text-4xl font-thin transition-colors"
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
    </>
  );
}
