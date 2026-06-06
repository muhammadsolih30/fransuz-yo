// Placeholder for the TeacherCard component
type Teacher = {
  name: string;
  role: string;
  level: string;
  experience: string;
  students: string;
  certifications: string[];
  image?: string;
};

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="bg-white p-8 hover:bg-gray-50 transition-all group border border-gray-200 hover:border-[#E8192C] duration-300">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center mb-6 overflow-hidden">
        {teacher.image ? (
          <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-['Syne'] font-black text-2xl text-[#E8192C]">
            {teacher.name.charAt(0)}
          </span>
        )}
      </div>

      <h3 className="font-['Syne'] font-bold text-lg mb-1 group-hover:text-[#E8192C] transition-colors">
        {teacher.name}
      </h3>
      <p className="text-gray-500 text-xs mb-6">{teacher.role}</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="border border-white/5 p-3">
          <div className="font-['Syne'] font-black text-xl text-[#E8192C]">{teacher.level}</div>
          <div className="text-white/30 text-xs mt-1">Fransuz tili</div>
        </div>
        <div className="border border-white/5 p-3">
          <div className="font-['Syne'] font-black text-xl text-white">{teacher.experience}</div>
          <div className="text-white/30 text-xs mt-1">Tajriba</div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 pt-4">
        <div>
          <div className="font-['Syne'] font-bold text-gray-600">{teacher.students}</div>
          <div className="text-gray-400 text-xs">O'quvchilar</div>
        </div>
        <div className="flex flex-wrap gap-1 justify-end">
          {teacher.certifications.map((c) => (
            <span
              key={c}
              className="text-xs bg-gray-100 border border-gray-300 px-2 py-0.5 text-gray-500"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
