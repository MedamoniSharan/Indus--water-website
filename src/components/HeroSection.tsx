"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-white pt-24 pb-8 sm:pt-28 sm:pb-12 select-none"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ── Hero Billboard Frame (Pure Visual Showcase • Single Hero Showcase) ── */}
        <Link
          href="#products"
          aria-label="View INDUS Water Products"
          className="group block relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/[0.06] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] bg-white cursor-pointer"
        >
          {/* Hero Imagery */}
          <div className="w-full h-full flex items-center justify-center bg-white p-3 sm:p-6 lg:p-8">
            <motion.div
              style={{ y: yVisual }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/images/hero-bottle.jpg"
                alt="INDUS Packaged Drinking Water - Drink Better, Live Better"
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
}
