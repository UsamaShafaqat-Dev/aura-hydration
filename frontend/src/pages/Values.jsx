import { Link } from "react-router-dom"; // IMPORT ADD KIYA HAI
import {
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Users,
  Leaf,
  Award,
} from "lucide-react";

export default function Values() {
  const coreValues = [
    {
      icon: <ShieldCheck size={36} className="text-aura-gold" />,
      title: "Uncompromising Quality",
      desc: "Quality is not just a standard; it's our habit. We ensure that every product leaving our facility meets the highest global benchmarks for purity and safety.",
    },
    {
      icon: <HeartHandshake size={36} className="text-aura-gold" />,
      title: "Consumer Trust",
      desc: "We believe in building lifelong relationships. Transparency and reliability are the cornerstones of the trust our customers place in us every day.",
    },
    {
      icon: <Lightbulb size={36} className="text-aura-gold" />,
      title: "Continuous Innovation",
      desc: "We constantly invest in state-of-the-art technology and modern FMCG practices to deliver better, safer, and more efficient products to the market.",
    },
    {
      icon: <Users size={36} className="text-aura-gold" />,
      title: "Collaborative Growth",
      desc: "Our success is shared. We foster strong partnerships with our distributors, employees, and stakeholders to ensure mutual growth and nationwide excellence.",
    },
    {
      icon: <Leaf size={36} className="text-aura-gold" />,
      title: "Sustainable Practices",
      desc: "We are deeply committed to the environment. Our processes are designed to minimize waste and promote sustainability for a greener, better Pakistan.",
    },
    {
      icon: <Award size={36} className="text-aura-gold" />,
      title: "Integrity & Ethics",
      desc: "We conduct our business with absolute honesty. Ethical practices are deeply ingrained in our corporate culture and every decision we make.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* 1. Page Header (Dark Theme) */}
      <section className="relative w-full bg-[#12071d] py-24 overflow-hidden border-b border-aura-purple/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aura-purple/20 via-[#12071d] to-[#12071d] opacity-80 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <p className="text-aura-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">
            What We Stand For
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Our Core <span className="text-aura-gold">Values</span>
          </h1>
          <div className="h-1 w-24 bg-aura-gold mx-auto rounded mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            At Aura Hydration & Co., our values are the guiding principles that
            shape our culture, drive our decisions, and define our commitment to
            excellence.
          </p>
        </div>
      </section>

      {/* 2. Values Grid Section (Light Theme) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aura-gold to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-200 group-hover:border-aura-gold group-hover:bg-[#0a0310] transition-colors duration-300 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0a0310] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section (Dark Theme for Strong Finish) */}
      <section className="py-20 px-6 bg-[#0a0310] border-t border-aura-purple/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aura-purple/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experience the{" "}
            <span className="text-aura-gold">Aura Difference</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join hands with a brand that values purity, health, and trust above
            all else. Discover our premium range today.
          </p>

          {/* REACT ROUTER LINK USE KIYA HAI YAHA */}
          <Link
            to="/products#product-showcase"
            className="inline-flex items-center justify-center bg-aura-gold text-black hover:bg-yellow-500 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(216,170,71,0.2)] hover:shadow-[0_0_30px_rgba(216,170,71,0.4)]"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
}
