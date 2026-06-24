/** Markaz bo'yicha umumiy ma'lumotlar — keyinchalik shu yerdan yangilanadi */
import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  BookOpen,
  GraduationCap,
  Laptop,
  MessagesSquare,
  Rocket,
  ScrollText,
  UserPlus,
} from "lucide-react";

export const centerStats = [
  { num: 2, suffix: "", label: "Filiallar" },
  { num: 30, suffix: "+", label: "Xodimlar" },
  { num: 4, suffix: " yil", label: "Faoliyat davri" },
  { num: 500, suffix: "+", label: "O'quvchilar" },
  { num: 3000, suffix: "+", label: "Bitiruvchilar" },
];

export const heroTagline =
  "Kanadaga ishlash yoki o'qish uchun ketishning eng oson yo'li — fransuz tili. Express Entry tizimida +50 ball va kamroq raqobat. TCF Canada'ga professional tayyorgarlik.";

export const centerMotto = "Biz bilan Kanada va Fransiyaga ilk qadam.";

export const centerClaim =
  "France TCF — O'zbekistondagi eng yirik fransuz tili o'quv markazi.";

export const whyUs: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: BadgePercent,
    title: "Bepul konsultatsiya",
    desc: "Kanada yo'lida bepul konsultatsiya va visa maslahatlar.",
  },
  {
    icon: BookOpen,
    title: "Aniq metodika",
    desc: "TCF uchun ishlab chiqilgan 0–B2 darajasigacha 2 ta kitob va intensive guruh dasturi.",
  },
  {
    icon: ScrollText,
    title: "Rasmiy sertifikatlar",
    desc: "TCF Canada, TEF, DELF, DALF va milliy sertifikatga to'liq tayyorgarlik.",
  },
  {
    icon: Laptop,
    title: "Online & Offline",
    desc: "Sizga qulay formatda — masofadan yoki markazda yuzma-yuz darslar.",
  },
  {
    icon: Rocket,
    title: "CLB 8+ natija",
    desc: "Natijaga yo'naltirilgan dastur — CLB 8 va undan yuqori darajaga erishish maqsad qilinadi.",
  },
  {
    icon: MessagesSquare,
    title: "Bepul speaking club",
    desc: "Amaliy muloqot ko'nikmalarini mustahkamlash uchun bepul speaking club.",
  },
  {
    icon: GraduationCap,
    title: "Academic support",
    desc: "Akademik yordam va imtihon strategiyalari bo'yicha qo'llab-quvvatlash.",
  },
  {
    icon: UserPlus,
    title: "Qo'shimcha o'qituvchi",
    desc: "Har bir o'quvchi bilan individual ishlash uchun darsdan tashqari qo'shimcha o'qituvchi.",
  },
];

export const navLinks = [
  { to: "/haqimizda", label: "Biz haqimizda" },
  { to: "/kurslar", label: "Kurs narxlar" },
  { to: "/natijalar", label: "Natijalar" },
  { to: "/ustoz", label: "Ustozlar" },
  { to: "/immigratsiya", label: "Immigratsiya" },
  { to: "/faq", label: "FAQ" },
  { to: "/probniy-dars", label: "Probniy dars" },
  { to: "/vakansiya", label: "Vakansiya" },
  { to: "/ommaviy-oferta", label: "Oferta" },
];

export const footerLinks = [
  ...navLinks,
  { to: "/galereya", label: "Galereya" },
  { to: "/boglanish", label: "Bog'lanish" },
];
