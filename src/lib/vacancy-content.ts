import type { LucideIcon } from "lucide-react";
import { Headphones, Megaphone, Phone, Presentation, Sparkles } from "lucide-react";

export type Vacancy = {
  id: string;
  icon: LucideIcon;
  title: string;
  format: string;
  salary: string;
  age?: string;
  about: string;
  duties?: string[];
  requirements: string[];
  offer: string[];
  schedule?: string[];
};

export const vacancies: Vacancy[] = [
  {
    id: "francuz-oqituvchi",
    icon: Presentation,
    title: "Fransuz tili o'qituvchisi",
    format: "Online / Offline",
    salary: "8 000 000 so'mdan boshlab",
    about:
      "Zamonaviy metodikaga asoslangan, natijaga yo'naltirilgan ta'lim beruvchi jamoaga professional o'qituvchi qidirmoqdamiz.",
    duties: [
      "Darslarni energiya va motivatsiya bilan olib borish",
      "TCF Canada formatida o'quvchilarni tayyorlash",
      "O'quvchilarga natija berishga yo'naltirilgan ishlash",
    ],
    requirements: [
      "Kamida 3 yillik o'qituvchilik tajribasi",
      "Fransuz tili C1 sertifikati (yoki undan yuqori daraja)",
      "Online platformalarda (Zoom / Google Meet) ishlash tajribasi",
      "Mas'uliyatli, jamoa bilan ishlay oladigan",
      "O'quvchilarga natija berishga yo'naltirilgan yondashuv",
    ],
    offer: [
      "Oylik: 8 000 000 so'mdan boshlab",
      "Bepul TCF Canada kurslari",
      "Professional traininglar (doimiy rivojlanish)",
      "Har oylik bonus tizimi",
      "Recommendation bonus: 300$ gacha",
      "Teambuilding (premium resortlarda)",
      "Work-life balance: 6 soatlik ish kuni, 48 kunlik ta'til",
      "Doimiy shaxsiy va professional o'sish imkoniyati",
    ],
    schedule: ["Online va Offline formatda ishlash imkoniyati", "Ish vaqti: kelishiladi"],
  },
  {
    id: "administrator",
    icon: Headphones,
    title: "Administrator",
    format: "To'liq / yarim stavka",
    salary: "5 000 000+ so'm",
    age: "18–30 yosh",
    about: "O'quv markazimizga mas'uliyatli va faol administrator kerak.",
    duties: [
      "Mijozlar bilan ishlash",
      "Telefon qo'ng'iroqlari va xabarlarni qabul qilish",
      "Talabalarni ro'yxatga olish",
      "O'quv markazi faoliyatini muvofiqlashtirish",
    ],
    requirements: [
      "Kamida 1 yillik ish tajribasi (o'quv markazida ishlagan bo'lishi afzal)",
      "Call-operatorlik tajribasi",
      "Google Sheets va Google Forms bilan ishlay olish",
      "Tartibli, mas'uliyatli va punktual bo'lish",
      "Xushmuomalalik va mijozlar bilan to'g'ri muloqot",
    ],
    offer: [
      "Do'stona va professional jamoa",
      "Qulay va barqaror ish muhiti",
      "O'sish va rivojlanish imkoniyatlari",
      "Motivatsion bonus tizimi",
    ],
    schedule: [
      "09:00 – 19:00 (to'liq stavka)",
      "09:00 – 14:00 (yarim stavka)",
      "14:00 – 19:00 (yarim stavka)",
    ],
  },
  {
    id: "call-operator",
    icon: Phone,
    title: "Call Operator",
    format: "To'liq stavka",
    salary: "5 000 000+ so'm",
    age: "18–30 yosh",
    about: "Mijozlar bilan ishlay oladigan faol va xushmuomala Call Operator kerak.",
    duties: [
      "Kiruvchi qo'ng'iroqlarni qabul qilish",
      "O'quv markazi kurslari haqida ma'lumot berish",
      "Mijozlarni konsultatsiyaga yo'naltirish",
      "Ro'yxatdan o'tgan talabalar bilan follow-up qilish",
      "CRM va Google Sheets bilan ishlash",
    ],
    requirements: [
      "Kamida 6 oy – 1 yil ish tajribasi (call center yoki o'quv markazida)",
      "Tushunarli va chiroyli nutq (rus/uzbek bilish ustunlik)",
      "Mijozlar bilan ishlash ko'nikmasi",
      "Google Sheets va Google Forms bilish",
      "Mas'uliyatli, tezkor, stressga chidamli va xushmuomala",
    ],
    offer: [
      "Do'stona va professional jamoa",
      "Barqaror ish muhiti",
      "O'sish va rivojlanish imkoniyati",
      "Bonus tizimi (sotuv va natijaga qarab)",
      "Zamonaviy o'quv markazida ishlash",
    ],
    schedule: ["10:00 – 19:00 (to'liq stavka)", "Ish vaqti kelishilgan holda"],
  },
  {
    id: "brand-face",
    icon: Sparkles,
    title: "Brand Face (markaz yuzi)",
    format: "Loyihaviy / moslashuvchan",
    salary: "Kelishiladi",
    about:
      "O'quv markazimiz uchun Brand Face (brend yuzi) bo'ladigan nomzodni qidirmoqdamiz. Asosiy yo'nalish — TCF Canada va Kanada immigratsiyasi.",
    duties: [
      "Reklama video va kontentlarda ishtirok etish",
      "Instagram, TikTok va Telegram uchun videolarda chiqish",
      "Brend imijini professional ifodalash",
      "Marketing va SMM jamoa bilan ishlash",
      "Reklama kampaniyalarida markaz yuzi sifatida qatnashish",
    ],
    requirements: [
      "Kamera oldida erkin va ishonchli bo'lish",
      "Yaxshi nutq va kommunikatsiya ko'nikmalari",
      "Yoqimli tashqi ko'rinish",
      "Aktivlik va kreativlik",
      "Jamoa bilan ishlay olish (SMMdan xabardorlik ustunlik)",
    ],
    offer: [
      "Oylik maosh: kelishiladi",
      "Barcha fransuz tili kurslari BEPUL",
      "Bonus tizimi (reklama va natijalarga qarab)",
      "Professional fotosessiya va video kontentlar",
      "Shaxsiy brending va rivojlanish imkoniyati",
      "Media va marketing sohasida tajriba",
    ],
    schedule: ["Ish vaqti loyihalarga qarab kelishiladi", "Moslashuvchan grafik"],
  },
  {
    id: "smm-menejer",
    icon: Megaphone,
    title: "SMM Menejer",
    format: "Gibrid / ofis",
    salary: "Tajribaga qarab kelishiladi",
    about: "Kreativ, mas'uliyatli va natijaga yo'naltirilgan SMM Menejerni qidirmoqdamiz.",
    duties: [
      "Instagram, TikTok va Telegram sahifalarini yuritish",
      "Kontent reja (content plan) tuzish",
      "Reels, post va storilar uchun g'oyalar ishlab chiqish",
      "Reklama kampaniyalarini boshqarish",
      "Dizayner va video montajchi bilan ishlash",
      "Brendni rivojlantirish va auditoriyani oshirish",
    ],
    requirements: [
      "SMM sohasida tajriba (kamida 1 yil ustunlik)",
      "Instagram va TikTok algoritmlarini tushunish",
      "Kreativ fikrlash va g'oya ishlab chiqish qobiliyati",
      "Canva / CapCut yoki boshqa editing vositalarini bilish",
      "Mas'uliyatli, natijaga yo'naltirilgan va jamoaviy",
    ],
    offer: [
      "Oylik maosh: tajribaga qarab kelishiladi (bonus tizimi)",
      "Natijaga qarab oylik oshishi",
      "Bepul fransuz tili kurslari",
      "Real loyihalar va katta auditoriya bilan ishlash",
      "Shaxsiy va professional o'sish",
      "Kreativ va do'stona jamoa",
    ],
    schedule: ["Ish vaqti: kelishiladi", "Gibrid yoki ofis formatida ishlash imkoniyati"],
  },
];
