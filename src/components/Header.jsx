import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colorMap = {
  blue: {
    from: "from-blue-600",
    to: "to-blue-800",
    text: "text-blue-100",
    hover: "hover:text-white",
    bg: "bg-blue-600",
    border: "border-blue-100",
    scrolledText: "text-blue-600",
    mobileBg: "bg-blue-700",
  },
  purple: {
    from: "from-purple-600",
    to: "to-purple-800",
    text: "text-purple-100",
    hover: "hover:text-white",
    bg: "bg-purple-600",
    border: "border-purple-100",
    scrolledText: "text-purple-600",
    mobileBg: "bg-purple-700",
  },
  pink: {
    from: "from-pink-600",
    to: "to-pink-800",
    text: "text-pink-100",
    hover: "hover:text-white",
    bg: "bg-pink-600",
    border: "border-pink-100",
    scrolledText: "text-pink-600",
    mobileBg: "bg-pink-700",
  },
  yellow: {
    from: "from-yellow-600",
    to: "to-yellow-800",
    text: "text-yellow-100",
    hover: "hover:text-white",
    bg: "bg-yellow-600",
    border: "border-yellow-100",
    scrolledText: "text-yellow-600",
    mobileBg: "bg-yellow-700",
  },
  teal: {
    from: "from-teal-600",
    to: "to-teal-800",
    text: "text-teal-100",
    hover: "hover:text-white",
    bg: "bg-teal-600",
    border: "border-teal-100",
    scrolledText: "text-teal-600",
    mobileBg: "bg-teal-700",
  },
  cyan: {
    from: "from-cyan-600",
    to: "to-cyan-800",
    text: "text-cyan-100",
    hover: "hover:text-white",
    bg: "bg-cyan-600",
    border: "border-cyan-100",
    scrolledText: "text-cyan-600",
    mobileBg: "bg-cyan-700",
  },
  orange: {
    from: "from-orange-600",
    to: "to-orange-800",
    text: "text-orange-100",
    hover: "hover:text-white",
    bg: "bg-orange-600",
    border: "border-orange-100",
    scrolledText: "text-orange-600",
    mobileBg: "bg-orange-700",
  },
  green: {
    from: "from-green-600",
    to: "to-green-800",
    text: "text-green-100",
    hover: "hover:text-white",
    bg: "bg-green-600",
    border: "border-green-100",
    scrolledText: "text-green-600",
    mobileBg: "bg-green-700",
  },
  indigo: {
    from: "from-indigo-600",
    to: "to-indigo-800",
    text: "text-indigo-100",
    hover: "hover:text-white",
    bg: "bg-indigo-600",
    border: "border-indigo-100",
    scrolledText: "text-indigo-600",
    mobileBg: "bg-indigo-700",
  },
  red: {
    from: "from-red-600",
    to: "to-red-800",
    text: "text-red-100",
    hover: "hover:text-white",
    bg: "bg-red-600",
    border: "border-red-100",
    scrolledText: "text-red-600",
    mobileBg: "bg-red-700",
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentColor = location.pathname.startsWith("/services")
    ? location.state?.color || "blue"
    : "blue";
  const colors = colorMap[currentColor] || colorMap.blue;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Insurance Plans", state: { color: "blue" } },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? `bg-white/95 backdrop-blur-md shadow-lg py-2 border-b ${colors.border}`
          : `bg-gradient-to-r ${colors.from} ${colors.to} py-3`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold ${
                isScrolled ? colors.scrolledText : "text-white"
              } tracking-wide`}
            >
              <span className="font-extrabold">COMPASS</span>
              <span className="font-medium"> INSURANCE</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                state={link.state || {}}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-gray-600 hover:" + colors.scrolledText
                    : `${colors.text} ${colors.hover}`
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-5 ${
                    isScrolled ? colors.bg : "bg-white"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:text-gray-500 focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                isScrolled ? "bg-white" : colors.mobileBg
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  state={link.state || {}}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled
                      ? "text-gray-600 hover:bg-gray-100"
                      : "text-white hover:bg-opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
