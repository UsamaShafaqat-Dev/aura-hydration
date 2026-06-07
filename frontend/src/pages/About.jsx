import {
  Target,
  Eye,
  ShieldCheck,
  Droplet,
  Award,
  CheckCircle2,
} from "lucide-react";
import bottleImg from "../assets/bottle.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* 1. Page Header (Dark & Premium) */}
      <section className="relative w-full bg-[#12071d] py-24 overflow-hidden border-b border-aura-purple/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aura-purple/20 via-[#12071d] to-[#12071d] opacity-80 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-aura-gold rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <p className="text-aura-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Discover Our Roots
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            About <span className="text-aura-gold">Aura Hydration</span>
          </h1>
          <div className="h-1 w-24 bg-aura-gold mx-auto rounded mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Building a pure future for a better Pakistan. We are committed to
            delivering 100% pure, safe, and premium hydration solutions to every
            household.
          </p>
        </div>
      </section>

      {/* 2. Our Story / The Merge Section (Light Theme) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0310]">
              The Journey of <span className="text-aura-gold">Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Aura Hydration is not just a brand; it is the culmination of
              decades of expertise, dedication, and a shared vision for a
              healthier tomorrow.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-white rounded-full text-aura-gold border border-gray-200 shrink-0 shadow-sm">
                  <Droplet size={24} />
                </div>
                <div>
                  <h4 className="text-[#0a0310] font-bold text-xl mb-2">
                    10+ Years Technical Experience
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Extensive background in Water Treatment, Minerals, and Spare
                    Parts ensuring the highest purity standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-white rounded-full text-aura-gold border border-gray-200 shrink-0 shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-[#0a0310] font-bold text-xl mb-2">
                    15+ Years Market Experience
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deep-rooted knowledge in FMCG Distribution, Sales, and
                    Market Development across the region.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-aura-gold/30 to-transparent p-[2px] rounded-2xl">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-aura-gold font-extrabold text-xl mb-2">
                    The Merge
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Technical Expertise + Market Experience ={" "}
                    <span className="font-bold text-[#0a0310]">
                      AURA HYDRATION PVT LTD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] md:h-[600px] bg-gray-50 rounded-[3rem] p-8 flex justify-center items-center overflow-hidden border border-gray-200 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 to-transparent"></div>
            <img
              src={bottleImg}
              alt="Aura Plus"
              className="h-full w-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards (Dark Theme - Contrast Break) */}
      <section className="py-20 px-6 bg-[#12071d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a0310] p-10 rounded-3xl border border-aura-purple/50 hover:border-aura-gold transition-colors duration-300 group shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-aura-purple/10 group-hover:text-aura-gold/5 transition-colors duration-500">
              <Target size={200} />
            </div>
            <div className="w-16 h-16 bg-[#12071d] rounded-2xl flex items-center justify-center mb-8 border border-aura-gold/30 shadow-inner relative z-10">
              <Target size={32} className="text-aura-gold" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Our Mission
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              To deliver pure, non-adulterated, high-quality products to the
              people of Pakistan. We strive to create a healthy, prosperous, and
              pure nation through uncompromising standards.
            </p>
          </div>

          <div className="bg-[#0a0310] p-10 rounded-3xl border border-aura-purple/50 hover:border-aura-gold transition-colors duration-300 group shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-aura-purple/10 group-hover:text-aura-gold/5 transition-colors duration-500">
              <Eye size={200} />
            </div>
            <div className="w-16 h-16 bg-[#12071d] rounded-2xl flex items-center justify-center mb-8 border border-aura-gold/30 shadow-inner relative z-10">
              <Eye size={32} className="text-aura-gold" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Our Vision
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              To be the leading FMCG brand in the region, recognized for purity
              that humanity needs. We envision a future where 'Pure Today'
              guarantees a 'Healthy Tomorrow'.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section (Light Theme) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0310] mb-4">
              Why Choose <span className="text-aura-gold">Aura?</span>
            </h2>
            <div className="h-1 w-20 bg-aura-gold mx-auto rounded mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              We don't just process water; we engineer health. Here is what
              makes our products stand out in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pure & Safe",
                desc: "Committed to 100% purity and quality from source to bottle.",
              },
              {
                title: "Balanced Minerals",
                desc: "Enriched with essential minerals for better health and superior hydration.",
              },
              {
                title: "Advanced Treatment",
                desc: "State-of-the-art RO technology for the purest drinking water.",
              },
              {
                title: "Own Treatment Plant",
                desc: "We operate our own facility to maintain complete quality control.",
              },
              {
                title: "Trust & Quality",
                desc: "Products you can completely trust for yourself and your family.",
              },
              {
                title: "Stronger Pakistan",
                desc: "Contributing to the nation's health and economic prosperity.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <CheckCircle2
                  size={24}
                  className="text-aura-gold shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-[#0a0310] font-bold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
