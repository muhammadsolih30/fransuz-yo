import { useEffect, useState } from "react";

/** YouTube IFrame API — minimum 480p (`large`) */
export type VideoQuality = "large" | "hd720" | "hd1080";

const MIN_QUALITY: VideoQuality = "large";

type NetworkInformation = {
  effectiveType?: string;
  downlink?: number;
  saveData?: boolean;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
};

function getConnection(): NetworkInformation | undefined {
  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  };
  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection;
}

/** Internet tezligiga qarab 480p — 720p — 1080p */
export function resolveAdaptiveVideoQuality(): VideoQuality {
  const conn = getConnection();
  if (!conn) return "hd720";

  if (conn.saveData) return MIN_QUALITY;

  const downlink = conn.downlink ?? 0;
  const type = conn.effectiveType ?? "";

  if (type === "slow-2g" || type === "2g") return MIN_QUALITY;
  if (type === "3g" || (downlink > 0 && downlink < 2)) return MIN_QUALITY;
  if (downlink >= 8 || (type === "4g" && downlink >= 5)) return "hd1080";
  if (downlink >= 2.5 || type === "4g") return "hd720";

  return MIN_QUALITY;
}

export function useAdaptiveVideoQuality() {
  const [quality, setQuality] = useState<VideoQuality>(resolveAdaptiveVideoQuality);

  useEffect(() => {
    const update = () => setQuality(resolveAdaptiveVideoQuality());
    update();

    const conn = getConnection();
    conn?.addEventListener?.("change", update);
    return () => conn?.removeEventListener?.("change", update);
  }, []);

  return quality;
}

export const YT_MIN_QUALITY = MIN_QUALITY;
