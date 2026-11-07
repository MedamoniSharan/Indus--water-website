"use client";

import React from "react";

const features = [
  {
    title: "Custom Filters",
    description:
      "Purified through proprietary filters to remove impurities and provide the cleanest water.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
    ),
  },
  {
    title: "UV Light",
    description:
      "Advanced UV light filtration ensures harmful bacteria and viruses are eliminated.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title: "Ozone System",
    description:
      "Our ozone system provides an extra layer of sanitization ensuring complete purity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Alkaline Filtration",
    description:
      "Balanced alkaline filtration ensures optimal pH levels for better hydration, keeping water fresh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
];

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col items-center text-center p-5 sm:p-7 bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-sm sm:max-w-none border border-rose-100/70 hover:border-[#C8102E]/30 hover:-translate-y-1">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-[#C8102E] mb-3 sm:mb-4 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2 group-hover:text-[#C8102E] transition-colors">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function WaterBottle() {
  return (
    <div className="relative flex-shrink-0 w-44 xs:w-52 sm:w-60 lg:w-64 flex items-center justify-center">
      <div className="absolute inset-0 bg-rose-300/20 rounded-full blur-2xl -z-10" />
      <div className="relative p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white via-rose-50/40 to-white backdrop-blur-sm border border-rose-200/60 shadow-xl w-full">
        <img
          src="/images/bottle-splash.jpg"
          alt="INDUS Packaged Drinking Water"
          className="w-full h-auto max-h-[320px] sm:max-h-[460px] object-contain drop-shadow-lg rounded-xl sm:rounded-2xl"
        />
        <div className="text-center py-2 sm:py-2.5">
          <p className="text-sm sm:text-base font-black text-[#C8102E] tracking-tight">INDUS</p>
          <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">Drink Better, Live Better</p>
        </div>
      </div>
    </div>
  );
}

export default function FreshnessSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#C8102E] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">
            Advanced Purification Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-serif font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
            How We Deliver <span className="text-[#C8102E]">Freshness</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Committed to pure, clean, multi-stage processing to provide natural crystal hydration to your doorstep.
          </p>
        </div>

        {/* Desktop layout: 2 cards | bottle | 2 cards */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[2]} />
          </div>

          {/* Center bottle */}
          <WaterBottle />

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <FeatureCard {...features[1]} />
            <FeatureCard {...features[3]} />
          </div>
        </div>

        {/* Mobile / Tablet layout */}
        <div className="lg:hidden flex flex-col items-center gap-8 sm:gap-10">
          <WaterBottle />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl place-items-center">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}