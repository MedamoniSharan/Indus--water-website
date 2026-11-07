"use client";

import React from "react";

const storyPillars = [
  {
    title: "Rigorous Safety Standards",
    description:
      "Continuous water testing at source and automated sealed bottling ensure compliance with highest certified standards.",
  },
  {
    title: "Eco-Conscious Packaging",
    description:
      "100% recyclable food-grade PET bottles designed with structural efficiency to minimize environmental plastic footprint.",
  },
  {
    title: "Round-the-Clock Logistics",
    description:
      "Turakapalem production and local delivery vehicles active 24/7 to guarantee prompt residential and event hydration.",
  },
];

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32 px-4 bg-white border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto">
        {/* Main Editorial Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Photo Visual (Apple Editorial Portrait) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-black/[0.06] shadow-[0_16px_40px_rgba(0,0,0,0.04)] bg-[#F5F5F7]">
              <img
                src="/images/happy-child.jpg"
                alt="INDUS Pure Water Family Care"
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-white border-t border-black/[0.04]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#C8102E] mb-1">
                  Family Purity
                </p>
                <p className="text-sm font-semibold text-[#1D1D1F]">
                  Hydration trusted across generations.
                </p>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
              About INDUS
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] text-balance mb-6 leading-tight">
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
              {["100% Chemical-Free", "Zero Additives", "Medical-Grade UV", "24/7 Guntur Dispatch"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-[#1D1D1F] bg-[#F5F5F7] px-3.5 py-1.5 rounded-full border border-black/[0.04]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Official Banner Card (Full uncropped view with Apple studio styling) */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-black/[0.06] shadow-[0_12px_36px_rgba(0,0,0,0.04)] bg-white max-w-5xl mx-auto">
          <img
            src="/images/indus-banner.jpg"
            alt="INDUS Packaged Drinking Water Official Showcase"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* 3 Pillars Row (Apple Clean Minimalist Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6 border-t border-black/[0.06]">
          {storyPillars.map((pillar) => (
            <div key={pillar.title} className="text-left">
              <h3 className="text-base font-bold text-[#1D1D1F] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}