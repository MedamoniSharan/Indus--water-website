"use client";

import React, { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const ourProducts = [
  { label: "500 ML Bottle", href: "#products" },
  { label: "1 Liter Bottle", href: "#products" },
  { label: "20 Liters Family / Event Pack", href: "#products" },
];

const ourCompany = [
  { label: "Our Story", href: "/about" },
  { label: "Quality Assurance", href: "#" },
  { label: "Distribution Network", href: "#" },
];

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-[#180306] text-white border-t border-rose-900/30">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                <img
                  src="/images/logo.png"
                  alt="INDUS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white leading-none">
                <span className="text-[#C8102E]">INDUS</span>
              </h3>
            </div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-rose-300 font-bold mb-3">
              Packaged Drinking Water
            </p>
            <p className="text-rose-100/60 text-xs sm:text-sm leading-relaxed mb-4">
              Premium packaged drinking water sourced with pure filtration, delivering healthy hydration 24/7 across Turakapalem, Guntur.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Service Available
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-rose-100/60 hover:text-rose-300 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">
              Our Products
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {ourProducts.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-rose-100/60 hover:text-rose-300 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">
              Our Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {ourCompany.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-rose-100/60 hover:text-rose-300 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">
              Contact Us
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-rose-100/75">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:induswater2025@gmail.com" className="hover:text-white transition-colors break-all">
                  induswater2025@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:9060234566" className="hover:text-white transition-colors font-bold text-white">
                  9060234566
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Turakapalem, Guntur</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <polyline points="12 6 12 12 16 14" strokeWidth={2} />
                </svg>
                <span>24/7 Hours Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter: Stack gracefully on mobile */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-rose-950/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                Stay informed with our email newsletter
              </h4>
              <p className="text-rose-200/50 text-xs sm:text-sm">
                Get the latest updates on products, bulk orders, and doorstep supply.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2.5 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:w-72 px-4 sm:px-5 py-3 bg-white/10 border border-white/10 rounded-2xl sm:rounded-l-full sm:rounded-r-none text-white placeholder-rose-200/40 text-xs sm:text-sm focus:outline-none focus:border-red-400/50 transition-colors"
              />
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-[#C8102E] to-rose-600 hover:from-red-700 hover:to-rose-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-2xl sm:rounded-r-full sm:rounded-l-none transition-colors whitespace-nowrap shadow-md shadow-red-950/50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-rose-200/50 text-xs sm:text-sm">
            © 2025 INDUS Packaged Drinking Water. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-rose-200/50 hover:text-rose-300 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="text-rose-200/50 hover:text-rose-300 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="text-rose-200/50 hover:text-rose-300 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="text-rose-200/50 hover:text-rose-300 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}