import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Banknote, Calendar, Clock, Users } from "lucide-react";
import { GROUP_COURSE_IMAGES, type CourseCover, type CourseItem } from "../lib/courses-content";

type Labels = {
  lessonDuration: string;
  courseDuration: string;
  priceLabel: string;
  groupSize: string;
  perMonth: string;
  register: string;
  mostPopular: string;
};

type Props = {
  courses: CourseItem[];
  labels: Labels;
};

const FALLBACK_COVERS: CourseCover[] = [
  { image: GROUP_COURSE_IMAGES.offline },
  { image: GROUP_COURSE_IMAGES.onlineMini },
  { image: GROUP_COURSE_IMAGES.onlineGroup },
  { image: GROUP_COURSE_IMAGES.individual },
];

function getCover(course: CourseItem, index: number): CourseCover {
  return course.cover ?? FALLBACK_COVERS[index % FALLBACK_COVERS.length];
}

function getLessonLength(course: CourseItem): string {
  return course.lessonLength ?? "90 daqiqa";
}

export function CourseCarousel({ courses, labels }: Props) {
  const loop = [...courses, ...courses, ...courses];

  return (
    <div className="course-marquee-shell">
      <div className="course-marquee group" aria-label="Kurslar karuseli">
        <div
          className="course-marquee__track"
          style={{ "--course-count": courses.length } as CSSProperties}
        >
          {loop.map((course, idx) => {
            const cover = getCover(course, idx % courses.length);

            return (
              <article
                key={`${course.type}-${idx}`}
                className={`course-slide-card ${course.highlight ? "course-slide-card--featured" : ""}`}
              >
                {course.highlight && (
                  <span className="course-slide-card__badge">{labels.mostPopular}</span>
                )}

                <div
                  className="course-slide-card__cover"
                  style={{
                    backgroundImage: `url("${encodeURI(cover.image)}")`,
                    backgroundPosition: cover.objectPosition ?? "center center",
                  }}
                  role="img"
                  aria-label={course.type}
                />

                <div className="course-slide-card__body">
                  <h3 className="course-slide-card__title">{course.type}</h3>
                  <p className="course-slide-card__subtitle">{course.subtitle ?? "\u00A0"}</p>

                  <div className="course-slide-card__meta">
                    <div className="course-slide-card__meta-row">
                      <span className="course-slide-card__meta-icon" aria-hidden>
                        <Clock className="w-4 h-4" strokeWidth={2.2} />
                      </span>
                      <div className="course-slide-card__meta-text">
                        <span className="course-slide-card__meta-label">{labels.lessonDuration}:</span>
                        <span className="course-slide-card__meta-value">{getLessonLength(course)}</span>
                      </div>
                    </div>

                    <div className="course-slide-card__meta-row">
                      <span className="course-slide-card__meta-icon" aria-hidden>
                        <Calendar className="w-4 h-4" strokeWidth={2.2} />
                      </span>
                      <div className="course-slide-card__meta-text">
                        <span className="course-slide-card__meta-label">{labels.courseDuration}:</span>
                        <span className="course-slide-card__meta-value">{course.duration}</span>
                      </div>
                    </div>

                    <div className="course-slide-card__meta-row">
                      <span className="course-slide-card__meta-icon" aria-hidden>
                        <Users className="w-4 h-4" strokeWidth={2.2} />
                      </span>
                      <div className="course-slide-card__meta-text">
                        <span className="course-slide-card__meta-label">{labels.groupSize}:</span>
                        <span className="course-slide-card__meta-value">{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="course-slide-card__footer">
                    <div className="course-slide-card__price-block">
                      <div className="course-slide-card__meta-row course-slide-card__meta-row--price">
                        <span className="course-slide-card__meta-icon" aria-hidden>
                          <Banknote className="w-4 h-4" strokeWidth={2.2} />
                        </span>
                        <div className="course-slide-card__meta-text">
                          <span className="course-slide-card__meta-label">{labels.priceLabel}:</span>
                        </div>
                      </div>
                      {course.prices.map((p) => (
                        <div key={p.label} className="course-slide-card__price-line">
                          {course.prices.length > 1 && (
                            <span className="course-slide-card__price-tier">{p.label}</span>
                          )}
                          <span className="course-slide-card__price-amount">
                            {p.price}
                            <span className="course-slide-card__price-unit"> {labels.perMonth}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/boglanish"
                      className={`course-slide-card__cta ${course.highlight ? "course-slide-card__cta--primary" : ""}`}
                    >
                      {labels.register}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
