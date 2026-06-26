export type CertificateScore = {
  skill: string;
  level: string;
  value?: string;
};

export type StudentCertificate = {
  id: string;
  name: string;
  certType: string;
  image?: string;
  story: string;
  storyFull: string;
  scores?: CertificateScore[];
};

function preview(text: string, max = 110): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

const certImg = (n: number) => `/image/sertifikatlar/sertifikat${n}.jpg`;

export const studentCertificates: StudentCertificate[] = [
  {
    id: "farangiz",
    name: "Farangiz",
    certType: "TCF Canada",
    image: certImg(1),
    story: preview(
      "Farangiz bizning o'quv markazimizda atigi 1 oy tayyorlandilar. Darslar davomida asosan Speaking va Writing ustida ishladik.",
    ),
    storyFull: `Farangiz bizning o'quv markazimizda atigi 1 oy tayyorlandilar.

Darslar davomida asosan Speaking va Writing ustida ishladik.
Ko'pchilik yuqori natija uchun oylar kerak deb o'ylaydi. Aslida esa to'g'ri metodika, kuchli ustoz va muntazam ishlash bilan qisqa vaqt ichida ham katta natijaga erishish mumkin.`,
  },
  {
    id: "marjona",
    name: "Marjona",
    certType: "TCF Canada",
    image: certImg(2),
    story: preview(
      "Marjona o'quv markazimizda 6 oy davomida fransuz tilini noldan, ya'ni harflardan boshlab o'rgandilar.",
    ),
    storyFull: `Marjona o'quv markazimizda 6 oy davomida fransuz tilini noldan, ya'ni harflardan boshlab o'rgandilar.

Bugungi kunda esa TCF Canada imtihonini muvaffaqiyatli topshirib, o'z maqsadlari sari muhim qadam tashladilar. ✨

Siz ham fransuz tilini noldan boshlab qisqa muddatda natijaga erishmoqchi bo'lsangiz, biz bilan birga o'rganing!`,
  },
  {
    id: "nilufar-adxamjonova",
    name: "Nilufar Adxamjonova",
    certType: "TCF Canada",
    image: certImg(3),
    story: preview(
      "Nilufar opa yoshlari katta bo'lishiga qaramasdan, ish, oila va farzandlar tarbiyasi bilan bir qatorda fransuz tilini o'rganishga ham vaqt ajrata oldilar.",
    ),
    storyFull: `Nilufar opa yoshlari katta bo'lishiga qaramasdan, ish, oila va farzandlar tarbiyasi bilan bir qatorda fransuz tilini o'rganishga ham vaqt ajrata oldilar.

Qisqa vaqt ichida katta natijalarga erishib, o'zlarining mehnatsevarligi va qat'iyatlarini yana bir bor isbotladilar. Eng quvonarlisi, imtihonning 4 ta sectioni bo'yicha ham yuqori natijalarni qo'lga kiritdilar. 🌟`,
    scores: [
      { skill: "Listening", level: "C1", value: "521/699" },
      { skill: "Reading", level: "C2", value: "699/699" },
      { skill: "Writing", level: "B2", value: "13/20" },
      { skill: "Speaking", level: "B2", value: "13/20" },
    ],
  },
  {
    id: "gulbibi-khasanova",
    name: "Gulbibi Khasanova",
    certType: "TCF Tout Public",
    image: certImg(4),
    story: preview(
      "Gulbibi opa o'quv markazimizda ishlash bilan bir qatorda intensiv kurslarimizda ham muntazam qatnashib, atigi 1 oy ichida TCF Tout Public imtihonini muvaffaqiyatli topshirdilar.",
    ),
    storyFull: `Gulbibi opa o'quv markazimizda ishlash bilan bir qatorda intensiv kurslarimizda ham muntazam qatnashib, atigi 1 oy ichida TCF Tout Public imtihonini muvaffaqiyatli topshirdilar va umumiy natija bo'yicha C1 darajasini qo'lga kiritdilar.

Ayniqsa, TCF Tout Public imtihonining Reading (o'qib tushunish) bo'limida eng yuqori natijalardan birini qayd etib, C2 darajasiga erishdilar. Bu natija Gulbibi opaning mehnatsevarligi, intilishi va maqsad sari qat'iy harakat qilganlarining yorqin isbotidir.`,
    scores: [
      { skill: "Listening", level: "B1", value: "365" },
      { skill: "Structures", level: "C1", value: "518" },
      { skill: "Reading", level: "C2", value: "690" },
      { skill: "Overall", level: "C1", value: "525" },
    ],
  },
  {
    id: "laylo-normamatova",
    name: "Laylo Normamatova",
    certType: "TCF Canada",
    image: certImg(5),
    story: preview(
      "Laylo bizning France TCF o'quv markazimizda online guruh darslarida 7 oy davomida fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.",
    ),
    storyFull: `Laylo bizning France TCF o'quv markazimizda online guruh darslarida 7 oy davomida fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.

Layloning natijasi biz uchun ham alohida quvonch.
France TCF o'quv markazida biz faqat dars o'tibgina qolmaymiz, har bir o'quvchining natijasini o'zimizning natijamizdek qabul qilamiz. Ustozlarimiz har bir o'quvchi bilan ishlab, ularning kuchli va sust tomonlarini aniqlab, kerakli yordamni berishga harakat qiladilar.`,
    scores: [
      { skill: "Listening", level: "B2", value: "498/699" },
      { skill: "Reading", level: "C1", value: "525/699" },
      { skill: "Writing", level: "B1", value: "9/20" },
      { skill: "Speaking", level: "B1", value: "8/20" },
    ],
  },
  {
    id: "gulshoda-khomidova",
    name: "Gulshoda Khomidova",
    certType: "TCF Canada",
    image: certImg(6),
    story: preview(
      "Gulshoda opa A2 daraja bilan France TCF o'quv markazimizga kelgan edilar. 1 oy davomida intensiv guruh darslarimizda muntazam qatnashdilar.",
    ),
    storyFull: `Gulshoda opa A2 daraja bilan France TCF o'quv markazimizga kelgan edilar. Qisqa vaqt ichida o'z ustilarida jiddiy ishlashga qaror qilib, 1 oy davomida intensiv guruh darslarimizda muntazam qatnashdilar.

Natija esa o'zini uzoq kutdirmadi:

✨ Listening — B2
✨ Reading — C1
✨ Writing — B1
✨ Speaking — B1

Ayniqsa, Reading bo'limidan C1 natija qo'lga kiritganlari katta yutuq bo'ldi.`,
    scores: [
      { skill: "Listening", level: "B2", value: "480/699" },
      { skill: "Reading", level: "C1", value: "646/699" },
      { skill: "Writing", level: "B1", value: "9/20" },
      { skill: "Speaking", level: "B1", value: "7/20" },
    ],
  },
  {
    id: "barno-abdullaeva",
    name: "Barno Abdullaeva",
    certType: "TCF Canada",
    image: certImg(7),
    story: preview(
      "Barno opa France TCF o'quv markazimizga kelganlarida fransuz tilidan A2 darajada edilar. Qisqa vaqt davomida o'z ustilarida jiddiy ishlab, ustozlarimiz ko'rsatmalariga amal qildilar.",
    ),
    storyFull: `Barno opa France TCF o'quv markazimizga kelganlarida fransuz tilidan A2 darajada edilar. Qisqa vaqt davomida o'z ustilarida jiddiy ishlab, ustozlarimiz ko'rsatmalariga amal qildilar.

Bugun esa ularning natijalari havas qilsa arzigulik:

🏆 Listening — C2
🏆 Reading — C2
🏆 Speaking — B1
🏆 Writing — 17 ball (Top C1)

Ayniqsa, Writing bo'limidan 17 ball natija qayd etish juda katta yutuq hisoblanadi. Bu natijani har doim ham uchratavermaysiz. TCF imtihonida bunday yuqori Writing natijasiga erishish katta mehnat, sabr va to'g'ri tayyorgarlik talab qiladi.`,
    scores: [
      { skill: "Listening", level: "C2", value: "644/699" },
      { skill: "Reading", level: "C2", value: "646/699" },
      { skill: "Writing", level: "C1", value: "17/20" },
      { skill: "Speaking", level: "B1", value: "8/20" },
    ],
  },
  {
    id: "umida-asrorova",
    name: "Umida Asrorova",
    certType: "TCF Canada",
    image: certImg(8),
    story: preview(
      "Umida bizning France TCF o'quv markazimizda 6 oy davomida online guruh darslarida fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.",
    ),
    storyFull: `Umida bizning France TCF o'quv markazimizda 6 oy davomida online guruh darslarida fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.

Ayniqsa, TCF imtihonining eng murakkab bo'limlaridan biri hisoblangan Writing sectionidan B2 darajaning eng yuqori ballaridan birini qo'lga kiritdilar. Bu natija katta mehnat, muntazam mashg'ulot va kuchli tayyorgarlik mahsulidir.

Ko'pchilik o'quvchilar qiyinchilikka duch keladigan Writing bo'limida bunday natijaga erishish Umidaning intilishi va ustozlarimizning samarali metodikasi natijasidir.`,
    scores: [
      { skill: "Listening", level: "B2", value: "498/699" },
      { skill: "Reading", level: "C2", value: "603/699" },
      { skill: "Writing", level: "B2", value: "13/20" },
      { skill: "Speaking", level: "A2", value: "3/20" },
    ],
  },
  {
    id: "shohista-sharakhimova",
    name: "Shohista Sharakhimova",
    certType: "TCF Tout Public",
    image: certImg(9),
    story: preview(
      "Shohista opa kichkina farzandlari, universitetdagi darslari va kundalik mas'uliyatlariga qaramasdan o'z maqsadlari sari tinmay harakat qildilar.",
    ),
    storyFull: `Shohista opa kichkina farzandlari, universitetdagi darslari va kundalik mas'uliyatlariga qaramasdan o'z maqsadlari sari tinmay harakat qildilar. Bugungi kunda esa nafaqat o'quvchimiz, balki France TCF o'quv markazimizning online ustozlaridan biri sifatida faoliyat yuritmoqdalar.

Ularning mehnatsevarligi, motivatsiyasi va dars o'tish uslublari ko'pchilikka namuna bo'la oladi. O'quvchilar bilan ishlashdagi samimiyati va mas'uliyati havas qilsa arzigulik.`,
    scores: [
      { skill: "Listening", level: "B2", value: "425" },
      { skill: "Structures", level: "B2", value: "444" },
      { skill: "Reading", level: "B2", value: "435" },
      { skill: "Overall", level: "B2", value: "433" },
    ],
  },
  {
    id: "dilnura-saidbekova",
    name: "Dilnura Saidbekova",
    certType: "TCF Canada",
    image: certImg(10),
    story: preview(
      "Dilnura bizning iyun oyidagi online guruhimizda fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.",
    ),
    storyFull: `✨ Dilnura bizning iyun oyidagi online guruhimizda fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.

Bugun esa ularning natijalari shunchaki havas qilsa arziydi:

🏆 Listening — C2
🏆 Reading — C2
🏆 Writing — B2
🏆 Speaking — B2

Atigi 6 oy ichida 0 darajadan ushbu natijalarga erishish juda katta yutuq hisoblanadi. Ayniqsa, Listening va Reading bo'limlaridan C2 darajani qo'lga kiritish katta mehnat, kuchli intizom va to'g'ri tayyorgarlik mahsulidir.`,
    scores: [
      { skill: "Listening", level: "C2", value: "699/699" },
      { skill: "Reading", level: "C2", value: "699/699" },
      { skill: "Writing", level: "B2", value: "11/20" },
      { skill: "Speaking", level: "B2", value: "10/20" },
    ],
  },
  {
    id: "mohinur-yoldosheva",
    name: "Mohinur Yo'ldosheva",
    certType: "Milliy sertifikat",
    image: certImg(11),
    story: preview(
      "Mohinur opa bizning o'quv markazimizga A2 daraja bilan kelgan edilar. Qisqa muddat davomida CEFR imtihonidan C1 darajani qo'lga kiritdilar.",
    ),
    storyFull: `🎉 Mohinur opa bizning o'quv markazimizga A2 daraja bilan kelgan edilar. Qisqa muddat davomida maqsadlari sari qat'iyat bilan harakat qilib, CEFR imtihonidan C1 darajani qo'lga kiritdilar.

Qisqa vaqt oldin A2 darajada bo'lgan o'quvchining bugun C1 sertifikati orqali grant yutishi — mehnat, intilish va to'g'ri ta'limning eng yaxshi natijasidir.`,
    scores: [
      { skill: "Listening", level: "C1", value: "19" },
      { skill: "Reading", level: "C1", value: "20" },
      { skill: "Writing", level: "C1", value: "17.5" },
      { skill: "Speaking", level: "C1", value: "18" },
    ],
  },
  {
    id: "feruza-amonova",
    name: "Feruza Amonova",
    certType: "Milliy sertifikat",
    image: certImg(12),
    story: preview("Biz Feruza opani C1 natijasi bilan samimiy tabriklaymiz va kelgusida ham yanada ulkan yutuqlarga erishishlarini tilaymiz!"),
    storyFull:
      "Biz Feruza opani C1 natijasi bilan samimiy tabriklaymiz va kelgusida ham yanada ulkan yutuqlarga erishishlarini tilaymiz!",
    scores: [
      { skill: "Listening", level: "C1", value: "65" },
      { skill: "Reading", level: "C1", value: "65" },
      { skill: "Writing", level: "C1", value: "64" },
      { skill: "Speaking", level: "C1", value: "65" },
    ],
  },
  {
    id: "ruzixon-axborova",
    name: "Ruzixon Axborova",
    certType: "Milliy sertifikat",
    image: certImg(13),
    story: preview(
      "Ko'pchilik o'quvchilar eng ko'p qiynaladigan bo'limlar — Writing va Speaking sectionlaridan C1 darajani qo'lga kiritdilar.",
    ),
    storyFull: `Ko'pchilik o'quvchilar eng ko'p qiynaladigan bo'limlar — Writing va Speaking sectionlaridan C1 darajani qo'lga kiritdilar.

Bu natija shunchaki yuqori ball emas, balki katta mehnat, kuchli tayyorgarlik va o'z ustida tinimsiz ishlashning mahsulidir. Ayniqsa, fikrni erkin ifodalash, murakkab mavzularda yozish va ravon gapirish talab qilinadigan ushbu bo'limlardan C1 olish har kimga ham nasib etavermaydi.`,
    scores: [
      { skill: "Listening", level: "B2", value: "49" },
      { skill: "Reading", level: "B2", value: "50" },
      { skill: "Writing", level: "C1", value: "65" },
      { skill: "Speaking", level: "C1", value: "65" },
    ],
  },
  {
    id: "jamila-jamoliddinova",
    name: "Jamila Jamoliddinova",
    certType: "Milliy sertifikat",
    image: certImg(14),
    story: preview(
      "Jamila opaning natijalari orasida ayniqsa Speaking bo'limidagi yuqori ball alohida e'tiborga loyiq.",
    ),
    storyFull: `Jamila opaning natijalari orasida ayniqsa Speaking bo'limidagi yuqori ball alohida e'tiborga loyiq.

Natijada aynan Speaking bo'limidan juda yuqori ballni qo'lga kiritdilar. Bu esa muntazam amaliyot, o'z ustida ishlash va tilga bo'lgan qiziqishning yorqin natijasidir.`,
    scores: [
      { skill: "Listening", level: "B2", value: "47" },
      { skill: "Reading", level: "B2", value: "48" },
      { skill: "Writing", level: "B2", value: "53" },
      { skill: "Speaking", level: "B2", value: "65" },
    ],
  },
  {
    id: "dilshoda-ergasheva",
    name: "Dilshoda Ergasheva",
    certType: "TCF Canada",
    image: certImg(15),
    story: preview(
      "Dilshoda opa 6 oy davomida bizning online guruhimizda fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.",
    ),
    storyFull: `Dilshoda opa 6 oy davomida bizning online guruhimizda fransuz tilini mutlaqo 0 dan, harflardan boshlab o'rgandilar.

Oila, farzandlar va kundalik mas'uliyatlar bilan bir qatorda o'qishni ham davom ettirish oson emas. Lekin Dilshoda opa barcha qiyinchiliklarga qaramay, maqsadlaridan voz kechmadilar va mehnatlarining ajoyib natijasini qo'lga kiritdilar.

Ayniqsa, Writing bo'limidan birinchi urinishdayoq B2 natijani qayd etish juda katta yutuq hisoblanadi.`,
    scores: [
      { skill: "Listening", level: "B2", value: "498/699" },
      { skill: "Reading", level: "C1", value: "502/699" },
      { skill: "Writing", level: "B2", value: "11/20" },
      { skill: "Speaking", level: "B1", value: "9/20" },
    ],
  },
];

export const certificateImages = studentCertificates
  .filter((c) => c.image)
  .map((c) => ({
    src: c.image!,
    alt: `${c.certType} — ${c.name}`,
  }));
