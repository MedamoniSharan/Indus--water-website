"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Trophy, Activity } from "lucide-react";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const yContent = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const yBgMesh = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 bg-[#161617] text-white overflow-hidden"
    >
      {/* Dark Ambient Parallax Glow Mesh */}
      <motion.div
        style={{ y: yBgMesh }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-sky-950/20 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Brand Campaign Visual with Parallax Elevation */}
          <motion.div
            style={{ y: yVisual }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] bg-[#1D1D1F] group relative">
              <img
                src="/images/indus-drink-better-live-better.jpg"
                alt="Drink Better Live Better"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Testimonial Editorial Quote (Parallax Layer) */}
          <motion.div
            style={{ y: yContent }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>Community Voice</span>
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-snug">
              &ldquo;Remarkable clarity, crisp mineral taste, and dependable 24/7 doorstep supply in Guntur.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#A1A1A6] font-normal leading-relaxed mb-8 max-w-xl">
              From intense morning training sessions to daily hydration at home, INDUS water provides the pure, refreshing minerals our entire fitness club and family rely on every day.
            </p>

            {/* Reviewer Bio */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 border border-white/20 flex items-center justify-center text-white font-black text-sm shadow-md">
                RK
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">Ramesh Kumar</p>
                <p className="text-xs text-[#86868B]">Fitness Director • Turakapalem, Guntur</p>
                <div className="flex gap-1 mt-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
