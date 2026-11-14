"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowRight, Sparkles, Building2, Send, ShieldCheck } from "lucide-react";

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
  {
    title: "Quality Product",
    desc: "Rigorous mineral filtration and automated touchless bottling.",
  },
  {
    title: "Growing Brand",
    desc: "Rapidly expanding presence and high consumer brand recall.",
  },
  {
    title: "Attractive Business Opportunity",
    desc: "Lucrative distributor margins with consistent high-volume repeat orders.",
  },
  {
    title: "Strong Market Potential",
    desc: "Continuous demand across retail stores, events, offices, and households.",
  },
  {
    title: "Business Support",
    desc: "Reliable factory dispatch, route logistics backing, and marketing materials.",
  },
];

export default function DistributorSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*INDUS DISTRIBUTOR ENQUIRY* 💧\n\n` +
      `*Name:* ${name.trim() || "Prospective Partner"}\n` +
      `*Phone:* ${phone.trim() || "Not provided"}\n` +
      `*Location/Region:* ${location.trim() || "Andhra Pradesh"}\n\n` +
      `I would like to become an Authorized INDUS Distributor. Please share distribution terms and pricing details.`;

    window.open(
      `https://wa.me/919060234566?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="distributors"
      className="relative py-20 sm:py-28 px-4 bg-[#F8F9FA] border-b border-black/[0.05] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>WE INVITE DISTRIBUTORS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] leading-tight mb-5">
            Grow with <span className="font-brand font-normal tracking-wide">Indus</span> Packaged Drinking Water!
          </h2>

          <p className="text-base sm:text-lg text-[#515154] leading-relaxed max-w-2xl mx-auto">
            INDUS is expanding its distribution network and inviting <span className="font-semibold text-[#1D1D1F]">Distributors</span> to join our growing brand. Join us and grow your business with quality packaged drinking water.
          </p>
        </div>

        {/* Bento Grid: Benefits on Left, Highlighted Enquiry / Call Action on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Why Partner with INDUS? */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-[0_16px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.06]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
                  Why Partner with INDUS?
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                  Built on unmatched purity, local manufacturing, and rapid dispatch.
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#C8102E] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Checklist of 5 Benefits */}
            <div className="space-y-4">
              {partnerBenefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#FAFAFC] hover:bg-red-50/40 border border-black/[0.04] transition-colors group"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1D1D1F] group-hover:text-[#C8102E] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#86868B] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tagline Card */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-lg font-brand font-normal tracking-wide text-[#1D1D1F]">
                  Indus
                </span>
                <p className="text-xs font-semibold text-[#C8102E] tracking-wider uppercase">
                  Drink Better. Live Better.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#86868B]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certified Turakapalem Bottling Plant</span>
              </div>
            </div>
          </div>

          {/* Right Column: HIGHLIGHTED CALL ACTION & ENQUIRY BOX */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Super Prominent Call & Enquiry Highlight Card */}
            <div className="relative rounded-3xl bg-[#1D1D1F] text-white p-7 sm:p-9 shadow-[0_24px_50px_rgba(200,16,46,0.18)] border border-red-500/30 overflow-hidden">
              {/* Highlight Gradient Accents */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#C8102E]/25 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                {/* Urgent Callout Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-[11px] font-bold tracking-wider uppercase mb-4 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Immediate Expansion Openings</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                  Become an Authorized INDUS Distributor Today!
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1A6] mb-6 leading-relaxed">
                  Join our distribution network with exclusive territory rights, guaranteed factory supply, and direct wholesale pricing.
                </p>

                {/* ── HIGHLIGHTED PRIMARY CALL ACTION ── */}
                <div className="p-4 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md mb-6">
                  <div className="flex items-center justify-between text-xs text-red-200 mb-2 font-semibold">
                    <span>Direct Factory & Distribution Hotline</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Active 24/7
                    </span>
                  </div>

                  <a
                    href="tel:9060234566"
                    className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#C8102E] via-red-600 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(200,16,46,0.45)] transition-all transform active:scale-[0.98] group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4 fill-current" />
                    </div>
                    <span>Call 9060234566</span>
                  </a>

                  <p className="text-[11px] text-center text-[#86868B] mt-2">
                    Tap to speak directly with our Regional Distribution Manager
                  </p>
                </div>

                {/* ── SECONDARY WHATSAPP ENQUIRY ACTION ── */}
                <a
                  href="https://wa.me/919060234566?text=Hello%20INDUS%20Water%2C%20I%20am%20interested%20in%20becoming%20an%20Authorized%20INDUS%20Distributor.%20Please%20share%20distribution%20terms%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-[0.98] mb-6"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Distributor Enquiry</span>
                </a>

                {/* Quick Enquiry Form */}
                <div className="pt-5 border-t border-white/10">
                  <p className="text-xs font-bold text-white mb-3 flex items-center justify-between">
                    <span>Or submit a quick enquiry:</span>
                    <span className="text-[10px] text-[#86868B] font-normal">Fast response</span>
                  </p>

                  <form onSubmit={handleEnquirySubmit} className="space-y-2.5">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number / Mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="City / Region (e.g., Guntur, Vijayawada)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    />

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-neutral-100 text-[#1D1D1F] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm mt-3"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>Submit Distributor Enquiry</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="p-4 rounded-2xl bg-white border border-black/[0.05] shadow-xs flex items-center justify-between text-xs text-[#515154]">
              <span className="font-semibold text-[#1D1D1F]">Facility & Supply Office:</span>
              <span className="text-[#86868B]">Turakapalem, Guntur • 24/7 Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
