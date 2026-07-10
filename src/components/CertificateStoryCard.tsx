import { useState } from "react";
import { Award, ChevronRight, Headphones, BookOpen, PenLine, Mic } from "lucide-react";
import type { StudentCertificate } from "../lib/certificates-content";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { CertificateReveal } from "./CertificateReveal";
import { DeferredImage } from "./DeferredImage";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const SKILL_ICONS: Record<string, typeof Headphones> = {
  Listening: Headphones,
  Reading: BookOpen,
  Writing: PenLine,
  Speaking: Mic,
  Structures: BookOpen,
  Overall: BookOpen,
};

const LEVEL_CLASS: Record<string, string> = {
  C2: "cert-level--c2",
  C1: "cert-level--c1",
  B2: "cert-level--b2",
  B1: "cert-level--b1",
  A2: "cert-level--a2",
};

type Props = {
  cert: StudentCertificate;
  index?: number;
  marquee?: boolean;
  labels: {
    viewDetails: string;
    mediaSoon: string;
    examLabel: string;
  };
};

export function CertificateStoryCard({ cert, index = 0, marquee = false, labels }: Props) {
  const [open, setOpen] = useState(false);
  const { content } = useSitePreferences();

  const topLevel =
    cert.scores
      ?.map((s) => s.level)
      .sort((a, b) => {
        const order = ["C2", "C1", "B2", "B1", "A2"];
        return order.indexOf(a) - order.indexOf(b);
      })[0] ?? null;

  const uniqueLevels = [...new Set(cert.scores?.map((s) => s.level) ?? [])].slice(0, 3);

  return (
    <>
      <article className={`cert-slide-card ${marquee ? "cert-slide-card--marquee" : ""}`}>
        <div className="cert-slide-card__media">
          {topLevel && (
            <span className={`cert-slide-card__badge ${LEVEL_CLASS[topLevel] ?? ""}`}>
              {topLevel}
            </span>
          )}
          {cert.image ? (
            <CertificateReveal
              src={cert.image}
              alt={`${cert.certType} — ${cert.name}`}
              index={index}
              compact
              animate={false}
              className="cert-slide-card__reveal"
            />
          ) : (
            <MediaPlaceholder
              type="certificate"
              label={cert.name}
              sublabel={labels.mediaSoon}
              className="cert-slide-card__placeholder h-full rounded-2xl border border-[#15233B]/8"
            />
          )}
        </div>

        <div className="cert-slide-card__body">
          <h4 className="cert-slide-card__name">{cert.name}</h4>

          <div className="cert-slide-card__row">
            <Award className="w-4 h-4 shrink-0 text-[#e83848]" strokeWidth={2} />
            <span className="cert-slide-card__label">{labels.examLabel}</span>
            <span className="cert-slide-card__value">{cert.certType}</span>
          </div>

          {uniqueLevels.length > 0 && (
            <div className="cert-slide-card__chips">
              {uniqueLevels.map((level) => (
                <span key={level} className={`cert-slide-card__chip ${LEVEL_CLASS[level] ?? ""}`}>
                  {level}
                </span>
              ))}
            </div>
          )}

          <p className="cert-slide-card__story">{cert.story}</p>

          <button
            type="button"
            className="cert-slide-card__cta"
            onClick={() => setOpen(true)}
            aria-label={`${cert.name} — ${labels.viewDetails}`}
          >
            {labels.viewDetails}
            <ChevronRight className="w-4 h-4" aria-hidden />
          </button>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="cert-story-dialog max-w-3xl border border-[#15233B]/10 p-0 gap-0 overflow-hidden rounded-2xl" closeLabel={content.ui.a11y.close}>
          <div className="cert-story-dialog__grid">
            {cert.image && (
              <div className="cert-story-dialog__image-col">
                <DeferredImage
                  src={cert.image}
                  alt={cert.name}
                  className="cert-story-dialog__img"
                  wrapClassName="h-full min-h-[16rem]"
                  showSpinner
                />
              </div>
            )}
            <div className="cert-story-dialog__content-col">
              <DialogHeader className="text-left space-y-1 p-6 pb-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#e83848]">
                  {cert.certType}
                </p>
                <DialogTitle className="cert-story-dialog__title">
                  {cert.name}
                </DialogTitle>
              </DialogHeader>

              {cert.scores && cert.scores.length > 0 && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {cert.scores.map((sc) => {
                      const Icon = SKILL_ICONS[sc.skill] ?? BookOpen;
                      return (
                        <div key={sc.skill} className="cert-story-dialog__score">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="w-3.5 h-3.5 text-[#546074]" />
                            <span className="cert-story-dialog__score-label">{sc.skill}</span>
                          </div>
                          <div className="flex items-baseline justify-between gap-2">
                            <span
                              className={`cert-story-dialog__score-level ${LEVEL_CLASS[sc.level] ? `cert-level-text ${LEVEL_CLASS[sc.level]}` : ""}`}
                            >
                              {sc.level}
                            </span>
                            {sc.value && (
                              <span className="cert-story-dialog__score-value">{sc.value}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="cert-story-dialog__story-wrap px-6 pb-6 max-h-[40vh] overflow-y-auto">
                <p className="cert-story-dialog__story whitespace-pre-line">{cert.storyFull}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
