// Placeholder for the ResultCard component
const levelColor: Record<string, string> = {
  C2: "text-green-400 border-green-500/30 bg-green-500/5",
  C1: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  B2: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  B1: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
};

type Score = { s: string; l: string; v: string };

type Result = {
  name: string;
  period: string;
  from: string;
  cert: string;
  date: string;
  quote?: string;
  scores: Score[];
  highlight: boolean;
};

export function ResultCard({ result }: { result: Result }) {
  return (
    <div
      className={`bg-white p-10 hover:bg-gray-50 transition-all border border-gray-200 ${
        result.highlight ? "border-t-2 border-[#E8192C]" : ""
      }`}
    >
      {result.highlight && (
        <div className="inline-flex items-center gap-2 bg-[#E8192C]/10 border border-[#E8192C]/20 px-3 py-1 rounded-full text-[#E8192C] text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />1 oylik natija
        </div>
      )}

      <div className="flex items-start justify-between mb-8\">
        <div>
          <h3 className="font-['Syne'] font-bold text-xl">{result.name}</h3>
          <p className="text-gray-500 text-xs mt-1">
            {result.cert} • {result.date} • {result.period}
          </p>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-xs">Boshlang'ich</div>
          <div className="font-['Syne'] font-bold text-gray-500">{result.from}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {result.scores.map((sc) => (
          <div
            key={sc.s}
            className={`border rounded-xl p-4 ${levelColor[sc.l] || "border-white/10"}`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs opacity-60">{sc.s}</span>
              <span className="text-xs font-bold">{sc.l}</span>
            </div>
            <div className="font-['Syne'] font-black text-xl">{sc.v}</div>
          </div>
        ))}
      </div>

      {result.quote && (
        <div className="border-t border-white/5 pt-6">
          <p className="text-gray-600 text-sm italic">"{result.quote}"</p>
        </div>
      )}

      <div className="mt-6 border-2 border-dashed border-white/5 p-6 text-center">
        <p className="text-gray-300 text-xs">Sertifikat rasmi tez orada</p>
      </div>
    </div>
  );
}
