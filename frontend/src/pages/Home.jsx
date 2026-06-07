import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Droplet,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Users,
  Quote,
} from "lucide-react";

// GSAP Imports for Premium Animations
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import bottleImg from "../assets/bottle.png";
import ceoImg from "../assets/ceo.jpg";
import journeyBanner from "../assets/journey-banner.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef();

  const valueCards = [
    {
      icon: <ShieldCheck size={32} className="text-aura-gold" />,
      title: "Premium Quality",
      desc: "Uncompromising standards in every hydration and FMCG product we deliver.",
    },
    {
      icon: <HeartHandshake size={32} className="text-aura-gold" />,
      title: "Consumer Trust",
      desc: "Building lasting relationships through transparency, purity, and reliability.",
    },
    {
      icon: <Lightbulb size={32} className="text-aura-gold" />,
      title: "Modern Innovation",
      desc: "Embracing new technologies to enhance everyday FMCG experiences.",
    },
    {
      icon: <Users size={32} className="text-aura-gold" />,
      title: "Strong Partnerships",
      desc: "Collaborating with industry leaders to ensure nationwide excellence.",
    },
  ];

  const teamMembers = [
    {
      name: "Ch. Khalid Mahmood",
      role: "Managing Director Operations",
      img: team1,
    },
    {
      name: "Muhammad Zahid Hassan",
      role: "Managing Director Finance",
      img: team2,
    },
  ];

  // GSAP Premium Animations
  useGSAP(
    () => {
      // 1. Entrance Animation (Jab page load ho)
      const tl = gsap.timeline();

      tl.from(".hero-text-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }).from(
        ".hero-bottle-container",
        {
          scale: 0.8,
          opacity: 0,
          rotation: -5,
          duration: 1.5,
          ease: "elastic.out(1, 0.7)",
        },
        "-=0.8",
      );

      // 2. Parallax Scroll Effect (Jab neechay scroll karein)
      gsap.to(".hero-bottle-container", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1, // Smooth scrolling effect
        },
        y: 100, // Bottle thori slow neechay jayegi
        scale: 1.05,
      });

      gsap.to(".hero-bg-glow", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -150, // Glow thora upar jayega
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full bg-white flex flex-col" ref={containerRef}>
      <style>
        {`
          @keyframes smoothFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
          }
          .animate-floating {
            animation: smoothFloat 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* 1. Premium Animated Hero Section */}
      <section className="hero-section relative w-full bg-[#0a0310] overflow-hidden">
        <div className="hero-bg-glow absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e0b2b] via-[#0a0310] to-[#0a0310] opacity-80 pointer-events-none"></div>

        {/* Glow effect */}
        <div className="hero-bg-glow absolute top-20 right-20 w-64 h-64 bg-aura-gold rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh]">
          <div className="flex flex-col gap-6 z-10 text-center md:text-left">
            <div className="hero-text-element flex items-center justify-center md:justify-start gap-4">
              <div className="h-[2px] w-12 bg-aura-gold"></div>
              <p className="text-aura-gold text-xs font-bold tracking-widest uppercase">
                Premium Hydration & FMCG Solutions
              </p>
            </div>

            <h1 className="hero-text-element text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Aura Hydration <br /> <span className="text-white">& Co.</span>
            </h1>

            <p className="hero-text-element text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              We deliver quality, trust, and innovation across the FMCG sector.
              From premium hydration solutions to everyday consumer products,
              our commitment is to create value that improves lives and builds
              lasting customer confidence.
            </p>

            {/* Buttons Area */}
            <div className="hero-text-element relative z-30 flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center md:justify-start pointer-events-auto">
              <Link
                to="/products"
                className="flex items-center gap-2 bg-aura-gold hover:bg-yellow-500 text-black px-6 py-3 rounded font-bold transition-all w-full sm:w-auto justify-center cursor-pointer shadow-[0_0_20px_rgba(216,170,71,0.3)] hover:shadow-[0_0_30px_rgba(216,170,71,0.6)]"
              >
                <Settings size={18} />
                Explore Products
              </Link>
              <Link
                to="/features"
                className="flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded font-bold transition-all w-full sm:w-auto justify-center cursor-pointer"
              >
                <Droplet size={18} />
                View Water Features
              </Link>
            </div>
          </div>

          {/* Premium Animated Bottle Container */}
          <div className="hero-bottle-container relative z-10 flex justify-center items-center w-full h-[400px] md:h-[550px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-aura-gold/30 rounded-full filter blur-[80px] pointer-events-none"></div>

            <div className="animate-floating relative inline-flex h-full max-w-full rounded-[2.5rem] overflow-hidden border border-aura-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(216,170,71,0.2)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 z-10 pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></div>

              <img
                src={bottleImg}
                alt="Aura Plus Water Bottle"
                className="h-full w-full object-cover transform group-hover:scale-105 group-hover:rotate-[-2deg] transition-transform duration-700 relative z-20"
              />
            </div>

            {/* Dynamic Floating Callouts (Premium Feel) */}
            <div
              className="absolute top-10 -left-4 hidden md:flex items-center gap-2 bg-black/60 border border-aura-gold/30 p-3 rounded-xl backdrop-blur-md shadow-2xl animate-floating"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-2 h-2 bg-aura-gold rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold tracking-wider">
                100% Purity
              </span>
            </div>

            <div
              className="absolute bottom-20 -right-4 hidden md:flex items-center gap-2 bg-black/60 border border-aura-gold/30 p-3 rounded-xl backdrop-blur-md shadow-2xl animate-floating"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-2 h-2 bg-aura-gold rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold tracking-wider">
                Added Minerals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Cards Section */}
      <section
        id="values"
        className="relative w-full bg-gray-50 py-20 px-6 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0310] mb-4">
              Our Core <span className="text-aura-gold">Values</span>
            </h2>
            <div className="h-1 w-20 bg-aura-gold mx-auto rounded mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-2xl hover:-translate-y-2 hover:border-aura-gold transition-all duration-300 group flex flex-col items-center text-center shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-200 group-hover:border-aura-gold group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a0310] mb-3 group-hover:text-aura-gold transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CEO Message Section */}
      <section
        id="leadership"
        className="relative py-20 px-6 bg-[#12071d] border-t border-aura-purple/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={56} className="text-aura-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Message from the <span className="text-aura-gold">Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-10">
            "At Aura Hydration & Co., our vision extends far beyond
            manufacturing. We are dedicated to enriching lives by setting
            uncompromising standards in purity and quality. Every product we
            deliver is a testament to our commitment to excellence, innovation,
            and the absolute trust of our consumers."
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full mb-6 border-4 border-aura-gold overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(216,170,71,0.4)] bg-[#0a0310]">
              <img
                src={ceoImg}
                alt="Engr. Aftab Ahmad"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-aura-gold text-3xl md:text-4xl tracking-wide mt-2">
              Engr. Aftab Ahmad
            </h4>
            <p className="text-lg md:text-xl text-gray-400 font-semibold tracking-[0.3em] mt-3">
              Chief Executive
            </p>
          </div>
        </div>
      </section>

      {/* 4. Products Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0310] mb-4">
              Our Featured <span className="text-aura-gold">Products</span>
            </h2>
            <div className="h-1 w-20 bg-aura-gold mx-auto rounded mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover our range of premium hydration solutions crafted for
              purity, health, and everyday excellence.
            </p>
          </div>

          <div className="bg-[#f8f9fa] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-5/12 min-h-[350px] md:min-h-[500px] relative flex justify-center items-center p-4">
              <img
                src={bottleImg}
                alt="Aura Plus"
                className="w-full h-full object-contain relative z-0 hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 text-center md:text-left flex flex-col justify-center">
              <div className="inline-block bg-aura-gold/20 text-yellow-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 self-start mx-auto md:mx-0">
                Best Seller
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0a0310] mb-4">
                Aura Plus Drinking Water
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the crisp, refreshing taste of Aura Plus. Purified
                through advanced reverse osmosis and enriched with essential
                minerals for your daily hydration needs.
              </p>
              <ul className="text-left space-y-4 mb-10 inline-block md:block mx-auto md:mx-0">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="p-1.5 bg-aura-gold/20 rounded-full">
                    <ShieldCheck size={18} className="text-aura-gold" />
                  </div>
                  100% Ultra-Purified
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="p-1.5 bg-aura-gold/20 rounded-full">
                    <Droplet size={18} className="text-aura-gold" />
                  </div>
                  Added Essential Minerals
                </li>
              </ul>
              <a
                href="https://wa.me/923000230128?text=Hello,%20I%20would%20like%20to%20order%20Aura%20Plus%20Drinking%20Water."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-[#0a0310] text-white hover:bg-aura-gold hover:text-black px-8 py-3 rounded font-bold transition-all w-full md:w-max shadow-md"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Journey Banner Section */}
      <section className="w-full bg-[#0a0310]">
        <div className="w-full max-w-[1600px] mx-auto">
          <img
            src={journeyBanner}
            alt="Aura Hydration Journey"
            className="w-full h-auto object-cover border-y-4 border-aura-gold/30"
          />
        </div>
      </section>

      {/* 6. The Leadership Team Section */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0310] mb-4">
              Our <span className="text-aura-gold">Board of Directors</span>
            </h2>
            <div className="h-1 w-20 bg-aura-gold mx-auto rounded mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              The driving force behind Aura Hydration. A team of visionaries
              dedicated to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center group text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-48 h-48 rounded-full mb-6 border-[6px] border-gray-50 group-hover:border-aura-gold overflow-hidden transition-all duration-300 shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-[#0a0310] mb-2">
                  {member.name}
                </h4>
                <p className="text-aura-gold font-bold tracking-wider uppercase text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
