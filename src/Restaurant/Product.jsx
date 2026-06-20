import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PREVIEW_DISHES = [
  {
    id: 1,
    name: "ხაჭაპური",
    desc: "ახალი ცომი, სახლის ყველი, კვერცხი",
    price: "12 ₾",
    tag: "სახლის რეცეპტი",
    img: "/xachapuri.png",
  },
  {
    id: 2,
    name: "ხინკალი",
    desc: "ხელნაკეთი, საქონლის ხორცი, სუნელები",
    price: "1.5 ₾ / ც",
    tag: "საუკეთესო",
    img: "/xinkali.png",
  },
  {
    id: 3,
    name: "ოჯახური",
    desc: "ახალი ხორცი, ბოსტნეული, ღვინის სოუსი",
    price: "15 ₾",
    tag: "შეფის არჩევანი",
    img: "/ojaxuri.png",
  },
];

// საწყისი ლამაზი მიმოხილვები, რომლებიც ყოველთვის გამოჩნდება საიტზე
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: "გიორგი",
    text: "საუკეთესო ხაჭაპურია მთელ სანაპიროზე! გარემოც ძალიან მყუდროა.",
    rating: 5,
    avatar: "👤",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "ნინო",
    text: "ხინკალი იყო უგემრიელესი, წვენით სავსე. აუცილებლად დავბრუნდებით!",
    rating: 5,
    avatar: "👤",
    created_at: new Date().toISOString(),
  },
];

const PHONE = "555133181";
const FORMATTED_PHONE = "555 13 31 81";
const NAV_LINKS = [
  { text: "მთავარი", path: "/" },
  { text: "მენიუ", path: "/product" },
  { text: "ჩვენ შესახებ", path: "/about" },
  { text: "კონტაქტი", path: "/contact" },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // მიმოხილვები ინახება პირდაპირ აქ, ლოკალურად
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  // ფორმის სტეიტები
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState(5);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const isLatin = /^[a-zA-Z\s]+$/.test(newName.trim());
    const avatarInitials = isLatin
      ? newName.trim().slice(0, 2).toUpperCase()
      : "👤";

    const newReviewObj = {
      id: Date.now(), // დროებითი უნიკალური ID
      name: newName.trim(),
      text: newText.trim(),
      rating: Number(newRating),
      avatar: avatarInitials,
      created_at: new Date().toISOString(),
    };

    // ახალი კომენტარის დამატება სიის სათავეში
    setReviews([newReviewObj, ...reviews]);

    // ფორმის გასუფთავება
    setNewName("");
    setNewText("");
    setNewRating(5);
  };

  const handleImageError = (e, fallbackBg) => {
    e.currentTarget.style.display = "none";
    if (e.currentTarget.parentNode) {
      e.currentTarget.parentNode.style.background = fallbackBg;
    }
  };

  return (
    <div
      className={`bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className="text-white font-black text-lg tracking-tight group flex items-center gap-1"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">🌅</span>
            <span className="text-amber-400">Cafe</span> Sunset
          </Link>

          {/* დესკტოპ ნავიგაცია */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md"
            >
              📞 დარეზერვება
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* მობილურის მენიუ */}
        {isMenuOpen && (
          <div className="sm:hidden bg-slate-950/95 border-b border-white/5 px-4 py-3 space-y-2">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors border-b border-white/5 last:border-none"
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden pt-14 sm:pt-16">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
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
                ოჯახური სამზარეულო ბათუმის სანაპიროზე. ახალი პროდუქტები, სახლური გემო და სანახაობა, რომელიც გამახსოვრდება.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1 max-w-xs mx-auto sm:max-w-none lg:mx-0">
                <Link
                  to="/product"
                  className="flex-1 sm:flex-none px-7 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-2xl shadow-lg transition-all duration-200 text-center text-sm sm:text-base hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  სრული მენიუ
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 sm:flex-none px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl text-center border border-white/10 transition-all duration-200 text-sm sm:text-base hover:-translate-y-0.5"
                >
                  📞 მაგიდის დაჯავშნა
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-sm h-72 xl:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                <img
                  src="/xedi.png"
                  alt="Cafe Sunset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => handleImageError(e, "linear-gradient(135deg, #1e293b 0%, #78350f 100%)")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase whitespace-nowrap backdrop-blur-sm">
                  ★ 4.8 · {reviews.length} მიმოხილვა
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          {[
            { val: "4.8 ★", label: "საშ. შეფასება" },
            { val: reviews.length.toString(), label: "მიმოხილვა" },
            { val: "10–20 ₾", label: "ერთ ადამიანზე" },
            { val: "სარფი", label: "მდებარეობა" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-5 sm:py-7 px-3 group">
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
          </div>
          <Link
            to="/product"
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1 group"
          >
            სრული მენიუ <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW_DISHES.map((dish, i) => {
            const colors = ["linear-gradient(135deg,#fef3c7,#fde68a)", "linear-gradient(135deg,#fee2e2,#fecaca)", "linear-gradient(135deg,#dcfce7,#bbf7d0)"];
            return (
              <div key={dish.id} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => handleImageError(e, colors[i % 3])}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">{dish.tag}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex-1 mb-4">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-amber-600 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{dish.desc}</p>
                    <p className="text-lg sm:text-xl font-black text-slate-900 mt-2">{dish.price}</p>
                  </div>
                  <Link
                    to="/product"
                    className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-all duration-300"
                  >
                    🍽️ სრული მენიუ
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="bg-slate-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              ⭐ სტუმრების შეფასებები
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              სტუმრები ამბობენ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-5 sm:p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                    <p className="text-[11px] text-slate-400">
                      {new Date(r.created_at).toLocaleDateString("ka-GE")}
                    </p>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm font-bold">
                    {"★".repeat(r.rating)}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>

          {/* ფორმა ლოკალური დამატებისთვის */}
          <div className="max-w-xl mx-auto bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">✍️ დატოვე შენი შეფასება</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">შენი სახელი</label>
                <input
                  type="text"
                  required
                  placeholder="მაგ: დავითი"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">შეფასება</label>
                <div className="flex gap-2 text-2xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className={`transition-transform active:scale-90 ${star <= newRating ? "text-amber-400" : "text-slate-200"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">შენი აზრი</label>
                <textarea
                  required
                  rows="3"
                  placeholder="დაწერე შენი შთაბეჭდილება..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all duration-200"
              >
                გაგზავნა ✨
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">მოდი — მაგიდა გელოდება</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-2xl shadow-lg"
            >
              📞 {FORMATTED_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}