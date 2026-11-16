"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Sparkles } from "lucide-react";

export default function ManufactureUnitsClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Breadcrumb & Back Link ── */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold border border-emerald-200/70">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          FSSAI Licensed Facility
        </span>
      </div>

      {/* ── Main Content Container ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/[0.06]">
        {/* ── 1. One Image (Indus Packaged Drinking Water Bottle) ── */}
        <div className="mb-10 sm:mb-12">
          <div className="relative w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-sky-100 bg-gradient-to-b from-[#e8f5fb] to-[#d4ecf7] group">
            <img
              src="/images/indus-manufacture-bottle.jpg"
              alt="Indus Packaged Drinking Water Bottle"
              className="w-full h-auto object-cover max-h-[580px] mx-auto transition-transform duration-700 group-hover:scale-102"
              loading="eager"
            />
            {/* Floating badge on image */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1D1D1F] shadow-xs border border-white/80 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C8102E]" />
              <span>Drink Better, Live Better</span>
            </div>
          </div>
        </div>

        {/* ── 2. Followed by Matter in Second Image ── */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Main Informational Paragraph */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-[#1D1D1F] leading-relaxed">
              <strong className="font-bold">Indus Manufacturer Information.</strong> This
              page helps you identify the FSSAI-licensed unit where your Indus pack was
              manufactured. Please refer the two-letter unit code printed in brackets before or near the batch number on the neck or cap of your Indus Packaged Drinking Water bottle before the unit address as per the instructions given on the pack.
            </p>
            <p className="text-base sm:text-lg text-[#1D1D1F] leading-relaxed">
              Thank you for choosing Indus.
            </p>
            <p className="text-base sm:text-lg font-medium text-[#1D1D1F] leading-relaxed">
              We appreciate your trust.
            </p>
          </div>

          {/* Subheading: "Manufactured by :" */}
          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1215] tracking-tight">
              Manufactured by :
            </h2>
          </div>

          {/* Unit Card (address aligned after (SG)) */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#FDF1F3] border border-[#FAD4DB] p-6 sm:p-8 shadow-xs">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Left Accent Bar */}
              <div
                className="w-1.5 self-stretch rounded-full bg-[#4A151B] flex-shrink-0"
                aria-hidden="true"
              />

              {/* Address Details with all lines aligned after (SG) */}
              <div className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base leading-relaxed text-[#1D1D1F]">
                {/* Fixed (SG) Code */}
                <span className="font-bold text-base sm:text-lg text-[#2A1215] flex-shrink-0">
                  (SG)
                </span>

                {/* All remaining lines starting exactly aligned after (SG) */}
                <div className="space-y-1">
                  <div className="font-bold text-base sm:text-lg text-[#2A1215]">
                    Sri Ganga Enterprises
                  </div>
                  <div>D no : 493/1</div>
                  <div>Turakapalem, Guntur - 522009</div>
                  <div className="font-semibold text-[#2A1215] pt-0.5">
                    Fssai Lic no - 20126142001251
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
