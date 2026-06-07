import {
  ShieldCheck,
  Droplet,
  Activity,
  Settings,
  Sparkles,
  Package,
} from "lucide-react";
import bottleImg from "../assets/bottle.png";

export default function Features() {
  const featuresList = [
    {
      icon: <ShieldCheck size={32} className="text-aura-gold" />,
      title: "100% Ultra-Purified",
      desc: "Our multi-stage purification process ensures that every single drop is free from harmful contaminants, bacteria, and impurities.",
    },
    {
      icon: <Droplet size={32} className="text-aura-gold" />,
      title: "Added Essential Minerals",
      desc: "We don't just purify; we remineralize. Aura Plus contains the perfect balance of Calcium, Magnesium, and Potassium for your health.",
    },
    {
      icon: <Settings size={32} className="text-aura-gold" />,
      title: "Advanced RO Technology",
      desc: "Utilizing state-of-the-art Reverse Osmosis systems to achieve unmatched purity levels that meet international standards.",
    },
    {
      icon: <Activity size={32} className="text-aura-gold" />,
      title: "Optimal pH Balance",
      desc: "Carefully balanced pH levels to ensure a crisp, refreshing taste that perfectly complements your body's natural chemistry.",
    },
    {
      icon: <Sparkles size={32} className="text-aura-gold" />,
      title: "Untouched by Hands",
      desc: "From purification to filling and sealing, our fully automated plant ensures zero human contact for absolute hygiene.",
    },
    {
      icon: <Package size={32} className="text-aura-gold" />,
      title: "Premium Food-Grade Packaging",
      desc: "Packaged in high-quality, BPA-free food-grade plastic that preserves the purity and taste of the water.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* 1. Page Header (Dark Theme) */}
      <section className="relative w-full bg-[#12071d] py-24 overflow-hidden border-b border-aura-purple/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aura-purple/20 via-[#12071d] to-[#12071d] opacity-80 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <p className="text-aura-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
            What Sets Us Apart
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Product <span className="text-aura-gold">Features</span>
          </h1>
          <div className="h-1 w-24 bg-aura-gold mx-auto rounded mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Engineering health through water. Discover the exceptional features
            that make Aura Hydration the premium choice for you and your family.
          </p>
        </div>
      </section>

      {/* 2. Core Features Grid (Light Theme) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-200 group-hover:border-aura-gold group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0a0310] mb-4 group-hover:text-aura-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Purification Process (Dark Theme) */}
      <section className="py-24 px-6 bg-[#0a0310] border-t border-aura-purple/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] md:h-[600px] flex justify-center items-center">
            <div className="absolute inset-0 bg-aura-gold rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>
            <img
              src={bottleImg}
              alt="Aura Plus Bottle"
              className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(216,170,71,0.2)] hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-aura-gold">Purification</span> Process
              </h2>
              <div className="h-1 w-20 bg-aura-gold rounded mb-6"></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                We employ a rigorous, multi-step water treatment process to
                guarantee absolute purity before a single drop reaches your
                bottle.
              </p>
            </div>

            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-aura-purple/30">
              {[
                {
                  step: "01",
                  title: "Source Extraction",
                  desc: "Sourcing from the most reliable and deeply protected underground reserves.",
                },
                {
                  step: "02",
                  title: "Reverse Osmosis (RO)",
                  desc: "Forcing water through semi-permeable membranes to remove microscopic impurities.",
                },
                {
                  step: "03",
                  title: "Mineral Enrichment",
                  desc: "Adding vital minerals back into the water for taste and health benefits.",
                },
                {
                  step: "04",
                  title: "UV & Ozonation",
                  desc: "Final sterilization process to ensure zero microbial activity.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 relative z-10">
                  <div className="w-12 h-12 bg-[#12071d] rounded-full border-2 border-aura-gold flex items-center justify-center font-bold text-aura-gold shrink-0 shadow-[0_0_15px_rgba(216,170,71,0.2)]">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
