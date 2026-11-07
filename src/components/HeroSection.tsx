"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

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
    eyebrow: "Packaged Drinking Water",
    headline: "Pure water. Engineered for life.",
    subheadline: "Multi-stage purified hydration sourced and bottled in Turakapalem, Guntur.",
    description:
      "Crystal-clear purity in every sip. Crafted through advanced filtration and mineral balancing for everyday wellness, active workouts, and family vitality.",
    image: "/images/bottle-splash.jpg",
    alt: "INDUS Packaged Drinking Water Bottle Splash",
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
    eyebrow: "Active Lifestyle & Fitness",
    headline: "Stay hydrated. Every generation.",
    subheadline: "Optimal mineral balance tailored for athletic performance and daily energy.",
    description:
      "Designed to replenish vital hydration faster. Trusted by runners, athletes, and fitness clubs across Guntur who demand crisp, refreshing clarity.",
    image: "/images/stay-hydrated-sports.jpg",
    alt: "INDUS Active Hydration Poster",
    primaryCta: { label: "Explore Bottle Sizes", href: "#products" },
    secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/919060234566" },
    specPoints: [
      { label: "Formulation", value: "Electrolyte Balance" },
      { label: "Source", value: "Guntur High Standard" },
      { label: "Availability", value: "Express 24/7" },
    ],
  },
  {
    id: 3,
    eyebrow: "Purity for Families",
    headline: "Healthy hydration for pure smiles.",
    subheadline: "Zero added chemicals. 100% safe for children, adults, and elders.",
    description:
      "Bottled under sterile, automated hygiene conditions to guarantee zero contaminants. Pure, gentle water your entire home can depend on every single day.",
    image: "/images/happy-child.jpg",
    alt: "Child enjoying INDUS Water",
    primaryCta: { label: "Order Home Supply", href: "#products" },
    secondaryCta: { label: "Our Story", href: "#story" },
    specPoints: [
      { label: "Safety", value: "Food-Grade Bottling" },
      { label: "Chemicals", value: "0% Additives" },
      { label: "Standard", value: "Certified Quality" },
    ],
  },
  {
    id: 4,
    eyebrow: "Bulk & Event Logistics",
    headline: "Drink better. Live better.",
    subheadline: "From individual bottles to 20-liter dispensers for homes, offices, and events.",
    description:
      "Uninterrupted 24/7 supply lines across Turakapalem and Guntur. Immediate response and doorstep dispatch with dedicated bulk pricing.",
    image: "/images/indus-banner.jpg",
    alt: "INDUS Official Water Banner",
    primaryCta: { label: "Order 20L Bulk Cans", href: "#products" },
    secondaryCta: { label: "Call 9060234566", href: "tel:9060234566" },
    specPoints: [
      { label: "Supply", value: "20L Bulk & Boxes" },
      { label: "Dispatch", value: "Guntur Express" },
      { label: "Timing", value: "24 Hours / 7 Days" },
    ],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    }, 6000);
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
      className="relative w-full overflow-hidden bg-[#FAFAFC] pt-24 pb-16 sm:pt-28 sm:pb-20 select-none border-b border-black/[0.04]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Top Category Switcher (Apple Segmented Style) ── */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1 p-1 bg-[#EBEBED]/70 backdrop-blur-md rounded-full border border-black/[0.04] overflow-x-auto max-w-full">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrent(index)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  current === index
                    ? "bg-white text-[#1D1D1F] shadow-sm font-semibold"
                    : "text-[#86868B] hover:text-[#1D1D1F]"
                }`}
              >
                {s.eyebrow}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Hero Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Left: Copy (Apple Typography) */}
          <div
            key={`copy-${slide.id}`}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 ease-out animate-in fade-in slide-in-from-left-2"
          >
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
              {slide.eyebrow}
            </span>

            {/* Cinematic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] text-balance leading-[1.08] mb-4">
              {slide.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#515154] text-pretty max-w-xl mb-4 leading-relaxed">
              {slide.subheadline}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#86868B] max-w-lg mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <Link
                href={slide.primaryCta.href}
                className="w-full sm:w-auto rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 text-center active:scale-95 shadow-sm"
              >
                {slide.primaryCta.label}
              </Link>
              <a
                href={slide.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline transition-colors py-3 sm:py-0"
              >
                <span>{slide.secondaryCta.label}</span>
                <span className="text-base leading-none">›</span>
              </a>
            </div>

            {/* Spec Highlights Table */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.08] w-full text-left">
              {slide.specPoints.map((spec) => (
                <div key={spec.label}>
                  <p className="text-[10px] uppercase font-semibold text-[#86868B] tracking-wider mb-0.5">
                    {spec.label}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Studio Product Visual Frame */}
          <div
            key={`visual-${slide.id}`}
            className="lg:col-span-6 flex items-center justify-center transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] sm:aspect-square flex items-center justify-center p-4 sm:p-6 rounded-3xl bg-white border border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
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
              className="w-8 h-8 rounded-full border border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] flex items-center justify-center transition-colors"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] flex items-center justify-center transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}