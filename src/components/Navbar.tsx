"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "#products" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100/70"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="INDUS Logo"
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#C8102E]">
                INDUS
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                Water
              </span>
            </div>
            {/* water-wave underline in crimson red */}
            <svg
              className="mt-[-2px] w-[50px] sm:w-[62px] h-[5px] sm:h-[6px]"
              viewBox="0 0 90 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3 Q10 0 20 3 T40 3 T60 3 T80 3 T90 3"
                stroke="#C8102E"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300 group-hover:stroke-red-700"
              />
            </svg>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#C8102E] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C8102E] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Actions on Right (Mobile Call + Desktop CTA + Hamburger) ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Tap-To-Call Direct Pill (Visible only on mobile/tablet) */}
          <a
            href="tel:9060234566"
            className="inline-flex md:hidden items-center gap-1.5 text-[11px] font-bold text-red-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-1.5 rounded-full transition-all shadow-sm active:scale-95"
            aria-label="Call 24/7 hotline"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <svg className="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            <span className="hidden xs:inline">24/7</span>
          </a>

          {/* Desktop 24/7 Hotline Badge */}
          <a
            href="tel:9060234566"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3.5 py-1.5 rounded-full transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>24/7: 9060234566</span>
          </a>

          {/* Desktop ORDER NOW Button */}
          <a
            href="tel:9060234566"
            className="hidden rounded-full bg-gradient-to-r from-[#C8102E] to-rose-600 hover:from-red-700 hover:to-rose-700 px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md shadow-red-500/20 transition-all duration-300 hover:shadow-lg md:inline-block"
          >
            ORDER NOW
          </a>

          {/* Hamburger / Close Icon */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg p-1 text-slate-700 hover:bg-rose-50 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2.5px] w-5 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-5 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-5 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col justify-between bg-white/98 backdrop-blur-xl transition-all duration-300 md:hidden overflow-y-auto px-6 py-8 ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between border-b border-rose-100 pb-4 pt-2">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="INDUS Logo"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#C8102E]">INDUS</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Packaged Drinking Water
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-full bg-rose-50 text-slate-700 flex items-center justify-center text-sm font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links list */}
        <div className="flex flex-col items-center gap-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-slate-800 transition-colors hover:text-[#C8102E] py-1.5 w-full text-center rounded-xl hover:bg-rose-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="flex flex-col gap-3 pt-4 border-t border-rose-100">
          <a
            href="tel:9060234566"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-2xl bg-gradient-to-r from-[#C8102E] to-rose-600 py-3.5 text-center text-sm font-extrabold tracking-wider text-white shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            <span>Call 24/7: 9060234566</span>
          </a>

          <a
            href="https://wa.me/919060234566?text=Hi%20INDUS%20Water,%20I%20would%20like%20to%20order%20packaged%20drinking%20water"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 py-3 text-center text-sm font-extrabold tracking-wider text-white shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2.5"
          >
            <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 object-contain" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="text-center text-xs text-slate-500 mt-2">
            <p className="font-semibold text-[#C8102E]">induswater2025@gmail.com</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Turakapalem, Guntur • 24/7 Supply</p>
          </div>
        </div>
      </div>
    </nav>
  );
}