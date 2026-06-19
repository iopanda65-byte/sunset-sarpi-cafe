import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

// ─── სურათები — /public საქაღალდეში ───
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
    price: "15 ₾",
    tag: "შეფის არჩევანი",
    img: imgFood3,
  },
];

const PHONE = "555133181";
const FORMATTED_PHONE = "555 13 31 81";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loadingReview, setLoadingReview] = useState(false);

  // ─── ფორმის სტეიტები ───
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState(5);

  // ბაზიდან კომენტარების წამოღება
  useEffect(() => {
    setIsVisible(true);

    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setReviews(data);
      } else if (error) {
        console.error("შეცდომა კომენტარების წამოღებისას:", error.message);
      }
    };

    fetchReviews();
  }, []);

  // კომენტარის გაგზავნის ფუნქცია
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim() || loadingReview) return;

    setLoadingReview(true);
    const avatarInitials = newName.trim().slice(0, 2).toUpperCase();

    const newReviewObj = {
      name: newName.trim(),
      text: newText.trim(),
      rating: newRating,
      avatar: avatarInitials,
    };

    const { data, error } = await supabase
      .from("reviews")
      .insert([newReviewObj])
      .select();

    setLoadingReview(false);

    if (!error && data && data.length > 0) {
      setReviews([data[0], ...reviews]);
      setNewName("");
      setNewText("");
      setNewRating(5);
    } else if (error) {
      console.error("შეცდომა კომენტარის გაგზავნისას:", error.message);
    }
  };

  // უსაფრთხო ივენთ ჰენდლერი სურათის შეცდომისთვის
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
                  onError={(e) =>
                    handleImageError(
                      e,
                      "linear-gradient(135deg, #1e293b 0%, #78350f 100%)",
                    )
                  }
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

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-6 scrollbar-thin">
          {PREVIEW_DISHES.map((dish, i) => {
            const colors = [
              "linear-gradient(135deg,#fef3c7,#fde68a)",
              "linear-gradient(135deg,#fee2e2,#fecaca)",
              "linear-gradient(135deg,#dcfce7,#bbf7d0)",
            ];
            return (
              <div
                key={dish.id}
                className="group flex-shrink-0 w-[75vw] sm:w-auto snap-start bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 flex flex-col"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => handleImageError(e, colors[i % 3])}
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
            );
          })}
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="bg-slate-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
              ⭐ სტუმრების შეფასებები
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              სტუმრები ამბობენ
            </h2>
            <p className="text-sm text-slate-500">
              4.8 ★ · {reviews.length} მიმოხილვა საიტზე
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-6 mb-12 scrollbar-thin">
            {reviews.map((r, i) => (
              <div
                key={r.id || i}
                className="flex-shrink-0 w-[80vw] sm:w-auto snap-start bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-5 sm:p-6 flex flex-col gap-4 hover:border-amber-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                    <p className="text-[11px] text-slate-400">
                      {r.created_at
                        ? new Date(r.created_at).toLocaleDateString("ka-GE")
                        : "ახლახან"}
                    </p>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm font-bold">
                    {"★".repeat(Math.max(0, Math.min(5, r.rating || 5)))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>

          {/* ─── ახალი ფორმა კომენტარის დასაწერად ─── */}
          <div className="max-w-xl mx-auto bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              ✍️ დატოვე შენი შეფასება
            </h3>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  შენი სახელი
                </label>
                <input
                  type="text"
                  required
                  placeholder="მაგ: დავითი"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  შეფასება (ვარსკვლავები)
                </label>
                <div className="flex gap-2 text-2xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className={`transition-transform duration-100 active:scale-90 ${
                        star <= newRating ? "text-amber-400" : "text-slate-200"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  შენი აზრი (რა მოგეწონა / რა არა)
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="დაწერე შენი შთაბეჭდილება კერძებზე, სერვისზე..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loadingReview}
                className={`w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 shadow-md ${
                  loadingReview ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loadingReview ? "იგზავნება..." : "გაგზავნა ✨"}
              </button>
            </form>
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
            href="https://www.google.com/maps/place/Sunset+Sarpi/@41.5215,41.5492,15z"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.3!2d41.5492!3d41.5215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067b14067ab2d35%3A0x7b6cfdb2112423bb!2sSunset%20Sarpi!5e0!3m2!1ska!2sge!4v1700000000000"
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
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-56 h-56 bg-orange-500/5 rounded-full blur-3xl" />

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
              📞 {FORMATTED_PHONE}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              📍 მისამართი და საათები
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
