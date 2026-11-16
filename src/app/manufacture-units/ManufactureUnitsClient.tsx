"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  MapPin,
  ShieldCheck,
  Phone,
  ArrowLeft,
  Building2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ManufactureUnitsClient() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedLic, setCopiedLic] = useState(false);

  const addressText = `(SG)\nSri Ganga Enterprises\nD no : 493/1\nTurakapalem, Guntur - 522009\nFssai Lic no - 20126142001251`;

  const copyToClipboard = async (text: string, type: "address" | "lic") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "address") {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2500);
      } else {
        setCopiedLic(true);
        setTimeout(() => setCopiedLic(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

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
            {/* Subtle floating badge on image */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1D1D1F] shadow-xs border border-white/80 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C8102E]" />
              <span>Drink Better, Live Better</span>
            </div>
          </div>
        </div>

        {/* ── 2. Followed by Matter in Second Image (with "tata" replaced by "indus") ── */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Main Informational Paragraph */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-[#1D1D1F] leading-relaxed">
              <strong className="font-bold">Indus Manufacturer Information.</strong> This
              page helps you identify the FSSAI-licensed unit where your Indus pack was
              manufactured. Please refer the character(s) in the bracket before the unit
              address as per the instructions given on the pack.
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

          {/* Unit Card (matching reference image styling: soft blush rounded container with vertical left bar) */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#FDF1F3] border border-[#FAD4DB] p-5 sm:p-7 shadow-xs">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Left Accent Bar */}
              <div
                className="w-1 sm:w-1.5 self-stretch rounded-full bg-[#4A151B] flex-shrink-0"
                aria-hidden="true"
              />

              {/* Address Details */}
              <div className="flex-1 space-y-1.5 text-[#1D1D1F] text-sm sm:text-base leading-relaxed">
                <div className="font-bold text-base sm:text-lg text-[#2A1215] flex flex-wrap items-center gap-2">
                  <span>(SG)</span>
                  <span>Sri Ganga Enterprises</span>
                </div>
                <div>D no : 493/1</div>
                <div>Turakapalem, Guntur - 522009</div>
                <div className="pt-1.5 font-semibold text-[#3D1A1F] flex items-center gap-2 flex-wrap">
                  <span>Fssai Lic no - 20126142001251</span>
                  <button
                    onClick={() => copyToClipboard("20126142001251", "lic")}
                    className="inline-flex items-center gap-1 text-xs text-[#8B1D2C] hover:text-[#5B0F1A] font-medium bg-white/70 px-2 py-0.5 rounded-md border border-[#F5C2CB] transition-colors"
                    title="Copy License Number"
                  >
                    {copiedLic ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Lic</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions Footer inside Card */}
            <div className="mt-5 pt-4 border-t border-[#F5C2CB]/70 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(addressText, "address")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FFF5F6] text-[#4A151B] font-semibold border border-[#EAAFB8] transition-all duration-200 active:scale-95 shadow-2xs"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Turakapalem,+Guntur+522009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#4A151B] font-medium border border-[#EAAFB8] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3 text-[#86868B]" />
                </a>
              </div>

              <a
                href="tel:9060234566"
                className="inline-flex items-center gap-1.5 font-semibold text-[#8B1D2C] hover:text-[#5B0F1A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Plant: 9060234566</span>
              </a>
            </div>
          </div>

          {/* ── Helpful Verification Tip for Consumers ── */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] text-xs sm:text-sm text-[#515154] space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-[#1D1D1F]">
              <Building2 className="w-4 h-4 text-[#C8102E]" />
              <span>How to verify your bottle:</span>
            </div>
            <p className="leading-relaxed">
              Check the two-letter unit code printed in brackets before or near the batch number
              on the neck or cap of your Indus Packaged Drinking Water bottle. Code{" "}
              <strong className="text-[#1D1D1F] font-bold">(SG)</strong> corresponds to the
              Sri Ganga Enterprises facility in Turakapalem, Guntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
