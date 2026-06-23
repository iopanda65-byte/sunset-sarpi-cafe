import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// სრული მენიუს მონაცემები შენი ფოლდერის (public/) ფოტოების მიხედვით
const ALL_DISHES = [
  {
    id: 1,
    name: "აჭარული ხაჭაპური",
    desc: "ახალი ცომი, სახლის ყველი, კარაქი და კვერცხის გული",
    price: "12 ₾",
    category: "khachapuri",
    tag: "პოპულარული",
    img: "/xachapuri.png",
  },
  {
    id: 2,
    name: "ხინკალი (კალაკური)",
    desc: "ხელნაკეთი, საქონლისა და ღორის ნაზავი, ახალი მწვანილი და წვენი",
    price: "1.5 ₾ / ც",
    category: "meat",
    tag: "საუკეთესო",
    img: "/xinkali.png",
  },
  {
    id: 3,
    name: "ოჯახური ღორის ხორცით",
    desc: "ახალი ხორცი, შემწვარი კარტოფილი, ხახვი და ქართული სუნელები",
    price: "15 ₾",
    category: "meat",
    tag: "შეფის არჩევანი",
    img: "/ojaxuri.jpeg",
  },
  {
    id: 4,
    name: "მწვადი საქონლის",
    desc: "ნახშირზე შემწვარი რბილი ხორცი, ბროწეულის მარცვლებითა და ხახვით",
    price: "18 ₾",
    category: "meat",
    tag: "ცეცხლიდან",
    img: "/mtsvadi.jpeg",
  },
  {
    id: 5,
    name: "ბადრიჯანი ნიგვზით",
    desc: "შემწვარი ბადრიჯანი ნიგვზის საკაზმით, სუნელებითა და ბროწეულით",
    price: "10 ₾",
    category: "salads",
    tag: "ცივი კერძი",
    img: "/badrijani.jpeg",
  },
  {
    id: 6,
    name: "ცეზარი ქათმით",
    desc: "კრუტონები, აისბერგი, შემწვარი ქათმის ფილე და საფირმო სოუსი",
    price: "14 ₾",
    category: "salads",
    tag: "ევროპული",
    img: "/cesari.jpeg",
  },
  {
    id: 7,
    name: "ქართული სალათი ნიგვზით",
    desc: "ახალი კიტრი და პომიდორი კახური ზეთით, მწვანილითა და ნიგვზით",
    price: "9 ₾",
    category: "salads",
    tag: "ჯანსაღი",
    img: "/nigvzianisalat.jpeg",
  },
  {
    id: 8,
    name: "ცხელი ხარჩო",
    desc: "ტრადიციული მეგრული ხარჩო ნოყიერი საქონლის ხორცითა და სუნელებით",
    price: "12 ₾",
    category: "soup",
    tag: "ცხელი კერძი",
    img: "/xarcho.png",
  },
  {
    id: 9,
    name: "საფირმო სუპი",
    desc: "ნაზი ბულიონი, ახალი ბოსტნეული და მწვანილი",
    price: "8 ₾",
    category: "soup",
    tag: "დღის სუპი",
    img: "/supi.png",
  },
  {
    id: 10,
    name: "უნგრული გულაში",
    desc: "სქელი წვნიანი რბილი ხორცით, კარტოფილითა და წიწაკით",
    price: "13 ₾",
    category: "soup",
    tag: "ნოყიერი",
    img: "/gulashi.png",
  },
  {
    id: 11,
    name: "კარტოფილის პიურე",
    desc: "ნაზი პიურე ნაღებითა და კარაქით",
    price: "6 ₾",
    category: "meat",
    tag: "გარნირი",
    img: "/Piure.png",
  },
  {
    id: 12,
    name: "სახლის ლიმონათი",
    desc: "ციტრუსების ახალი წვენი, პიტნა, გაზიანი წყალი და ყინული",
    price: "5 ₾",
    category: "drinks",
    tag: "გამაგრილებელი",
    img: "/Limonati.png",
  },
  {
    id: 13,
    name: "არომატული ჩაი",
    desc: "ნატურალური მთის ყვავილების ან შავი ჩაი ლიმონით",
    price: "4 ₾",
    category: "drinks",
    tag: "ცხელი სასმელი",
    img: "/chai.png",
  },
  {
    id: 14,
    name: "ნალექიანი ყავა",
    desc: "ახლად დაფქული არომატული ყავა ქვიშაზე",
    price: "3.5 ₾",
    category: "drinks",
    tag: "ენერგია",
    img: "/coffee.png",
  },
  {
    id: 15,
    name: "თაფლის ბაქლავა",
    desc: "ტრადიციული აღმოსავლური ნუსხა ბევრი ნიგვზითა და თაფლის სიროფით",
    price: "6 ₾",
    category: "dessert",
    tag: "ტკბილეული",
    img: "/baclava.jpeg",
  },
];

const CATEGORIES = [
  { id: "all", text: "ყველა კერძი" },
  { id: "khachapuri", text: "ხაჭაპური" },
  { id: "meat", text: "ხორციანი & გარნირი" },
  { id: "salads", text: "სალათები" },
  { id: "soup", text: "წვნიანები" },
  { id: "drinks", text: "სასმელები" },
  { id: "dessert", text: "დესერტი" },
];

const PHONE = "555133181";
const NAV_LINKS = [
  { text: "მთავარი", path: "/" },
  { text: "მენიუ", path: "/product" },
  { text: "ჩვენ შესახებ", path: "/about" },
  { text: "კონტაქტი", path: "/contact" },
];

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filteredDishes =
    activeCategory === "all"
      ? ALL_DISHES
      : ALL_DISHES.filter((dish) => dish.category === activeCategory);

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
            <span className="group-hover:rotate-12 transition-transform duration-300">
              🌅
            </span>
            <span className="text-amber-400">Cafe</span> Sunset
          </Link>

          {/* დესკტოპ ნავიგაცია */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`relative py-1 hover:text-amber-400 transition-colors duration-300 group ${
                  link.path === "/product" ? "text-amber-400" : ""
                }`}
              >
                {link.text}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full ${
                    link.path === "/product" ? "w-full" : "w-0"
                  }`}
                />
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
                className={`block py-2 font-medium text-sm transition-colors border-b border-white/5 last:border-none ${
                  link.path === "/product"
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
            ✨ ტრადიციული & თანამედროვე
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-3">
            ჩვენი <span className="text-amber-400">მენიუ</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
            ყველა კერძი მზადდება ნატურალური, ადგილობრივი პროდუქტებითა და ძველი
            ოჯახური რეცეპტების ერთგულებით.
          </p>
        </div>
      </section>

      {/* ══════════ CATEGORY FILTERS ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-amber-400 shadow-md shadow-slate-900/10 border-transparent"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {cat.text}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ DISHES GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish, i) => {
            const colors = [
              "linear-gradient(135deg,#fef3c7,#fde68a)",
              "linear-gradient(135deg,#fee2e2,#fecaca)",
              "linear-gradient(135deg,#dcfce7,#bbf7d0)",
              "linear-gradient(135deg,#e0f2fe,#bae6fd)",
            ];
            return (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col scale-100 opacity-100"
                style={{
                  animation: "fadeIn 0.4s ease-out forwards",
                }}
              >
                {/* გასწორდა: bg-white დაემატა და შეიცვალა object-contain-ით */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) =>
                      handleImageError(e, colors[i % colors.length])
                    }
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                      {dish.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1 mb-4">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-amber-600 transition-colors line-clamp-1">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 h-8 leading-relaxed">
                      {dish.desc}
                    </p>
                    <p className="text-base sm:text-lg font-black text-slate-900 mt-2">
                      {dish.price}
                    </p>
                  </div>

                  <a
                    href={`tel:${PHONE}`}
                    className="w-full py-2.5 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold rounded-xl text-center transition-all duration-300 shadow-sm"
                  >
                    📞 შეკვეთა / დაჯავშნა
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm font-medium">
            ამ კატეგორიაში კერძები დროებით მიუწვდომელია.
          </div>
        )}
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-slate-950 text-white py-12 px-4 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Cafe Sunset. ყველა უფლება დაცულია.
          </p>
          <div className="flex justify-center gap-4 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              მთავარი
            </Link>
            <span>·</span>
            <Link
              to="/about"
              className="hover:text-amber-400 transition-colors"
            >
              ჩვენ შესახებ
            </Link>
            <span>·</span>
            <Link
              to="/contact"
              className="hover:text-amber-400 transition-colors"
            >
              კონტაქტი
            </Link>
          </div>
        </div>
      </footer>

      {/* საჭირო მარტივი ანიმაციის სტილი ფილტრებისთვის */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
