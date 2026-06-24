export const levelColor: Record<string, string> = {
  C2: "text-emerald-700 bg-emerald-50 border-emerald-200",
  C1: "text-emerald-700 bg-emerald-50 border-emerald-200",
  B2: "text-blue-700 bg-blue-50 border-blue-200",
  B1: "text-amber-700 bg-amber-50 border-amber-200",
};

export const studentResults = [
  {
    name: "Dilnura Saidbekova",
    period: "6 oy",
    from: "B1",
    cert: "TCF Canada",
    date: "2026",
    quote: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗",
    scores: [
      { s: "Listening", l: "C2", v: "699/699" },
      { s: "Reading", l: "C2", v: "699/699" },
      { s: "Writing", l: "B2", v: "11/20" },
      { s: "Speaking", l: "B2", v: "10/20" },
    ],
    highlight: true,
  },
  {
    name: "Moxinur Salomatova",
    period: "Jarayonda",
    from: "A2",
    cert: "Milliy sertifikat",
    date: "2025",
    quote: "",
    scores: [
      { s: "Listening", l: "B1", v: "55" },
      { s: "Reading", l: "B1", v: "50" },
      { s: "Writing", l: "B1", v: "51" },
      { s: "Speaking", l: "B1", v: "38" },
    ],
    highlight: false,
  },
];

export const resultFeedbacks = [
  {
    name: "Dilnura Saidbekova",
    text: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗",
    cert: "TCF Canada — C2",
    rating: 5,
  },
  {
    name: "O'quvchi",
    text: "Markaz metodikasi juda aniq. 2 ta kitob va intensive guruh orqali tez natija oldim.",
    cert: "TCF Canada",
    rating: 5,
  },
  {
    name: "O'quvchi",
    text: "Speaking club va qo'shimcha o'qituvchi tufayli gapirish ko'nikmam sezilarli oshdi.",
    cert: "TCF Canada",
    rating: 5,
  },
];

export const resultStats = [
  { n: "500+", l: "Faol o'quvchilar" },
  { n: "3000+", l: "Bitiruvchilar" },
  { n: "6 oy", l: "Eng tez natija" },
  { n: "C2", l: "Eng yuqori daraja" },
];

export const tcfLevels = [
  { level: "A1–A2", l: "0–180", r: "0–180", c: "text-orange-600" },
  { level: "B1", l: "181–297", r: "181–297", c: "text-amber-600" },
  { level: "B2", l: "298–457", r: "298–457", c: "text-blue-600" },
  { level: "C1", l: "458–502", r: "453–498", c: "text-emerald-600" },
  { level: "C2", l: "503–699", r: "499–699", c: "text-green-600" },
];
