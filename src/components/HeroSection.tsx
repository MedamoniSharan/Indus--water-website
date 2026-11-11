"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  alt: string;
  theme: "dark" | "light";
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/indus-flagship.jpg",
    alt: "INDUS Pure Ho Toh Indus Flagship Collection",
    theme: "dark",
  },
  {
    id: 2,
    image: "/images/indus-banner.jpg",
    alt: "INDUS Official Packaged Drinking Water Banner",
    theme: "light",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 30]);

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-white pt-24 pb-8 sm:pt-28 sm:pb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ── Hero Billboard Frame (Pure Visual Showcase • Zero Overlaid Text Clutter) ── */}
        <Link
          href="#products"
          aria-label="View INDUS Water Products"
          className="group block relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.06] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] cursor-pointer"
        >
          {/* Smooth Crossfade Imagery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hero-img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full h-full flex items-center justify-center ${
                slide.id === 1 ? "bg-[#7c0104]" : "bg-white"
              }`}
            >
              <motion.div style={{ y: yVisual }} className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── Discreet Circular Brand Seal (Top Right) ── */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] border-2 border-white/90 bg-white/95 backdrop-blur-md p-0.5 pointer-events-none">
            <img
              src="/images/logo-circle.png"
              alt="INDUS"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* ── Slide Controls (Bottom Right) ── */}
          <div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === i ? "w-6 bg-white" : "w-1.5 bg-white/45 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
