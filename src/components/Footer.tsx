"use client";

import React, { useState } from "react";

const directory = [
  {
    title: "Explore",
    links: [
      { label: "INDUS 200 ML", href: "#products" },
      { label: "INDUS 250 ML", href: "#products" },
      { label: "INDUS 300 ML", href: "#products" },
      { label: "INDUS 500 ML", href: "#products" },
      { label: "INDUS 1 Litre", href: "#products" },
      { label: "Direct Delivery", href: "#products" },
    ],
  },
  {
    title: "Purification",
    links: [
      { label: "Micro-Filtration", href: "#freshness" },
      { label: "UV Sterilization", href: "#freshness" },
      { label: "Ozone Process", href: "#freshness" },
      { label: "Mineral Balance", href: "#freshness" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Quality Standards", href: "#freshness" },
      { label: "Turakapalem Facility", href: "#story" },
      { label: "24/7 Logistics", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Order Hotline: 9060234566", href: "tel:9060234566" },
      { label: "WhatsApp Direct", href: "https://wa.me/919060234566" },
      { label: "induswater2025@gmail.com", href: "mailto:induswater2025@gmail.com" },
      { label: "Guntur Delivery Area", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#F5F5F7] text-[#1D1D1F] border-t border-black/[0.08] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top: Brand & Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-black/[0.08]">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/indus-badge-logo.png" alt="INDUS" className="h-10 w-10 rounded-full object-cover border border-red-500/15 shadow-xs" />
              <span className="text-xl font-brand font-normal tracking-wide text-[#1D1D1F]">Indus</span>
              <span className="text-[10px] font-semibold text-[#86868B] uppercase tracking-wider">
                Packaged Drinking Water
              </span>
            </div>
            <p className="text-xs text-[#86868B] leading-relaxed">
              Premium packaged drinking water with essential minerals, sourced and delivered 24/7 across Turakapalem, Guntur.
            </p>
          </div>

          {/* Minimalist Newsletter Form */}
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
              required
              className="px-4 py-2.5 rounded-full bg-white border border-black/[0.1] text-xs text-[#1D1D1F] focus:outline-none focus:border-black w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-white text-xs font-semibold whitespace-nowrap transition-colors"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Directory Links Grid (Apple Style 4-Column Directory) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-black/[0.08]">
          {directory.map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-[#1D1D1F] text-xs mb-3 uppercase tracking-wider">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#515154] hover:text-[#1D1D1F] hover:underline transition-colors block text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Location Summary */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868B] text-[11px]">
          <p>© 2025 INDUS Packaged Drinking Water. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Turakapalem, Guntur</span>
            <span>•</span>
            <span className="text-[#1D1D1F] font-semibold">24/7 Dispatch: 9060234566</span>
          </div>
        </div>
      </div>
    </footer>
  );
}