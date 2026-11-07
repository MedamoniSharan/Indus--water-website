"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ── Decorative water-droplet SVG ── */
function WaterDrop({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0C15 0 0 20 0 28a15 15 0 0 0 30 0C30 20 15 0 15 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Splash ring ── */
function SplashRing({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="60"
        cy="20"
        rx="58"
        ry="18"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      <ellipse
        cx="60"
        cy="20"
        rx="40"
        ry="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
    </svg>
  );
}

interface Slide {
  id: number;
  pill: string;
  pillExtra: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  image: string;
  alt: string;
  badges: string[];
  ctaText: string;
  badgeLabel: string;
  badgeValue: string;
}

const slides: Slide[] = [
  {
    id: 1,
    pill: "Packaged Drinking Water",
    pillExtra: "24/7 Available",
    titleBefore: "Nature's Pure Gift, ",
    titleHighlight: "Perfectly",
    titleAfter: " Packaged",
    description:
      "Experience the purest hydration in every sip. INDUS brings you hygienic, crystal clear packaged drinking water from Turakapalem, Guntur. Sourced for your health and vitality — delivered 24/7.",
    image: "/images/bottle-splash.jpg",
    alt: "INDUS Packaged Drinking Water Bottle with Splash",
    badges: ["Pure & Safe", "Hygienically Processed", "24/7 Doorstep Delivery"],
    ctaText: "Order Now: 9060234566",
    badgeLabel: "Drink Better",
    badgeValue: "Live Better",
  },
  {
    id: 2,
    pill: "Active & Energetic Life",
    pillExtra: "With Added Minerals",
    titleBefore: "Stay Hydrated ",
    titleHighlight: "Every",
    titleAfter: " Generation",
    description:
      "Formulated with balanced essential minerals to power athletes, fitness enthusiasts, and active families across Guntur. Pure, refreshing, and energizing.",
    image: "/images/stay-hydrated-sports.jpg",
    alt: "INDUS Active Lifestyle Hydration Banner",
    badges: ["With Added Minerals", "Pure & Refreshing", "For an Active Lifestyle"],
    ctaText: "Get Hydrated: 9060234566",
    badgeLabel: "Stay Hydrated",
    badgeValue: "Active Energy",
  },
  {
    id: 3,
    pill: "Trusted Family Care",
    pillExtra: "100% Chemical-Free",
    titleBefore: "Pure Water For ",
    titleHighlight: "Healthy",
    titleAfter: " Smiles",
    description:
      "Every drop of INDUS water passes through rigorous multi-stage purification and strict quality controls. Gentle, healthy, and safe for children and elders alike.",
    image: "/images/happy-child.jpg",
    alt: "Happy child with INDUS Drinking Water Bottle",
    badges: ["No Added Chemicals", "Hygienically Bottled", "Child & Family Safe"],
    ctaText: "Family Care: 9060234566",
    badgeLabel: "Pure & Safe",
    badgeValue: "Family Health",
  },
  {
    id: 4,
    pill: "Turakapalem, Guntur",
    pillExtra: "Doorstep Supply",
    titleBefore: "Drink Better, ",
    titleHighlight: "Live",
    titleAfter: " Better",
    description:
      "Your trusted local water brand in Guntur. From single bottles to 20L bulk supplies for homes, corporate offices, and grand events with fast 24/7 dispatch.",
    image: "/images/indus-banner.jpg",
    alt: "INDUS Packaged Drinking Water Official Banner",
    badges: ["Bulk Event Supply", "Quick Dispatch", "24/7 Hours Available"],
    ctaText: "Call Express: 9060234566",
    badgeLabel: "Express Delivery",
    badgeValue: "24/7 Guntur",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-gradient-to-br from-white via-rose-50/40 to-sky-50/40 pt-24 pb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-rose-200/20 blur-3xl" />
        <div className="absolute -left-16 top-1/3 h-[350px] w-[350px] rounded-full bg-sky-200/25 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-rose-100/30 blur-2xl" />
        <div className="absolute left-[10%] top-[15%] h-4 w-4 rounded-full bg-rose-400/30" />
        <div className="absolute left-[30%] top-[10%] h-2.5 w-2.5 rounded-full bg-red-400/25" />
        <div className="absolute right-[25%] top-[20%] h-3 w-3 rounded-full bg-sky-300/35" />
        <div className="absolute bottom-[20%] left-[20%] h-3.5 w-3.5 rounded-full bg-rose-400/25" />
      </div>

      {/* ── Decorative droplets ── */}
      <WaterDrop className="pointer-events-none absolute left-[8%] top-[25%] h-6 w-6 animate-bounce text-sky-400/30" />
      <WaterDrop className="pointer-events-none absolute right-[12%] top-[15%] h-8 w-8 animate-bounce text-rose-400/25 [animation-delay:0.5s]" />
      <WaterDrop className="pointer-events-none absolute bottom-[25%] left-[15%] h-5 w-5 animate-bounce text-sky-400/25 [animation-delay:1s]" />
      <WaterDrop className="pointer-events-none absolute bottom-[35%] right-[30%] h-4 w-4 animate-bounce text-red-500/20 [animation-delay:1.5s]" />

      {/* ── Splash ring ── */}
      <SplashRing className="pointer-events-none absolute bottom-16 left-[5%] w-32 text-sky-400/30" />

      {/* ── Content Grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* ── Left: Slide Copy (animated with key) ── */}
        <div
          key={`text-${slide.id}`}
          className="flex flex-col items-start gap-6 transition-all duration-700 ease-out animate-in fade-in slide-in-from-left-4"
        >
          {/* Top pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#C8102E]">
              {slide.pill}
            </span>
            <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              {slide.pillExtra}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl min-h-[120px] flex flex-wrap items-baseline">
            <span>{slide.titleBefore}</span>
            <span className="relative inline-block text-[#C8102E] mx-1">
              {slide.titleHighlight}
              {/* underline wave in brand red */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q25 0 50 4 T100 4 T150 4 T200 4"
                  stroke="#C8102E"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>{slide.titleAfter}</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg min-h-[84px]">
            {slide.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="tel:9060234566"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C8102E] to-rose-600 hover:from-red-700 hover:to-rose-700 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-red-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 text-rose-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              {slide.ctaText}
            </a>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-700 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-800 transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]"
            >
              Explore Products
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-2 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-500">
            {slide.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Slide Image Display (animated) ── */}
        <div
          key={`img-${slide.id}`}
          className="relative flex items-center justify-center transition-all duration-700 ease-out animate-in fade-in zoom-in-95"
        >
          {/* Subtle radial glow */}
          <div className="absolute h-[460px] w-[360px] rounded-full bg-rose-200/30 blur-3xl -z-10" />
          <div className="absolute h-[320px] w-[320px] rounded-full bg-sky-200/25 blur-2xl -z-10 translate-y-12" />

          {/* Image Frame */}
          <div className="relative group w-full max-w-md flex justify-center">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-white/60 backdrop-blur-sm p-2 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating brand badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#C8102E] font-bold">
                  <svg className="w-5 h-5 text-[#C8102E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider uppercase text-[#C8102E]">{slide.badgeLabel}</p>
                  <p className="text-xs font-black text-slate-900">{slide.badgeValue}</p>
                </div>
              </div>

              {/* 24/7 Supply Pill */}
              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-md border border-rose-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-bold text-slate-800">INDUS 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Carousel Controls & Pagination ── */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-white/90 hover:bg-[#C8102E] text-slate-700 hover:text-white shadow-md border border-rose-100 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Indicator dots & progress */}
        <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-rose-100/80 shadow-sm">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#C8102E]"
                  : "w-2.5 bg-rose-200 hover:bg-rose-300"
              }`}
            />
          ))}
          <span className="text-[11px] font-bold text-slate-500 ml-2">
            0{current + 1} / 0{slides.length}
          </span>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-white/90 hover:bg-[#C8102E] text-slate-700 hover:text-white shadow-md border border-rose-100 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
