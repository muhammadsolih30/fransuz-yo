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
    ? "relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="kurslar" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
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

      <section className="course-marquee-section py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center reveal">
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

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.programEyebrow}
            </p>
            <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.programTitle}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSubjects.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="reveal card card-hover p-8 group" data-delay={(i % 3) * 100}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                    <Icon className="w-7 h-7 text-[#15233B]" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#e83848] transition-colors">
                    {s.t}
                  </h4>
                  <p className="text-[#3E4B62] text-sm leading-relaxed">{s.d}</p>
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
