import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  BookOpen,
  BookText,
  Briefcase,
  CalendarClock,
  Flag,
  GraduationCap,
  Headphones,
  Laptop,
  Languages,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Mic,
  PenLine,
  Phone,
  Presentation,
  Rocket,
  School,
  ScrollText,
  Sparkles,
  Target,
  UserPlus,
  Users,
} from "lucide-react";
import { Globe, HeartHandshake, TrendingUp } from "lucide-react";
import { certificateImages, studentCertificates } from "../../certificate-images";
import { HOME_SECTION_IDS } from "../../site-content";
import type { TranslationKeys } from "../types";
import { enUi } from "./en-ui";

const t: TranslationKeys = {
  nav: {
    about: "About",
    courses: "Courses",
    results: "Results",
    teachers: "Teachers",
    immigration: "Immigration",
    faq: "FAQ",
    trial: "Trial",
    vacancy: "Jobs",
    offer: "Terms",
    gallery: "Gallery",
    contact: "Contact",
    home: "Home",
  },
  common: {
    register: "Sign up",
    phone: "Phone",
  },
  footer: {
    ctaTitle: "Start your Canada dream",
    ctaText:
      "The first step is French. We guide you professionally to the score you need for Express Entry.",
    ctaStart: "Get started →",
    centerLabel: "Learning Center",
    aboutText:
      "Uzbekistan's largest French language center. TCF · DELF · DALF · National certificate. 2 branches, 30+ staff, 500+ students.",
    contact: "Contact",
    phone: "Phone",
    telegram: "Telegram",
    address: "Address",
    addressValue: "Chilonzor metro, Tashkent",
    adminPanel: "panel",
    copyright: "France TCF Learning Center",
    tagline: "To Canada through French",
    language: "Language",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeAuto: "Auto",
    localeUz: "O'zbek",
    localeEn: "English",
    localeRu: "Русский",
  },
  social: {
    telegram: "Telegram",
    instagram: "Instagram",
    results: "Results",
    admin: "Admin",
  },
};

export const enLocale = {
  t,
  site: {
    centerStats: [
      { num: 2, suffix: "", label: "Branches" },
      { num: 30, suffix: "+", label: "Staff" },
      { num: 4, suffix: " yrs", label: "Years active" },
      { num: 500, suffix: "+", label: "Students" },
      { num: 3000, suffix: "+", label: "Graduates" },
    ],
    heroTagline:
      "The easiest path to working or studying in Canada — French. +50 points in Express Entry and less competition. Professional TCF Canada preparation.",
    centerMotto: "Your first step to Canada and France with us.",
    centerClaim: "France TCF — Uzbekistan's largest French language learning center.",
    whyUs: [
      { icon: BadgePercent, title: "Free consultation", desc: "Free consultation on your Canada pathway and visa guidance." },
      { icon: BookOpen, title: "Clear methodology", desc: "2 textbooks for levels 0–B2 and an intensive group program designed for TCF." },
      { icon: ScrollText, title: "Official certificates", desc: "Full preparation for TCF Canada, TEF, DELF, DALF, and the national certificate." },
      { icon: Laptop, title: "Online & offline", desc: "Your preferred format — remote or in-person classes at the center." },
      { icon: Rocket, title: "CLB 8+ results", desc: "Results-focused program — achieving CLB 8 and above is the goal." },
      { icon: MessagesSquare, title: "Free speaking club", desc: "Free speaking club to strengthen practical conversation skills." },
      { icon: GraduationCap, title: "Academic support", desc: "Academic support and exam strategy guidance." },
      { icon: UserPlus, title: "Extra tutor", desc: "An additional tutor for individual work with every student outside class." },
    ] as { icon: LucideIcon; title: string; desc: string }[],
    HOME_SECTION_IDS,
  },
  about: {
    milestones: [
      { year: "2022", title: "Center founded", desc: "Operations began as a professional learning center for French and TCF Canada." },
      { year: "2023", title: "Methodology developed", desc: "Created 2 dedicated textbooks for levels 0–B2 and an intensive group program for TCF." },
      { year: "2024", title: "Second branch", desc: "A second branch opened as enrollment grew. Online and offline formats expanded." },
      { year: "2026", title: "Largest center", desc: "Uzbekistan's largest French language center with 500+ active students and 3000+ graduates." },
    ],
  },
  courses: {
    courses: [
      { icon: School, type: "Offline group", prices: [{ label: "Group class", price: "700,000–800,000" }], schedule: "Schedule set based on demand", students: "10–12 people", duration: "6–8 months", features: ["In-person classes", "Materials at the center", "Intensive group", "Direct access to the teacher"], highlight: false },
      { icon: Users, type: "Online mini-group", prices: [{ label: "2–4 people", price: "900,000" }], schedule: "Adjusted to a time convenient for students", students: "2–4 people", duration: "6–8 months", features: ["Intensive classes", "Individual attention for each student", "Fast results", "Flexible schedule"], highlight: false },
      { icon: Laptop, type: "Online group", prices: [{ label: "Zoom / Google Meet", price: "490,000" }], schedule: "Mainly in the evenings", students: "10–15 people", duration: "6–8 months", features: ["From anywhere", "Zoom / Google Meet", "Recorded lessons", "Online materials"], highlight: true },
      { icon: Target, type: "Individual", prices: [{ label: "Online", price: "1,200,000" }, { label: "Offline", price: "2,000,000" }], schedule: "Fully customized", students: "1 person", duration: "6–8 months", features: ["Personal preparation", "At your own pace", "Extra tutor", "CLB 8+ goal"], highlight: false },
    ],
    courseSubjects: [
      { icon: Headphones, t: "Listening", d: "TCF-format audio exercises and time management strategies" },
      { icon: BookText, t: "Reading", d: "Text comprehension, speed reading, and answer-finding techniques" },
      { icon: PenLine, t: "Writing", d: "Formal and informal writing, assessed against TCF criteria" },
      { icon: Mic, t: "Speaking", d: "Practical conversation, monologue, and dialogue practice" },
      { icon: BookText, t: "Grammar", d: "French grammar fundamentals and advanced structures" },
      { icon: MessageCircle, t: "Vocabulary", d: "TCF exam vocabulary and everyday conversation words" },
    ],
    nlcTable: [
      { section: "Speaking", score: "10–11 / 20" },
      { section: "Listening", score: "458–502 / 699" },
      { section: "Reading", score: "453–498 / 699" },
      { section: "Writing", score: "10–11 / 20" },
    ],
    courseFaqs: [
      { q: "Which platform are classes held on?", a: "Online classes via Zoom and Google Meet. Offline classes at our center near Chilonzor metro." },
      { q: "Are materials provided during the course?", a: "Yes. All students receive the required materials, tests, and assignments." },
      { q: "Are missed classes without a valid reason made up?", a: "No. Classes missed without a valid reason are not retaught — center policy." },
      { q: "How can payment be made?", a: "Payments must be made by the due date. Contact us for payment methods." },
      { q: "Is my level assessed?", a: "Yes. A placement test is given before the first lesson and you are placed in a suitable group." },
    ],
  },
  results: {
    levelColor: { C2: "text-emerald-700 bg-emerald-50 border-emerald-200", C1: "text-emerald-700 bg-emerald-50 border-emerald-200", B2: "text-blue-700 bg-blue-50 border-blue-200", B1: "text-amber-700 bg-amber-50 border-amber-200" },
    studentResults: [
      { name: "Dilnura Saidbekova", period: "6 months", from: "B1", cert: "TCF Canada", date: "2026", quote: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗", scores: [{ s: "Listening", l: "C2", v: "699/699" }, { s: "Reading", l: "C2", v: "699/699" }, { s: "Writing", l: "B2", v: "11/20" }, { s: "Speaking", l: "B2", v: "10/20" }], highlight: true },
      { name: "Moxinur Salomatova", period: "In progress", from: "A2", cert: "National certificate", date: "2025", quote: "", scores: [{ s: "Listening", l: "B1", v: "55" }, { s: "Reading", l: "B1", v: "50" }, { s: "Writing", l: "B1", v: "51" }, { s: "Speaking", l: "B1", v: "38" }], highlight: false },
    ],
    resultFeedbacks: [
      { name: "Dilnura Saidbekova", text: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗", cert: "TCF Canada — C2", rating: 5 },
      { name: "Student", text: "The center's methodology is very clear. I got fast results through the 2 books and intensive group.", cert: "TCF Canada", rating: 5 },
      { name: "Student", text: "My speaking skills improved noticeably thanks to the speaking club and extra tutor.", cert: "TCF Canada", rating: 5 },
    ],
    resultStats: [{ n: "500+", l: "Active students" }, { n: "3000+", l: "Graduates" }, { n: "6 months", l: "Fastest result" }, { n: "C2", l: "Highest level" }],
    tcfLevels: [
      { level: "A1–A2", l: "0–180", r: "0–180", c: "text-orange-600" },
      { level: "B1", l: "181–297", r: "181–297", c: "text-amber-600" },
      { level: "B2", l: "298–457", r: "298–457", c: "text-blue-600" },
      { level: "C1", l: "458–502", r: "453–498", c: "text-emerald-600" },
      { level: "C2", l: "503–699", r: "499–699", c: "text-green-600" },
    ],
  },
  teachers: {
    teachers: [
      { name: "Lead teacher", role: "TCF / TEF Canada specialist", level: "C1–C2", exp: "10+ years of experience", desc: "Extensive experience preparing students for TCF Canada, DELF, and DALF. Deep knowledge of Express Entry strategy.", skills: ["Speaking", "Writing", "Grammar", "TCF strategy"] },
      { name: "Native mentor", role: "Speaking & Listening", level: "Native", exp: "International experience", desc: "Native speaker mentor specializing in pronunciation and live conversation skills. Creates an authentic French environment.", skills: ["Listening", "Speaking", "Pronunciation", "Conversation"] },
      { name: "Extra tutor", role: "Individual support", level: "C1+", exp: "With every student", desc: "Works individually with each student outside class. Focuses extra attention on weak areas.", skills: ["Individual", "Academic support", "Mock test", "Feedback"] },
    ],
    teacherValues: [
      { icon: Target, t: "Goal-oriented approach", d: "A program tailored to each student's level and goals." },
      { icon: TrendingUp, t: "Results-driven", d: "Achieving TCF Canada CLB 8+ is our primary mission." },
      { icon: HeartHandshake, t: "Full support", d: "Ongoing help and advice throughout the course and until the exam." },
      { icon: Globe, t: "International standards", d: "Modern methodology fully aligned with CEFR and TCF criteria." },
    ] as { icon: LucideIcon; t: string; d: string }[],
    teacherCerts: ["TCF Canada", "TEF Canada", "DELF", "DALF", "TCF Tout Public", "TCF Québec", "National certificate"],
  },
  faq: { generalFaq: [
  {
    "q": "What is TCF Canada?",
    "a": "TCF Canada is an official French language exam recognized for immigration and citizenship purposes in Canada."
  },
  {
    "q": "What sections does the TCF Canada exam include?",
    "a": "The exam includes: Listening (Compréhension orale), Reading (Compréhension écrite), Writing (Expression écrite), and Speaking (Expression orale)."
  },
  {
    "q": "Can I learn French from scratch for TCF Canada?",
    "a": "Yes. Our courses prepare you from beginner level through to exam level."
  },
  {
    "q": "Are classes held online or offline?",
    "a": "We offer classes in both online and offline formats."
  },
  {
    "q": "How long does TCF Canada preparation take?",
    "a": "It depends on your current level. Most students reach their target level within 6–8 months."
  },
  {
    "q": "Do teachers have TCF Canada experience?",
    "a": "Yes. Our teachers know the TCF Canada format in depth and prepare students specifically for the exam."
  },
  {
    "q": "What level is needed for TCF Canada?",
    "a": "The required level depends on the immigration program. B2 or higher is usually the target."
  },
  {
    "q": "Are course materials provided?",
    "a": "Yes. All required materials and practice exercises are provided."
  },
  {
    "q": "Where can I register for the TCF Canada exam?",
    "a": "Registration is through exam centers. We also guide you through this process during the course."
  },
  {
    "q": "How does French help with immigration to Canada?",
    "a": "Knowing French helps you earn extra CRS points, qualify for certain PNP programs, and increases immigration opportunities."
  },
  {
    "q": "Do I need to take TCF Canada and IELTS together?",
    "a": "In many cases, yes. IELTS is for English and TCF Canada for French — together they allow you to score higher."
  },
  {
    "q": "Is a free consultation available?",
    "a": "Yes. You can get a free consultation about our courses and TCF Canada."
  },
  {
    "q": "Do you prepare for other types of certificates too?",
    "a": "Yes. Our center offers professional preparation for TCF Canada, TEF Canada, DELF (A1–B2), DALF (C1–C2), TCF Tout Public, TCF Québec, and other international French exams."
  }
], immigrationFaq: [
  {
    "q": "Does French help with immigration to Canada?",
    "a": "Yes. Knowing French allows you to earn extra points in Express Entry and certain Provincial Nominee Program (PNP) streams."
  },
  {
    "q": "Why take TCF Canada?",
    "a": "TCF Canada results are used in Express Entry, PNP programs, and other immigration pathways to prove French proficiency."
  },
  {
    "q": "Is it easier to get PR with French?",
    "a": "In many cases, yes. French gives extra points and access to certain dedicated immigration programs."
  },
  {
    "q": "What French level is needed for Express Entry?",
    "a": "B2 and above is generally considered a strong result, but requirements vary by program."
  },
  {
    "q": "Are there separate immigration programs for French?",
    "a": "Yes. Canada holds dedicated draws (French-language draws) for French-speaking candidates in some years."
  },
  {
    "q": "In which Canadian provinces is French more in demand?",
    "a": "New Brunswick, Ontario, Manitoba, and certain other provinces may give preference to French-speaking candidates."
  },
  {
    "q": "Can I learn French from scratch and reach the level needed for immigration?",
    "a": "Yes. With the right program and consistent preparation, most students can reach the required level."
  },
  {
    "q": "Does French help find work in Canada?",
    "a": "Yes. Bilingual professionals (English and French) have a major advantage in the job market."
  },
  {
    "q": "Why is it especially important to learn French now?",
    "a": "The Canadian government is focused on increasing the number of French-speaking immigrants. Opportunities for French-speaking candidates are growing year by year."
  }
] },
  immigration: {
    frenchDrawStats2026: [
      { date: "28 May 2026", crs: "409", note: "French language draw" },
      { date: "29 April 2026", crs: "400", note: "French language draw" },
      { date: "18 March 2026", crs: "393", note: "French language draw" },
    ],
    immigrantQuota: [
      { year: "2020", total: "341,000", count: "5,756", pct: "3.6%" },
      { year: "2021", total: "401,000", count: "6,949", pct: "1.9%" },
      { year: "2022", total: "437,600", count: "16,371", pct: "4.4%" },
      { year: "2023", total: "471,000", count: "19,636", pct: "4.7%" },
      { year: "2024", total: "485,000", count: "26,100", pct: "6%" },
      { year: "2025", total: "395,000", count: "29,325", pct: "8.5%" },
      { year: "2026", total: "380,000", count: "31,350", pct: "9.5%" },
      { year: "2027", total: "365,000", count: "31,500", pct: "10%" },
    ],
    crsCriteria: [
      { factor: "Age", max: "110" },
      { factor: "Education", max: "150" },
      { factor: "Language (English/French)", max: "160" },
      { factor: "Work experience (in Canada)", max: "80" },
      { factor: "Foreign work experience", max: "50" },
      { factor: "Spouse's points (if applicable)", max: "40" },
      { factor: "Additional points (French, study, work experience, relatives)", max: "up to 600" },
    ],
    ageScores: [
      { age: "17 or younger", withSpouse: "0", withoutSpouse: "0" },
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
      { age: "45 and older", withSpouse: "0", withoutSpouse: "0" },
    ],
    educationScores: [
      { level: "High school", withSpouse: "28", withoutSpouse: "30" },
      { level: "1-year college/university program", withSpouse: "84", withoutSpouse: "90" },
      { level: "2-year program", withSpouse: "91", withoutSpouse: "98" },
      { level: "3+ year bachelor's/diploma", withSpouse: "112", withoutSpouse: "120" },
      { level: "Two or more credentials (one 3+ years)", withSpouse: "119", withoutSpouse: "128" },
      { level: "Master's degree", withSpouse: "126", withoutSpouse: "135" },
      { level: "PhD (Doctorate)", withSpouse: "128", withoutSpouse: "150" },
    ],
    nclcTable: [
      { nclc: "10 and above", oral: "C1–C2", listening: "549–699", reading: "549–699", written: "C1–C2" },
      { nclc: "9", oral: "C1", listening: "523–548", reading: "524–548", written: "C1" },
      { nclc: "8", oral: "B2", listening: "503–522", reading: "499–523", written: "B2" },
      { nclc: "7", oral: "B2", listening: "458–502", reading: "453–498", written: "B2", highlight: true },
      { nclc: "6", oral: "B1", listening: "398–457", reading: "406–452", written: "B1" },
      { nclc: "5", oral: "B1", listening: "369–397", reading: "375–405", written: "B1" },
      { nclc: "4", oral: "A2", listening: "331–368", reading: "342–374", written: "A2" },
    ],
    crsCalculatorUrl: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/verifier-note.html",
    crsFactors: [
      { icon: CalendarClock, title: "Age", desc: "Candidates aged 20–29 receive the highest points." },
      { icon: GraduationCap, title: "Education", desc: "College, bachelor's, master's, or PhD — CRS points increase with each level." },
      { icon: Briefcase, title: "Work experience", desc: "Skilled work experience earns additional points." },
      { icon: Languages, title: "English", desc: "IELTS or PTE results are counted." },
      { icon: Flag, title: "French", desc: "TCF Canada or TEF Canada results are counted." },
    ] as { icon: LucideIcon; title: string; desc: string }[],
    frenchAdvantages: [
      "May earn additional CRS points",
      "May participate in dedicated French-language draws",
      "May receive preference in certain provincial immigration programs",
      "May significantly increase PR opportunities",
    ],
    targetAudience: [
      "Candidates with a bachelor's or master's degree",
      "Professionals with work experience",
      "Candidates with average IELTS scores",
      "Those aiming for PR through Express Entry",
    ],
    ourHelp: [
      "Free visa advice",
      "We point you in the right direction",
      "Learn French from scratch",
      "Prepare for the TCF Canada exam",
      "Develop listening, reading, writing, and speaking skills",
      "Practice in exam format through mock tests",
      "Goal-oriented preparation with experienced teachers",
    ],
    prCardInfo: {
      duration: "Valid for 5 years and must be renewed when it expires",
      rights: ["Permanent residence, work, and study in Canada", "Access to government services", "No right to vote or hold public office"],
      citizenship: "A person with PR status may apply for Canadian citizenship if they have lived in Canada for at least 1,095 days (3 years) within 5 years",
      price: "50 Canadian dollars",
      residency: "To maintain PR status, you must be physically present in Canada for at least 730 days (2 years) in every 5-year period",
      proofDocs: ["Employment letter or pay stubs", "Bank statements", "Tax returns (Canada Revenue Agency)", "Lease agreements or proof of use of government services"],
      notes: ["The PR Card is the main identity document and is required to return to Canada", "If the PR Card expires, you must apply to renew it", "You must strictly meet residency requirements to avoid losing PR status"],
    },
    prDocuments: [
      "Completed application forms (Express Entry online profile, IMM 5444 for PR Card, etc.)",
      "Passport or other identity document",
      "Photo (biometric photo taken within the last 12 months)",
      "Payment receipt",
      "Reference letter and/or employment letter",
      "Documents showing financial status (bank statements, income)",
      "Language certificate (IELTS, CELPIP, or TEF/TCF)",
      "Education documents (diploma, certificate, and ECA — Educational Credential Assessment)",
      "Medical exam results (if required)",
      "Police certificate (certificate of no criminal record)",
      "Marriage or birth certificate (if applicable)",
      "Documents confirming permanent residence address",
    ],
    tcfSections: ["Listening", "Reading", "Writing", "Speaking"],
  },
  oferta: {
    ofertaTitle: "Public offer for the provision of French language education services",
    ofertaIntro:
      "Below are the public offer terms of France TCF Learning Center — the full text from the PDF document. Payment or confirmation of having read the terms on the official website constitutes acceptance of the offer.",
    ofertaDefinitions: [
      { term: "Public offer", def: "A proposal to conclude a contract. The contract is formed through unconditional acceptance (acceptance) of the offer." },
      { term: "Acceptance of the offer", def: "Full and unconditional acceptance of the actions specified in clause 1.3 of this Offer. Acceptance of the offer causes a contract to be concluded." },
      { term: "Provider / Learning center", def: "Provides education services based on certificate No. 7218673 dated 20 October 2025." },
      { term: "Student/Client", def: "An individual who has accepted the terms of this contract (accepted this offer), and who is learning French in French language courses organized by the Provider, being the end user of the services." },
      { term: "Course", def: "The process of teaching French according to the learning center's methodology for a specified period selected and confirmed by the learning center and the Student/Client (conducted online and offline)." },
      { term: "Website", def: "The learning center's web page on the Internet: https://france-tfc.uz/. This website serves students for conducting classes, getting to know the learning center closely, and registering." },
      { term: "Placement", def: "A free procedure aimed at determining the level of French proficiency." },
      { term: "France TCF Learning Center", def: "A dedicated educational building equipped with the equipment, materials, literature, and other material and technical means necessary for the learning process, where classes are conducted directly." },
    ],
    ofertaSections: [
      { id: "umumiy-qoidalar", title: "1. General provisions", items: ["1.1. Pursuant to the Civil Code of the Republic of Uzbekistan, this document constitutes the official public offer (offer) of Sole Proprietor \"MURODOVA SABINA NODIRBEK QIZI\" (hereinafter referred to as France TCF Learning Center) to any individual (hereinafter referred to as Student/Client) to conclude a Contract on the terms set forth herein.", "1.2. This Offer is an official document and is executed at the learning center located at 81V A.Fitrat Street, Mirabad District, Tashkent.", "1.3. Provision of personal data by the Student/Client to the learning center (full name, date of birth, phone number) is carried out at the learning center administration.", "1.4. The Student/Client is deemed to have fully and unconditionally accepted the offer terms upon any of the following actions: — Payment for services by the Student/Client; — Confirmation by the Student/Client of having read the offer terms through the official website \"https://france-tfc.uz/\".", "1.5. Pursuant to Part Four of Article 370 of the Civil Code of the Republic of Uzbekistan, acceptance of the Offer is equivalent to concluding a contract on the terms specified in the Offer; by accepting this Offer, a person becomes a Party hereto and is hereinafter referred to as the Student/Client. The learning center and the Student/Client are jointly referred to as the Parties, and individually as a Party."] },
      { id: "shartnoma-predmeti", title: "2. Subject of the contract", items: ["2.1. The Provider shall render educational services under the \"French language course\" program at \"France TCF Learning Center\" at the request of the Student/Client (hereinafter \"Services\"), and the Student/Client undertakes to study in an online or offline course of their choice and pay for these services.", "2.2. This offer may be accepted on behalf of minors aged thirteen to eighteen only by their parents (or other legal representatives such as guardians or custodians who may act as clients of minors).", "2.3. Services are provided in accordance with the \"French language teaching methodology of the learning center,\" which is an integral part of this Contract.", "2.4. The duration of the curriculum is generally 6–8 months.", "2.5. The learning center provides services according to the current price list published on \"https://france-tfc.uz/\", and the Student/Client pays for services in accordance with the terms of this Public Offer.", "2.6. Contract rules apply equally to distance (online) and traditional (offline) forms of education. Only rules specific to a particular form of education, or rules that by their nature apply only in online or offline learning, apply to the relevant form."] },
      { id: "markaz-huquqlari", title: "3.1. Rights and obligations of the learning center", items: ["3.1.1. The learning center undertakes to organize the services specified in clause 2.1 of this Public Offer and ensure their proper performance.", "3.1.2. At the end of a stage, the learning center may test the Student/Client and, based on test results, advance them to the next stage of training / retain them at the current stage / refuse to continue studies and unilaterally terminate this Offer in accordance with the Rules for Teaching French Language Courses.", "3.1.3. The learning center has the right to restrict a student who has not paid on time from attending classes and accessing their personal account. If the Student/Client wishes to continue using the learning center's services after being excluded by paying fees, the learning center will try to return them to the group they were studying in before exclusion. However, if there are no vacant places in that group or the student is likely to miss group lessons, the learning center has the right to assign them to other new groups.", "3.1.4. The learning center has the right to replace the teacher throughout the entire period of instruction without the Student/Client's consent. If the main teacher cannot conduct lessons for certain reasons, the learning center may appoint a substitute or assistant teacher for those lessons.", "3.1.5. The learning center also has the right not to replace the teacher even if the Student/Client requests it in certain cases.", "3.1.6. The learning center determines the schedule and manner of conduct of classes. Changing classrooms is decided independently by the learning center.", "3.1.7. If changes to the class schedule are necessary, the learning center must notify the Student/Client in advance, set the date and time of rescheduled classes to make up missed sessions, and inform the Student/Client accordingly.", "3.1.8. The learning center has the right to assess and evaluate the Student/Client's knowledge level and determine the procedure and form of this process.", "3.1.9. If fewer than 7 students remain in a group, the learning center may close the group and redistribute students to other groups.", "3.1.10. If the Student/Client misses classes, the learning center will not transfer payments made for missed classes to another person.", "3.1.11. The learning center is not obliged to conduct lessons missed by the Student/Client without a valid reason (if a video recording of the lesson exists, it may be provided to the student).", "3.1.12. The learning center has the right to use the Student/Client's certificates or other achievements only as promotional material.", "3.1.13. The learning center independently carries out the learning process and chooses assessment systems, forms, procedure, and frequency of knowledge testing.", "3.1.14. If during the term of this Offer the Student/Client violates laws, the terms of this Offer, or accepted norms of conduct, the learning center may exclude the Student/Client from classes / restrict access to the personal account, and is not obliged to refund, freeze, or transfer payments to another person.", "3.1.15. If during the learning process the Student/Client verbally or in writing insults learning center staff or other students/clients, including using \"negative\" words affecting the center's reputation, proven by evidence and witnesses, the learning center may exclude the Student/Client from classes / restrict access to the personal account, and is not obliged to refund, freeze, or transfer payments to another person.", "3.1.16. If the student records unsatisfactory final exam results 3 times during the course and failure is found to be due to insufficient effort, the contract with the student may be terminated for one year. In this case, the learning center is not obliged to refund, freeze, or transfer payments to another person.", "3.1.17. After the Student/Client pays for the course and attends at least one lesson, if they do not wish to continue due to course content, teaching method, or other subjective reasons, the learning center is not obliged to refund the amount paid.", "3.1.18. The learning center may amend this Public Offer. Amendments take effect upon publication as part of the Public Offer text. Amendments do not affect existing contracts. When new contracts are concluded or old contracts renewed after amendments, the changes become part of the contract.", "3.1.19. If the Student (Client) fails to complete homework at least once a month or more, or misses three classes, after prior warning, service provision may be suspended and access to classes restricted. Previously paid amounts are not refunded, frozen, or carried over to the next month.", "3.1.20. The learning center must keep the Student (Client)'s personal data confidential and not disclose it to third parties.", "3.1.21. If the learning center temporarily or permanently suspends operations, remaining classes are compensated within 6 (six) months."] },
      { id: "oquvchi-huquqlari", title: "3.2. Rights and obligations of the Student/Client", items: ["3.2.1. Before concluding the Contract and making payment, the Student/Client must familiarize themselves with the content and terms of this offer and the price of the learning center's services posted on \"https://france-tfc.uz/\".", "3.2.2. Initial payment by the Student/Client means they have read and accepted the terms of this Offer.", "3.2.3. The Student/Client is obliged to pay monthly for classes.", "3.2.4. The Student/Client is obliged to complete independent assignments given by the teacher to prepare for classes and participate in classes according to the approved schedule.", "3.2.5. The Student/Client undertakes not to distribute materials and information provided within education (paper, electronic, or other) for commercial or non-commercial purposes (copying, publishing, posting on Internet resources, giving to third parties, or reselling), not to create commercial products based on received materials, and not to use this information in any way other than personal use.", "3.2.6. If the Student/Client decides to move to another suitable group when their group is completed, they undertake to pay for the course and continue studying in that group.", "3.2.7. The Student/Client undertakes to comply with the Rules for Teaching French Language Courses.", "3.2.8. The Student/Client undertakes not to give educational materials provided by the learning center or access to the learning process, or legally protected confidential information, to third parties.", "3.2.9. Any material damage caused to the learning center's property at the learning center's initial request is recovered in full from the Student.", "3.2.10. The Student/Client must observe generally accepted standards of conduct on learning center premises. (Listening to music loudly, watching videos and films, making noise, and consuming tobacco and alcohol products on learning center premises are prohibited).", "3.2.11. The Student/Client has the right to use the learning center's property for conducting classes. When entering and leaving classes, they must use the building (rooms) appropriately and not damage the building or property. If damage is caused, they must compensate in accordance with the law.", "3.2.12. The Student/Client has the right to contact learning center staff regarding matters related to the learning process.", "3.2.13. The Student/Client must independently ensure stable Internet connection and availability and proper functioning of technical means required for participation in classes. The learning center is not liable for interruptions or inability to participate in classes due to technical means or Internet connection failures (when services are provided online).", "3.2.14. The Student/Client has the right to full and reliable information about assessment of knowledge and skills and assessment criteria.", "3.2.15. The Student/Client may contact the learning center (or teacher-staff) by phone or social network regarding class-related questions (correspondence on personal life, personal relationships, or other matters unrelated to the learning process is not permitted).", "3.2.16. A Student/Client studying individually may miss at most 3 (three) classes per study month for valid or invalid reasons by notifying at least 2 (two) hours before the lesson starts. Such classes are made up before the end of the course month. Even if 12 (twelve) planned classes are not held due to the Student/Client's personal reasons, the monthly course fee is paid in full.", "3.2.17. The Student/Client must not miss classes and must prepare at least 80 percent of homework before each lesson, personally and conscientiously master the course curriculum, and conscientiously complete assignments during the course."] },
      { id: "narx", title: "4. Price of services and payment procedure", items: ["4.1. The price of services is indicated on the learning center's official website: \"https://france-tfc.uz/\".", "4.2. Payment for 12 classes per month must be made from the date the Student/Client is registered at the learning center. This date is also considered the monthly payment due date. In some months, depending on calendar length, 13–14 classes may be held and no additional payment is charged for those classes.", "4.3. If the Student/Client cannot pay by the date the first classes of the month begin, they must notify the learning center in advance and agree on a payment deadline with the parties.", "4.4. The Student/Client pays for services as specified in clause 5.11 of this contract.", "4.5. Payment for missed classes by the Student/Client is not refunded.", "4.6. Payment for services may be made in cash and non-cash form (bank card and online payment apps). Supporting documents must be provided by the Client/Student within 24 hours of payment.", "4.7. In the case of clause 3.1.4, the learning center is still deemed to have fulfilled its obligation and payment for completed classes is charged in full.", "4.8. A Student/Client (studying only individually) may attend trial classes once for free. If after a trial class they wish to continue or if the trial was not suitable, no payment is charged for the trial attended.", "4.9. Tuition prices may be changed at any time. The learning center may not demand additional payment for new prices mid-month. New prices take effect from the beginning of the following month."] },
      { id: "umumiy-tartiblar", title: "5. General procedures", items: ["5.1. If classes fall on official holidays under the legislation of the Republic of Uzbekistan or access to the learning center building is temporarily restricted, classes are not held on those days for valid reasons. Missed classes are made up in subsequent months when the number of classes exceeds 12. If the student does not continue from the next month, amounts paid for canceled class(es) are not fully refunded.", "5.2. The learning center conducts 12 classes of 80 minutes for mini and large groups per month; individual classes are 60 minutes.", "5.3. The learning center is not liable if the service provided does not match the Student/Client's expected result or subjective assessment. Such discrepancy or negative subjective assessment does not constitute grounds for refund or freezing of amounts paid.", "5.4. If a student records B2 or higher in all sections of the official TCF Canada exam, they are entitled to cashback: — B2 level — 500,000 (five hundred thousand) UZS, provided the student studied continuously at the learning center for at least 6 (six) months; — C1 level or higher — 1,000,000 (one million) UZS, provided the student studied continuously for at least 9 (nine) months. Cashback is paid after submission of documents confirming official TCF Canada results.", "5.5. Students who received cashback may not display the same or similar results on media platforms of other French language learning centers. Such cases result in full refund of the amount paid.", "5.6. Bonuses may be given in cash, bank transfer, and other forms. Bonuses for TCF Canada results are one-time cashback; once received, no further reward is given for updated results.", "5.7. If the Student/Client misses a certain number of classes and wishes to continue studying, full payment for 12 classes is charged.", "5.8. The learning center is not responsible for the accuracy and content of information provided by the student at registration. The Student/Client is responsible for the accuracy of information provided at registration.", "5.9. When difficulties arise that hinder performance of contract terms, the parties must immediately notify each other and take necessary measures.", "5.10. All terms, obligations, and rights under the contract apply to offline (in-person) as well as online (distance) education unless otherwise stated."] },
      { id: "boshqa-shartlar", title: "6. Other terms", items: ["6.1. The Provider is not liable to the Client/Student in the following cases:", "6.1.1. Unsatisfactory final course results due to the Student/Client's fault (non-attendance, failure to complete homework, failure to follow the course program, etc.);", "6.1.2. If failure to perform obligations properly occurs without fault of the learning center;", "6.1.3. If failure to perform obligations properly is due to the Student/Client's fault;", "6.1.4. In force majeure circumstances;", "6.2. The learning center may refuse to provide services under this Public Offer on the following grounds:", "6.2.1. Repeated breach of obligations specified in this offer, which makes performance difficult and violates rights and legitimate interests of other students and staff;", "6.2.2. Breach of payment deadlines specified in the public offer;", "6.2.3. The parties undertake to immediately notify each other of circumstances hindering performance of this Public Offer terms and take necessary measures in a timely manner."] },
      { id: "fors-major", title: "7. Force majeure", items: ["7.1. The parties are released from liability for partial or full non-performance of obligations under this Contract if caused by force majeure, including fires, earthquakes, epidemic and pandemic situations, military actions, etc., if these circumstances directly affected performance of this Contract.", "7.2. A party unable to perform its obligations under this Contract must notify the other party within ten days of the occurrence and cancellation of the above circumstances."] },
      { id: "amal-muddati", title: "8. Term of the offer contract and procedure for delivery and acceptance of services", items: ["8.1. The Student/Client warrants that all terms of this Public Offer are clear and accepts the terms fully and without reservation.", "8.2. The contract enters into force from the moment of conclusion (acceptance of the offer) and remains in effect until the parties fully perform their obligations.", "8.3. This Public Offer is concluded for an unlimited term within the purposes stated above.", "8.4. When terminating the offer contract, no termination certificate is drawn up and the parties do not sign it.", "8.5. After completion of French language teaching services, no certificate of services rendered is drawn up or signed.", "8.6. All disputes and disagreements that may arise during performance of this Public Offer shall be resolved through negotiations between the parties. If they cannot be resolved through negotiations, they shall be settled in accordance with the applicable legislation of the Republic of Uzbekistan."] },
    ],
    ofertaRequisites: {
      name: 'Sole Proprietor "MURODOVA SABINA NODIRBEK QIZI" (hereinafter, France TCF Learning Center)',
      basis: "Provides education services based on certificate No. 7218673 dated 20 October 2025.",
      address: "81V A.Fitrat Street, Mirabad District, Tashkent",
      stir: "63001025310027",
      phone: "+998 (94) 738-22-21",
      director: "S.N. Murodova",
    },
  },
  vacancy: {
    vacancies: [
      {
        id: "francuz-oqituvchi",
        icon: Presentation,
        title: "French language teacher",
        format: "Online / Offline",
        salary: "From 8,000,000 UZS",
        about:
          "We are looking for a professional teacher to join our results-driven team with a modern methodology.",
        duties: [
          "Deliver lessons with energy and motivation",
          "Prepare students in TCF Canada format",
          "Work with a focus on delivering results for students",
        ],
        requirements: [
          "At least 3 years of teaching experience",
          "French C1 certificate (or higher)",
          "Experience with online platforms (Zoom / Google Meet)",
          "Responsible and able to work in a team",
          "Results-oriented approach to students",
        ],
        offer: [
          "Monthly salary: from 8,000,000 UZS",
          "Free TCF Canada courses",
          "Professional training (ongoing development)",
          "Monthly bonus system",
          "Referral bonus: up to $300",
          "Team building (premium resorts)",
          "Work-life balance: 6-hour workday, 48 days vacation",
          "Ongoing personal and professional growth",
        ],
        schedule: ["Online and offline work available", "Hours: by agreement"],
      },
      {
        id: "administrator",
        icon: Headphones,
        title: "Administrator",
        format: "Full-time / part-time",
        salary: "5,000,000+ UZS",
        age: "Ages 18–30",
        about: "We need a responsible and active administrator for our learning center.",
        duties: [
          "Work with clients",
          "Handle phone calls and messages",
          "Register students",
          "Coordinate center operations",
        ],
        requirements: [
          "At least 1 year of work experience (learning center experience preferred)",
          "Call center experience",
          "Proficiency with Google Sheets and Google Forms",
          "Organized, responsible, and punctual",
          "Polite and professional client communication",
        ],
        offer: [
          "Friendly and professional team",
          "Comfortable and stable work environment",
          "Growth and development opportunities",
          "Motivation bonus system",
        ],
        schedule: [
          "09:00 – 19:00 (full-time)",
          "09:00 – 14:00 (part-time)",
          "14:00 – 19:00 (part-time)",
        ],
      },
      {
        id: "call-operator",
        icon: Phone,
        title: "Call operator",
        format: "Full-time",
        salary: "5,000,000+ UZS",
        age: "Ages 18–30",
        about: "We need an active and polite call operator who can work with clients.",
        duties: [
          "Answer incoming calls",
          "Provide information about center courses",
          "Direct clients to consultation",
          "Follow up with registered students",
          "Work with CRM and Google Sheets",
        ],
        requirements: [
          "At least 6 months – 1 year of experience (call center or learning center)",
          "Clear and pleasant speech (Russian/Uzbek an advantage)",
          "Client service skills",
          "Knowledge of Google Sheets and Google Forms",
          "Responsible, quick, stress-resistant, and polite",
        ],
        offer: [
          "Friendly and professional team",
          "Stable work environment",
          "Growth and development opportunity",
          "Bonus system (based on sales and results)",
          "Work at a modern learning center",
        ],
        schedule: ["10:00 – 19:00 (full-time)", "Hours by agreement"],
      },
      {
        id: "brand-face",
        icon: Sparkles,
        title: "Brand face",
        format: "Project-based / flexible",
        salary: "Negotiable",
        about:
          "We are looking for a brand face for our learning center. Main focus — TCF Canada and Canadian immigration.",
        duties: [
          "Appear in advertising videos and content",
          "Feature in videos for Instagram, TikTok, and Telegram",
          "Represent the brand professionally",
          "Work with marketing and SMM team",
          "Participate in campaigns as the face of the center",
        ],
        requirements: [
          "Comfortable and confident on camera",
          "Strong speech and communication skills",
          "Pleasant appearance",
          "Active and creative",
          "Able to work in a team (SMM knowledge an advantage)",
        ],
        offer: [
          "Monthly pay: negotiable",
          "All French courses FREE",
          "Bonus system (based on ads and results)",
          "Professional photo and video content",
          "Personal branding and development opportunity",
          "Experience in media and marketing",
        ],
        schedule: ["Hours agreed per project", "Flexible schedule"],
      },
      {
        id: "smm-menejer",
        icon: Megaphone,
        title: "SMM manager",
        format: "Hybrid / office",
        salary: "Negotiable based on experience",
        about: "We are looking for a creative, responsible, and results-driven SMM manager.",
        duties: [
          "Manage Instagram, TikTok, and Telegram pages",
          "Create content plans",
          "Develop ideas for reels, posts, and stories",
          "Manage ad campaigns",
          "Work with designer and video editor",
          "Grow the brand and audience",
        ],
        requirements: [
          "SMM experience (at least 1 year preferred)",
          "Understanding of Instagram and TikTok algorithms",
          "Creative thinking and idea generation",
          "Knowledge of Canva / CapCut or other editing tools",
          "Responsible, results-oriented, and team player",
        ],
        offer: [
          "Monthly pay: negotiable based on experience (bonus system)",
          "Monthly increase based on results",
          "Free French courses",
          "Real projects and large audience",
          "Personal and professional growth",
          "Creative and friendly team",
        ],
        schedule: ["Hours: by agreement", "Hybrid or office work available"],
      },
    ],
  },
  certificates: { certificateImages, studentCertificates },
  ui: enUi,
};
