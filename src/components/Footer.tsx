import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-accent/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow">
              <Leaf className="h-5 w-5" style={{ color: "var(--maple)" }} fill="currentColor" />
            </span>
            <span className="font-display font-semibold text-lg">
              FransuzTili <span className="text-maple">Canada</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Fransuz tili orqali Kanadaga immigratsiya yo'lida ishonchli hamrohingiz.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Bog'lanish</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📱 <a href="https://t.me/Canadali" target="_blank" rel="noreferrer" className="hover:text-primary">Telegram</a></li>
            <li>📸 <a href="https://instagram.com/kanadalik_uzbek" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
            <li>🎥 <a href="https://youtube.com/@canadAli" target="_blank" rel="noreferrer" className="hover:text-primary">YouTube</a></li>
            <li>🌐 <a href="https://www.canadali.net" target="_blank" rel="noreferrer" className="hover:text-primary">canadali.net</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Bizning maqsadimiz</h4>
          <p className="text-sm text-muted-foreground">
            O'quvchilarni TCF Canada imtihoniga professional tayyorlash va Kanada PR dasturlariga olib chiqish.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FransuzTili Canada. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
