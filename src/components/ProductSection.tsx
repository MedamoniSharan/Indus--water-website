"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronRight, Check, X, Phone, Truck, ShieldCheck } from "lucide-react";

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
          id="whatsapp-apple-grad"
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
        fill="url(#whatsapp-apple-grad)"
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

export interface Product {
  id: string;
  name: string;
  size: string;
  bottleCount: number;
  packTitle: string;
  category: string;
  description: string;
  image: string;
  hasBg?: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "200ml",
    name: "INDUS 200 ml Packaged Drinking Water",
    size: "200 ml",
    bottleCount: 30,
    packTitle: "Case of 30 Bottles",
    category: "Events & Catering",
    description: "Compact single-serve bottles engineered for weddings, corporate meetings, and high-volume catering.",
    image: "/images/product-200ml.png",
    features: ["30 Bottles / Case", "Compact 200ml Pocket Fit", "Tamper-Evident Safety Cap"],
  },
  {
    id: "250ml",
    name: "INDUS 250 ml Packaged Drinking Water",
    size: "250 ml",
    bottleCount: 30,
    packTitle: "Case of 30 Bottles",
    category: "Hospitality & Meetings",
    description: "Ideal tabletop hydration for executive boardrooms, restaurant banquets, and premium hotel rooms.",
    image: "/images/product-standing-bottle.png",
    features: ["30 Bottles / Case", "Ergonomic Slim Contour", "Pure Mineral Balance"],
  },
  {
    id: "300ml",
    name: "INDUS 300 ml Packaged Drinking Water",
    size: "300 ml",
    bottleCount: 24,
    packTitle: "Case of 24 Bottles",
    category: "Round Bubble Edition",
    description: "Iconic globe bubble silhouette with enhanced ribbed grip. Perfectly sized for personal hydration on the go.",
    image: "/images/product-300ml.png",
    features: ["24 Bottles / Case", "Ergonomic Round Grip", "Multi-Stage UV Disinfected"],
  },
  {
    id: "500ml",
    name: "INDUS 500 ml Packaged Drinking Water",
    size: "500 ml",
    bottleCount: 24,
    packTitle: "Case of 24 Bottles",
    category: "Active & Commute",
    description: "Our signature active fitness companion. Designed for daily travel, gyms, commutes, and desk hydration.",
    image: "/images/product-standing-bottle.png",
    features: ["24 Bottles / Case", "Ergonomic Grip Contours", "Rapid Mineral Absorption"],
  },
  {
    id: "1litre",
    name: "INDUS 1 L Packaged Drinking Water",
    size: "1 L",
    bottleCount: 12,
    packTitle: "Case of 12 Bottles",
    category: "Daily Home & Dining",
    description: "The gold standard 1 Litre family bottle formulated with essential minerals for daily dining and hydration.",
    image: "/images/product-standing-bottle.png",
    features: ["12 Bottles / Case", "Full 1 Litre Volume", "100% Recyclable Food-Grade PET"],
  },
  {
    id: "2litre",
    name: "INDUS 2 L Packaged Drinking Water",
    size: "2 L",
    bottleCount: 9,
    packTitle: "Case of 9 Bottles",
    category: "Family & Travel Handle Edition",
    description: "Heavy-duty 2 Litre bottle equipped with an ergonomic red carry handle. Engineered for family dining, road trips, and extended hydration.",
    image: "/images/product-2litre.png",
    features: ["9 Bottles / Case", "Ergonomic Red Carry Handle", "Full 2 Litre Volume"],
  },
];

function ProductCard({
  product,
  quantities,
  updateCardQty,
  addToCart,
  handleInstantWhatsApp,
}: {
  product: Product;
  quantities: { [key: string]: number };
  updateCardQty: (id: string, delta: number) => void;
  addToCart: (product: Product) => void;
  handleInstantWhatsApp: (product: Product) => void;
}) {
  const selectedQty = quantities[product.id] || 1;

  return (
    <div className="group flex flex-col justify-between">
      <div>
        {/* ── Outer Card Showcase (Bisleri Style with Vertical Pill & Bottle Count Badge) ── */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square bg-[#F2F2F5] hover:bg-[#EBEBEF] rounded-[28px] sm:rounded-[32px] flex items-center justify-center border border-black/[0.04] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Bottle Image */}
          {product.hasBg ? (
            <div className="relative z-0 w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="relative z-0 w-full h-full flex items-center justify-center p-5 sm:p-7 pr-12 sm:pr-14">
              <img
                src={product.image}
                alt={product.name}
                className={`w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-105 ${
                  product.id === "2litre"
                    ? "max-h-[96%] scale-110 sm:scale-115"
                    : "max-h-[82%]"
                }`}
              />
            </div>
          )}

          {/* ── Right-Side Badge Column (Exact Bisleri Format) ── */}
          <div className="absolute right-3.5 sm:right-5 top-5 bottom-5 flex flex-col justify-center items-center gap-2.5 sm:gap-3 z-10 pointer-events-none">
            {/* Top Vertical Pill Badge: Size */}
            <div className="w-11 sm:w-13 h-28 sm:h-34 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#D41834] via-[#C8102E] to-[#A80D24] text-white flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
              <span className="font-extrabold text-xs sm:text-sm tracking-widest uppercase select-none -rotate-90 whitespace-nowrap">
                {product.size}
              </span>
            </div>

            {/* Bottom Rounded Square Badge: Bottle Count */}
            <div className="w-11 sm:w-13 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#D41834] via-[#C8102E] to-[#A80D24] text-white flex flex-col items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.25)] p-1 text-center">
              <span className="font-black text-base sm:text-lg leading-none tracking-tight">
                {product.bottleCount}
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium leading-tight opacity-95 mt-0.5 tracking-tight">
                Bottles
              </span>
            </div>
          </div>
        </div>

        {/* ── Product Title & Case Subtitle (Clean & Prominent) ── */}
        <div className="text-center mt-4 sm:mt-5 px-1">
          <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] tracking-tight leading-snug">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6E73] font-medium mt-1">
            {product.packTitle}
          </p>
        </div>
      </div>

      {/* ── Order Actions & Stepper ── */}
      <div className="mt-5 space-y-2.5">
        {/* Case Stepper Counter */}
        <div className="flex items-center justify-between bg-[#F5F5F7] rounded-full px-3 py-1.5 border border-black/[0.04]">
          <span className="text-xs font-semibold text-[#515154] pl-1">
            Cases:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateCardQty(product.id, -1)}
              className="w-7 h-7 rounded-full bg-white text-[#1D1D1F] font-bold flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm shadow-xs"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-xs font-bold text-[#1D1D1F] w-6 text-center tabular-nums">
              {selectedQty}
            </span>
            <button
              onClick={() => updateCardQty(product.id, 1)}
              className="w-7 h-7 rounded-full bg-white text-[#1D1D1F] font-bold flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm shadow-xs"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-full bg-[#1D1D1F] hover:bg-black text-white py-2.5 sm:py-3 text-xs font-semibold tracking-wide transition-all active:scale-[0.98] shadow-xs hover:shadow-md flex items-center justify-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Cart • {selectedQty} {selectedQty === 1 ? "Case" : "Cases"}</span>
        </button>

        {/* Instant WhatsApp Order */}
        <button
          onClick={() => handleInstantWhatsApp(product)}
          className="w-full rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/80 py-2 sm:py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98]"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>Express WhatsApp Order</span>
        </button>
      </div>
    </div>
  );
}

export default function ProductSection() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    "200ml": 1,
    "250ml": 1,
    "300ml": 1,
    "500ml": 1,
    "1litre": 1,
    "2litre": 1,
  });
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [address, setAddress] = useState("Turakapalem, Guntur");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const updateCardQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const addToCart = (product: Product) => {
    const qtyToAdd = quantities[product.id] || 1;
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + qtyToAdd,
    }));
    showToast(`Added ${qtyToAdd}x ${product.name} to Cart`);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const clearCart = () => setCart({});

  const totalCasesCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const cartItems = Object.entries(cart).map(([productId, qty]) => {
    const product = products.find((p) => p.id === productId)!;
    return {
      ...product,
      qty,
    };
  });

  const buildWhatsAppUrl = () => {
    if (cartItems.length === 0) return "#";
    let message = `*INDUS WATER ORDER - DIRECT DISPATCH* 💧\n\n`;
    message += `*Customer Address:* ${address.trim() || "Turakapalem, Guntur"}\n`;
    message += `*Availability:* 24/7 Doorstep Active\n\n`;
    message += `*Order Items:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.packTitle}) - ${item.qty} ${item.qty === 1 ? "Case" : "Cases"}\n`;
    });

    message += `\n*Total Cases:* ${totalCasesCount} ${totalCasesCount === 1 ? "Case" : "Cases"}\n\n`;
    message += `Please confirm delivery timeline.`;

    return `https://wa.me/919060234566?text=${encodeURIComponent(message)}`;
  };

  const handleInstantWhatsApp = (product: Product) => {
    const qty = quantities[product.id] || 1;
    const text =
      `*INDUS WATER - EXPRESS ORDER* 💧\n\n` +
      `*Product:* ${product.name}\n` +
      `*Packaging:* ${product.packTitle}\n` +
      `*Quantity:* ${qty} ${qty === 1 ? "Case" : "Cases"} (${qty * product.bottleCount} Total Bottles)\n` +
      `*Delivery Address:* Turakapalem, Guntur\n\n` +
      `Please confirm my delivery!`;
    window.open(`https://wa.me/919060234566?text=${encodeURIComponent(text)}`, "_blank");
  };

  const filteredProducts = products.filter((p) => {
    if (activeTab === "single") return ["200ml", "250ml", "300ml"].includes(p.id);
    if (activeTab === "daily") return ["500ml", "1litre", "2litre"].includes(p.id);
    return true;
  });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 bg-[#FAFAFC] border-b border-black/[0.04] overflow-hidden"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-50 bg-[#1D1D1F] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
            Pure Packaging Collection
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] text-balance mb-4 leading-tight">
            Explore the <span className="font-brand font-normal tracking-wide">Indus</span> collection.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] text-pretty">
            Available in 6 tailored case formats — from 200 ml event cups to 2 Litre handle family bottles.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-[#1D1D1F] text-white shadow-xs"
                  : "bg-white text-[#515154] hover:bg-black/[0.04] border border-black/[0.06]"
              }`}
            >
              All Formats (6)
            </button>
            <button
              onClick={() => setActiveTab("single")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "single"
                  ? "bg-[#1D1D1F] text-white shadow-xs"
                  : "bg-white text-[#515154] hover:bg-black/[0.04] border border-black/[0.06]"
              }`}
            >
              Single-Serve (200ml, 250ml, 300ml)
            </button>
            <button
              onClick={() => setActiveTab("daily")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "daily"
                  ? "bg-[#1D1D1F] text-white shadow-xs"
                  : "bg-white text-[#515154] hover:bg-black/[0.04] border border-black/[0.06]"
              }`}
            >
              Daily & Family (500ml, 1 L, 2 L)
            </button>
          </div>
        </div>

        {/* ── Product Cards Grid (5 Products Matching Bisleri Design) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch justify-center">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantities={quantities}
              updateCardQty={updateCardQty}
              addToCart={addToCart}
              handleInstantWhatsApp={handleInstantWhatsApp}
            />
          ))}
        </div>

        {/* Direct Dispatch Guarantee Banner */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.05] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1D1D1F]">
                24/7 Bulk & Wholesale Doorstep Dispatch
              </h4>
              <p className="text-xs text-[#86868B] mt-0.5">
                Direct factory delivery across Turakapalem, Guntur and surrounding regions with zero transit damage.
              </p>
            </div>
          </div>
          <a
            href="tel:9060234566"
            className="flex items-center gap-2 bg-[#F5F5F7] hover:bg-[#EAEAEF] text-[#1D1D1F] px-4 py-2.5 rounded-full text-xs font-semibold border border-black/[0.06] transition-colors whitespace-nowrap active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Call 9060234566</span>
          </a>
        </div>
      </div>

      {/* Floating Cart Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#1D1D1F] hover:bg-[#000000] text-white px-5 py-3 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.2)] flex items-center gap-3 border border-white/10"
      >
        <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-semibold">View Order Cart</span>
        {totalCasesCount > 0 && (
          <span className="bg-[#C8102E] text-white text-[11px] font-bold px-2 py-0.5 rounded-full tabular-nums">
            {totalCasesCount} {totalCasesCount === 1 ? "Case" : "Cases"}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end"
            onClick={() => setIsDrawerOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#C8102E]" />
                    <h3 className="text-lg font-bold text-[#1D1D1F]">
                      Your Wholesale Order
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-[#EAEAEF] flex items-center justify-center text-[#515154] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="py-20 text-center">
                    <p className="text-sm font-semibold text-[#86868B] mb-2">
                      Your order is empty.
                    </p>
                    <p className="text-xs text-[#AEAEB2]">
                      Add cases above to place a 24/7 direct factory delivery order.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 py-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-[#F5F5F7] border border-black/[0.03]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 border border-black/[0.04]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="max-h-full w-auto object-contain"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#1D1D1F]">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-[#86868B]">
                              {item.packTitle} • {item.qty * item.bottleCount} Bottles Total
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            className="w-6 h-6 rounded-full bg-white text-[#1D1D1F] font-bold text-xs flex items-center justify-center shadow-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-[#1D1D1F] w-4 text-center tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            className="w-6 h-6 rounded-full bg-white text-[#1D1D1F] font-bold text-xs flex items-center justify-center shadow-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Drawer Actions */}
              {cartItems.length > 0 && (
                <div className="pt-4 border-t border-black/[0.06] space-y-4">
                  {/* Address input */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#86868B] mb-1">
                      Delivery Location
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter delivery area / landmark"
                      className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl border border-black/[0.1] bg-[#F5F5F7] focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#86868B]">Total Cases:</span>
                    <span className="font-bold text-[#1D1D1F] tabular-nums">
                      {totalCasesCount} {totalCasesCount === 1 ? "Case" : "Cases"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs py-3 rounded-full transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Confirm Order on WhatsApp</span>
                    </a>

                    <button
                      onClick={clearCart}
                      className="w-full text-[11px] text-[#86868B] hover:text-[#1D1D1F] py-1 text-center font-medium"
                    >
                      Clear Order
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
