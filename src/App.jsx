import { useEffect } from "react"; // ◄ დაემატა useEffect
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Restaurant/Home";
import Contact from "./Restaurant/Contact";
import About from "./Restaurant/About";
import Product from "./Restaurant/Product";
import MobileNav from "./MobileNav";

// ─── ანიმაციის პარამეტრები (მატრასების საიტივით) ───
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } },
};

// ცალკე შიდა კომპონენტი, რათა useLocation-მა სწორად იმუშაოს ანიმაციაზე
function AnimatedRoutes() {
  const location = useLocation();

  // ◄ აი აქ დაემატა სქროლის ავტომატური აყვანა ყოველ გადასვლაზე
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/product"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Product />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        {/* აქ ტრიალებს გვერდები თავისი ანიმაციით */}
        <AnimatedRoutes />

        {/* მობილური მენიუ, რომელიც ნებისმიერ გვერდზე ეკრანის ბოლოში იქნება მიჭედებული */}
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
