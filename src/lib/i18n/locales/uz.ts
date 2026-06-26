import { milestones } from "../../about-content";
import { certificateImages, studentCertificates } from "../../certificate-images";
import { courses, courseFaqs, courseSubjects, nlcTable } from "../../courses-content";
import { generalFaq, immigrationFaq } from "../../faq-content";
import {
  ageScores,
  crsCalculatorUrl,
  crsCriteria,
  crsFactors,
  educationScores,
  frenchAdvantages,
  frenchDrawStats2026,
  immigrantQuota,
  nclcTable,
  ourHelp,
  prCardInfo,
  prDocuments,
  targetAudience,
  tcfSections,
} from "../../immigration-content";
import {
  ofertaDefinitions,
  ofertaIntro,
  ofertaRequisites,
  ofertaSections,
  ofertaTitle,
} from "../../oferta-content";
import {
  levelColor,
  resultFeedbacks,
  resultStats,
  studentResults,
  tcfLevels,
} from "../../results-content";
import {
  centerClaim,
  centerMotto,
  centerStats,
  heroTagline,
  HOME_SECTION_IDS,
  whyUs,
} from "../../site-content";
import { teacherCerts, teachers, teacherValues } from "../../teachers-content";
import { vacancies } from "../../vacancy-content";
import type { TranslationKeys } from "../types";
import { uzUi } from "./uz-ui";

const t: TranslationKeys = {
  nav: {
    about: "Biz haqimizda",
    courses: "Kurs narxlar",
    results: "Natijalar",
    teachers: "Ustozlar",
    immigration: "Immigratsiya",
    faq: "FAQ",
    trial: "Probniy dars",
    vacancy: "Vakansiya",
    offer: "Oferta",
    gallery: "Galereya",
    contact: "Bog'lanish",
    home: "Bosh sahifa",
  },
  common: {
    register: "Ro'yxatdan o'tish",
    phone: "Telefon",
  },
  footer: {
    ctaTitle: "Kanada orzungizni boshlang",
    ctaText:
      "Birinchi qadam — fransuz tili. Biz sizni Express Entry uchun kerakli balgacha professional tarzda olib chiqamiz.",
    ctaStart: "Hozir boshlash →",
    centerLabel: "O'quv Markazi",
    aboutText:
      "O'zbekistondagi eng yirik fransuz tili o'quv markazi. TCF · DELF · DALF · Milliy sertifikat. 2 filial, 30+ xodim, 500+ o'quvchi.",
    contact: "Aloqa",
    phone: "Telefon",
    telegram: "Telegram",
    address: "Manzil",
    addressValue: "Chilonzor metro, Toshkent",
    adminPanel: "panel",
    copyright: "France TCF O'quv Markazi",
    tagline: "Fransuz tili orqali Kanadaga",
    language: "Til",
    theme: "Mavzu",
    themeLight: "Oq",
    themeDark: "Qora",
    themeAuto: "Avto",
    localeUz: "O'zbek",
    localeEn: "English",
    localeRu: "Русский",
  },
  social: {
    telegram: "Telegram",
    instagram: "Instagram",
    results: "Natijalar",
    admin: "Admin",
  },
};

export const uzLocale = {
  t,
  site: {
    centerStats,
    heroTagline,
    centerMotto,
    centerClaim,
    whyUs,
    HOME_SECTION_IDS,
  },
  about: { milestones },
  courses: { courses, courseSubjects, nlcTable, courseFaqs },
  results: { levelColor, studentResults, resultFeedbacks, resultStats, tcfLevels },
  teachers: { teachers, teacherValues, teacherCerts },
  faq: { generalFaq, immigrationFaq },
  immigration: {
    frenchDrawStats2026,
    immigrantQuota,
    crsCriteria,
    ageScores,
    educationScores,
    nclcTable,
    crsCalculatorUrl,
    crsFactors,
    frenchAdvantages,
    targetAudience,
    ourHelp,
    prCardInfo,
    prDocuments,
    tcfSections,
  },
  oferta: {
    ofertaTitle,
    ofertaIntro,
    ofertaDefinitions,
    ofertaSections,
    ofertaRequisites,
  },
  vacancy: { vacancies },
  certificates: { certificateImages, studentCertificates },
  ui: uzUi,
};
