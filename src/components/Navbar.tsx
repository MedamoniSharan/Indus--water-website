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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100/60"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="INDUS Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-[#C8102E]">
                INDUS
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                Water
              </span>
            </div>
            {/* water-wave underline in crimson red */}
            <svg
              className="mt-[-2px] w-[62px] h-[6px]"
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

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9060234566"
            className="hidden items-center gap-1.5 text-xs font-bold text-red-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3.5 py-1.5 rounded-full transition-all sm:inline-flex shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>24/7: 9060234566</span>
          </a>

          <a
            href="tel:9060234566"
            className="hidden rounded-full bg-gradient-to-r from-[#C8102E] to-rose-600 hover:from-red-700 hover:to-rose-700 px-6 py-2 text-sm font-bold tracking-wider text-white shadow-md shadow-red-500/20 transition-all duration-300 hover:shadow-lg md:inline-block"
          >
            ORDER NOW
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-[#C8102E] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-7 bg-white transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <img
            src="/images/logo.png"
            alt="INDUS Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-3xl font-black text-[#C8102E]">INDUS</span>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-xl font-semibold text-slate-800 transition-colors hover:text-[#C8102E]"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="tel:9060234566"
          onClick={() => setMobileOpen(false)}
          className="mt-4 rounded-full bg-gradient-to-r from-[#C8102E] to-rose-600 px-8 py-3 text-sm font-bold tracking-wider text-white shadow-lg shadow-red-500/20 transition-all hover:brightness-110 flex items-center gap-2"
        >
          <span>Call 24/7: 9060234566</span>
        </a>
        <div className="text-center text-xs text-gray-500 mt-2">
          <p className="font-semibold text-red-600">induswater2025@gmail.com</p>
          <p className="mt-1">Turakapalem, Guntur</p>
        </div>
      </div>
    </nav>
  );
}
