"use client";

import React from "react";

const storyFeatures = [
  {
    title: "Commitment to Quality",
    description:
      "Every drop passes through rigorous multi-stage filtration and quality testing to ensure unmatched purity and taste.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-7 sm:h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Innovative Packaging Solutions",
    description:
      "Designed with cutting-edge, eco-friendly food-grade materials that preserve freshness and purity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-7 sm:h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Sustainable Practices",
    description:
      "From sourcing to delivery, our hygienic processes in Guntur are designed with eco-responsibility and care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-7 sm:h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18h4l-1 6h2l3-8h4l-2-6z" />
        <path d="M6 2l.5 1 .5-1 .5 1 .5-1" />
        <path d="M11 2c1 0 3.5 2 5 2 1 0 2-1 2-1s-1 3-1.5 4" />
      </svg>
    ),
  },
];

function StoryImage() {
  return (
    <div className="relative w-full max-w-[280px] xs:max-w-xs sm:w-80 lg:w-96 flex items-center justify-center">
      <div className="absolute inset-0 bg-rose-300/30 rounded-3xl blur-2xl transform rotate-3" />
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-white group w-full">
        <img
          src="/images/happy-child.jpg"
          alt="Happy child holding INDUS Packaged Drinking Water"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-red-950/90 via-red-900/40 to-transparent p-4 sm:p-5 text-white">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-rose-300 font-bold">Pure &amp; Safe</p>
          <p className="text-sm sm:text-base font-bold">Stay Hydrated Every Generation</p>
          <p className="text-[11px] sm:text-xs text-white/90 mt-0.5">Drink Better, Live Better</p>
        </div>
      </div>
    </div>
  );
}

function StoryFeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center border border-rose-100 hover:border-[#C8102E]/30 hover:-translate-y-1">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-[#C8102E] mb-3 sm:mb-4 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5 sm:mb-2 group-hover:text-[#C8102E] transition-colors">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function StorySection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-rose-50/25 to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Left: Real Brand Photo */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <StoryImage />
          </div>

          {/* Right: Story content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#C8102E] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">
              Turakapalem, Guntur
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-serif font-bold my-3 sm:my-4">
              The <span className="text-[#C8102E]">INDUS</span> Story
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              INDUS represents a thoughtful approach to packaged drinking water, where
              quality meets responsibility. Based in Turakapalem, Guntur, INDUS is born from
              a commitment to providing pure, refreshing hydration around the clock (24/7).
              Utilizing advanced multi-stage filtration and hygienic bottling standards, INDUS delivers
              unmatched taste and crystal clarity for your family and business.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white border border-rose-200 text-[#C8102E] shadow-sm flex items-center gap-1">
                ✓ Pure &amp; Safe
              </span>
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white border border-rose-200 text-[#C8102E] shadow-sm flex items-center gap-1">
                ✓ Hygienically Processed
              </span>
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white border border-rose-200 text-[#C8102E] shadow-sm flex items-center gap-1">
                ✓ No Added Chemicals
              </span>
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white border border-rose-200 text-[#C8102E] shadow-sm flex items-center gap-1">
                ✓ Refreshing &amp; Healthy
              </span>
            </div>
          </div>
        </div>

        {/* Official INDUS Banner Card */}
        <div className="mb-10 sm:mb-14 overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-rose-100 bg-white group">
          <img
            src="/images/indus-banner.jpg"
            alt="INDUS Packaged Drinking Water - Drink Better, Live Better Banner"
            className="w-full h-auto object-cover max-h-[220px] sm:max-h-[320px] md:max-h-[380px] transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>

        {/* Bottom: 3 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {storyFeatures.map((feature) => (
            <StoryFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}