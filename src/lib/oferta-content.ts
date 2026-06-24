export const ofertaIntro =
  "Fransuz tili bo'yicha ta'lim xizmatlarini taqdim etish to'g'risida ommaviy oferta. Quyidagi shartlar bilan tanishing — to'lov amalga oshirilishi yoki rasmiy saytda tanishganlik tasdiqlanishi ofertani qabul qilish (aksept) hisoblanadi.";

export const ofertaDefinitions: { term: string; def: string }[] = [
  {
    term: "Ommaviy oferta",
    def: "Shartnoma tuzish bo'yicha taklif. Shartnoma ofertani (uning akseptini) shartsiz qabul qilish orqali tuziladi.",
  },
  {
    term: "Ofertaning aksepti",
    def: "Ushbu Ofertaning 1.3-bandida ko'rsatilgan harakatlarni to'liq va shartsiz qabul qilish. Aksept Shartnoma tuzilishiga sababchi bo'ladi.",
  },
  {
    term: "Bajaruvchi / O'quv markaz",
    def: "2025-yil 20-oktyabrda berilgan 7218673-son guvohnomaga asosan ta'lim xizmatlarini taqdim etuvchi.",
  },
  {
    term: "O'quvchi / Buyurtmachi",
    def: "Ushbu shartnoma shartlarini qabul qilgan, fransuz tili kurslarida o'qiyotgan jismoniy shaxs — xizmatlarning oxirgi foydalanuvchisi.",
  },
  {
    term: "Kurs",
    def: "O'quv markazi metodikasi bo'yicha belgilangan vaqt davomida fransuz tilini o'rgatish jarayoni (onlayn va oflayn shakllarda).",
  },
  {
    term: "Web-site",
    def: "O'quv markazining rasmiy veb-sahifasi: https://france-tfc.uz/ — mashg'ulotlar, tanishuv va ro'yxatdan o'tish uchun xizmat qiladi.",
  },
  {
    term: "Placement",
    def: "Fransuz tilini bilish darajasini aniqlashga qaratilgan bepul protsedura.",
  },
  {
    term: "France TCF o'quv markazi",
    def: "Darslar bevosita o'tkaziladigan, zarur jihoz, material va adabiyotlar bilan ta'minlangan maxsus o'quv binosi.",
  },
];

export type OfertaSection = { id: string; title: string; items: string[] };

export const ofertaSections: OfertaSection[] = [
  {
    id: "umumiy-qoidalar",
    title: "1. Umumiy qoidalar",
    items: [
      "1.1. O'zbekiston Respublikasi Fuqarolik kodeksiga asosan ushbu hujjat YaTT \"MURODOVA SABINA NODIRBEK QIZI\" (France TCF o'quv markazi) tomonidan har qanday jismoniy shaxsga nisbatan Shartnomani qabul qilishga yo'naltirilgan rasmiy ommaviy taklif (oferta) hisoblanadi.",
      "1.2. Ushbu Oferta rasmiy hujjat hisoblanadi va Toshkent shahri, Mirobod tumani, A.Fitrat ko'chasi, 81V-uyda joylashgan o'quv markazida amalga oshiriladi.",
      "1.3. O'quvchi/Buyurtmachi o'z shaxsiga doir ma'lumotlarni (to'liq ism, tug'ilgan sana, telefon raqami) o'quv markazi administratsiyasiga taqdim etadi.",
      "1.4. Quyidagi harakatlardan biri ofertani to'liq va shartsiz qabul qilish (aksept) hisoblanadi: xizmatlar uchun to'lov amalga oshirilsa; yoki rasmiy web-sayt orqali taklif shartlari bilan tanishganlik tasdiqlansa.",
      "1.5. FK 370-moddasi 4-qismiga muvofiq, Ofertani qabul qilish shartnoma tuzishga tengdir. Aksept orqali shaxs Ofertaning Tomoniga aylanadi.",
    ],
  },
  {
    id: "shartnoma-predmeti",
    title: "2. Shartnoma predmeti",
    items: [
      "2.1. Bajaruvchi \"France TCF o'quv markazi\"da \"Fransuz tili kursi\" dasturi bo'yicha ta'lim xizmatini ko'rsatadi; O'quvchi/Buyurtmachi onlayn yoki oflayn kursda tahsil olish va haq to'lash majburiyatini oladi.",
      "2.2. 13–18 yoshli voyaga yetmaganlar nomidan ofertani faqat ota-onalari yoki qonuniy vakillari akseptlashi mumkin.",
      "2.3. Xizmatlar \"O'quv markazining fransuz tili o'qitish metodikasi\"ga muvofiq ko'rsatiladi.",
      "2.4. O'quv rejasi davomiyligi umumiy 6–8 oyni tashkil qiladi.",
      "2.5. Xizmatlar rasmiy saytda e'lon qilingan amaldagi narxlar ro'yxatiga muvofiq ko'rsatiladi.",
      "2.6. Shartnoma qoidalari masofaviy (onlayn) va an'anaviy (oflayn) ta'lim shakllariga teng tatbiq etiladi.",
    ],
  },
  {
    id: "markaz-huquqlari",
    title: "3.1. O'quv markazining huquq va majburiyatlari",
    items: [
      "3.1.1. Ofertaning 2.1-bandida nazarda tutilgan xizmatlarni tashkil etish va tegishli tarzda bajarilishini ta'minlash.",
      "3.1.2. Bosqich yakunida sinovdan o'tkazish va test natijalariga ko'ra o'quvchini keyingi bosqichga o'tkazish/qoldirish/o'qishni rad etish huquqi.",
      "3.1.3. To'lovni o'z vaqtida amalga oshirmagan talabaning darslarga va shaxsiy kabinetga kirishini cheklash huquqi.",
      "3.1.4. O'quvchi roziligisiz o'qituvchini almashtirish yoki o'rindosh/yordamchi o'qituvchi tayinlash huquqi.",
      "3.1.5. O'quvchi talab qilsa ham, o'qituvchini almashtirmaslik huquqi.",
      "3.1.6. Mashg'ulotlar jadvalini, tartibini va o'quv xonalarini belgilash.",
      "3.1.7. Jadvalga o'zgartirish kiritilsa, oldindan xabar berish va o'tilmagan darsni qoplash sanasi/vaqtini belgilash.",
      "3.1.8. O'quvchining bilim darajasini tekshirish va baholash tartibini belgilash.",
      "3.1.9. Guruhda 7 nafardan kam o'quvchi qolsa, guruhni yopish va o'quvchilarni qayta taqsimlash huquqi.",
      "3.1.10. Qoldirilgan dars uchun to'langan to'lovni boshqa shaxs hisobiga o'tkazmaslik.",
      "3.1.11. Sababsiz qoldirilgan darslarni o'tib berishni o'z zimmasiga olmaydi (video yozuvi bo'lsa berilishi mumkin).",
      "3.1.12. O'quvchi sertifikat va yutuqlaridan faqat reklama materiali sifatida foydalanish huquqi.",
      "3.1.13. O'quv jarayonini, baholash tizimi va tekshirish shakllarini mustaqil tanlash.",
      "3.1.14. Qonun yoki oferta shartlari buzilsa — darslardan chetlatish, to'lovni qaytarmaslik/muzlatmaslik huquqi.",
      "3.1.15. Xodimlar yoki boshqa o'quvchilarni haqorat qilish isbotlansa — chetlatish va to'lovni qaytarmaslik huquqi.",
      "3.1.16. Kurs davomida 3 marta yakuniy imtihondan qoniqarsiz natija va yetarli harakat qilmaslik aniqlansa — shartnoma 1 yilga bekor qilinishi mumkin.",
      "3.1.17. To'lovdan keyin kamida bitta darsda qatnashib, subyektiv sabablarga ko'ra kursni tashlasa — mablag' qaytarilmaydi.",
      "3.1.18. Ofertaga o'zgartirish kiritilishi mumkin; o'zgarishlar eski shartnomalarga ta'sir etmaydi.",
      "3.1.19. Bir oyda uy vazifasi bajarilmasa yoki 3 marta dars qoldirilsa — ogohlantirgach xizmat to'xtatilishi mumkin, to'lov qaytarilmaydi.",
      "3.1.20. O'quvchining shaxsiy ma'lumotlarini sir saqlash va uchinchi shaxslarga bermaslik.",
      "3.1.21. Markaz faoliyati vaqtincha/to'liq to'xtasa, qolgan darslar 6 oy ichida kompensatsiya qilinadi.",
    ],
  },
  {
    id: "oquvchi-huquqlari",
    title: "3.2. O'quvchi / Buyurtmachining huquq va majburiyatlari",
    items: [
      "3.2.1. Shartnoma tuzilgunga qadar oferta mazmuni va xizmatlar narxi bilan tanishish shart.",
      "3.2.2. Dastlabki to'lov — oferta shartlarini qabul qilish hisoblanadi.",
      "3.2.3. Har oy mashg'ulot uchun to'lovni amalga oshirish majburiyati.",
      "3.2.4. Berilgan mustaqil topshiriqlarni bajarish va jadvalga muvofiq mashg'ulotlarda ishtirok etish.",
      "3.2.5. Ta'lim materiallarini tijorat/notijorat maqsadda tarqatmaslik, nusxalamaslik va qayta sotmaslik.",
      "3.2.6. Guruh tugatilsa, taklif qilingan boshqa guruhda o'qishni davom ettirish majburiyati.",
      "3.2.7. \"Fransuz tili kurslarida o'qitish Qoidalari\"ga rioya qilish.",
      "3.2.8. O'quv-uslubiy materiallar va kirish huquqini uchinchi shaxslarga bermaslik.",
      "3.2.9. Markaz mol-mulkiga yetkazilgan moddiy zarar to'liq undiriladi.",
      "3.2.10. Markaz hududida odob-axloq normalariga rioya qilish (shovqin, tamaki, alkogol taqiqlanadi).",
      "3.2.11. Bino va mulkdan ehtiyotkorlik bilan foydalanish; zarar yetkazilsa qoplash.",
      "3.2.12. O'quv jarayoni bo'yicha markaz xodimiga murojaat qilish huquqi.",
      "3.2.13. Onlayn darslar uchun barqaror internet va texnik vositalarni mustaqil ta'minlash.",
      "3.2.14. Baholash va uning mezonlari haqida to'liq ma'lumot olish huquqi.",
      "3.2.15. Mashg'ulotga oid savollar bilan markaz/o'qituvchiga telefon yoki ijtimoiy tarmoq orqali murojaat qilish.",
      "3.2.16. Individual shaklda — dars boshlanishidan 2 soat oldin xabar bergan holda, oyiga ko'pi 3 ta darsni qoldirish va qayta o'tkazish huquqi.",
      "3.2.17. Darslarni qoldirmaslik, har dars oldidan uy vazifasini kamida 80% tayyorlash va kursni vijdonan o'zlashtirish.",
    ],
  },
  {
    id: "narx",
    title: "4. Xizmatlar narxi va hisob-kitob tartibi",
    items: [
      "4.1. Xizmatlar narxi rasmiy web-saytda ko'rsatilgan.",
      "4.2. Bir oydagi 12 ta mashg'ulot uchun to'lov ro'yxatdan o'tilgan kundan boshlab amalga oshiriladi; ba'zi oylarda 13–14 ta dars o'tilsa, ular uchun qo'shimcha to'lov undirilmaydi.",
      "4.3. To'lovni belgilangan sanada amalga oshira olmasa, oldindan xabar berib, muddatni kelishib olish shart.",
      "4.5. Qoldirilgan darslar uchun to'lov qaytarilmaydi.",
      "4.6. To'lov naqd va naqdsiz (bank kartasi, onlayn ilovalar) amalga oshiriladi; tasdiqlovchi hujjat 24 soat ichida taqdim etiladi.",
      "4.8. Faqat individual o'quvchi 1 marta bepul sinov darsida qatnashishi mumkin.",
      "4.9. Narxlar istalgan vaqtda o'zgartirilishi mumkin; yangi narxlar keyingi oy boshidan kuchga kiradi (oy o'rtasida qo'shimcha to'lov talab qilinmaydi).",
    ],
  },
  {
    id: "umumiy-tartiblar",
    title: "5. Umumiy tartiblar va keshbek",
    items: [
      "5.1. Rasmiy bayram kunlariga to'g'ri kelgan darslar keyingi oylarda 12 tadan ko'p dars hisobiga qoplab beriladi.",
      "5.2. Mini va katta guruhlar — 80 daqiqa; individual darslar — 60 daqiqadan oyiga 12 ta mashg'ulot.",
      "5.3. Markaz natijaning subyektiv bahosi uchun javobgar emas; bu to'lovni qaytarish asosi bo'lmaydi.",
      "5.4. Keshbek: TCF Canada rasmiy imtihonida barcha bo'limlarda B2 — 500 000 so'm (kamida 6 oy uzluksiz tahsil); C1 yoki undan yuqori — 1 000 000 so'm (kamida 9 oy uzluksiz tahsil). Keshbek rasmiy natija hujjatlari taqdim etilgach to'lanadi.",
      "5.5. Keshbek olgan Tinglovchilar shu natijani boshqa markazlar media platformalarida namoyish eta olmaydi — aks holda mablag' to'liq qaytariladi.",
      "5.6. TCF Canada natijalari bo'yicha bonus bir martalik keshbek bo'lib, qayta olinmaydi.",
      "5.7. Bir qancha darslar o'tkazib yuborilsa va o'qish davom etsa, 12 ta mashg'ulot uchun to'liq to'lov undiriladi.",
      "5.8. Ro'yxatdan o'tishda taqdim etilgan ma'lumotlarning to'g'riligiga O'quvchi/Buyurtmachi javobgardir.",
    ],
  },
  {
    id: "boshqa-fors-major",
    title: "6–7. Boshqa shartlar va fors-major",
    items: [
      "6.1. Bajaruvchi quyidagi hollarda javobgar emas: natija o'quvchining aybi bilan qoniqarsiz bo'lsa (darsga qatnashmaslik, uy vazifasini bajarmaslik); majburiyat markaz aybisiz bajarilmasa; fors-major holatlarida.",
      "6.2. Markaz majburiyatlar bir necha marta buzilsa yoki to'lov muddatlari buzilsa — xizmat ko'rsatishni rad etishga haqli.",
      "7.1. Tomonlar yengib bo'lmas kuch holatlari (yong'in, zilzila, epidemiya, harbiy harakatlar) tufayli majburiyatni bajarmaganlik uchun javobgarlikdan ozod qilinadi.",
      "7.2. Bunday holat yuzaga kelgan Tomon 10 kun ichida ikkinchi tomonni xabardor qilishi shart.",
    ],
  },
  {
    id: "amal-muddati",
    title: "8. Amal qilish muddati",
    items: [
      "8.1. O'quvchi/Buyurtmachi barcha shartlar tushunarli ekanligini kafolatlaydi va ularni to'liq qabul qiladi.",
      "8.2. Shartnoma aksept paytidan kuchga kiradi va majburiyatlar to'liq bajarilgunga qadar amal qiladi.",
      "8.3. Oferta cheklanmagan muddatga tuziladi.",
      "8.6. Barcha nizolar muzokaralar yo'li bilan, kelishilmasa O'zbekiston Respublikasi qonunchiligiga muvofiq hal etiladi.",
    ],
  },
];

export const ofertaRequisites = {
  name: "YaTT \"MURODOVA SABINA NODIRBEK QIZI\" (France TCF o'quv markazi)",
  basis: "2025-yil 20-oktyabrda berilgan 7218673-son guvohnoma asosida",
  address: "Toshkent shahri, Mirobod tumani, A.Fitrat ko'chasi, 81V-uy",
  stir: "63001025310027",
  phone: "+998 (94) 738-22-21",
  director: "S.N. Murodova",
};
