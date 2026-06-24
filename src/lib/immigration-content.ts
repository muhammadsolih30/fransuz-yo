import type { LucideIcon } from "lucide-react";
import { Briefcase, CalendarClock, GraduationCap, Languages, Flag } from "lucide-react";

export const frenchDrawStats2026 = [
  { date: "28-may 2026", crs: "409", note: "Fransuz tili tanlovi" },
  { date: "29-aprel 2026", crs: "400", note: "Fransuz tili tanlovi" },
  { date: "18-mart 2026", crs: "393", note: "Fransuz tili tanlovi" },
];

export const immigrantQuota = [
  { year: "2020", total: "341 000", count: "5 756", pct: "3.6%" },
  { year: "2021", total: "401 000", count: "6 949", pct: "1.9%" },
  { year: "2022", total: "437 600", count: "16 371", pct: "4.4%" },
  { year: "2023", total: "471 000", count: "19 636", pct: "4.7%" },
  { year: "2024", total: "485 000", count: "26 100", pct: "6%" },
  { year: "2025", total: "395 000", count: "29 325", pct: "8.5%" },
  { year: "2026", total: "380 000", count: "31 350", pct: "9.5%" },
  { year: "2027", total: "365 000", count: "31 500", pct: "10%" },
];

export const crsCriteria = [
  { factor: "Yosh", max: "110" },
  { factor: "Ta'lim", max: "150" },
  { factor: "Til bilish (ingliz/fransuz)", max: "160" },
  { factor: "Ish tajribasi (Kanadada)", max: "80" },
  { factor: "Chet el ish tajribasi", max: "50" },
  { factor: "Turmush o'rtog'ining ballari (agar bo'lsa)", max: "40" },
  { factor: "Qo'shimcha ballar (fransuz tili, o'qish, ish tajribasi, qarindoshlar)", max: "600 gacha" },
];

export const ageScores = [
  { age: "17 yoki kichik", withSpouse: "0", withoutSpouse: "0" },
  { age: "18", withSpouse: "90", withoutSpouse: "99" },
  { age: "19", withSpouse: "95", withoutSpouse: "105" },
  { age: "20–29", withSpouse: "100", withoutSpouse: "110", highlight: true },
  { age: "30", withSpouse: "95", withoutSpouse: "105" },
  { age: "31", withSpouse: "90", withoutSpouse: "99" },
  { age: "32", withSpouse: "85", withoutSpouse: "94" },
  { age: "33", withSpouse: "80", withoutSpouse: "88" },
  { age: "34", withSpouse: "75", withoutSpouse: "83" },
  { age: "35", withSpouse: "70", withoutSpouse: "77" },
  { age: "36", withSpouse: "65", withoutSpouse: "72" },
  { age: "37", withSpouse: "60", withoutSpouse: "66" },
  { age: "38", withSpouse: "55", withoutSpouse: "61" },
  { age: "39", withSpouse: "50", withoutSpouse: "55" },
  { age: "40", withSpouse: "45", withoutSpouse: "50" },
  { age: "41", withSpouse: "35", withoutSpouse: "39" },
  { age: "42", withSpouse: "25", withoutSpouse: "28" },
  { age: "43", withSpouse: "15", withoutSpouse: "17" },
  { age: "44", withSpouse: "5", withoutSpouse: "6" },
  { age: "45 va undan katta", withSpouse: "0", withoutSpouse: "0" },
];

export const educationScores = [
  { level: "O'rta maktab (High School)", withSpouse: "28", withoutSpouse: "30" },
  { level: "1 yillik kollej/universitet dasturi", withSpouse: "84", withoutSpouse: "90" },
  { level: "2 yillik dastur", withSpouse: "91", withoutSpouse: "98" },
  { level: "3 yil yoki undan ko'p bakalavr/diplom", withSpouse: "112", withoutSpouse: "120" },
  { level: "Ikki yoki undan ko'p diplom (biri 3+ yil)", withSpouse: "119", withoutSpouse: "128" },
  { level: "Magistratura (Master's)", withSpouse: "126", withoutSpouse: "135" },
  { level: "PhD (Doktorantura)", withSpouse: "128", withoutSpouse: "150" },
];

export const nclcTable = [
  { nclc: "10 va undan yuqori", oral: "C1–C2", listening: "549–699", reading: "549–699", written: "C1–C2" },
  { nclc: "9", oral: "C1", listening: "523–548", reading: "524–548", written: "C1" },
  { nclc: "8", oral: "B2", listening: "503–522", reading: "499–523", written: "B2" },
  { nclc: "7", oral: "B2", listening: "458–502", reading: "453–498", written: "B2", highlight: true },
  { nclc: "6", oral: "B1", listening: "398–457", reading: "406–452", written: "B1" },
  { nclc: "5", oral: "B1", listening: "369–397", reading: "375–405", written: "B1" },
  { nclc: "4", oral: "A2", listening: "331–368", reading: "342–374", written: "A2" },
];

export const crsCalculatorUrl =
  "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/verifier-note.html";

export const crsFactors: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: CalendarClock, title: "Yosh", desc: "20–29 yosh oralig'idagi nomzodlar eng yuqori ball oladi." },
  { icon: GraduationCap, title: "Ta'lim", desc: "Kollej, bakalavr, magistr yoki PhD — daraja oshgan sari CRS ball ham ortadi." },
  { icon: Briefcase, title: "Ish tajribasi", desc: "Malakali ish tajribasi qo'shimcha ball beradi." },
  { icon: Languages, title: "Ingliz tili", desc: "IELTS yoki PTE natijalari hisobga olinadi." },
  { icon: Flag, title: "Fransuz tili", desc: "TCF Canada yoki TEF Canada natijalari hisobga olinadi." },
];

export const frenchAdvantages = [
  "Qo'shimcha CRS ballarini olishi mumkin",
  "Fransuz tili kategoriyasidagi alohida tanlovlarda qatnashishi mumkin",
  "Ayrim provinsial immigratsiya dasturlarida ustunlikka ega bo'lishi mumkin",
  "PR olish imkoniyatlarini sezilarli darajada oshirishi mumkin",
];

export const targetAudience = [
  "Bakalavr yoki magistr diplomiga ega nomzodlar",
  "Ish tajribasiga ega mutaxassislar",
  "IELTS natijasi o'rtacha bo'lgan nomzodlar",
  "Express Entry orqali PR olishni maqsad qilganlar",
];

export const ourHelp = [
  "Bepul viza maslahatlar",
  "To'g'ri yo'nalish ko'rsatamiz",
  "Fransuz tilini noldan o'rganasiz",
  "TCF Canada imtihoniga tayyorlanasiz",
  "Tinglab tushunish, o'qish, yozish va gapirish ko'nikmalarini rivojlantirasiz",
  "Mock testlar orqali imtihon formatida mashq qilasiz",
  "Tajribali o'qituvchilar yordamida maqsadli tayyorgarlik ko'rasiz",
];

export const prCardInfo = {
  duration: "5 yil amal qiladi va muddati tugaganda yangilanishi kerak",
  rights: [
    "Kanadada doimiy yashash, ishlash, o'qish",
    "Davlat xizmatlaridan foydalanish",
    "Saylovda qatnashish va davlat lavozimiga nomzod bo'lish huquqi yo'q",
  ],
  citizenship:
    "PR maqomini olgan shaxs, 5 yil ichida kamida 1095 kun (3 yil) Kanadada yashagan bo'lsa, Kanada fuqaroligiga ariza topshirishi mumkin",
  price: "50 Kanada dollari",
  residency:
    "PR maqomini saqlab qolish uchun har 5 yillik davrda kamida 730 kun (2 yil) Kanadada jismonan bo'lish shart",
  proofDocs: [
    "Ish joyidan ma'lumotnoma yoki ish haqi varaqalari",
    "Bank hisoboti",
    "Soliq deklaratsiyalari (Canada Revenue Agency)",
    "Ijara shartnomalari yoki davlat xizmatlaridan foydalanish dalillari",
  ],
  notes: [
    "PR Card — shaxsni tasdiqlovchi va Kanadaga qaytishda zarur bo'lgan asosiy hujjat",
    "Agar PR Card muddati tugasa, uni yangilash uchun ariza topshirish kerak",
    "PR maqomini yo'qotmaslik uchun rezidentlik talablariga qat'iy amal qilish lozim",
  ],
};

export const prDocuments = [
  "To'ldirilgan ariza shakllari (Express Entry onlayn profil, PR Card uchun IMM 5444 va boshqalar)",
  "Pasport yoki boshqa shaxsni tasdiqlovchi hujjat",
  "Rasm (so'nggi 12 oy ichida olingan biometrik rasm)",
  "To'lov kvitansiyasi",
  "Ma'lumotnoma va/yoki ish joyidan ma'lumot",
  "Moliyaviy ahvolingizni ko'rsatuvchi hujjatlar (bank hisoboti, daromadlar)",
  "Til bilish sertifikati (IELTS, CELPIP yoki TEF/TCF)",
  "Ta'lim hujjatlari (diplom, attestat va ECA — Educational Credential Assessment)",
  "Tibbiy ko'rik natijasi (zarur bo'lsa)",
  "Sudlanmaganlik haqida ma'lumotnoma (police certificate)",
  "Nikoh yoki tug'ilganlik haqida guvohnoma (agar kerak bo'lsa)",
  "Doimiy yashash joyingizni tasdiqlovchi hujjatlar",
];

export const tcfSections = [
  "Tinglab tushunish",
  "O'qib tushunish",
  "Yozish",
  "Gapirish",
];
