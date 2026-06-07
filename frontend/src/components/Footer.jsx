import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronRight,
  Lock,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import logoImg from "../assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const data = await res.json();

      if (data.success) {
        setToast({ show: true, message: data.message, type: "success" });
        setEmail(""); // Form clear
      } else {
        setToast({ show: true, message: data.message, type: "error" });
      }
    } catch (err) {
      setToast({
        show: true,
        message: "Server connection failed.",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <footer className="relative w-full bg-[#050108] pt-24 pb-10 overflow-hidden mt-auto">
      {/* Autofill Fix Styles */}
      <style>
        {`
          /* Browser Autofill CSS Override for Premium Dark Theme */
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active{
              -webkit-box-shadow: 0 0 0 30px #11071a inset !important;
              -webkit-text-fill-color: white !important;
              border-radius: 9999px !important;
              transition: background-color 5000s ease-in-out 0s;
          }
        `}
      </style>

      {/* Premium Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aura-gold/50 to-transparent opacity-70"></div>

      {/* Abstract Luxury Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-aura-gold/5 rounded-full filter blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-aura-purple/10 rounded-full filter blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4 group w-max">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center border border-aura-gold/30 bg-[#0a0310] group-hover:border-aura-gold transition-all duration-500 shadow-[0_0_20px_rgba(216,170,71,0.15)] group-hover:shadow-[0_0_30px_rgba(216,170,71,0.4)]">
                <img
                  src={logoImg}
                  alt="Aura Hydration Logo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-wide group-hover:text-aura-gold transition-colors duration-300">
                  Aura Hydration
                </h2>
                <p className="text-[10px] text-aura-gold tracking-[0.25em] uppercase font-bold mt-1">
                  FMCG Excellence
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed font-light mt-2 pr-4">
              Pioneering the standard of purity in Pakistan. We deliver
              uncompromising hydration solutions engineered for your well-being.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/share/18YGnUsx21/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-aura-gold hover:text-black hover:border-aura-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,170,71,0.2)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/comingsooon8686?igsh=NmthdDZrc2FkdDk="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-aura-gold hover:text-black hover:border-aura-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,170,71,0.2)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-aura-gold hover:text-black hover:border-aura-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,170,71,0.2)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-aura-gold rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 mt-4">
              {["Home", "About", "Products", "Features", "Values"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-aura-gold transition-all duration-300 flex items-center gap-2 text-sm group font-light"
                    >
                      <ChevronRight
                        size={14}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-aura-gold rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-5 mt-4">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin
                  size={18}
                  className="text-aura-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                  <strong className="text-gray-300">Head Office:</strong>
                  <br />
                  2/A, Mozang Chungi,
                  <br /> Ferozpur Road, Lahore
                </span>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin
                  size={18}
                  className="text-aura-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                  <strong className="text-gray-300">Regional Office:</strong>
                  <br />
                  Near Challan Wala Pul,
                  <br /> Opposite Sports Complex, RYK
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone
                  size={18}
                  className="text-aura-gold shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href="https://wa.me/923000230128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm font-light hover:text-aura-gold transition-colors"
                >
                  +92 300 0230128
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail
                  size={18}
                  className="text-aura-gold shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href="mailto:info@aurahydration.com"
                  className="text-gray-400 text-sm font-light hover:text-aura-gold transition-colors"
                >
                  info@aurahydration.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-aura-gold rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              Join our exclusive mailing list for the latest updates on FMCG
              distributions.
            </p>

            {/* Newsletter Form */}
            <div className="relative">
              <form
                onSubmit={handleSubscribe}
                className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-aura-gold focus-within:bg-white/10 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] focus-within:shadow-[0_0_20px_rgba(216,170,71,0.15)]"
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white px-5 py-2.5 text-sm outline-none placeholder-gray-500 font-light rounded-full"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-aura-gold text-black w-10 h-10 shrink-0 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(216,170,71,0.3)] disabled:opacity-70 z-10"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} className="-ml-0.5 mt-0.5" />
                  )}
                </button>
              </form>

              {/* Toast Notification under input */}
              <div
                className={`absolute top-14 left-0 w-full p-2 rounded-xl text-xs flex items-center gap-2 transition-all duration-300 ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"} ${toast.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <AlertCircle size={14} />
                )}
                {toast.message}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"></div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Aura Hydration & Co. All rights
            reserved.
            <Link
              to="/admin/login"
              className="text-white/20 hover:text-aura-gold transition-colors ml-1"
              title="Admin Access"
            >
              <Lock size={12} />
            </Link>
          </p>
          <p className="tracking-wide flex items-center gap-1.5">
            Crafted with <span className="text-aura-gold">✦</span> by
            <a
              href="https://wa.me/923053820963"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-bold tracking-widest ml-1 hover:text-aura-gold cursor-pointer transition-colors"
            >
              USAMA MERN-STACK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
