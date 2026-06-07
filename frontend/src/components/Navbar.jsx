import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Send,
  Menu,
  X,
  Phone,
  Droplet,
  Star,
  ChevronRight,
} from "lucide-react";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Features", path: "/features" },
    { name: "Values", path: "/values" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-2xl relative">
      {/* 1. Premium Top Bar */}
      <div className="w-full bg-[#030105] border-b border-aura-gold/20 px-4 py-1.5 md:px-6 md:py-2 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] md:text-xs text-gray-400 font-medium tracking-wider">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Star size={10} className="text-aura-gold md:w-3 md:h-3" />
            <span className="text-gray-300 hidden sm:block">
              Quality You Trust, Excellence You Deserve
            </span>
            <span className="text-gray-300 sm:hidden">Premium Quality</span>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            {/* Number ko proper WhatsApp link bana diya gaya hai */}
            <a
              href="https://wa.me/923000230128"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-aura-gold cursor-pointer transition-colors"
            >
              <Phone size={10} className="text-aura-gold md:w-3.5 md:h-3.5" />{" "}
              +92 300 0230128
            </a>

            <span className="hidden sm:flex items-center gap-1.5">
              <Droplet size={10} className="text-aura-gold md:w-3.5 md:h-3.5" />{" "}
              Pure Water. Pure Life.
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className="w-full bg-[#0a0310]/90 backdrop-blur-lg border-b border-aura-purple/30 px-4 md:px-6 py-3 transition-all duration-300 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-4 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full overflow-hidden flex items-center justify-center border-2 border-aura-gold/60 bg-[#0a0310] group-hover:border-aura-gold transition-all duration-500 shadow-[0_0_15px_rgba(216,170,71,0.4)] group-hover:shadow-[0_0_30px_rgba(216,170,71,0.6)] group-hover:scale-105 relative cursor-pointer">
              <img
                src={logoImg}
                alt="Aura Hydration Logo"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-wide group-hover:text-aura-gold transition-colors duration-300">
                Aura Hydration
              </h2>
              <p className="text-[9px] md:text-sm text-aura-gold tracking-widest uppercase font-bold mt-0.5">
                FMCG Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`transition-all duration-300 text-sm font-bold px-5 py-2 rounded-full tracking-wide ${
                    isActive
                      ? "bg-aura-gold text-black shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 bg-transparent border-2 border-aura-gold text-aura-gold px-6 py-2 rounded-full hover:bg-aura-gold hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(216,170,71,0.1)] hover:shadow-[0_0_20px_rgba(216,170,71,0.4)]"
          >
            <Send size={16} />
            Contact
          </Link>

          {/* Mobile Menu Icon (Animated) */}
          <button
            className="md:hidden text-white hover:text-aura-gold transition-all duration-300 focus:outline-none p-1"
            onClick={() => setIsOpen(!isOpen)}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* 3. PREMIUM MOBILE DROPDOWN (ANIMATED)
       */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-[#0a0310]/95 to-[#1a0b2e]/95 backdrop-blur-2xl border-b border-aura-gold/30 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col px-6 py-8 gap-3 rounded-b-[2.5rem]">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-aura-gold/10 border border-aura-gold/30 text-aura-gold shadow-[inset_0_0_20px_rgba(216,170,71,0.15)]"
                    : "bg-white/5 border border-transparent text-gray-300 hover:bg-white/10 hover:text-aura-gold"
                }`}
              >
                <span
                  className={`text-lg ${isActive ? "font-extrabold" : "font-medium"}`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <ChevronRight size={20} className="text-aura-gold" />
                )}
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-yellow-500 text-black px-6 py-4 rounded-2xl font-extrabold text-lg transition-all mt-4 w-full shadow-[0_10px_30px_rgba(216,170,71,0.3)] hover:shadow-[0_15px_40px_rgba(216,170,71,0.5)]"
          >
            <Send size={20} />
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
