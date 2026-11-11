"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Droplets, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  image: string;
  alt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  specPoints: { label: string; value: string }[];
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Flagship Collection",
    headline: "Pure Ho Toh INDUS.",
    subheadline: "Multi-stage purified hydration sourced and bottled in Turakapalem, Guntur.",
    description:
      "Available in 200ml, 500ml, and 2 Litre formats. Crafted through advanced filtration and mineral balancing for everyday wellness, athletic performance, and family vitality.",
    image: "/images/indus-flagship.jpg",
    alt: "INDUS Pure Ho Toh INDUS Bottle Collection",
    primaryCta: { label: "Order for Delivery", href: "#products" },
    secondaryCta: { label: "Call 24/7 Hotline", href: "tel:9060234566" },
    specPoints: [
      { label: "Purity", value: "Multi-Stage UV + RO" },
      { label: "Essential Minerals", value: "Balanced Alkaline" },
      { label: "Service", value: "24/7 Doorstep Delivery" },
    ],
  },
  {
    id: 2,
    eyebrow: "Official Hydration",
    headline: "Drink better. Live better.",
    subheadline: "Turakapalem certified packaging facility delivering uncompromised clarity.",
    description:
      "Uninterrupted 24/7 supply lines across Turakapalem and Guntur. Immediate response and doorstep dispatch for homes, offices, and events.",
    image: "/images/indus-banner.jpg",
    alt: "INDUS Official Water Banner",
    primaryCta: { label: "Explore Bottle Sizes", href: "#products" },
    secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/919060234566" },
    specPoints: [
      { label: "Source", value: "Turakapalem, Guntur" },
      { label: "Lineup", value: "200ml • 500ml • 2L" },
      { label: "Timing", value: "24 Hours / 7 Days" },
    ],
  },
  {
    id: 3,
    eyebrow: "Certified Quality",
    headline: "Zero chemicals. 100% purity.",
    subheadline: "Medical-grade UV disinfection and automated contactless bottling.",
    description:
      "Bottled under sterile, automated hygiene conditions to guarantee zero contaminants. Pure, gentle water your entire home can depend on every single day.",
    image: "/images/logo-circle.jpg",
    alt: "INDUS Official Quality Seal",
    primaryCta: { label: "Order Home Supply", href: "#products" },
    secondaryCta: { label: "Our Story", href: "#story" },
    specPoints: [
      { label: "Safety", value: "Food-Grade Standard" },
      { label: "Chemicals", value: "0% Additives" },
      { label: "License", value: "FSSAI Certified" },
    ],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Layered Parallax Transforms
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityText = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const scaleVisual = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const yFloatingBadge1 = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const yFloatingBadge2 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFAFC] via-[#F4F4F7] to-white pt-28 pb-16 sm:pt-36 sm:pb-24 select-none border-b border-black/[0.04]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Ambient Background Parallax Mesh ── */}
      <motion.div
        style={{ y: yBackground }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-red-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 right-0 w-[420px] h-[420px] bg-red-100/25 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-sky-100/30 rounded-full blur-3xl opacity-60" />

        {/* Subtle Water Concentric Rings */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-black/[0.02] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-black/[0.015] pointer-events-none" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Top Category Switcher (Apple Dynamic Segmented Control) ── */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1 p-1 bg-[#EBEBED]/75 backdrop-blur-xl rounded-full border border-black/[0.04] shadow-xs overflow-x-auto max-w-full">
            {slides.map((s, index) => {
              const isSelected = current === index;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrent(index)}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    isSelected
                      ? "text-[#1D1D1F] font-bold"
                      : "text-[#86868B] hover:text-[#1D1D1F] font-medium"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="heroSegmentPill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{s.eyebrow}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main Hero Content Grid with Differential Parallax ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Left: Typography & Story Narrative (Parallax Layer 1) */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Eyebrow with Water Icon */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50/80 border border-red-200/60 mb-4">
                  <Droplets className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E]">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Cinematic Apple-style Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] text-balance leading-[1.08] mb-4">
                  {slide.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg lg:text-xl font-normal text-[#515154] text-pretty max-w-xl mb-4 leading-relaxed">
                  {slide.subheadline}
                </p>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-[#86868B] max-w-lg mb-8 leading-relaxed">
                  {slide.description}
                </p>

                {/* Action CTA Group */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
                  <Link
                    href={slide.primaryCta.href}
                    className="w-full sm:w-auto rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 text-center active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={slide.secondaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline transition-colors py-3 sm:py-0"
                  >
                    <span>{slide.secondaryCta.label}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Spec Highlights Table */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.08] w-full text-left">
                  {slide.specPoints.map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[10px] uppercase font-semibold text-[#86868B] tracking-wider mb-0.5">
                        {spec.label}
                      </p>
                      <p className="text-xs sm:text-sm font-black text-[#1D1D1F]">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Studio Product Visual Frame (Parallax Layer 2 + Levitation Float) */}
          <motion.div
            style={{ y: yVisual, scale: scaleVisual }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            {/* Official Circular Seal Badge */}
            <motion.div
              style={{ y: yFloatingBadge1 }}
              whileHover={{ scale: 1.08, rotate: 6 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -top-5 -right-4 sm:-right-6 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-[0_14px_35px_rgba(200,16,46,0.2)] border-2 border-white bg-white/95 backdrop-blur-md p-0.5 cursor-pointer transition-transform duration-300"
              title="INDUS Official Certified Pure Packaging"
            >
              <img
                src="/images/logo-circle.png"
                alt="INDUS Official Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            {/* Parallax Floating Spec Badge 1 */}
            <motion.div
              style={{ y: yFloatingBadge1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2 bg-white/90 backdrop-blur-xl border border-black/[0.06] rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03]"
            >
              <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-[#C8102E]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left pr-1">
                <p className="text-[10px] font-bold text-[#1D1D1F] leading-none">100% Food-Grade</p>
                <p className="text-[9px] text-[#86868B] mt-0.5">Automated UV Sealing</p>
              </div>
            </motion.div>

            {/* Parallax Floating Spec Badge 2 */}
            <motion.div
              style={{ y: yFloatingBadge2 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 bg-white/90 backdrop-blur-xl border border-black/[0.06] rounded-2xl p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03]"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left pr-1">
                <p className="text-[10px] font-bold text-[#1D1D1F] leading-none">Balanced Alkaline</p>
                <p className="text-[9px] text-[#86868B] mt-0.5">pH 7.2 – 7.6 Tested</p>
              </div>
            </motion.div>

            {/* Studio Card Container */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] sm:aspect-square flex items-center justify-center p-4 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${slide.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Subtle Levitation Hover Animation */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ── Slide Navigation Arrows & Subtle Progress ── */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-black/[0.05]">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-[#1D1D1F]" : "w-1.5 bg-[#D2D2D7] hover:bg-[#86868B]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] flex items-center justify-center transition-colors shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] flex items-center justify-center transition-colors shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
