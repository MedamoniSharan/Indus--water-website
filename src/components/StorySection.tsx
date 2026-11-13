"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Shield, Truck } from "lucide-react";

const storyPillars = [
  {
    title: "Rigorous Safety Standards",
    icon: Shield,
    description:
      "Continuous water testing at source and automated sealed bottling ensure compliance with highest certified standards.",
  },
  {
    title: "Eco-Conscious Packaging",
    icon: Sparkles,
    description:
      "100% recyclable food-grade PET bottles designed with structural efficiency to minimize environmental plastic footprint.",
  },
  {
    title: "Round-the-Clock Logistics",
    icon: Truck,
    description:
      "Turakapalem production and local delivery vehicles active 24/7 to guarantee prompt residential and event hydration.",
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yPortrait = useTransform(scrollYProgress, [0, 1], [60, -50]);
  const yNarrative = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yBanner = useTransform(scrollYProgress, [0, 1], [50, -35]);
  const scaleBanner = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 bg-white border-b border-black/[0.04] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Editorial Block with Split Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Photo Visual (Parallax Layer A) */}
          <motion.div
            style={{ y: yPortrait }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-black/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-[#F5F5F7] group">
              <img
                src="/images/happy-child.jpg"
                alt="INDUS Pure Water Family Care"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6 bg-white/90 backdrop-blur-md border-t border-black/[0.04]">
                <div className="flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5 text-[#C8102E] fill-[#C8102E]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#C8102E]">
                    Family Purity
                  </p>
                </div>
                <p className="text-sm font-semibold text-[#1D1D1F]">
                  Hydration trusted across generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story Narrative (Parallax Layer B) */}
          <motion.div
            style={{ y: yNarrative }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
              About <span className="font-brand font-normal text-sm normal-case tracking-wide">Indus</span>
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1D1D1F] text-balance mb-6 leading-tight">
              A thoughtful commitment to pure, honest water.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#515154] leading-relaxed">
              <p>
                Founded in Turakapalem, Guntur, <strong>INDUS Packaged Drinking Water</strong> was established with a singular vision: to provide uncompromised, pure drinking water with essential mineral balance, accessible around the clock.
              </p>
              <p>
                By investing in medical-grade multi-stage filtration, UV disinfection, and closed-loop bottling automation, we deliver crisp taste, supreme clarity, and genuine health benefits in every single bottle.
              </p>
            </div>

            {/* Core Values Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-8">
              {[
                "100% Chemical-Free",
                "Zero Additives",
                "Medical-Grade UV",
                "24/7 Guntur Dispatch",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-[#1D1D1F] bg-[#F5F5F7] px-3.5 py-1.5 rounded-full border border-black/[0.04] shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Official Quality Promise Showcase (Apple Bento Minimalist) */}
        <motion.div
          style={{ y: yBanner, scale: scaleBanner }}
          className="mb-16 rounded-3xl border border-black/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.04)] bg-gradient-to-br from-[#FAFAFC] via-[#F4F4F7] to-white p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          <div className="max-w-xl text-center md:text-left flex-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Turakapalem Quality Standard
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D1D1F] mt-3 mb-2 tracking-tight">
              Pure Water. For Generations to Come.
            </h3>
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
              Every drop is monitored from natural aquifers through our state-of-the-art closed filtration loops in Guntur. Zero chemical residues, balanced alkaline taste, and sealed with food-grade safety.
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center">
            <div className="w-full sm:max-w-md md:w-[420px] lg:w-[480px] aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.06] bg-white group">
              <img
                src="/images/indus-sharing-bottle.jpg"
                alt="INDUS Pure Water - Sharing Purity"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* 3 Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8 border-t border-black/[0.06]">
          {storyPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div key={pillar.title} className="text-left group">
                <div className="w-9 h-9 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] mb-3 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-200">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Lifestyle & Moments Editorial Showcase (3 Visual Tiles) ── */}
        <div className="mt-20 pt-16 border-t border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              The INDUS Lifestyle
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#1D1D1F] tracking-tight mt-3 mb-3">
              Pure hydration for every moment.
            </h3>
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
              From high-energy routines to packed executive schedules and pure natural calm, INDUS is crafted for how you live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Tile 1: Dynamic Splash */}
            <div className="group rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/[0.06] shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <img
                  src="/images/indus-water-splash.jpg"
                  alt="INDUS Water Splash - Dynamic Vitality"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/[0.06] text-[#C8102E] shadow-xs">
                  Active Refreshment
                </span>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t border-black/[0.04]">
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F] mb-1.5">
                    Oxygenated Splash Clarity
                  </h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Purified with micro-barrier precision to deliver crisp, invigorating hydration for sports and active lifestyles.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1D1D1F]">0% Chemical Residues</span>
                  <a href="#products" className="font-bold text-[#C8102E] hover:underline">
                    Explore Sizes →
                  </a>
                </div>
              </div>
            </div>

            {/* Tile 2: Busy Day */}
            <div className="group rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/[0.06] shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src="/images/indus-busy-day.jpg"
                  alt="INDUS Water Busy Day Keep Water Close"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/[0.06] text-[#1D1D1F] shadow-xs">
                  Daily Work & Commute
                </span>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t border-black/[0.04]">
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F] mb-1.5">
                    Keep Your Water Close
                  </h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Slim, ergonomic bottles engineered for executive desks, packed boardroom schedules, and on-the-go travel.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1D1D1F]">Desk-Friendly Contour</span>
                  <a href="#products" className="font-bold text-[#C8102E] hover:underline">
                    Order Cases →
                  </a>
                </div>
              </div>
            </div>

            {/* Tile 3: Turquoise Wave */}
            <div className="group rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/[0.06] shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-sky-50">
                <img
                  src="/images/indus-water-wave.jpg"
                  alt="INDUS Pure Aquifer Serenity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/[0.06] text-sky-700 shadow-xs">
                  Aquifer Serenity
                </span>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t border-black/[0.04]">
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F] mb-1.5">
                    Untouched Aqua Purity
                  </h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Sourced from protected depths in Guntur, preserved through hermetic bottling to maintain soothing, natural crispness.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1D1D1F]">Natural Deep Aquifers</span>
                  <a href="#products" className="font-bold text-[#C8102E] hover:underline">
                    View Formats →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
