'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Truck, RotateCcw, Shield, ArrowRight, ShoppingCart } from 'lucide-react';
import { getCartUrl, PROMO_CODE } from '@/lib/shopify';

// Variant images from Shopify CDN
const variantImages: Record<string, string> = {
  'walnut-black': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/Walnut_Black.jpg?v=1765489975',
  'walnut-white': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/Walnut_White.jpg?v=1765489975',
  'acacia-black': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/Acacia_Black_5882a819-a7af-4b77-8bc2-5042b83c2e02.jpg?v=1765489975',
  'acacia-white': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/Acacia_White_5316ef24-3382-4293-8d44-f088cddb9f60.jpg?v=1765489975',
  'pheasantwood-black': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/PheasentWood_Black.jpg?v=1765489975',
  'pheasantwood-white': 'https://cdn.shopify.com/s/files/1/0078/8715/9367/files/PheasentWood_White.jpg?v=1765489975',
};

// Wood types with per-size pricing
const woodTypes = [
  {
    id: 'walnut',
    name: 'Walnut',
    description: 'Rich chocolate tones with elegant grain',
    swatch: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-1090966.jpg?v=1765489975&width=200',
    prices: {
      S: { price: 960, originalPrice: 1200 },
      M: { price: 1120, originalPrice: 1400 },
      L: { price: 1280, originalPrice: 1600 },
    }
  },
  {
    id: 'acacia',
    name: 'Acacia',
    description: 'Natural blonde with distinctive patterns',
    swatch: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-6103063.jpg?v=1765489975&width=200',
    prices: {
      S: { price: 740, originalPrice: 925 },
      M: { price: 1000, originalPrice: 1250 },
      L: { price: 1160, originalPrice: 1450 },
    }
  },
  {
    id: 'pheasantwood',
    name: 'Pheasant Wood',
    description: 'Golden amber with red undertones',
    swatch: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-9900632.jpg?v=1765489975&width=200',
    prices: {
      S: { price: 840, originalPrice: 1050 },
      M: { price: 1000, originalPrice: 1250 },
      L: { price: 1160, originalPrice: 1450 },
    }
  },
];

// Frame colors
const frameColors = [
  { id: 'black', name: 'Black', hex: '#1a1a1a' },
  { id: 'white', name: 'White', hex: '#f5f5f5' },
];

// Size options
const sizes = [
  { id: 'S', label: '47" × 29"', name: 'Small' },
  { id: 'M', label: '59" × 29"', name: 'Medium' },
  { id: 'L', label: '71" × 29"', name: 'Large' },
];

export default function ProductPicker() {
  const [selectedWood, setSelectedWood] = useState(woodTypes[0]);
  const [selectedFrame, setSelectedFrame] = useState(frameColors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default to Medium

  const variantKey = `${selectedWood.id}-${selectedFrame.id}`;
  const currentImage = variantImages[variantKey];

  // Get current price based on wood type and size
  const currentPricing = selectedWood.prices[selectedSize.id as keyof typeof selectedWood.prices];
  const currentPrice = currentPricing.price;
  const originalPrice = currentPricing.originalPrice;
  const sezzlePayment = Math.round(currentPrice / 4);

  const getCheckoutUrl = () => {
    return getCartUrl(
      selectedWood.name,
      selectedFrame.name,
      selectedSize.id,
      PROMO_CODE
    );
  };

  return (
    <section id="product-picker" className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative aspect-[4/3] bg-[var(--cream)] rounded-2xl overflow-hidden">
              <Image
                src={currentImage}
                alt={`${selectedWood.name} desk with ${selectedFrame.name} frame`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Sale badge */}
              <div className="absolute top-4 left-4 bg-[var(--orange)] text-white text-sm font-bold px-3 py-1.5 rounded-full">
                Save ${originalPrice - currentPrice}
              </div>
            </div>

            {/* Thumbnail strip - show all 6 variants */}
            <div className="flex gap-1.5 mt-3 overflow-x-auto scrollbar-hide pb-1">
              {Object.entries(variantImages).map(([key, url]) => (
                <button
                  key={key}
                  onClick={() => {
                    const [wood, frame] = key.split('-');
                    setSelectedWood(woodTypes.find(w => w.id === wood) || woodTypes[0]);
                    setSelectedFrame(frameColors.find(f => f.id === frame) || frameColors[0]);
                  }}
                  className={`relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                    variantKey === key ? 'border-[var(--orange)]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image src={url} alt="" fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Configuration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Title */}
            <div>
              <p className="text-xs text-[var(--orange)] font-medium mb-1">EFFYDESK</p>
              <h1 className="text-2xl md:text-4xl font-serif text-[var(--forest)] mb-1">
                Wildwood Standing Desk
              </h1>
              <p className="text-sm text-[var(--forest)]/60">
                Solid {selectedWood.name} • {selectedFrame.name} Frame • {selectedSize.label}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-3xl font-bold text-[var(--forest)]">
                ${currentPrice.toLocaleString()}
              </span>
              <span className="text-lg text-[var(--forest)]/40 line-through">
                ${originalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-medium text-[var(--forest)]/60">CAD</span>
            </div>

            {/* Sezzle */}
            <p className="text-sm text-[var(--forest)]/60 pb-4 mb-2 border-b border-gray-100">
              or 4 interest-free payments of <span className="font-semibold text-[var(--forest)]">${sezzlePayment}</span> with Sezzle
            </p>

            {/* Wood Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-[var(--forest)] mb-3">
                Wood Type: <span className="font-normal text-[var(--forest)]/60">{selectedWood.name}</span>
              </label>
              <div className="flex gap-3">
                {woodTypes.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setSelectedWood(wood)}
                    className={`relative w-14 h-14 rounded-full overflow-hidden transition-all ${
                      selectedWood.id === wood.id
                        ? 'ring-2 ring-[var(--orange)] ring-offset-2'
                        : 'hover:scale-105'
                    }`}
                    title={wood.name}
                  >
                    <Image
                      src={wood.swatch}
                      alt={wood.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                    {selectedWood.id === wood.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Check className="w-5 h-5 text-white drop-shadow-md" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-[var(--forest)] mb-3">
                Frame Color: <span className="font-normal text-[var(--forest)]/60">{selectedFrame.name}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {frameColors.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                      selectedFrame.id === frame.id
                        ? 'border-[var(--orange)] bg-[var(--orange)]/5'
                        : 'border-gray-200 hover:border-gray-300 active:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border ${frame.id === 'white' ? 'border-gray-300' : 'border-transparent'}`}
                      style={{ backgroundColor: frame.hex }}
                    />
                    <span className="text-sm font-medium text-[var(--forest)]">{frame.name}</span>
                    {selectedFrame.id === frame.id && (
                      <Check className="w-4 h-4 text-[var(--orange)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-[var(--forest)] mb-3">
                Desktop Size
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {sizes.map((size) => {
                  const sizePrice = selectedWood.prices[size.id as keyof typeof selectedWood.prices].price;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2 rounded-lg border-2 text-center transition-all ${
                        selectedSize.id === size.id
                          ? 'border-[var(--orange)] bg-[var(--orange)]/5'
                          : 'border-gray-200 hover:border-gray-300 active:bg-gray-50'
                      }`}
                    >
                      <span className="block text-xs font-bold text-[var(--forest)]">{size.name}</span>
                      <span className="block text-[9px] text-[var(--forest)]/50 leading-tight">{size.label}</span>
                      <span className="block text-sm font-semibold text-[var(--forest)] mt-0.5">${sizePrice.toLocaleString()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to Cart Button */}
            <a
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[var(--orange)] hover:bg-[#a84216] active:bg-[#8a3512] text-white font-bold text-sm py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart - ${currentPrice.toLocaleString()}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              {[
                { icon: Truck, label: 'Free Shipping', sublabel: 'Canada & US' },
                { icon: RotateCcw, label: '30-Day Trial', sublabel: 'Full refund' },
                { icon: Shield, label: '20-Year Warranty', sublabel: 'Industry best' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-5 h-5 mx-auto text-[var(--gold)] mb-1" />
                  <p className="text-xs font-medium text-[var(--forest)]">{item.label}</p>
                  <p className="text-xs text-[var(--forest)]/50">{item.sublabel}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
