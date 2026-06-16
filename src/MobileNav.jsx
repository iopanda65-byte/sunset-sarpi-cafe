import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { to: "/", icon: "🏠", label: "მთავარი" },
    { to: "/product", icon: "🍽️", label: "მენიუ" },
    { to: "/about", icon: "ℹ️", label: "შესახებ" },
    { to: "/contact", icon: "📞", label: "კონტაქტი" },
  ];

  return (
    <>
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-[100] bg-slate-950/95 backdrop-blur-md border-t border-white/5 flex pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        {menuItems.map((item) => {
          const isActive = currentPath === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 transition-colors ${
                isActive
                  ? "text-amber-400"
                  : "text-slate-400 hover:text-amber-400"
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[9px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      {/* სივრცის კომპენსატორი, რომ კონტენტი არ გადაიფაროს */}
      <div className="sm:hidden h-20 block clear-both" />
    </>
  );
}
