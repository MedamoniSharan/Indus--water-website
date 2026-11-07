"use client";

import React from "react";

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-400 fill-current"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32 px-4 bg-[#161617] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Sports Lifestyle Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1D1D1F]">
              <img
                src="/images/stay-hydrated-sports.jpg"
                alt="INDUS Active Hydration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Testimonial Editorial Quote */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-4">
              Community Voice
            </p>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6 leading-snug">
              &ldquo;Remarkable clarity, crisp mineral taste, and dependable 24/7 doorstep supply in Guntur.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#A1A1A6] font-normal leading-relaxed mb-8 max-w-xl">
              From intense morning training sessions to daily hydration at home, INDUS water provides the pure, refreshing minerals our entire fitness club and family rely on every day.
            </p>

            {/* Reviewer Bio */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">
                RK
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">Ramesh Kumar</p>
                <p className="text-xs text-[#86868B]">Fitness Director • Turakapalem, Guntur</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}