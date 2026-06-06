// Placeholder for the VideoGallery component
type Video = {
  id: number;
  youtubeId: string | null;
  title: string;
  type: string;
};

export function VideoGallery({ videos }: { videos: Video[] }) {
  const main = videos.slice(0, 3);
  const rest = videos.slice(3);

  return (
    <div>
      {/* Asosiy 3 ta */}
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">Offline dars lavhalari</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-10">
        {main.map((v) => (
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
              <div className="aspect-video flex flex-col items-center justify-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-[#E8192C]/30 hover:border-[#E8192C] flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 text-[#E8192C] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs">Tez orada</p>
              </div>
            )}
            <div className="px-5 py-4 border-t border-white/5">
              <span className="text-[#E8192C] text-xs">{v.type}</span>
              <p className="text-gray-500 text-sm mt-1">{v.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Qolgan videolar */}
      {rest.length > 0 && (
        <>
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">
            Qo'shimcha videolar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {rest.map((v) => (
              <div key={v.id} className="bg-white border border-gray-200">
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
                        className="w-4 h-4 text-gray-400 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-[10px]">#{v.id}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
