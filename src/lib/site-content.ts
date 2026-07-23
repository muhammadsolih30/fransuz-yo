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
} from "lucide-react";

export const centerStats = [
  { num: 2, suffix: "", label: "Filiallar" },
  { num: 30, suffix: "+", label: "Xodimlar" },
  { num: 4, suffix: " yil", label: "Faoliyat davri" },
  { num: 500, suffix: "+", label: "O'quvchilar" },
  { num: 3000, suffix: "+", label: "Bitiruvchilar" },
];

export const heroTagline =
  "Fransuz tili o'quv markazi France TCF — Kanadaga ishlash yoki o'qish uchun ketishning eng oson yo'li. Express Entry tizimida +50 ball va kamroq raqobat. TCF Canada'ga professional tayyorgarlik.";

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
];

export type SiteLink =
  | { to: string; label: string; hash?: never }
  | { to: "/"; label: string; hash: string };

export const navLinks: SiteLink[] = [
  { to: "/", hash: "haqimizda", label: "Biz haqimizda" },
  { to: "/", hash: "kurslar", label: "Kurs narxlar" },
  { to: "/", hash: "natijalar", label: "Natijalar" },
  { to: "/", hash: "ustoz", label: "Ustozlar" },
  { to: "/immigratsiya", label: "Immigratsiya" },
  { to: "/faq", label: "FAQ" },
  { to: "/probniy-dars", label: "Probniy dars" },
  { to: "/vakansiya", label: "Vakansiya" },
  { to: "/ommaviy-oferta", label: "Oferta" },
];

export const footerLinks = [
  ...navLinks,
  { to: "/boglanish", label: "Bog'lanish" },
];

/** Bosh sahifadagi scroll-spy bo'limlari */
export const HOME_SECTION_IDS = ["haqimizda", "kurslar", "natijalar", "ustoz"] as const;
