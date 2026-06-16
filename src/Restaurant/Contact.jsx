import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PHONE = "555133181";
const PHONE_GE = "+995555133181"; // WhatsApp ფორმატი

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  // გვერდის ჩატვირთვის ანიმაციის სტეიტი
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ─── ვალიდაცია ───
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "სახელი სავალდებულოა";
    if (!form.phone.trim()) e.phone = "ტელეფონი სავალდებულოა";
    if (!form.message.trim()) e.message = "შეტყობინება სავალდებულოა";
    return e;
  };

  // ─── გაგზავნა WhatsApp-ით ───
  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const text = encodeURIComponent(
      `გამარჯობა! მე ვარ ${form.name}.\n` +
        `📞 ${form.phone}\n` +
        `👥 სტუმრები: ${form.guests}\n` +
        `💬 ${form.message}`,
    );
    window.open(
      `https://wa.me/${PHONE_GE.replace(/\D/g, "")}?text=${text}`,
      "_blank",
    );
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (field, val) => {
    setForm((p) => ({ ...p, [field]: val }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
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
            <Link
              to="/"
              className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
            >
              მთავარი
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/product"
              className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
            >
              მენიუ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
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
              className="relative py-1 text-amber-400 font-semibold group"
            >
              კონტაქტი
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400" />
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
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold tracking-widest uppercase">
            📞 კონტაქტი · დარეზერვება
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-3">
            დაგვ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
              იკავშირდი
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
            მაგიდის დასაჯავშნად, კითხვებისთვის ან შეკვეთისთვის — მოგვწერე ან
            დარეკე პირდაპირ.
          </p>
        </div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* ─── მარცხენა: ინფო ბლოკები ─── */}
          <div className="lg:col-span-2 space-y-4">
            {/* პირდაპირი კავშირი */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 space-y-4 shadow-sm">
              <h2 className="font-extrabold text-slate-900 text-base sm:text-lg">
                პირდაპირი კავშირი
              </h2>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-amber-500/10">
                  📞
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    ტელეფონი
                  </p>
                  <p className="font-black text-slate-900 text-sm sm:text-base group-hover:text-amber-600 transition-colors">
                    555 13 31 81
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${PHONE_GE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-300 transition-all duration-300 hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-green-500/10">
                  💬
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    WhatsApp
                  </p>
                  <p className="font-black text-slate-900 text-sm group-hover:text-green-600 transition-colors">
                    მოგვწერე პირდაპირ
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Cafe+Sunset+Sarpi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md shadow-blue-500/10">
                  📍
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    მისამართი
                  </p>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                    GGFX+2WC, E70, სარფი
                  </p>
                </div>
              </a>
            </div>

            {/* სამუშაო საათები */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 shadow-sm">
              <h2 className="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2">
                🕐 სამუშაო საათები
              </h2>
              <div className="space-y-2">
                {[
                  {
                    day: "ორშაბათი – პარასკევი",
                    time: "10:00 – 22:00",
                    active: true,
                  },
                  { day: "შაბათი", time: "10:00 – 23:00", active: true },
                  { day: "კვირა", time: "10:00 – 22:00", active: true },
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-xs sm:text-sm text-slate-600">
                      {h.day}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        h.active
                          ? "bg-green-50 text-green-700 border border-green-100"
                          : "bg-red-50 text-red-600 border border-red-100"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500">ახლა ღიაა</span>
              </div>
            </div>

            {/* სერვისები */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 shadow-sm">
              <h2 className="font-extrabold text-slate-900 text-base mb-3">
                სერვისები
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "🍽️ ადგილზე სადილი",
                  "🛍️ წასაღები",
                  "🅿️ პარკინგი",
                  "🧒 ბავშვები",
                  "♿ ეტლი",
                  "🥗 ვეგი",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold rounded-xl transition-all duration-300 hover:bg-amber-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── მარჯვენა: ფორმა ─── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm p-6 sm:p-8">
              {submitted ? (
                /* ══ SUCCESS STATE ══ */
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="text-5xl sm:text-6xl animate-bounce">🎉</div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    WhatsApp გაიხსნა!
                  </h3>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto">
                    შეტყობინება მომზადდა. გაგზავნე WhatsApp-ში და მალე
                    გიპასუხებენ!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        guests: "2",
                        message: "",
                      });
                    }}
                    className="mt-2 px-6 py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold rounded-xl text-sm transition-all duration-300 active:scale-95"
                  >
                    ახალი შეტყობინება
                  </button>
                </div>
              ) : (
                /* ══ FORM ══ */
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      შეტყობინების გაგზავნა
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      შეავსე ფორმა — WhatsApp-ით გაიგზავნება პირდაპირ ჩვენს
                      ნომერზე.
                    </p>
                  </div>

                  {/* სახელი */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      სახელი <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="შენი სახელი"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white ${
                        errors.name
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-amber-400"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* ტელეფონი */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      ტელეფონი <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="5XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white ${
                        errors.phone
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-amber-400"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* სტუმრების რაოდენობა */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      სტუმრების რაოდენობა
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {["1", "2", "3", "4", "5+"].map((n) => (
                        <button
                          key={n}
                          onClick={() => handleChange("guests", n)}
                          className={`py-3 rounded-xl text-sm font-bold border transition-all duration-300 active:scale-95 ${
                            form.guests === n
                              ? "bg-slate-900 text-amber-400 border-slate-900 shadow-md"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:border-amber-400/50"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* შეტყობინება */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      შეტყობინება <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="მაგ: გვინდა მაგიდა 4 კაცზე, პარასკევს საღამოს 19:00-ზე..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white resize-none ${
                        errors.message
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-amber-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* გაგზავნის ღილაკი */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>💬</span>
                    <span>WhatsApp-ით გაგზავნა</span>
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    ან პირდაპირ დარეკე:{" "}
                    <a
                      href={`tel:${PHONE}`}
                      className="text-amber-500 font-semibold hover:underline"
                    >
                      555 13 31 81
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MAP PLACEHOLDER ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <a
          href="https://maps.google.com/?q=Cafe+Sunset+Sarpi"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-40 sm:h-52 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden relative group hover:shadow-md hover:border-amber-500/20 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-slate-950/[0.01] group-hover:bg-transparent transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              🗺️
            </span>
            <p className="font-bold text-slate-700 text-sm group-hover:text-amber-600 transition-colors duration-300">
              Google Maps-ზე გახსნა
            </p>
            <p className="text-xs text-slate-500">GGFX+2WC, E70, სარფი</p>
          </div>
        </a>
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
              item.to === "/contact"
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
