"use client";

import React, { useState } from "react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.838.89 2.791.89h.005c3.18 0 5.767-2.587 5.768-5.766.001-3.181-2.586-5.766-5.768-5.766zm9.969 5.766c-.002 5.519-4.49 9.998-10.01 9.998-1.748 0-3.415-.459-4.887-1.319l-5.603 1.468 1.498-5.467c-.939-1.534-1.439-3.3-1.44-5.12.002-5.519 4.49-9.998 10.01-9.998 5.519 0 10.032 4.479 10.032 9.438zm-1.849 0c0-4.497-3.666-8.156-8.183-8.156-4.516 0-8.181 3.659-8.183 8.156 0 1.57.442 3.037 1.218 4.301l-.813 2.973 3.053-.801c1.218.718 2.623 1.127 4.125 1.127 4.518 0 8.183-3.659 8.183-8.6zm-4.708 3.513c-.225-.113-1.332-.657-1.539-.732-.206-.075-.356-.113-.506.113-.15.225-.581.732-.712.882-.131.15-.262.169-.487.056-.225-.113-.951-.351-1.811-1.118-.67-.598-1.122-1.336-1.253-1.561-.131-.225-.014-.347.098-.459.102-.102.225-.263.337-.394.113-.131.15-.225.225-.375.075-.15.038-.282-.019-.394-.056-.113-.506-1.219-.694-1.669-.183-.439-.369-.379-.506-.386-.131-.007-.281-.009-.431-.009s-.394.056-.6.282c-.206.225-.788.769-.788 1.875s.806 2.175.919 2.325c.113.15 1.586 2.423 3.842 3.398.537.232.956.37 1.282.474.54.172 1.031.148 1.419.09.432-.064 1.332-.544 1.52-1.069.188-.525.188-.975.131-1.069-.056-.094-.206-.15-.431-.263z"/>
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

  // Calculations
  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const prod = products.find((p) => p.id === id);
      return prod ? { ...prod, qty, subtotal: prod.price * qty } : null;
    })
    .filter(Boolean) as (Product & { qty: number; subtotal: number })[];

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  // Generate WhatsApp Order Link
  const buildWhatsAppUrl = (customText?: string) => {
    const phone = "919060234566";
    let text = "";

    if (customText) {
      text = customText;
    } else {
      if (cartItems.length === 0) {
        text = `Hello INDUS Water, I would like to order pure packaged drinking water! Please share details.`;
      } else {
        const itemsList = cartItems
          .map((item) => `• ${item.name} (${item.size}) x ${item.qty} = ₹${item.subtotal}`)
          .join("\n");

        text = `*INDUS WATER - NEW ORDER* 💧\n\n` +
          `*Order Items:*\n${itemsList}\n\n` +
          `*Total Amount:* ₹${totalAmount}\n` +
          `*Delivery Address:* ${address}\n` +
          `*Delivery Type:* 24/7 Express Dispatch\n\n` +
          `Please confirm this order and dispatch immediately. Thank you!`;
      }
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
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
    <section id="products" className="relative py-24 px-4 bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 border border-emerald-400/40">
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">
          Pure &amp; Refreshing Hydration
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-3">
          Our <span className="text-[#C8102E]">Products</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-14 text-base md:text-lg leading-relaxed">
          INDUS Packaged Drinking Water is available in diverse pack sizes with pure mineral balance.
          Add items to your <strong>WhatsApp Cart</strong> and place your order in 1-click!
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => {
            const selectedQty = quantities[product.id] || 1;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 p-7 flex flex-col items-center border border-rose-100 hover:border-[#C8102E]/30 hover:-translate-y-2 relative overflow-hidden"
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

                {/* Real Bottle Image with smooth zoom on hover */}
                <div className="flex items-center justify-center my-3 h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-rose-50/40 via-white to-rose-50/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`max-h-52 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 ${product.scale}`}
                  />
                </div>

                {/* Size Info */}
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#C8102E] transition-colors mb-0.5">
                  {product.size}
                </h3>
                <p className="text-xs uppercase font-bold tracking-wider text-[#C8102E] mb-1">{product.volume}</p>
                <p className="text-[11px] font-semibold text-slate-400 mb-2">{product.packNote}</p>
                <p className="text-slate-500 text-xs mb-4 flex-1 leading-relaxed">{product.description}</p>

                {/* Quantity Selector */}
                <div className="w-full flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-1.5 mb-3">
                  <span className="text-xs font-bold text-slate-600">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCardQty(product.id, -1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-sm font-black text-slate-900 w-6 text-center">
                      {selectedQty}
                    </span>
                    <button
                      onClick={() => updateCardQty(product.id, 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center transition-colors shadow-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action 1: Add To WhatsApp Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mb-2 bg-[#C8102E] hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase shadow-md shadow-red-500/15 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                  </svg>
                  <span>ADD TO CART (₹{product.price * selectedQty})</span>
                </button>

                {/* Action 2: Direct WhatsApp Order */}
                <button
                  onClick={() => handleInstantWhatsApp(product)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>INSTANT WHATSAPP ORDER</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Floating Sticky WhatsApp Cart Button ── */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
          aria-label="Open WhatsApp Cart"
        >
          <div className="relative">
            <WhatsAppIcon className="w-6 h-6 text-white" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-[#C8102E] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {totalItemsCount}
              </span>
            )}
          </div>
          <div className="text-left leading-tight">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">WhatsApp Cart</p>
            <p className="text-xs font-black">
              {totalItemsCount > 0 ? `${totalItemsCount} Items • ₹${totalAmount}` : "Order 24/7"}
            </p>
          </div>
        </button>
      </div>

      {/* ── Slide-Over WhatsApp Cart Drawer Modal ── */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          {/* Overlay click to close */}
          <div className="absolute inset-0" onClick={() => setIsDrawerOpen(false)} />

          {/* Drawer container */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-6 border-b border-rose-100 bg-gradient-to-r from-rose-50 via-white to-emerald-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    WhatsApp Cart
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Direct to 9060234566
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-9 h-9 rounded-full bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-[#C8102E] mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Your cart is empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs mb-6">
                    Add bottles or bulk cans from our product selection above to place your WhatsApp order.
                  </p>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow"
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
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{item.size}</p>
                        <p className="text-xs text-slate-500">₹{item.price} each</p>
                        <p className="text-xs font-extrabold text-[#C8102E] mt-0.5">
                          Total: ₹{item.subtotal}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2 py-1 shadow-sm">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-6 h-6 rounded-md text-slate-600 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-6 h-6 rounded-md text-slate-600 font-bold hover:bg-rose-50 hover:text-[#C8102E] flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Delivery Location Field */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
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
              <div className="p-6 border-t border-slate-100 bg-slate-50/80">
                <div className="space-y-1.5 mb-4 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>24/7 Delivery Charge</span>
                    <span className="text-emerald-600 font-bold">FREE (Guntur)</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-black text-base pt-2 border-t border-slate-200">
                    <span>Total Amount</span>
                    <span className="text-[#C8102E]">₹{totalAmount}</span>
                  </div>
                </div>

                {/* Primary WhatsApp Order Button */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] text-sm uppercase tracking-wide"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>CHECKOUT ON WHATSAPP</span>
                </a>

                {/* Direct Call Alternative */}
                <a
                  href="tel:9060234566"
                  className="w-full mt-2 text-center text-xs text-slate-600 hover:text-[#C8102E] font-semibold py-2 block transition-colors"
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
