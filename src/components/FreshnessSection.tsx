"use client";

import React from "react";

const bentoFeatures = [
  {
    step: "01",
    title: "Multi-Stage Micro-Filtration",
    subtitle: "Mechanical Purification",
    description:
      "High-density sand and activated carbon barriers remove micro-particulates, turbidity, and suspended solids down to sub-micron precision.",
    metric: "0.1 Micron",
    metricLabel: "Particle Retention",
  },
  {
    step: "02",
    title: "Ultraviolet Disinfection",
    subtitle: "Germicidal Radiation",
    description:
      "Targeted UV-C wavelengths neutralize biological microorganisms, bacteria, and pathogens without any chemical residues.",
    metric: "99.99%",
    metricLabel: "Pathogen Elimination",
  },
  {
    step: "03",
    title: "Ozone Sanitization Matrix",
    subtitle: "Active Sterilization",
    description:
      "Controlled ozone infusion ensures maximum microbiological safety throughout automated sealing, dissolving naturally into pure oxygen.",
    metric: "0% Chemical",
    metricLabel: "Pure Dissolved Oxygen",
  },
  {
    step: "04",
    title: "Essential Mineral Equilibrium",
    subtitle: "Alkaline Hydration",
    description:
      "Calibrated infusion of bioavailable minerals—calcium and magnesium—establishing optimal pH for smoother taste and cellular vitality.",
    metric: "7.2–7.6",
    metricLabel: "Balanced Alkaline pH",
  },
];

export default function FreshnessSection() {
  return (
    <section id="freshness" className="py-24 sm:py-32 px-4 bg-white border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Apple Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
            Purification Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] text-balance mb-5 leading-tight">
            Engineered for pure clarity. From source to sip.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] text-pretty leading-relaxed">
            Every drop of INDUS water undergoes a rigorous 4-tier purification matrix in Turakapalem,
            Guntur—combining pharmaceutical-grade filtration with natural mineral balance.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bentoFeatures.map((feat) => (
            <div
              key={feat.step}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-[#EFEFF2] transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-[#1D1D1F] bg-white px-2.5 py-1 rounded-full shadow-xs border border-black/[0.04]">
                    Step {feat.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#86868B]">
                    {feat.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#515154] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06]">
                <p className="text-2xl font-black text-[#1D1D1F] tracking-tight">
                  {feat.metric}
                </p>
                <p className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider mt-0.5">
                  {feat.metricLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Showcase Bottle Centerpiece */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] bg-white px-3 py-1 rounded-full border border-black/[0.05]">
              Zero Chemical Additives
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mt-4 mb-2">
              Automated Contactless Bottling
            </h3>
            <p className="text-sm text-[#86868B] leading-relaxed">
              Sterilized under hermetic clean-room standards with tamper-evident caps. Delivered direct from our production facility to your home or enterprise within hours.
            </p>
          </div>
          <div className="flex-shrink-0 w-44 sm:w-56">
            <img
              src="/images/bottle-splash.jpg"
              alt="INDUS Pure Water Bottle"
              className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}