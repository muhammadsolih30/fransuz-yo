import { useEffect, useRef, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Props = {
  videoId: string;
  /** Playback speed (1.5x by default) */
  rate?: number;
  /** Videoning oxiridan necha soniya kesib tashlansin (loop shu yerda qaytadi) */
  endTrim?: number;
};

/**
 * Ovozsiz, loop, belgilangan tezlikda ishlovchi YouTube fon videosi.
 * YouTube IFrame API orqali (URL parametrlari tezlikni qo'llab-quvvatlamaydi).
 */
export function HeroVideoBg({ videoId, rate = 1.5, endTrim = 15 }: Props) {
  const playerRef = useRef<any>(null);
  const loopTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const startLoopGuard = () => {
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
      loopTimerRef.current = setInterval(() => {
        const p = playerRef.current;
        if (!p?.getDuration) return;
        const duration = p.getDuration();
        const current = p.getCurrentTime?.() ?? 0;
        if (duration > endTrim && current >= duration - endTrim) {
          p.seekTo(0);
          p.playVideo();
        }
      }, 500);
    };

    const createPlayer = () => {
      if (cancelled || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player("hero-yt-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          vq: "hd1080",
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.setPlaybackRate(rate);
            try {
              e.target.setPlaybackQuality("hd1080");
            } catch {
              /* noop */
            }
            e.target.playVideo();
            startLoopGuard();
          },
          onPlaybackQualityChange: (e: any) => {
            if (e.data !== "hd1080") {
              try {
                e.target.setPlaybackQuality("hd1080");
              } catch {
                /* noop */
              }
            }
          },
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              setPlaying(true);
              e.target.setPlaybackRate(rate);
              try {
                e.target.setPlaybackQuality("hd1080");
              } catch {
                /* noop */
              }
            }
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(0);
              e.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        createPlayer();
      };
    }

    return () => {
      cancelled = true;
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, [videoId, rate, endTrim]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div id="hero-yt-player" className="yt-bg" />
      {/* Yuklanish qoplamasi — YouTube play tugmasi/spinneri ko'rinmasligi uchun */}
      <div
        className={`absolute inset-0 bg-[#faf6ef] bg-aurora transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
