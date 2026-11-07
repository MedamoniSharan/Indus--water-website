"use client";

import React from "react";

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-br from-[#4a050e] via-[#6d0717] to-[#3a040b] text-white overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-rose-300 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full">
            Real Customer Trust
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3 sm:mt-4 mb-2">
            Our Testimonials
          </h2>
          <p className="text-rose-200/80 text-sm sm:text-base md:text-lg">
            Trusted by families and fitness enthusiasts across Guntur
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Sports / Active Lifestyle Hero Photo */}
          <div className="flex-shrink-0 w-full max-w-sm lg:w-96 flex items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/20 bg-white/5 backdrop-blur-sm group w-full">
              <img
                src="/images/stay-hydrated-sports.jpg"
                alt="INDUS Stay Hydrated Every Generation"
                className="w-full h-auto object-cover max-h-[340px] sm:max-h-[480px] rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#C8102E] text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-md">
                Active Lifestyle
              </div>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            {/* Quotation Mark */}
            <div className="mb-2 sm:mb-4">
              <span className="text-6xl sm:text-8xl md:text-9xl font-serif leading-none text-rose-300/25 select-none block">
                &ldquo;
              </span>
            </div>

            {/* Quote Heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 -mt-8 sm:-mt-12 ml-0 lg:ml-2">
              A Refreshing Experience Every Time!
            </h3>

            {/* Quote Text */}
            <p className="text-rose-100/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 ml-0 lg:ml-2 font-light">
              The packaged drinking water from INDUS is exceptionally clean, sweet, and pure.
              With their reliable 24/7 delivery right here in Turakapalem, Guntur, our entire family
              and fitness club stays active and hydrated with complete peace of mind.
            </p>

            {/* Reviewer */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 ml-0 lg:ml-2">
              {/* Avatar Placeholder */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#C8102E] to-rose-500 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-red-950/50 border border-white/30 flex-shrink-0">
                RK
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-base sm:text-lg">Ramesh Kumar</p>
                <p className="text-xs text-rose-200/80">Turakapalem, Guntur</p>
                {/* Star Rating */}
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