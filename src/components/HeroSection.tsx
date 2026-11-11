"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Droplets, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

interface Slide {
  id: number;
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  image: string;
  alt: string;
  theme: "dark" | "light";
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  specPoints: { label: string; value: string }[];
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Turakapalem, Guntur • 24/7 Doorstep Delivery",
    headline: "Pure Ho Toh INDUS.",
    subheadline: "Multi-stage purified hydration engineered for everyday family health and vitality.",
    description:
      "Available in 200ml, 500ml, and 2 Litre formats. Sourced and bottled with automated UV disinfection and multi-barrier filtration for uncompromised purity.",
    image: "/images/indus-flagship.jpg",
    alt: "INDUS Pure Ho Toh INDUS Flagship Bottle Collection",
    theme: "dark",
    primaryCta: { label: "Order for Delivery", href: "#products" },
    secondaryCta: { label: "Call 24/7 Hotline", href: "tel:9060234566" },
    specPoints: [
      { label: "Filtration", value: "Multi-Stage UV + RO" },
      { label: "Formats", value: "200ml • 500ml • 2L" },
      { label: "Delivery", value: "24/7 Doorstep" },
    ],
  },
  {
    id: 2,
    eyebrow: "Official Packaged Drinking Water",
    headline: "Drink Better. Live Better.",
    subheadline: "Certified packaging facility delivering crystal-clear hydration across Guntur.",
    description:
      "Uninterrupted 24/7 supply lines across Turakapalem and Guntur. Immediate response and doorstep dispatch for households, offices, functions, and events.",
    image: "/images/indus-banner.jpg",
    alt: "INDUS Official Packaged Drinking Water Banner",
    theme: "light",
    primaryCta: { label: "Explore Bottle Sizes", href: "#products" },
    secondaryCta: { label: "WhatsApp Order", href: "https://wa.me/919060234566?text=Hi%20INDUS%20Water%2C%20I%20would%20like%20to%20order%20water." },
    specPoints: [
      { label: "Standard", value: "100% Food-Grade Sealing" },
      { label: "Quality", value: "Balanced & Refreshing" },
      { label: "Timing", value: "24 Hours / 7 Days" },
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
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

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
    }, 7000);
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-white pt-24 pb-10 sm:pt-28 sm:pb-16 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ── Hero Billboard Frame (Image in Background) ── */}
        <div
          className={`relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-black/[0.06] flex items-center transition-colors duration-700 ${
            slide.theme === "dark" ? "bg-[#790209]" : "bg-[#FCFCFD]"
          }`}
        >
          {/* Background Image Layer (Smooth Crossfade & Gentle Parallax) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${slide.id}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <motion.div style={{ y: yBackground }} className="w-full h-full relative">
                {slide.id === 1 ? (
                  /* Slide 1: Flagship 3-bottle visual */
                  <div className="w-full h-full relative flex items-center justify-end bg-gradient-to-r from-[#590106] via-[#790209] to-[#8c0208]">
                    <img
                      src="/images/indus-flagship.jpg"
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center sm:object-right"
                    />
                    {/* Left scrim for razor-sharp text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#590106] via-[#790209]/90 to-transparent sm:w-[65%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#590106]/95 via-[#790209]/80 to-transparent sm:hidden" />
                  </div>
                ) : (
                  /* Slide 2: Official banner visual */
                  <div className="w-full h-full relative flex items-center justify-end bg-gradient-to-r from-white via-white to-red-50/40">
                    <img
                      src="/images/indus-banner.jpg"
                      alt={slide.alt}
                      className="w-full h-full object-contain object-right max-h-[580px] sm:pr-6"
                    />
                    {/* Left scrim for razor-sharp text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-[62%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent sm:hidden" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── Foreground Text Layer (Directly on Image) ── */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="relative z-10 w-full max-w-2xl sm:max-w-3xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex flex-col justify-center"
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
                {/* Eyebrow Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border ${
                    slide.theme === "dark"
                      ? "bg-white/10 text-white/90 border-white/20 shadow-xs"
                      : "bg-red-50 text-[#C8102E] border-red-200/80 shadow-xs"
                  }`}
                >
                  <Droplets className={`w-3.5 h-3.5 ${slide.theme === "dark" ? "text-red-300" : "text-[#C8102E]"}`} />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* Primary Cinematic Headline */}
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-4 text-balance ${
                    slide.theme === "dark"
                      ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
                      : "text-[#1D1D1F]"
                  }`}
                >
                  {slide.id === 1 ? (
                    <>
                      Pure Ho Toh{" "}
                      <span className="font-brand font-normal tracking-wide text-5xl sm:text-6xl lg:text-7xl">
                        Indus.
                      </span>
                    </>
                  ) : (
                    <span className="font-brand font-normal tracking-wide">
                      Drink Better. Live Better.
                    </span>
                  )}
                </h1>

                {/* Subheadline */}
                <p
                  className={`text-base sm:text-lg lg:text-xl font-medium max-w-xl mb-3 leading-relaxed text-pretty ${
                    slide.theme === "dark" ? "text-white/90" : "text-[#3A3A3C]"
                  }`}
                >
                  {slide.subheadline}
                </p>

                {/* Secondary Description */}
                <p
                  className={`text-xs sm:text-sm max-w-lg mb-8 sm:mb-10 leading-relaxed ${
                    slide.theme === "dark" ? "text-white/70" : "text-[#6E6E73]"
                  }`}
                >
                  {slide.description}
                </p>

                {/* Interactive Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
                  <Link
                    href={slide.primaryCta.href}
                    className={`w-full sm:w-auto rounded-full px-7 py-3.5 text-xs sm:text-sm font-bold transition-all duration-200 text-center active:scale-95 shadow-md flex items-center justify-center gap-2 ${
                      slide.theme === "dark"
                        ? "bg-white text-[#9B0711] hover:bg-white/95 hover:shadow-lg"
                        : "bg-[#C8102E] text-white hover:bg-[#A30D25] hover:shadow-lg"
                    }`}
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={slide.secondaryCta.href}
                    className={`w-full sm:w-auto rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all duration-200 text-center active:scale-95 backdrop-blur-md border flex items-center justify-center gap-2 ${
                      slide.theme === "dark"
                        ? "bg-white/10 text-white border-white/25 hover:bg-white/20"
                        : "bg-black/[0.04] text-[#1D1D1F] border-black/[0.08] hover:bg-black/[0.08]"
                    }`}
                  >
                    <span>{slide.secondaryCta.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Integrated Clean Spec Highlights */}
                <div
                  className={`grid grid-cols-3 gap-3 sm:gap-4 pt-5 border-t w-full ${
                    slide.theme === "dark" ? "border-white/15" : "border-black/[0.08]"
                  }`}
                >
                  {slide.specPoints.map((spec) => (
                    <div key={spec.label}>
                      <p
                        className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${
                          slide.theme === "dark" ? "text-white/60" : "text-[#86868B]"
                        }`}
                      >
                        {spec.label}
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-black ${
                          slide.theme === "dark" ? "text-white" : "text-[#1D1D1F]"
                        }`}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Discreet Circular Brand Seal (Top Right) ── */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-2 border-white/90 bg-white/95 backdrop-blur-md p-0.5 pointer-events-none">
            <img
              src="/images/logo-circle.png"
              alt="INDUS Pure"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* ── Clean Slide Controls (Bottom Right of Billboard) ── */}
          <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 z-20 flex items-center gap-2.5">
            {/* Pill Progress Indicators */}
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === i ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Micro Arrow Navigation */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/35 hover:bg-black/55 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/35 hover:bg-black/55 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
