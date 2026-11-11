"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
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

interface Product {
  id: string;
  name: string;
  size: string;
  category: string;
  price: number;
  packFormat: string;
  description: string;
  image: string;
  features: string[];
  parallaxRange: [number, number];
}

const products: Product[] = [
  {
    id: "200ml",
    name: "INDUS 200 ML",
    size: "200 ML",
    category: "Single-Serve & Events",
    price: 10,
    packFormat: "Single Bottle / Box of 48",
    description: "Compact pocket-sized hydration ideal for weddings, celebrations, conferences, and quick refreshment.",
    image: "/images/product-200ml.jpg",
    features: ["Compact 200ml Pocket Fit", "Tamper-Evident Safety Cap", "Zero Chemical Preservatives"],
    parallaxRange: [-18, 18],
  },
  {
    id: "500ml",
    name: "INDUS 500 ML",
    size: "500 ML",
    category: "Personal & Commute",
    price: 15,
    packFormat: "Single Bottle / Box of 24",
    description: "Our signature active fitness and commute companion. Ergonomic grip designed for workouts, desks, and travel.",
    image: "/images/product-500ml.jpg",
    features: ["Ergonomic Grip Contours", "Rapid Mineral Absorption", "Food-Grade Recyclable PET"],
    parallaxRange: [18, -18],
  },
  {
    id: "2litre",
    name: "INDUS 2 Litre",
    size: "2 LITRE",
    category: "Family & Dining Standard",
    price: 30,
    packFormat: "Single 2L Bottle / Case of 6",
    description: "High-capacity signature family size. Formulated with balanced alkaline minerals for all-day dining hydration.",
    image: "/images/product-2litre.jpg",
    features: ["Large 2-Litre Home Capacity", "Balanced Alkaline pH 7.4", "Multi-Stage UV Disinfected"],
    parallaxRange: [-24, 24],
  },
];

function ProductCard({
  product,
  scrollYProgress,
  quantities,
  updateCardQty,
  addToCart,
  handleInstantWhatsApp,
}: {
  product: Product;
  scrollYProgress: any;
  quantities: { [key: string]: number };
  updateCardQty: (id: string, delta: number) => void;
  addToCart: (product: Product) => void;
  handleInstantWhatsApp: (product: Product) => void;
}) {
  const y = useTransform(scrollYProgress, [0, 1], product.parallaxRange);
  const selectedQty = quantities[product.id] || 1;

  return (
    <motion.div
      style={{ y }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-all duration-300 relative"
    >
      <div>
        {/* Top Category & Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-[#86868B]">
            {product.category}
          </span>
          <span className="text-xs font-black text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1 rounded-full border border-black/[0.03]">
            ₹{product.price}
          </span>
        </div>

        {/* Title & Format */}
        <h3 className="text-2xl font-black tracking-tight text-[#1D1D1F] mb-1">
          {product.size}
        </h3>
        <p className="text-xs text-[#86868B] mb-6">
          {product.packFormat}
        </p>

        {/* Studio Image Frame with Interactive Levitation */}
        <div className="w-full h-56 flex items-center justify-center p-4 bg-[#FAFAFC] rounded-2xl border border-black/[0.03] mb-6 overflow-hidden relative">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={product.image}
            alt={product.name}
            className="max-h-48 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
          />
          {/* Circular Emblem Seal */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full overflow-hidden border border-red-500/20 shadow-xs bg-white/90 p-0.5" title="INDUS Certified Packaging">
            <img src="/images/logo-circle.png" alt="INDUS Certified" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#515154] leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Feature Checkpoints */}
        <div className="space-y-2 mb-8 pt-4 border-t border-black/[0.05]">
          {product.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-[#86868B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="space-y-3 pt-4 border-t border-black/[0.05]">
        {/* Quantity Counter */}
        <div className="flex items-center justify-between bg-[#F5F5F7] rounded-full px-3 py-1.5 border border-black/[0.03]">
          <span className="text-xs font-semibold text-[#515154]">Quantity:</span>
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
          className="w-full rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-white py-3 text-xs font-semibold tracking-wide transition-all active:scale-[0.98] shadow-xs hover:shadow-md"
        >
          Add to Cart • ₹{product.price * selectedQty}
        </button>

        {/* Instant WhatsApp Order */}
        <button
          onClick={() => handleInstantWhatsApp(product)}
          className="w-full rounded-full bg-white hover:bg-[#F5F5F7] border border-black/[0.1] text-[#1D1D1F] py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
        >
          <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
          <span>Express WhatsApp Order</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductSection() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    "200ml": 1,
    "500ml": 1,
    "2litre": 1,
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [address, setAddress] = useState("Turakapalem, Guntur");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

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
    showToast(`Added ${qtyToAdd}x ${product.size} to Cart`);
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

  const totalItemsCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const cartItems = Object.entries(cart).map(([productId, qty]) => {
    const product = products.find((p) => p.id === productId)!;
    return {
      ...product,
      qty,
      subtotal: product.price * qty,
    };
  });

  const totalAmount = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  const buildWhatsAppUrl = () => {
    if (cartItems.length === 0) return "#";
    let message = `*INDUS WATER ORDER - DIRECT DISPATCH* 💧\n\n`;
    message += `*Customer Address:* ${address.trim() || "Turakapalem, Guntur"}\n`;
    message += `*Availability:* 24/7 Hours Active\n\n`;
    message += `*Order Items:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.size}) x ${item.qty} = ₹${item.subtotal}\n`;
    });

    message += `\n*TOTAL: ₹${totalAmount}*\n\n`;
    message += `Please confirm delivery timeline.`;

    return `https://wa.me/919060234566?text=${encodeURIComponent(message)}`;
  };

  const handleInstantWhatsApp = (product: Product) => {
    const qty = quantities[product.id] || 1;
    const subtotal = product.price * qty;
    const text =
      `*INDUS WATER - EXPRESS ORDER* 💧\n\n` +
      `*Product:* ${product.name} (${product.size})\n` +
      `*Quantity:* ${qty}\n` +
      `*Total:* ₹${subtotal}\n` +
      `*Address:* Turakapalem, Guntur\n\n` +
      `Please confirm my delivery!`;
    window.open(`https://wa.me/919060234566?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 bg-[#FAFAFC] border-b border-black/[0.04] overflow-hidden"
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

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-3">
            Product Lineup
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] text-balance mb-4 leading-tight">
            Explore the INDUS collection.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] text-pretty">
            Precision-engineered mineral drinking water, formulated in three distinct formats for every routine.
          </p>
        </div>

        {/* Product Cards Grid with Parallax Offsets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              scrollYProgress={scrollYProgress}
              quantities={quantities}
              updateCardQty={updateCardQty}
              addToCart={addToCart}
              handleInstantWhatsApp={handleInstantWhatsApp}
            />
          ))}
        </div>
      </div>

      {/* Floating Cart Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#1D1D1F] hover:bg-[#000000] text-white px-5 py-3 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.2)] flex items-center gap-3 border border-white/10"
        aria-label="Open Order Cart"
      >
        <div className="relative">
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          {totalItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C8102E] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalItemsCount}
            </span>
          )}
        </div>
        <div className="text-left text-xs font-semibold">
          {totalItemsCount > 0 ? `Cart (₹${totalAmount})` : "View Order Cart"}
        </div>
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
          >
            <div className="absolute inset-0" onClick={() => setIsDrawerOpen(false)} />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10"
              style={{ maxHeight: "100dvh" }}
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-black/[0.06] flex items-center justify-between flex-shrink-0">
                <div>
                  <h3 className="text-base font-bold text-[#1D1D1F]">
                    Order Summary
                  </h3>
                  <p className="text-xs text-[#86868B]">
                    Dispatched 24/7 across Guntur
                  </p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED] flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <p className="text-sm font-semibold text-[#1D1D1F] mb-1">Your bag is empty.</p>
                    <p className="text-xs text-[#86868B] max-w-xs mb-6">
                      Add 200ml, 500ml, or 2 Litre bottles to proceed.
                    </p>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="rounded-full bg-[#1D1D1F] text-white text-xs font-semibold px-6 py-2.5 hover:bg-[#000000]"
                    >
                      Browse Collection
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.05]">
                      <span className="text-xs font-semibold text-[#86868B]">
                        Items ({totalItemsCount})
                      </span>
                      <button
                        onClick={clearCart}
                        className="text-xs text-[#C8102E] hover:underline font-medium"
                      >
                        Clear
                      </button>
                    </div>

                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-[#F5F5F7] border border-black/[0.03]"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain bg-white rounded-xl p-1 border border-black/[0.04]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#1D1D1F] truncate">{item.name}</p>
                          <p className="text-[11px] text-[#86868B]">₹{item.price} each</p>
                          <p className="text-xs font-bold text-[#1D1D1F] mt-0.5">₹{item.subtotal}</p>
                        </div>

                        <div className="flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-xs border border-black/[0.05]">
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            className="w-5 h-5 rounded-full text-xs font-bold hover:bg-[#F5F5F7] flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold w-4 text-center tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            className="w-5 h-5 rounded-full text-xs font-bold hover:bg-[#F5F5F7] flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-black/[0.06]">
                      <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                        Delivery Address / Colony:
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. Turakapalem, Guntur"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.08] text-xs text-[#1D1D1F] focus:outline-none focus:border-black"
                      />
                      <p className="text-[10px] text-[#86868B] mt-1">
                        Direct local dispatch from Turakapalem facility.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Checkout */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-black/[0.06] bg-[#FAFAFC] flex-shrink-0">
                  <div className="space-y-1.5 mb-4 text-xs">
                    <div className="flex justify-between text-[#86868B]">
                      <span>Subtotal</span>
                      <span className="tabular-nums">₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-[#86868B]">
                      <span>Doorstep Dispatch</span>
                      <span className="text-emerald-600 font-semibold">Included (Guntur)</span>
                    </div>
                    <div className="flex justify-between text-[#1D1D1F] font-bold text-sm pt-2 border-t border-black/[0.06]">
                      <span>Total</span>
                      <span className="tabular-nums">₹{totalAmount}</span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1D1D1F] hover:bg-[#000000] text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all text-xs active:scale-[0.98] shadow-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                    <span>Send Order to WhatsApp (9060234566)</span>
                  </a>

                  <a
                    href="tel:9060234566"
                    className="w-full mt-2 text-center text-xs text-[#86868B] hover:text-[#1D1D1F] py-1.5 block transition-colors"
                  >
                    Or Call 24/7 Hotline: 9060234566
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
