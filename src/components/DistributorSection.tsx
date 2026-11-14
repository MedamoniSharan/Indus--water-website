"use client";

import React from "react";
import { Phone, Check } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="dist-whatsapp-grad"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path
        fill="#ffffff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#dist-whatsapp-grad)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  );
}

const partnerBenefits = [
  "Quality Product",
  "Growing Brand",
  "Attractive Business Opportunity",
  "Strong Market Potential",
  "Business Support",
];

export default function DistributorSection() {
  return (
    <section
      id="distributors"
      className="relative py-20 sm:py-24 px-4 bg-[#F8F9FA] border-b border-black/[0.05]"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-black/[0.06] shadow-sm">
        {/* Eyebrow */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
          WE INVITE DISTRIBUTORS
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1D1D1F] leading-snug mb-5">
          Grow with <span className="font-brand font-normal text-[#C8102E]">Indus</span> Packaged Drinking Water!
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#515154] leading-relaxed mb-3">
          INDUS is expanding its distribution network and inviting <span className="font-semibold text-[#1D1D1F]">Distributors</span> to join our growing brand.
        </p>
        <p className="text-sm sm:text-base text-[#515154] leading-relaxed mb-8">
          Join us and grow your business with quality packaged drinking water.
        </p>

        {/* Why Partner with INDUS? */}
        <div className="pt-6 pb-6 border-t border-black/[0.06]">
          <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] mb-4">
            Why Partner with INDUS?
          </h3>
          <ul className="space-y-3">
            {partnerBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm sm:text-base text-[#1D1D1F] font-medium">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold border border-emerald-200">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Become Distributor Closing */}
        <div className="pt-6 border-t border-black/[0.06] mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-2">
            Become an Authorized INDUS Distributor Today!
          </h3>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#86868B] uppercase tracking-wider">
            <span className="text-base font-brand font-normal text-[#C8102E] capitalize">Indus</span>
            <span>•</span>
            <span className="text-[#C8102E]">Drink Better. Live Better.</span>
          </div>
        </div>

        {/* Simple & Clean Call to Action Card */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="tel:+919060234566"
            className="flex-1 flex items-center gap-4 px-5 py-4 rounded-xl bg-[#FDEEE6] hover:bg-[#FCDFD3] border-l-[5px] border-l-[#E65100] border border-orange-200/60 transition-all active:scale-[0.99] group shadow-2xs"
          >
            <div className="w-10 h-10 rounded-lg bg-white/80 text-[#E65100] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#1D1D1F]">Contact for Business Enquiries</p>
              <p className="text-base sm:text-lg font-black text-[#C8102E] tracking-tight mt-0.5">
                +91 9060234566
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/919060234566?text=Hello%20INDUS%20Water%2C%20I%20am%20interested%20in%20becoming%20an%20Authorized%20INDUS%20Distributor."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/80 font-bold text-xs sm:text-sm transition-all active:scale-[0.99] whitespace-nowrap shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
}
