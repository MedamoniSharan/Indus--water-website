"use client";

import React, { useState } from "react";

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
          id="whatsapp-real-grad"
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
      {/* Outer crisp white contour border */}
      <path
        fill="#ffffff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      {/* Authentic WhatsApp green gradient speech bubble */}
      <path
        fill="url(#whatsapp-real-grad)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      {/* Real WhatsApp white phone handset */}
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
  volume: string;
  price: number;
  description: string;
  image: string;
  scale: string;
  packNote: string;
}

const products: Product[] = [
  {
    id: "500ml",
    name: "INDUS 500 ML Bottle",
    size: "500 ML",
    volume: "Personal Hydration",
    price: 15,
    packNote: "Single Bottle / Box of 24",
    description: "Ideal for daily travel, fitness, and quick on-the-go refreshments.",
    image: "/images/bottle-splash.jpg",
    scale: "scale-90",
  },
  {
    id: "1liter",
    name: "INDUS 1 Liter Bottle",
    size: "1 LITER",
    volume: "Everyday Standard",
    price: 20,
    packNote: "Single Bottle / Box of 12",
    description: "Our signature bottle with balanced essential minerals. Perfect for home and office.",
    image: "/images/bottle-hand.jpg",
    scale: "scale-100",
  },
  {
    id: "20liter",
    name: "INDUS 20 Liters Bulk Can",
    size: "20 LITERS / BULK",
    volume: "Home & Event Supply",
    price: 80,
    packNote: "20L Sturdy Dispenser Can",
    description: "24/7 doorstep delivery in Guntur for families, functions, and enterprises.",
    image: "/images/bottle-splash.jpg",
    scale: "scale-105",
  },
];

export default function ProductSection() {
  // Cart state: { [productId]: quantity }
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  // Card input quantities before adding
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    "500ml": 1,
    "1liter": 1,
    "20liter": 1,
  });
  // Drawer open state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Delivery address / note
  const [address, setAddress] = useState("Turakapalem, Guntur");
  // Feedback toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
    showToast(`Added ${qtyToAdd}x ${product.size} to WhatsApp Cart! 💧`);
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

  // Compute total items count and total bill
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

  // Generate WhatsApp order message with phone 9060234566
  const buildWhatsAppUrl = () => {
    if (cartItems.length === 0) return "#";
    let message = `*NEW ORDER - INDUS PACKAGED DRINKING WATER* 💧\n\n`;
    message += `*Customer Delivery Address:* ${address.trim() || "Turakapalem, Guntur"}\n`;
    message += `*Service:* 24/7 Hours Available\n\n`;
    message += `*Order Items:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.size}) x ${item.qty} = ₹${item.subtotal}\n`;
    });

    message += `\n*TOTAL AMOUNT: ₹${totalAmount}*\n\n`;
    message += `Please confirm my order and deliver to my address as soon as possible. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/919060234566?text=${encoded}`;
  };

  // Instant single product order on WhatsApp
  const handleInstantWhatsApp = (product: Product) => {
    const qty = quantities[product.id] || 1;
    const subtotal = product.price * qty;
    const text = `*INDUS WATER - QUICK ORDER* 💧\n\n` +
      `*Product:* ${product.name} (${product.size})\n` +
      `*Quantity:* ${qty}\n` +
      `*Estimated Price:* ₹${subtotal}\n` +
      `*Location:* Turakapalem, Guntur\n\n` +
      `Please confirm my delivery!`;
    window.open(`https://wa.me/919060234566?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="products" className="relative py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-sm z-50 bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 border border-emerald-400/40">
          <WhatsAppIcon className="w-5 h-5 text-white flex-shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#C8102E] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">
          Pure &amp; Refreshing Hydration
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 sm:mt-4 mb-2 sm:mb-3">
          Our <span className="text-[#C8102E]">Products</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base md:text-lg leading-relaxed">
          INDUS Packaged Drinking Water is available in diverse pack sizes with pure mineral balance.
          Add items to your <strong>WhatsApp Cart</strong> and place your order in 1-click!
        </p>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product) => {
            const selectedQty = quantities[product.id] || 1;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 p-5 sm:p-7 flex flex-col items-center border border-rose-100 hover:border-[#C8102E]/30 hover:-translate-y-2 relative overflow-hidden text-center"
              >
                {/* Top Badge: Price & 24/7 Stock */}
                <div className="w-full flex items-center justify-between mb-2">
                  <span className="text-xs font-black bg-rose-50 text-[#C8102E] border border-rose-200/80 px-3 py-1 rounded-full">
                    ₹{product.price} <span className="text-[10px] font-normal text-slate-500">/ unit</span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    24/7 Stock
                  </span>
                </div>

                {/* Real Bottle Image */}
                <div className="flex items-center justify-center my-3 h-48 sm:h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-rose-50/40 via-white to-rose-50/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`max-h-44 sm:max-h-52 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 ${product.scale}`}
                  />
                </div>

                {/* Size Info */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#C8102E] transition-colors mb-0.5">
                  {product.size}
                </h3>
                <p className="text-xs uppercase font-bold tracking-wider text-[#C8102E] mb-1">{product.volume}</p>
                <p className="text-[11px] font-semibold text-slate-400 mb-2">{product.packNote}</p>
                <p className="text-slate-500 text-xs sm:text-sm mb-4 flex-1 leading-relaxed">{product.description}</p>

                {/* Quantity Selector */}
                <div className="w-full flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-2 mb-3">
                  <span className="text-xs font-bold text-slate-600">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCardQty(product.id, -1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-sm active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-sm font-black text-slate-900 w-6 text-center">
                      {selectedQty}
                    </span>
                    <button
                      onClick={() => updateCardQty(product.id, 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-sm active:scale-95"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action 1: Add To WhatsApp Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#C8102E] hover:bg-red-700 active:scale-[0.98] text-white font-extrabold py-3 px-4 rounded-2xl shadow-md shadow-red-500/20 flex items-center justify-center gap-2 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider mb-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span>ADD TO WHATSAPP CART</span>
                </button>

                {/* Action 2: Instant 1-Click WhatsApp Order */}
                <button
                  onClick={() => handleInstantWhatsApp(product)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold py-2.5 px-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all duration-200 text-xs uppercase tracking-wider"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>ORDER INSTANTLY ON WHATSAPP</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Floating WhatsApp Cart Badge (Bottom Right) ── */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 active:scale-95 text-white font-black px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-900/40 flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 hover:scale-105 border-2 border-white"
        aria-label="Open WhatsApp Cart"
      >
        <div className="relative flex-shrink-0">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
          {totalItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C8102E] text-white text-[10px] sm:text-xs font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
              {totalItemsCount}
            </span>
          )}
        </div>
        <div className="text-left flex flex-col">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-90 leading-tight">
            WhatsApp Cart
          </span>
          <span className="text-xs sm:text-sm font-extrabold leading-tight">
            {totalItemsCount > 0 ? `₹${totalAmount} (${totalItemsCount})` : "View Order"}
          </span>
        </div>
      </button>

      {/* ── WhatsApp Cart Slide-out Drawer ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Overlay click to close */}
          <div className="absolute inset-0" onClick={() => setIsDrawerOpen(false)} />

          {/* Drawer container */}
          <div
            className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300"
            style={{ maxHeight: "100dvh" }}
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-6 border-b border-rose-100 bg-gradient-to-r from-rose-50 via-white to-emerald-50 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md border border-emerald-100 flex-shrink-0">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    WhatsApp Cart
                  </h3>
                  <p className="text-[11px] sm:text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Direct to 9060234566
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-sm font-bold text-sm"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-50 flex items-center justify-center text-[#C8102E] mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">Your cart is empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs mb-6">
                    Add bottles or bulk cans from our product selection above to place your WhatsApp order.
                  </p>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow active:scale-95"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Selected Items ({totalItemsCount})
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-800"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/60"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl bg-white p-1 border border-slate-100 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{item.size}</p>
                        <p className="text-[11px] text-slate-500">₹{item.price} each</p>
                        <p className="text-xs font-extrabold text-[#C8102E] mt-0.5">
                          Total: ₹{item.subtotal}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 sm:gap-1.5 bg-white border border-slate-200 rounded-xl px-2 py-1 shadow-sm flex-shrink-0">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-6 h-6 rounded-md text-slate-600 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center active:scale-90"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-6 h-6 rounded-md text-slate-600 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center active:scale-90"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Delivery Location Field */}
                  <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Delivery Address / Note:
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your location or area"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">
                      📍 Default: Turakapalem, Guntur (24/7 Doorstep Delivery)
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer with Checkout */}
            {cartItems.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex-shrink-0">
                <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>24/7 Delivery Charge</span>
                    <span className="text-emerald-600 font-bold">FREE (Guntur)</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-black text-sm sm:text-base pt-2 border-t border-slate-200">
                    <span>Total Amount</span>
                    <span className="text-[#C8102E]">₹{totalAmount}</span>
                  </div>
                </div>

                {/* Primary WhatsApp Order Button */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide"
                >
                  <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
                  <span>CHECKOUT ON WHATSAPP</span>
                </a>

                {/* Direct Call Alternative */}
                <a
                  href="tel:9060234566"
                  className="w-full mt-2 text-center text-[11px] sm:text-xs text-slate-600 hover:text-[#C8102E] font-semibold py-1.5 block transition-colors"
                >
                  Or Call Directly: 9060234566 (24/7)
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}