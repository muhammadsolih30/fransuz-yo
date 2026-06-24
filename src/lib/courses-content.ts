import {
  BookText,
  Headphones,
  Laptop,
  MessageCircle,
  Mic,
  PenLine,
  School,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CourseItem = {
  icon: LucideIcon;
  type: string;
  prices: { label: string; price: string }[];
  schedule: string;
  students: string;
  duration: string;
  features: string[];
  highlight: boolean;
};

export const courses: CourseItem[] = [
  {
    icon: School,
    type: "Offline guruh",
    prices: [{ label: "Guruh dars", price: "700 000–800 000" }],
    schedule: "Talabga qarab jadval belgilanadi",
    students: "10–12 kishi",
    duration: "6–8 oy",
    features: ["Yuzma-yuz darslar", "Markazda materiallar", "Intensive guruh", "Ustoz bilan to'g'ridan-to'g'ri"],
    highlight: false,
  },
  {
    icon: Users,
    type: "Online mini-guruh",
    prices: [{ label: "2–4 kishi", price: "900 000" }],
    schedule: "O'quvchiga qulay vaqtga moslashtiriladi",
    students: "2–4 kishi",
    duration: "6–8 oy",
    features: ["Intensiv darslar", "Har biriga alohida e'tibor", "Tez natija", "Moslashuvchan jadval"],
    highlight: false,
  },
  {
    icon: Laptop,
    type: "Online guruh",
    prices: [{ label: "Zoom / Google Meet", price: "490 000" }],
    schedule: "Asosan kechki vaqtlarda",
    students: "10–15 kishi",
    duration: "6–8 oy",
    features: ["Istalgan joydan", "Zoom / Google Meet", "Yozib olingan darslar", "Online materiallar"],
    highlight: true,
  },
  {
    icon: Target,
    type: "Individual",
    prices: [
      { label: "Online", price: "1 200 000" },
      { label: "Offline", price: "2 000 000" },
    ],
    schedule: "To'liq moslashtiriladi",
    students: "1 kishi",
    duration: "6–8 oy",
    features: ["Shaxsiy tayyorgarlik", "O'z sur'atida", "Qo'shimcha o'qituvchi", "CLB 8+ maqsad"],
    highlight: false,
  },
];

export const courseSubjects = [
  { icon: Headphones, t: "Listening", d: "TCF formatidagi audio mashqlar va vaqt boshqaruvi strategiyalari" },
  { icon: BookText, t: "Reading", d: "Matn tushunish, tez o'qish va javob topish texnikalari" },
  { icon: PenLine, t: "Writing", d: "Rasmiy va norasmiy yozuv, TCF mezonlari bo'yicha baholash" },
  { icon: Mic, t: "Speaking", d: "Amaliy suhbat, monolog va dialog mashqlari" },
  { icon: BookText, t: "Grammar", d: "Fransuz grammatikasi asoslari va murakkab konstruktsiyalar" },
  { icon: MessageCircle, t: "Vocabulary", d: "TCF imtihoniga oid leksika va kundalik muloqot so'zlari" },
];

export const nlcTable = [
  { section: "Speaking", score: "10–11 / 20" },
  { section: "Listening", score: "458–502 / 699" },
  { section: "Reading", score: "453–498 / 699" },
  { section: "Writing", score: "10–11 / 20" },
];

export const courseFaqs = [
  {
    q: "Darslar qaysi platformada o'tiladi?",
    a: "Online darslar Zoom va Google Meet orqali. Offline darslar Chilonzor metrodagi markazimizda o'tkaziladi.",
  },
  {
    q: "Kurs davomida materiallar beriladi mi?",
    a: "Ha, barcha o'quvchilarga kerakli materiallar, testlar va topshiriqlar beriladi.",
  },
  {
    q: "Sababsiz qoldirilgan darslar qaytariladimi?",
    a: "Yo'q. Sababsiz qoldirilgan darslar qayta o'tilmaydi — markaz qoidasi.",
  },
  {
    q: "To'lovni qanday amalga oshirish mumkin?",
    a: "To'lovlar belgilangan muddatda amalga oshirilishi shart. To'lov usullari haqida murojaat qiling.",
  },
  {
    q: "Daraja aniqlanadi mi?",
    a: "Ha. Birinchi dars oldidan boshlang'ich test o'tkaziladi va sizga mos guruh tanlanadi.",
  },
];
