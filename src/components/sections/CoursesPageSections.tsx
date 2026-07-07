import { Link } from "@tanstack/react-router";
import { CourseCarousel } from "../CourseCarousel";
import { FaqAccordion } from "../FaqAccordion";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function CoursesPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { courses, courseSubjects, nlcTable, courseFaqs } = content.courses;
  const ui = content.ui.courses;
  const shared = content.ui.shared;

  const heroClass = embedded
    ? "section-intro relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "section-intro relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="kurslar" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            {ui.title}
          </h2>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">{ui.subtitle}</p>
        </div>
      </section>

      <section className="course-marquee-section py-10 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-12 text-center reveal">
          <p className="course-section__eyebrow">{ui.carouselEyebrow}</p>
          <h3 className="course-section__title">
            {ui.carouselTitleBefore}{" "}
            <span className="course-section__title-accent">{ui.carouselTitleAccent}</span>{" "}
            {ui.carouselTitleAfter}
          </h3>
        </div>

        <div className="reveal">
          <CourseCarousel
            courses={courses}
            labels={{
              lessonDuration: ui.lessonDuration,
              courseDuration: ui.courseDuration,
              priceLabel: ui.priceLabel,
              groupSize: ui.groupSize,
              perMonth: shared.perMonth,
              register: shared.registerArrow,
              mostPopular: shared.mostPopular,
              carouselAria: content.ui.a11y.coursesCarousel,
            }}
          />
        </div>
      </section>

      <section className="site-section site-section--cream py-12 sm:py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.programEyebrow}
            </p>
            <h3 className="section-heading font-['Syne'] font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight">{ui.programTitle}</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {courseSubjects.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="reveal card card-hover p-4 sm:p-6 lg:p-8 group" data-delay={(i % 3) * 100}>
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#15233B]/8 to-[#2a5286]/15 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h4 className="card-title font-['Syne'] font-bold text-sm sm:text-lg lg:text-xl mb-1.5 sm:mb-3 group-hover:text-[#e83848] transition-colors leading-snug">
                    {s.t}
                  </h4>
                  <p className="section-body text-[0.7rem] sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.tcfEyebrow}
              </p>
              <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.tcfTitle}</h3>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-6">{ui.tcfBody}</p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">{ui.tcfTip}</p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={150}>
              <div className="table-head-dark px-6 py-4">
                <span className="text-white font-['Syne'] font-bold text-sm">{ui.clbTarget}</span>
              </div>
              {nlcTable.map((row, i) => (
                <div
                  key={row.section}
                  className={`flex items-center justify-between px-6 py-5 ${i < nlcTable.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}
                >
                  <span className="text-[#3E4B62] font-medium">{row.section}</span>
                  <span className="font-['Syne'] font-bold text-lg text-[#e83848]">{row.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.faqEyebrow}
              </p>
              <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.faqTitle}</h3>
              <Link to="/boglanish" className="btn-primary">
                {shared.contactArrow}
              </Link>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={courseFaqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
