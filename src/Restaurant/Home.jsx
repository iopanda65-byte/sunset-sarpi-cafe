import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ─── სურათები — /public საქაღალდეში ჩააგდე ამ სახელებით ───
const imgXedi = "/xedi.png";
const imgAssets = [
  "/chai.png",
  "/coffee.png",
  "/limonati.png",
  "/nigvzsalata.png",
  "/ojaxuri.png",
  "/Piure.png",
  "/salata.png",
  "/supi.png",
  "/xachapuri.png",
  "/xarcho.png",
  "/xinkali.png",
];

const imgHero = imgXedi;
const imgFood1 = imgAssets[8]; // xachapuri
const imgFood2 = imgAssets[10]; // xinkali
const imgFood3 = imgAssets[4]; // ojaxuri

// ─── მონაცემები ───
const STATS = [
  { val: "4.8 ★", label: "საშ. შეფასება" },
  { val: "118", label: "მიმოხილვა" },
  { val: "10–20 ₾", label: "ერთ ადამიანზე" },
  { val: "სარფი", label: "მდებარეობა" },
];

const PREVIEW_DISHES = [
  {
    id: 1,
    name: "ხაჭაპური",
    desc: "ახალი ცომი, სახლის ყველი, კვერცხი",
    price: "12 ₾",
    tag: "სახლის რეცეპტი",
    img: imgFood1,
  },
  {
    id: 2,
    name: "ხინკალი",
    desc: "ხელნაკეთი, საქონლის ხორცი, სუნელები",
    price: "1.5 ₾ / ც",
    tag: "საუკეთესო",
    img: imgFood2,
  },
  {
    id: 3,
    name: "ოჯახური",
    desc: "ახალი ხორცი, ბოსტნეული, ღვინის სოუსი",
    price: "18 ₾",
    tag: "შეფის არჩევანი",
    img: imgFood3,
  },
];

const REVIEWS = [
  {
    avatar: "AL",
    name: "Athena Lin",
    time: "3 კვირის წინ",
    rating: 5,
    text: "The walnut salad was so flavorful! They had TURKISH tea — perfection. Absolutely loved this place.",
  },
  {
    avatar: "AA",
    name: "Anna Ladovics",
    time: "8 თვის წინ",
    rating: 5,
    text: "One of the most delicious meals here. Fantastic view, great service — quick and friendly. Highly recommend!",
  },
  {
    avatar: "PI",
    name: "Panda Io",
    time: "10 თვის წინ",
    rating: 5,
    text: "უგემრიელესი! კვება 5, სერვისი 5, ატმოსფერო 5. წყნარი გარემო, ბავშვებისთვის იდეალური.",
  },
];

const PHONE = "555133181";

// ─── კომპონენტი ───
export default function Home() {
  // გვერდზე გადასვლის/ჩატვირთვის ანიმაციის სტეიტი
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* ლოგო */}
          <Link
            to="/"
            className="text-white font-black text-lg tracking-tight group flex items-center gap-1"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">
              🌅
            </span>
            <span className="text-amber-400">Cafe</span> Sunset
          </Link>

          {/* ლინკები ხაზის ეფექტით */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {["მთავარი", "მენიუ", "ჩვენ შესახებ", "კონტაქტი"].map(
              (text, idx) => {
                const paths = ["/", "/product", "/about", "/contact"];
                return (
                  <Link
                    key={idx}
                    to={paths[idx]}
                    className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
                  >
                    {text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              },
            )}
          </div>

          {/* CTA ღილაკი */}
          <a
            href={`tel:${PHONE}`}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-amber-500/10"
          >
            📞 დარეზერვება
          </a>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden pt-14 sm:pt-16">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/8 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                🌅 სარფი, ბათუმი · ოჯახური სამზარეულო
              </span>

              <h1 className="text-[2.2rem] leading-tight sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                გემო, სადაც{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
                  მზე ჩადის
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                ოჯახური სამზარეულო ბათუმის სანაპიროზე. ახალი პროდუქტები, სახლური
                გემო და სანახაობა, რომელიც გამახსოვრდება.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1 max-w-xs mx-auto sm:max-w-none lg:mx-0">
                <Link
                  to="/product"
                  className="flex-1 sm:flex-none px-7 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-[0.97] text-center text-sm sm:text-base hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  სრული მენიუ
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 sm:flex-none px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl text-center border border-white/10 transition-all duration-200 text-sm sm:text-base hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  📞 მაგიდის დაჯავშნა
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-sm h-72 xl:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group transition-all duration-500 hover:border-amber-500/20">
                <img
                  src={imgHero}
                  alt="Cafe Sunset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background =
                      "linear-gradient(135deg, #1e293b 0%, #78350f 100%)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase whitespace-nowrap backdrop-blur-sm">
                  ★ 4.8 · 118 მიმოხილვა
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 sm:py-7 px-3 hover:bg-slate-50/50 transition-colors duration-300 cursor-default group"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 leading-none group-hover:scale-105 transition-transform duration-300">
                {s.val}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1.5 text-center leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ MENU PREVIEW ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              🍽️ პოპულარული კერძები
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              სახლური სამზარეულო
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ახალი პროდუქტები ყოველდღე, ტრადიციული ქართული გემოები
            </p>
          </div>
          <Link
            to="/product"
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1 shrink-0 ml-4 group"
          >
            სრული მენიუ{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-6">
          {PREVIEW_DISHES.map((dish, i) => (
            <div
              key={dish.id}
              className="group flex-shrink-0 w-[72vw] sm:w-auto snap-start bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 flex flex-col"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const colors = [
                      "linear-gradient(135deg,#fef3c7,#fde68a)",
                      "linear-gradient(135deg,#fee2e2,#fecaca)",
                      "linear-gradient(135deg,#dcfce7,#bbf7d0)",
                    ];
                    e.target.parentNode.style.background = colors[i % 3];
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm border border-amber-500/20 px-2 py-0.5 rounded-md">
                  <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                    {dish.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex-1 mb-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{dish.desc}</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                    {dish.price}
                  </p>
                </div>
                <Link
                  to="/product"
                  className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                  <span>🍽️</span> <span>სრული მენიუ</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="bg-slate-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              ⭐ Google-ის მიმოხილვები
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              სტუმრები ამბობენ
            </h2>
            <p className="text-sm text-slate-500">
              4.8 ★ · 118 მიმოხილვა Google Maps-ზე
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80vw] sm:w-auto snap-start bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-5 sm:p-6 flex flex-col gap-4 hover:border-amber-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                    <p className="text-[11px] text-slate-400">{r.time}</p>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm font-bold">
                    {"★".repeat(r.rating)}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MAP ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-5">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              📍 მდებარეობა
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
              გვიპოვე სარფში
            </h2>
            <p className="text-xs text-slate-500 mt-1">GGFX+2WC, E70, სარფი</p>
          </div>
          <a
            href="https://maps.google.com/?q=Cafe+Sunset+Sarpi+Georgia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1 shrink-0 ml-4 group"
          >
            Maps-ში გახსნა{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
          <iframe
            title="Cafe Sunset მდებარეობა"
            src="https://maps.google.com/maps?q=Cafe+Sunset+Sarpi+Georgia&z=16&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-2 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-semibold rounded-xl pointer-events-none">
            <span>🌅</span>
            <span>Cafe Sunset · სარფი</span>
          </div>
          <a
            href="https://maps.google.com/?q=Cafe+Sunset+Sarpi+Georgia"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-sm border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-semibold text-xs rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>📍</span>
            <span>Maps-ში გახსნა</span>
          </a>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 w-56 h-56 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
            🌅 Cafe Sunset · სარფი
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            მოდი — მაგიდა გელოდება
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            ოჯახური სადილი, ჯგუფური შეხვედრა თუ რომანტიული საღამო — Cafe
            Sunset-ში ყველასთვის ადგილი არის.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              📞 555 13 31 81
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              📍 მისამართი და საათები
            </Link>
          </div>
          <p className="text-xs text-slate-600 pt-2">
            GGFX+2WC, E70, სარფი · ყოველდღე ღია
          </p>
        </div>
      </section>

      {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
      {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 ...">...</nav>
      <div className="sm:hidden h-16" />
    </div>
  );
}
