import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PHONE = "555133181";

// ─── სურათები /public-დან — ზუსტი სახელები პროექტიდან ───
const imgs = {
  salad: "/salata.png",
  nigvzsalata: "/nigvzsalata.png",
  khachapuri: "/xachapuri.png",
  khinkali: "/xinkali.png",
  ojakhuri: "/ojaxuri.png",
  soup: "/supi.png",
  kharcho: "/xarcho.png",
  puree: "/Piure.png",
  tea: "/chai.png",
  coffee: "/coffee.png",
  limonati: "/Limonati.png",
  gulashi: "/gulashi.png",
};

// ─── მენიუ ───
const MENU = [
  // სალათები
  {
    id: 1,
    cat: "salad",
    name: "ნიგვზიანი სალათი",
    desc: "ახალი ბოსტნეული, ნიგოზი, მწვანილი",
    price: "9 ₾",
    tag: "პოპულარული",
    img: imgs.nigvzsalata,
  },
  {
    id: 2,
    cat: "salad",
    name: "ბაღის სალათი",
    desc: "პომიდორი, კიტრი, ხახვი, ზეთი",
    price: "7 ₾",
    tag: "",
    img: imgs.salad,
  },

  // ცომეული / ხინკალი
  {
    id: 3,
    cat: "khachо",
    name: "ხაჭაპური",
    desc: "ახალი ცომი, სახლის ყველი, კვერცხი",
    price: "12 ₾",
    tag: "სახლის რეცეპტი",
    img: imgs.khachapuri,
  },
  {
    id: 4,
    cat: "khachо",
    name: "ხინკალი",
    desc: "ხელნაკეთი, საქონლის ხორცი, სუნელები",
    price: "1.5 ₾/ც",
    tag: "საუკეთესო",
    img: imgs.khinkali,
  },

  // მთავარი
  {
    id: 5,
    cat: "main",
    name: "ოჯახური",
    desc: "ღორის ხორცი, ბოსტნეული, ღვინის სოუსი",
    price: "18 ₾",
    tag: "შეფის არჩევანი",
    img: imgs.ojakhuri,
  },
  {
    id: 6,
    cat: "main",
    name: "ბეფსტროგანოვი",
    desc: "საქონლის ხორცი, სოკო, ნაღების სოუსი",
    price: "20 ₾",
    tag: "",
    img: imgs.soup,
  },
  {
    id: 7,
    cat: "main",
    name: "გულაში",
    desc: "ქათმის ხორცი, პაპრიკა, ბოსტნეული",
    price: "16 ₾",
    tag: "",
    img: imgs.gulashi,
  },
  {
    id: 8,
    cat: "main",
    name: "პიურე კარტოფილით",
    desc: "კარაქი, ნაღები, კარამელიზებული კარტოფილი",
    price: "8 ₾",
    tag: "",
    img: imgs.puree,
  },

  // სუპები
  {
    id: 9,
    cat: "soup",
    name: "ქათმის ბულიონი",
    desc: "სახლური ბულიონი, ბოსტნეული, მწვანილი",
    price: "10 ₾",
    tag: "სახლური",
    img: imgs.soup,
  },
  {
    id: 10,
    cat: "soup",
    name: "ხარჩო",
    desc: "ცხელი წვნიანი, საქონლის ხორცი, ბრინჯი, სუნელები",
    price: "12 ₾",
    tag: "",
    img: imgs.kharcho,
  },

  // სასმელები
  {
    id: 11,
    cat: "drink",
    name: "თურქული ჩაი",
    desc: "ორმაგი ჩაიდნით, არომატული ჩაი",
    price: "4 ₾",
    tag: "ტრადიციული",
    img: imgs.tea,
  },
  {
    id: 12,
    cat: "drink",
    name: "ყავა",
    desc: "ესპრესო, კაპუჩინო, ამერიკანო",
    price: "5 ₾",
    tag: "",
    img: imgs.coffee,
  },
  {
    id: 13,
    cat: "drink",
    name: "ლიმონათი",
    desc: "სახლური, ახალი ხილი, პიტნა",
    price: "6 ₾",
    tag: "",
    img: imgs.limonati,
  },
];

const CATS = [
  { key: "all", label: "ყველა", icon: "🍽️" },
  { key: "salad", label: "სალათები", icon: "🥗" },
  { key: "khachо", label: "ცომეული", icon: "🫓" },
  { key: "main", label: "მთავარი", icon: "🥩" },
  { key: "soup", label: "სუპები", icon: "🍲" },
  { key: "drink", label: "სასმელები", icon: "☕" },
];

const FALLBACK_COLORS = [
  "linear-gradient(135deg,#fef3c7,#fde68a)",
  "linear-gradient(135deg,#fee2e2,#fecaca)",
  "linear-gradient(135deg,#dcfce7,#bbf7d0)",
  "linear-gradient(135deg,#ede9fe,#ddd6fe)",
  "linear-gradient(135deg,#fce7f3,#fbcfe8)",
];

export default function Product() {
  const [activeCat, setActiveCat] = useState("all");
  // გვერდის ჩატვირთვის ანიმაციის სტეიტი
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filtered =
    activeCat === "all" ? MENU : MENU.filter((d) => d.cat === activeCat);

  return (
    <div
      className={`bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className="text-white font-black text-lg tracking-tight group flex items-center gap-1"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">
              🌅
            </span>
            <span className="text-amber-400">Cafe</span> Sunset
          </Link>

          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <Link
              to="/"
              className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
            >
              მთავარი
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/product"
              className="relative py-1 text-amber-400 font-semibold group"
            >
              მენიუ
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400" />
            </Link>
            <Link
              to="/about"
              className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
            >
              შესახებ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/contact"
              className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
            >
              კონტაქტი
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <a
            href={`tel:${PHONE}`}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all duration-200"
          >
            📞 დარეზერვება
          </a>
        </div>
      </nav>

      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden pt-14 sm:pt-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
            🍽️ Cafe Sunset · სრული მენიუ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-3">
            ჩვენი{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
              მენიუ
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
            ახალი პროდუქტები ყოველდღე · ტრადიციული ქართული სამზარეულო · სარფი,
            ბათუმი
          </p>
        </div>
      </section>

      {/* ══════════ CATEGORY TABS ══════════ */}
      <div className="sticky top-14 sm:top-16 z-30 bg-slate-50/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATS.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  activeCat === c.key
                    ? "bg-slate-900 text-amber-400 shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400/50 hover:text-amber-600"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
                {activeCat === c.key && (
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-1.5 py-0.5 rounded-md">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ MENU GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {CATS.find((c) => c.key === activeCat)?.icon}{" "}
            {CATS.find((c) => c.key === activeCat)?.label}
          </h2>
          <p className="text-xs text-slate-500 mt-1">{filtered.length} კერძი</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((dish, i) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 flex flex-col"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background =
                      FALLBACK_COLORS[i % FALLBACK_COLORS.length];
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                {dish.tag && (
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm border border-amber-500/20 px-2 py-0.5 rounded-md">
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                      {dish.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 flex-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-snug group-hover:text-amber-600 transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                  <p className="text-base sm:text-lg font-black text-slate-900 shrink-0 mt-0.5">
                    {dish.price}
                  </p>
                </div>

                <a
                  href={`tel:${PHONE}`}
                  className="mt-4 w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                  <span>📞</span>
                  <span>შეკვეთა</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 top-0 w-56 h-56 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-xl mx-auto space-y-4 sm:space-y-5">
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            მაგიდის დასაჯავშნად დარეკე
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            სწრაფი შეკვეთისთვის ან რეზერვაციისთვის — დარეკე პირდაპირ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.97] text-sm sm:text-base"
            >
              📞 555 13 31 81
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] text-sm sm:text-base"
            >
              📍 მისამართი
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-white/5 flex">
        {[
          { to: "/", icon: "🏠", label: "მთავარი" },
          { to: "/product", icon: "🍽️", label: "მენიუ" },
          { to: "/about", icon: "ℹ️", label: "შესახებ" },
          { to: "/contact", icon: "📞", label: "კონტაქტი" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 active:scale-90 transition-all duration-200 group ${
              item.to === "/product"
                ? "text-amber-400"
                : "text-slate-400 hover:text-amber-400"
            }`}
          >
            <span className="text-lg leading-none group-hover:-translate-y-0.5 transition-transform duration-300">
              {item.icon}
            </span>
            <span className="text-[9px] font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="sm:hidden h-16" />
    </div>
  );
}
