import { useEffect, useRef, useState } from "react";
import {
  useAdaptiveVideoQuality,
  YT_MIN_QUALITY,
  type VideoQuality,
} from "../hooks/useAdaptiveVideoQuality";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Props = {
  videoId: string;
  rate?: number;
  endTrim?: number;
};

const QUALITY_RANK: Record<string, number> = {
  tiny: 0,
  small: 1,
  medium: 2,
  large: 3,
  hd720: 4,
  hd1080: 5,
  highres: 6,
};

function rankOf(q: string) {
  return QUALITY_RANK[q] ?? 0;
}

function applyQuality(player: any, target: VideoQuality) {
  try {
    const current = player.getPlaybackQuality?.() as string | undefined;
    if (current && rankOf(current) < rankOf(YT_MIN_QUALITY)) {
      player.setPlaybackQuality(YT_MIN_QUALITY);
      return;
    }
    if (!current || rankOf(current) < rankOf(target)) {
      player.setPlaybackQuality(target);
    }
  } catch {
    /* noop */
  }
}

/**
 * Ovozsiz, loop fon videosi. Sifat internet tezligiga qarab:
 * sekin — 480p (large), o'rta — 720p, tez — 1080p.
 */
export function HeroVideoBg({ videoId, rate = 1.5, endTrim = 15 }: Props) {
  const playerRef = useRef<any>(null);
  const qualityRef = useRef<VideoQuality>("hd720");
  const loopTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);
  const targetQuality = useAdaptiveVideoQuality();

  qualityRef.current = targetQuality;

  useEffect(() => {
    const player = playerRef.current;
    if (player) applyQuality(player, targetQuality);
  }, [targetQuality]);

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
        host: "https://www.youtube-nocookie.com",
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          autohide: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          showinfo: 0,
          vq: qualityRef.current,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.setPlaybackRate(rate);
            applyQuality(e.target, qualityRef.current);
            e.target.playVideo();
            startLoopGuard();
          },
          onPlaybackQualityChange: (e: any) => {
            applyQuality(e.target, qualityRef.current);
          },
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              e.target.setPlaybackRate(rate);
              applyQuality(e.target, qualityRef.current);
              if (showTimerRef.current) clearTimeout(showTimerRef.current);
              // Boshidagi play/pause UI ko'rinmasligi uchun qisqa kechikish
              showTimerRef.current = setTimeout(() => setVisible(true), 2000);
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
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
  }, [videoId, rate, endTrim]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="absolute inset-0 bg-[#faf6ef] bg-aurora" />
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="yt-bg-scaler">
          <div id="hero-yt-player" className="yt-bg" />
        </div>
      </div>
    </div>
  );
}
