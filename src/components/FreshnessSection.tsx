"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

const bentoFeatures = [
  {
    step: "01",
    title: "Multi-Stage Micro-Filtration",
    subtitle: "Mechanical Purification",
    description:
      "High-density sand and activated carbon barriers remove micro-particulates, turbidity, and suspended solids down to sub-micron precision.",
    metric: "0.1 Micron",
    metricLabel: "Particle Retention",
    parallaxOffset: [-24, 24],
  },
  {
    step: "02",
    title: "Ultraviolet Disinfection",
    subtitle: "Germicidal Radiation",
    description:
      "Targeted UV-C wavelengths neutralize biological microorganisms, bacteria, and pathogens without any chemical residues.",
    metric: "99.99%",
    metricLabel: "Pathogen Elimination",
    parallaxOffset: [16, -16],
  },
  {
    step: "03",
    title: "Ozone Sanitization Matrix",
    subtitle: "Active Sterilization",
    description:
      "Controlled ozone infusion ensures maximum microbiological safety throughout automated sealing, dissolving naturally into pure oxygen.",
    metric: "0% Chemical",
    metricLabel: "Pure Dissolved Oxygen",
    parallaxOffset: [-18, 18],
  },
  {
    step: "04",
    title: "Essential Mineral Equilibrium",
    subtitle: "Alkaline Hydration",
    description:
      "Calibrated infusion of bioavailable minerals—calcium and magnesium—establishing optimal pH for smoother taste and cellular vitality.",
    metric: "7.2–7.6",
    metricLabel: "Balanced Alkaline pH",
    parallaxOffset: [22, -22],
  },
];

function BentoCard({
  feat,
  scrollYProgress,
}: {
  feat: (typeof bentoFeatures)[0];
  scrollYProgress: any;
}) {
  const y = useTransform(scrollYProgress, [0, 1], feat.parallaxOffset);

  return (
    <motion.div
      style={{ y }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-black text-[#1D1D1F] bg-white group-hover:bg-[#C8102E] group-hover:text-white px-2.5 py-1 rounded-full shadow-xs border border-black/[0.04] transition-colors duration-200">
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
        <p className="text-2xl font-black text-[#1D1D1F] tracking-tight group-hover:text-[#C8102E] transition-colors">
          {feat.metric}
        </p>
        <p className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider mt-0.5">
          {feat.metricLabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function FreshnessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHeader = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const yCenterpiece = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [60, -40]);

  return (
    <section
      id="freshness"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 bg-white border-b border-black/[0.04] overflow-hidden"
    >
      {/* Background Parallax Subtle Water Shimmer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-50/40 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header (Parallax Entrance) */}
        <motion.div
          style={{ y: yHeader }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">
            <Droplets className="w-3.5 h-3.5" />
            <span>Purification Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] text-balance mb-5 leading-tight">
            Engineered for pure clarity. From source to sip.
          </h2>

          <p className="text-base sm:text-lg text-[#86868B] text-pretty leading-relaxed">
            Every drop of INDUS water undergoes a rigorous 4-tier purification matrix in Turakapalem,
            Guntur—combining pharmaceutical-grade filtration with natural mineral balance.
          </p>
        </motion.div>

        {/* Bento Grid Architecture with Parallax Offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bentoFeatures.map((feat) => (
            <BentoCard key={feat.step} feat={feat} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Studio Showcase Bottle Centerpiece with Parallax Depth */}
        <motion.div
          style={{ y: yCenterpiece }}
          className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="max-w-xl text-center lg:text-left z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C8102E] bg-white px-3 py-1 rounded-full border border-black/[0.05] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Chemical Additives</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1D1D1F] mt-4 mb-2">
              Automated Contactless Bottling
            </h3>

            <p className="text-sm text-[#86868B] leading-relaxed mb-6">
              Sterilized under hermetic clean-room standards with tamper-evident caps. Delivered direct from our production facility to your home or enterprise within hours.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F]">
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                <span>Multi-Barrier Sealed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F]">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>24/7 Guntur Delivery</span>
              </div>
            </div>
          </div>

          <motion.div
            style={{ y: yBottle }}
            className="flex-shrink-0 relative flex items-center justify-center z-10"
          >
            <div className="w-56 sm:w-64 md:w-72 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.06] bg-white group">
              <img
                src="/images/indus-fresh-choice.jpg"
                alt="INDUS - A Fresh Choice for every Moment"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
