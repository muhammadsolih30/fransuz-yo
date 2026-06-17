/** ISO davlat kodidan bayroq emoji va nom. */
const NAMES: Record<string, string> = {
  UZ: "O'zbekiston",
  RU: "Rossiya",
  KZ: "Qozog'iston",
  KG: "Qirg'iziston",
  TJ: "Tojikiston",
  TM: "Turkmaniston",
  TR: "Turkiya",
  US: "AQSH",
  CA: "Kanada",
  FR: "Fransiya",
  DE: "Germaniya",
  GB: "Buyuk Britaniya",
  AE: "BAA",
  SA: "Saudiya",
  KR: "Janubiy Koreya",
};

export function flagEmoji(iso: string): string {
  if (!iso || iso.length !== 2) return "🏳️";
  const code = iso.toUpperCase();
  const A = 0x1f1e6;
  return String.fromCodePoint(
    A + (code.charCodeAt(0) - 65),
    A + (code.charCodeAt(1) - 65),
  );
}

export function countryName(iso: string): string {
  return NAMES[iso?.toUpperCase()] ?? iso ?? "—";
}
