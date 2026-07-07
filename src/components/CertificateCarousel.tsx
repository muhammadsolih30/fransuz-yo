import { useState } from "react";
import type { StudentCertificate } from "../lib/certificates-content";
import { CertificateStoryCard } from "./CertificateStoryCard";

type Props = {
  certificates: StudentCertificate[];
  labels: {
    viewDetails: string;
    mediaSoon: string;
    scrollHint: string;
    total: string;
    carouselAria: string;
    examLabel: string;
  };
};

export function CertificateCarousel({ certificates, labels }: Props) {
  const loop = [...certificates, ...certificates];
  const [paused, setPaused] = useState(false);

  return (
    <div className="cert-marquee-shell">
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="cert-marquee-shell__count">{labels.total}</span>
        <span className="cert-marquee-shell__dot" aria-hidden />
        <p className="cert-marquee-shell__hint">{labels.scrollHint}</p>
      </div>

      <div
        className={`cert-marquee group ${paused ? "cert-marquee--paused" : ""}`}
        aria-label={labels.carouselAria}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onTouchCancel={() => setPaused(false)}
      >
        <div
          className="cert-marquee__track"
          style={{ "--cert-count": certificates.length } as React.CSSProperties}
        >
          {loop.map((cert, idx) => (
            <CertificateStoryCard
              key={`${cert.id}-${idx}`}
              cert={cert}
              index={idx % certificates.length}
              marquee
              labels={{ viewDetails: labels.viewDetails, mediaSoon: labels.mediaSoon, examLabel: labels.examLabel }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
