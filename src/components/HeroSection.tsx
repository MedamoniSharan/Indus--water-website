"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Droplets, ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

interface Slide {
  id: number;
  eyebrow: string;
  tagline: string;
  image: string;
  alt: string;
  theme: "dark" | "light";
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Turakapalem, Guntur • 24/7 Delivery",
    tagline: "Multi-stage UV + RO purified hydration • 200ml, 500ml & 2L formats.",
    image: "/images/indus-flagship.jpg",
    alt: "INDUS Pure Ho Toh Indus Flagship Bottle Collection",
    theme: "dark",
    primaryCta: { label: "Order Delivery", href: "#products" },
    secondaryCta: { label: "Call 9060234566", href: "tel:9060234566" },
  },
  {
    id: 2,
    eyebrow: "Official Packaged Drinking Water",
    tagline: "Certified Turakapalem packaging facility delivering crystal-clear hydration 24/7.",
    image: "/images/indus-banner.jpg",
    alt: "INDUS Official Packaged Drinking Water Banner",
    theme: "light",
    primaryCta: { label: "Explore Bottle Sizes", href: "#products" },
    secondaryCta: { label: "WhatsApp Order", href: "https://wa.me/919060234566?text=Hi%20INDUS%20Water%2C%20I%20would%20like%20to%20order%20water." },
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

  // Smooth subtle parallax transforms
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-white pt-24 pb-8 sm:pt-28 sm:pb-14 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ── Hero Billboard Frame (Minimal Text • Maximum Image Visibility) ── */}
        <div
          className={`relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/[0.06] flex items-center transition-colors duration-700 ${
            slide.theme === "dark" ? "bg-[#7c0104]" : "bg-[#FCFCFD]"
          }`}
        >
          {/* ── Background Imagery: Fully Visible, Uncropped & Seamless ── */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-img-${slide.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                {slide.id === 1 ? (
                  /* Slide 1: Flagship 3 Bottles — Full Height, Seamless Red Blend */
                  <div className="w-full h-full relative flex items-center justify-end bg-[#7c0104]">
                    {/* Subtle Radial Glow */}
                    <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/25 rounded-full blur-3xl pointer-events-none" />

                    {/* Uncropped Bottle Visual on Right Side */}
                    <motion.div
                      style={{ y: yVisual }}
                      className="h-full w-full sm:w-[55%] lg:w-[50%] flex items-center justify-center sm:justify-end pr-0 sm:pr-8 lg:pr-14"
                    >
                      <img
                        src="/images/indus-flagship.jpg"
                        alt={slide.alt}
                        className="h-full max-h-[460px] sm:max-h-[540px] lg:max-h-[580px] w-auto object-contain object-center sm:object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                      />
                    </motion.div>

                    {/* Soft gradient on the left edge of mobile view only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7c0104] via-[#7c0104]/80 to-transparent sm:hidden" />
                  </div>
                ) : (
                  /* Slide 2: Official Banner — Full Width / Right Contained */
                  <div className="w-full h-full relative flex items-center justify-end bg-gradient-to-r from-white via-white to-red-50/40">
                    <motion.div
                      style={{ y: yVisual }}
                      className="h-full w-full sm:w-[60%] lg:w-[55%] flex items-center justify-center sm:justify-end pr-0 sm:pr-8 lg:pr-12"
                    >
                      <img
                        src="/images/indus-banner.jpg"
                        alt={slide.alt}
                        className="h-full max-h-[380px] sm:max-h-[460px] lg:max-h-[500px] w-auto object-contain object-center sm:object-right drop-shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                      />
                    </motion.div>
                    {/* Soft gradient on mobile view */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent sm:hidden" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Minimal Foreground Typography (Never Overlaps the Bottles) ── */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="relative z-10 w-full sm:w-[50%] lg:w-[48%] px-6 sm:px-10 lg:px-14 py-8 sm:py-12 flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${slide.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Minimal Eyebrow Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4 backdrop-blur-md border ${
                    slide.theme === "dark"
                      ? "bg-white/10 text-white/90 border-white/20 shadow-xs"
                      : "bg-red-50 text-[#C8102E] border-red-200/80 shadow-xs"
                  }`}
                >
                  <Droplets className={`w-3 h-3 ${slide.theme === "dark" ? "text-red-300" : "text-[#C8102E]"}`} />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* Striking Minimal Headline with Dream Avenue Brand Font */}
                <h1
                  className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-3 text-balance ${
                    slide.theme === "dark"
                      ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                      : "text-[#1D1D1F]"
                  }`}
                >
                  {slide.id === 1 ? (
                    <>
                      Pure Ho Toh{" "}
                      <span className="font-brand font-normal tracking-wide text-4xl sm:text-5xl lg:text-6xl text-white">
                        Indus.
                      </span>
                    </>
                  ) : (
                    <span className="font-brand font-normal tracking-wide">
                      Drink Better. Live Better.
                    </span>
                  )}
                </h1>

                {/* Minimal 1-Line Tagline */}
                <p
                  className={`text-xs sm:text-sm lg:text-base font-medium max-w-md mb-6 leading-relaxed ${
                    slide.theme === "dark" ? "text-white/85" : "text-[#515154]"
                  }`}
                >
                  {slide.tagline}
                </p>

                {/* Sleek Action CTAs */}
                <div className="flex flex-row items-center gap-3">
                  <Link
                    href={slide.primaryCta.href}
                    className={`rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md flex items-center gap-1.5 ${
                      slide.theme === "dark"
                        ? "bg-white text-[#7c0104] hover:bg-white/90 hover:shadow-lg"
                        : "bg-[#C8102E] text-white hover:bg-[#A30D25] hover:shadow-lg"
                    }`}
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={slide.secondaryCta.href}
                    className={`rounded-full px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 backdrop-blur-md border flex items-center gap-1.5 ${
                      slide.theme === "dark"
                        ? "bg-white/10 text-white border-white/25 hover:bg-white/20"
                        : "bg-black/[0.04] text-[#1D1D1F] border-black/[0.08] hover:bg-black/[0.08]"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 opacity-80" />
                    <span>{slide.secondaryCta.label}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Discreet Circular Brand Seal (Top Right) ── */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] border-2 border-white/90 bg-white/95 backdrop-blur-md p-0.5 pointer-events-none">
            <img
              src="/images/logo-circle.png"
              alt="INDUS"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* ── Slide Indicator Dots & Arrows (Bottom Right) ── */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
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

            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full border border-white/20 bg-black/35 hover:bg-black/55 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full border border-white/20 bg-black/35 hover:bg-black/55 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
