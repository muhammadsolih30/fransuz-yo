import { Globe, HeartHandshake, Target, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const teachers = [
  {
    name: "Bosh ustoz",
    role: "TCF / TEF Canada mutaxassisi",
    level: "C1–C2",
    exp: "10+ yil tajriba",
    desc: "Fransuz tilidan TCF Canada, DELF, DALF sertifikatlariga tayyorlash bo'yicha keng tajribaga ega. Express Entry strategiyasini chuqur biladi.",
    skills: ["Speaking", "Writing", "Grammar", "TCF strategiya"],
  },
  {
    name: "Native mentor",
    role: "Speaking & Listening",
    level: "Native",
    exp: "Xalqaro tajriba",
    desc: "Talaffuz va jonli muloqot ko'nikmalarini rivojlantirishga ixtisoslashgan native speaker mentor. Tabiiy fransuzcha muhit yaratadi.",
    skills: ["Listening", "Speaking", "Talaffuz", "Suhbat"],
  },
  {
    name: "Qo'shimcha o'qituvchi",
    role: "Individual support",
    level: "C1+",
    exp: "Har bir o'quvchi bilan",
    desc: "Darsdan tashqari har bir o'quvchi bilan individual ishlaydi. Zaif tomonlarga alohida e'tibor qaratadi.",
    skills: ["Individual", "Academic support", "Mock test", "Feedback"],
  },
];

export const teacherValues: { icon: LucideIcon; t: string; d: string }[] = [
  { icon: Target, t: "Maqsadli yondashuv", d: "Har bir o'quvchining darajasi va maqsadiga moslashtirilgan dastur." },
  { icon: TrendingUp, t: "Natijaga yo'naltirilgan", d: "TCF Canada CLB 8+ natijaga erishish — asosiy vazifamiz." },
  { icon: HeartHandshake, t: "To'liq qo'llab-quvvatlash", d: "Kurs davomida va imtihongacha doimiy yordam va maslahat." },
  { icon: Globe, t: "Xalqaro standartlar", d: "CEFR va TCF mezonlariga to'liq mos zamonaviy metodika." },
];

export const teacherCerts = [
  "TCF Canada",
  "TEF Canada",
  "DELF",
  "DALF",
  "TCF Tout Public",
  "TCF Québec",
  "Milliy sertifikat",
];
