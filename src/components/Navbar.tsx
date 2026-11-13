"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Phone, Droplets, Sparkles, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";

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
          id="nav-whatsapp-grad"
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
        fill="url(#nav-whatsapp-grad)"
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

interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

const navLinks: NavItem[] = [
  { id: "hero", label: "Overview", href: "#hero" },
  { id: "freshness", label: "Purification", href: "#freshness" },
  { id: "products", label: "Products", href: "#products", badge: "200ml - 1L" },
  { id: "story", label: "Our Story", href: "#story" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section spy
  useEffect(() => {
    const sectionIds = ["hero", "freshness", "products", "story", "contact"];
    const handleIntersection = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleIntersection, { passive: true });
    handleIntersection();
    return () => window.removeEventListener("scroll", handleIntersection);
  }, []);

  // Lock body scroll on mobile overlay open
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
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        {/* Top Scroll Reading Progress Line */}
        <motion.div
          className="h-[2.5px] bg-gradient-to-r from-[#C8102E] via-red-500 to-[#1D1D1F] origin-left pointer-events-none opacity-85"
          style={{ scaleX }}
        />

        {/* ── Mobile View Navbar (Edge-to-Edge with Hanging Circle Logo Emblem) ── */}
        <div className="block lg:hidden w-full">
          <div
            className={`pointer-events-auto relative w-full px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                : "bg-white/90 backdrop-blur-xl border-b border-black/[0.05] shadow-xs"
            }`}
          >
            {/* ── Mobile Circular Logo Emblem (Hanging / Overlapping like Reference) ── */}
            <Link
              href="#hero"
              className="relative z-30 self-start mt-2 focus:outline-none select-none group"
              aria-label="INDUS Water Home"
            >
              <div className="relative flex items-center justify-center w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full bg-white p-1 ring-4 ring-[#F4F1EA] shadow-[0_12px_28px_rgba(0,0,0,0.18),0_3px_8px_rgba(0,0,0,0.08)] border border-stone-200/90 transition-all duration-200 group-hover:scale-105 group-active:scale-95">
                <img
                  src="/images/logo-circle.png"
                  alt="INDUS Water"
                  className="w-full h-full rounded-full object-cover"
                />
                {/* Live Indicator Pulse Badge */}
                <motion.span
                  animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#C8102E] ring-2 ring-white shadow-xs"
                />
              </div>
            </Link>

            {/* ── Mobile Right Actions: WhatsApp + Order + Hamburger Menu ── */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919060234566?text=Hi%20INDUS%20Water,%20I%20would%20like%20to%20order%20packaged%20drinking%20water"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 transition-all duration-200 active:scale-95 shadow-xs"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Order Button */}
              <Link
                href="#products"
                className="relative inline-flex items-center justify-center gap-1 rounded-full bg-[#1D1D1F] hover:bg-black px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 shadow-xs active:scale-95"
              >
                <span>Order</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              {/* Mobile Hamburger Drawer Trigger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#EBEBED] transition-colors border border-black/[0.06] shadow-xs active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop View Navbar (Floating Capsule Dock) ── */}
        <div className="hidden lg:block mx-auto max-w-6xl px-6 pt-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto relative flex items-center justify-between rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/85 backdrop-blur-2xl py-2 px-5 shadow-[0_12px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] border border-black/[0.08] ring-1 ring-black/[0.03]"
                : "bg-white/70 backdrop-blur-xl py-2.5 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 ring-1 ring-black/[0.04]"
            }`}
          >
            {/* ── Brand Logo Highlight ── */}
            <Link
              href="#hero"
              className="group flex items-center flex-shrink-0 focus:outline-none"
              aria-label="INDUS Water Home"
            >
              <div className="relative flex items-center justify-center p-0.5 rounded-full bg-white shadow-[0_2px_12px_rgba(200,16,46,0.18)] ring-1 ring-black/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_18px_rgba(200,16,46,0.28)]">
                <img
                  src="/images/logo-circle.png"
                  alt="INDUS Water"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <motion.span
                  animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.75, 0.35] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C8102E] blur-[1px]"
                />
              </div>
            </Link>

            {/* ── Desktop Dynamic Floating Links with Glide Indicator ── */}
            <nav className="flex items-center gap-1 bg-[#F5F5F7]/80 backdrop-blur-md px-1.5 py-1 rounded-full border border-black/[0.04]">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredNav === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className="relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full focus:outline-none select-none"
                  >
                    {/* Hover Capsule Glide */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="navHoverCapsule"
                        className="absolute inset-0 bg-white/70 rounded-full shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Active Section Solid Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveCapsule"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04]"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}

                    <span
                      className={`relative z-10 flex items-center gap-1.5 transition-colors ${
                        isActive
                          ? "text-[#1D1D1F] font-bold"
                          : "text-[#515154] hover:text-[#1D1D1F]"
                      }`}
                    >
                      {item.label}
                      {item.badge && (
                        <span className="text-[9px] font-bold text-[#C8102E] bg-red-50 px-1 rounded-full border border-red-100 hidden xl:inline">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* ── Right-Side Action Dock ── */}
            <div className="flex items-center gap-2.5">
              {/* Live 24/7 Hotline Radar Badge */}
              <a
                href="tel:9060234566"
                className="group relative flex items-center gap-1.5 bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-black/[0.04] transition-all duration-200 active:scale-95 shadow-xs"
                title="Call 24/7 Hotline: 9060234566"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Phone className="w-3 h-3 text-[#515154] group-hover:text-[#1D1D1F] transition-colors" />
                <span className="hidden sm:inline text-[11px] font-medium text-[#1D1D1F]">
                  24/7 Hotline
                </span>
              </a>

              {/* Instant WhatsApp Quick Pill */}
              <a
                href="https://wa.me/919060234566?text=Hi%20INDUS%20Water,%20I%20would%20like%20to%20order%20packaged%20drinking%20water"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 shadow-xs"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px] font-semibold text-emerald-800">
                  WhatsApp
                </span>
              </a>

              {/* Apple-style Primary Order Button */}
              <Link
                href="#products"
                className="relative inline-flex items-center justify-center gap-1 rounded-full bg-[#1D1D1F] hover:bg-[#000000] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 shadow-sm active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span>Order</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── iOS 18 / Apple Style Mobile Frosted Sheet Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-20 inset-x-4 max-w-lg mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/60 ring-1 ring-black/[0.05] overflow-hidden"
            >
              {/* Quick Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full p-0.5 bg-white shadow-xs border border-red-500/20">
                    <img
                      src="/images/logo-circle.png"
                      alt="INDUS Logo"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Navigation
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Dispatch
                </span>
              </div>

              {/* Navigation Links List */}
              <div className="flex flex-col gap-1.5 mb-6">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                        isActive
                          ? "bg-[#F5F5F7] text-[#1D1D1F] font-bold"
                          : "text-[#515154] hover:bg-[#FAFAFC]"
                      }`}
                    >
                      <span className="text-base">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#86868B]" />
                    </a>
                  );
                })}
              </div>

              {/* Direct Fast-Action Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/[0.06]">
                <a
                  href="tel:9060234566"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#F5F5F7] hover:bg-[#EBEBED] text-[#1D1D1F] transition-colors text-center border border-black/[0.04]"
                >
                  <Phone className="w-5 h-5 text-[#C8102E] mb-1.5" />
                  <span className="text-xs font-bold">Call 24/7</span>
                  <span className="text-[10px] text-[#86868B]">9060234566</span>
                </a>

                <a
                  href="https://wa.me/919060234566?text=Hi%20INDUS%20Water,%20I%20would%20like%20to%20order%20packaged%20drinking%20water"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors text-center border border-emerald-200/60"
                >
                  <WhatsAppIcon className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-bold">WhatsApp</span>
                  <span className="text-[10px] text-emerald-700">Instant Order</span>
                </a>
              </div>

              <div className="mt-4">
                <Link
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 bg-[#1D1D1F] hover:bg-black text-white text-xs font-semibold py-3.5 rounded-full transition-colors shadow-sm"
                >
                  <span>Explore Bottle Sizes (200ml, 250ml, 300ml, 500ml, 1L)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
