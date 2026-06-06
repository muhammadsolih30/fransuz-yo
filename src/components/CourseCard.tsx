// Placeholder for the CourseCard component
import { Link } from "@tanstack/react-router";

type Course = {
  emoji: string;
  type: string;
  prices: { label: string; price: string }[];
  schedule: string;
  students: string;
  duration: string;
  features: string[];
  highlight: boolean;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <div
      className={`bg-white p-10 hover:bg-gray-50 transition-all group relative border border-gray-200 ${
        course.highlight ? "border-t-2 border-[#E8192C]" : ""
      }`}
    >
      {course.highlight && (
        <div className="absolute top-6 right-6 bg-[#E8192C] text-white text-xs font-medium px-3 py-1 rounded-full">
          Eng mashhur
        </div>
      )}

      <div className="text-4xl mb-6">{course.emoji}</div>
      <h3 className="font-['Syne'] font-black text-2xl mb-1 group-hover:text-[#E8192C] transition-colors">
        {course.type}
      </h3>
      <p className="text-gray-500 text-xs mb-8">
        {course.students} • {course.duration}
      </p>

      <div className="mb-8">
        {course.prices.map((p) => (
          <div
            key={p.label}
            className="flex justify-between items-baseline border-b border-white/5 pb-3 mb-3"
          >
            <span className="text-gray-500 text-sm">{p.label}</span>
            <span className="font-['Syne'] font-black text-2xl text-gray-900">
              {p.price}
              <span className="text-gray-500 text-sm font-normal"> so'm/oy</span>
            </span>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-xs mb-6">🕐 {course.schedule}</p>

      <ul className="flex flex-col gap-2 mb-8">
        {course.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-gray-500">
            <span className="w-1 h-1 rounded-full bg-[#E8192C]" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/boglanish"
        className={`no-underline block text-center py-3.5 text-sm font-medium transition-all ${
          course.highlight
            ? "bg-[#E8192C] hover:bg-[#c4111f] text-white"
            : "border border-gray-300 hover:border-gray-500 text-gray-600 hover:text-gray-900"
        }`}
      >
        Ro'yxatdan o'tish →
      </Link>
    </div>
  );
}
