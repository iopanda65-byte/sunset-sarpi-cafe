import { Link } from "react-router-dom";

const PHONE = "555133181";

// ─── მიმოხილვები Google Maps-დან ───
const REVIEWS = [
  {
    avatar: "AL",
    name: "Athena Lin",
    badge: "Local Guide",
    time: "3 კვირის წინ",
    rating: 5,
    text: "The parsley must have come from their garden because it was so strong. The walnut salad was so flavorful and the omelette had lots of stuff in it! They had TURKISH tea — perfection!",
  },
  {
    avatar: "АГ",
    name: "Анастасія Горбунова",
    badge: null,
    time: "9 თვის წინ",
    rating: 5,
    text: "Все было очень вкусно, девушка которая нас обслуживала была очень милой. Вся еда свежая и приготовлена с любовью. Хачапури и хинкали просто отдельная любовь 🩷",
  },
  {
    avatar: "AA",
    name: "Anna Ladovics",
    badge: null,
    time: "8 თვის წინ",
    rating: 5,
    text: "We've had one of the most delicious meals here. The view was fantastic. The service was great, quick and friendly. I would recommend it to everyone! 🥰",
  },
  {
    avatar: "PI",
    name: "Panda Io",
    badge: null,
    time: "10 თვის წინ",
    rating: 5,
    text: "უგამრიელესი! წყნარი გარემო, ინდივიდუალური სასადილო, ლოდინის დრო 10 წუთამდე. ბავშვებისთვის იდეალური, პარკინგი ბევრია.",
  },
];

// ─── სტატისტიკა ───
const STATS = [
  { val: "4.8 ★", label: "Google შეფასება", sub: "118 მიმოხილვა" },
  { val: "118", label: "სტუმრის მიმოხილვა", sub: "ყველა 5 ვარსკვლავი" },
  { val: "10₾~", label: "საწყისი ფასი", sub: "ერთ ადამიანზე" },
  { val: "63", label: "ადამიანი", sub: "გვახსენებს" },
];

// ─── სტუმართა შეღავათები ───
const FEATURES = [
  {
    icon: "🧒",
    title: "ბავშვებისთვის",
    desc: "ოჯახებისთვის და ბავშვებისთვის იდეალური გარემო",
  },
  { icon: "♿", title: "შშმ წვდომა", desc: "ეტლის წვდომა შესაძლებელია" },
  { icon: "🅿️", title: "პარკინგი", desc: "უამრავი უფასო პარკინგის ადგილი" },
  { icon: "🥗", title: "ვეგეტარიანული", desc: "ვეგეტარიანული კერძები მენიუში" },
  {
    icon: "🤫",
    title: "წყნარი ატმოსფერო",
    desc: "საუბარი მარტივია, სასიამოვნო გარემო",
  },
  { icon: "🛍️", title: "წასაღები", desc: "Takeaway სერვისი ხელმისაწვდომია" },
];

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden">
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="text-white font-black text-lg tracking-tight">
            🌅 <span className="text-amber-400">Cafe</span> Sunset
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              მთავარი
            </Link>
            <Link
              to="/product"
              className="hover:text-amber-400 transition-colors"
            >
              მენიუ
            </Link>
            <Link to="/about" className="text-amber-400 font-semibold">
              შესახებ
            </Link>
            <Link
              to="/contact"
              className="hover:text-amber-400 transition-colors"
            >
              კონტაქტი
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

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden pt-14 sm:pt-16">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/8 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
              🌅 ჩვენ შესახებ · Since Day One
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              სარფის{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
                ოჯახური
              </span>{" "}
              კუთხე
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Cafe Sunset — ეს არის ადგილი, სადაც ოჯახური სიყვარული კერძებში
              ჩანს. სარფის სანაპიროზე, შავი ზღვის ხედით, ყოველ ვიზიტს
              განსაკუთრებულს ვხდით.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 sm:py-7 px-3"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 leading-none">
                {s.val}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 text-center">
                {s.label}
              </p>
              <p className="text-[9px] text-amber-500 font-semibold mt-0.5 text-center">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ ჩვენ შესახებ ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ტექსტი */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
                🍽️ ჩვენი ისტორია
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                სახლური გემო, ზღვის პირას
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Cafe Sunset სარფის გულში მდებარეობს — ბათუმ-სარფის გზაზე, შავი
                ზღვის სანაპიროსთან ახლოს. ჩვენი სამზარეულო ოჯახური რეცეპტებით და
                ახალი, ადგილობრივი პროდუქტებით მუშაობს.
              </p>
              <p>
                ყველა კერძი ხელით, სიყვარულით მზადდება. ხაჭაპური სახლის ყველით,
                ხინკალი — ხელნაკეთი, ბოსტნეული — ახლად მოსული. სტუმრები ამბობენ,
                რომ ოხრახუშიც კი პირდაპირ ბაღიდან მოდის! 🌿
              </p>
              <p>
                4.8 ★ რეიტინგი 118 მიმოხილვით Google Maps-ზე ჩვენი საუკეთესო
                სარეკომენდაციო წერილია.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "ოჯახური სამზარეულო",
                "სარფი",
                "ზღვის ხედი",
                "ახალი პროდუქტები",
                "ხელნაკეთი",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ფიჩერ ბარათები */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/60 p-4 sm:p-5 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {f.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="bg-slate-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              ⭐ Google Maps · ნამდვილი მიმოხილვები
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              სტუმრები ამბობენ
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-slate-900">4.8</span>
              <div>
                <div className="text-amber-400 text-lg leading-none">★★★★★</div>
                <p className="text-xs text-slate-500 mt-0.5">118 მიმოხილვა</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-5 sm:p-6 flex flex-col gap-4 hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-slate-900 text-sm">
                        {r.name}
                      </p>
                      {r.badge && (
                        <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full font-semibold">
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-amber-400 text-xs">
                        {"★".repeat(r.rating)}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {r.time}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-200 text-4xl leading-none font-serif flex-shrink-0">
                    "
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-600 font-semibold rounded-xl text-sm transition-all duration-200"
            >
              📍 ყველა მიმოხილვა Google Maps-ზე →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-56 h-56 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-56 h-56 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-xl mx-auto space-y-4 sm:space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
            🌅 Cafe Sunset · სარფი, E70
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            მოდი, ჩვენი სტუმარი გახდი
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            ოჯახური გარემო, ახალი კერძები, ზღვის ხედი — ყველაფერი, რაც საუკეთესო
            სადილს სჭირდება.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-[0.97] text-sm sm:text-base"
            >
              📞 555 13 31 81
            </a>
            <Link
              to="/product"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all duration-200 text-sm sm:text-base"
            >
              🍽️ მენიუს ნახვა
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 ...">...</nav>
      <div className="sm:hidden h-20" />
    </div>
  );
}
