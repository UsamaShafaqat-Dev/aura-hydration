import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ShoppingBag,
  ShieldCheck,
  Droplet,
  Star,
  Check,
  ArrowRight,
  PackageCheck,
  Timer,
} from "lucide-react";
import bottleImg from "../assets/bottle.png";

export default function Products() {
  const { hash } = useLocation();

  // YEH NAYA SCROLL LOGIC HAI
  useEffect(() => {
    if (hash) {
      // Agar link mein hash (#) hai, toh us jagah par smooth scroll karo
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      // Warna page ke bilkul top par raho
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* 1. Page Header (Dark Theme) */}
      <section className="relative w-full bg-[#12071d] py-24 overflow-hidden border-b border-aura-purple/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aura-purple/20 via-[#12071d] to-[#12071d] opacity-80 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-aura-gold rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <p className="text-aura-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Premium Quality
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Our <span className="text-aura-gold">Products</span>
          </h1>
          <div className="h-1 w-24 bg-aura-gold mx-auto rounded mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Experience the pinnacle of purity. Our products are engineered with
            state-of-the-art technology to ensure your health and well-being.
          </p>
        </div>
      </section>

      {/* 2. Main Product Showcase (Light Theme) - YAHAN ID ADD KI HAI */}
      <section id="product-showcase" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row items-stretch">
            {/* Product Image */}
            <div className="w-full lg:w-5/12 min-h-[400px] lg:min-h-[600px] relative flex justify-center items-center p-8 bg-gray-100/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 to-transparent opacity-50"></div>
              <img
                src={bottleImg}
                alt="Aura Plus Drinking Water"
                className="w-full h-full object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
              <div className="absolute top-8 left-8 bg-aura-gold text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md z-20">
                Signature Product
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <span className="text-gray-500 text-sm ml-2">
                  (Premium Grade)
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0310] mb-6">
                Aura Plus Drinking Water
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Aura Plus is not just water; it is a commitment to your health.
                Sourced and purified through an advanced Reverse Osmosis (RO)
                process, our water is enriched with the perfect balance of
                essential minerals to keep you hydrated and energized all day
                long.
              </p>

              {/* RATE LIST / SIZES INTEGRATION */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10">
                <h3 className="font-bold text-lg text-[#0a0310] mb-4 border-b border-gray-200 pb-2">
                  Available Packaging
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {/* Currently Available */}
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-aura-gold uppercase tracking-wider mb-2">
                      Currently Available
                    </p>
                    <div className="flex items-center gap-3 text-gray-800 font-medium">
                      <PackageCheck size={18} className="text-green-600" />{" "}
                      330ml
                    </div>
                    <div className="flex items-center gap-3 text-gray-800 font-medium">
                      <PackageCheck size={18} className="text-green-600" />{" "}
                      500ml
                    </div>
                    <div className="flex items-center gap-3 text-gray-800 font-medium">
                      <PackageCheck size={18} className="text-green-600" />{" "}
                      1500ml (1.5L)
                    </div>
                  </div>

                  {/* Coming Soon */}
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Coming Soon
                    </p>
                    <div className="flex items-center gap-3 text-gray-500 font-medium">
                      <Timer size={18} className="text-gray-400" /> 5000ml (5L)
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-medium">
                      <Timer size={18} className="text-gray-400" /> 19L
                      Dispenser Bottle
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <ShieldCheck size={20} className="text-aura-gold" />
                  </div>
                  100% Pure & Safe
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <Droplet size={20} className="text-aura-gold" />
                  </div>
                  Balanced Minerals
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <Check size={20} className="text-aura-gold" />
                  </div>
                  Advanced RO Technology
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <Check size={20} className="text-aura-gold" />
                  </div>
                  Untouched by Hands
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <a
                  href="https://wa.me/923000230128?text=Hello,%20I%20would%20like%20to%20order%20Aura%20Plus%20Drinking%20Water."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0a0310] text-white hover:bg-aura-gold hover:text-black px-10 py-4 rounded-xl font-bold transition-all w-full sm:w-auto shadow-lg"
                >
                  <ShoppingBag size={20} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coming Soon Section (Dark Theme for Contrast) */}
      <section className="py-24 px-6 bg-[#12071d] border-t border-aura-purple/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-aura-purple rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-aura-gold rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-[#0a0310] rounded-full border border-aura-gold/30 mb-8 shadow-[0_0_30px_rgba(216,170,71,0.15)]">
            <ShoppingBag size={40} className="text-aura-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More FMCG Products{" "}
            <span className="text-aura-gold">Coming Soon!</span>
          </h2>
          <div className="h-1 w-24 bg-aura-gold mx-auto rounded mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            Our journey doesn't stop at hydration. We are continuously
            innovating and preparing to launch a wide range of premium FMCG
            products designed to bring quality and trust to your everyday life.
            Stay tuned for our upcoming catalog!
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-aura-gold font-bold hover:text-white transition-colors border-b-2 border-aura-gold hover:border-white pb-1"
          >
            Contact us for Distribution Inquiries <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
