"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Purification", href: "#freshness" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/70 backdrop-blur-md border-b border-black/[0.04]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* ── Brand Logo ── */}
        <Link href="/" className="group flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="INDUS Logo"
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black tracking-tight text-[#1D1D1F]">
              INDUS
            </span>
            <span className="text-[10px] font-semibold text-[#86868B] tracking-wide">
              Water
            </span>
          </div>
        </Link>

        {/* ── Apple-style Desktop Links ── */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[13px] font-normal text-[#1D1D1F]/75 transition-colors duration-200 hover:text-[#C8102E]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right-Side Actions ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 24/7 Hotline Button */}
          <a
            href="tel:9060234566"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E8E8ED] px-3 py-1.5 rounded-full transition-colors duration-200"
            aria-label="Call 24/7 hotline"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-semibold text-[#515154]">24/7 Hotline</span>
          </a>

          {/* Apple-style Primary Order Pill */}
          <Link
            href="#products"
            className="hidden sm:inline-flex items-center rounded-full bg-[#C8102E] hover:bg-[#A60D26] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 shadow-sm active:scale-95"
          >
            Order Now
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1 items-center justify-center">
              <span
                className={`block h-[1.5px] w-4 bg-[#1D1D1F] transition-all duration-300 ${
                  mobileOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-[#1D1D1F] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-[#1D1D1F] transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Apple-style Mobile Navigation Overlay ── */}
      <div
        className={`fixed inset-0 top-14 z-40 flex flex-col justify-between bg-white/95 backdrop-blur-2xl transition-all duration-300 md:hidden px-6 py-8 ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        style={{ height: "calc(100dvh - 56px)" }}
      >
        <div className="flex flex-col gap-2 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-[#1D1D1F] hover:text-[#C8102E] py-2 border-b border-black/[0.05] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-black/[0.06]">
          <Link
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-full bg-[#C8102E] hover:bg-[#A60D26] py-3.5 text-center text-sm font-semibold text-white shadow-sm"
          >
            Order Water Now
          </Link>

          <a
            href="https://wa.me/919060234566?text=Hi%20INDUS%20Water,%20I%20would%20like%20to%20order%20packaged%20drinking%20water"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] py-3 text-center text-sm font-semibold text-[#1D1D1F] flex items-center justify-center gap-2 transition-colors"
          >
            <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="text-center text-xs text-[#86868B] mt-2">
            <p className="font-medium text-[#1D1D1F]">Call 24/7: 9060234566</p>
            <p className="mt-0.5">Turakapalem, Guntur</p>
          </div>
        </div>
      </div>
    </nav>
  );
}