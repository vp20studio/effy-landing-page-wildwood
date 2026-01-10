'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Check, Zap } from 'lucide-react';
import { productMeta, product } from '@/lib/constants';

const galleryImages = [
  { src: '/images/product-full.jpg', alt: 'Wildwood Standing Desk - Front View' },
  { src: '/images/hero-lifestyle.webp', alt: 'Wildwood Desk in Home Office' },
  { src: '/images/lifestyle-setup.webp', alt: 'Wildwood Desk with Monitor Setup' },
  { src: '/images/lifestyle-overhead.webp', alt: 'Working at Wildwood Desk' },
  { src: '/images/materials-walnut.jpg', alt: 'Solid Walnut Wood Grain Detail' },
];

const quickFeatures = [
  'Solid Walnut Wood',
  'Dual Motor System',
  'Wireless Charging Keypad',
  '300lb Capacity',
];

export default function ProductHero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section className="bg-[#FDF5EF] pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Promo Banner */}
      <div className="bg-[#BA4B1A] text-white text-center py-3 px-4 mb-8">
        <p className="text-sm md:text-base font-medium">
          <Zap className="inline w-4 h-4 mr-1" />
          New Year Sale: Use code <span className="font-bold">{productMeta.promoCode}</span> for {productMeta.promoDiscount} off
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentImage].src}
                    alt={galleryImages[currentImage].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-[#2C2F21]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5 text-[#2C2F21]" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-sm">
                {currentImage + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    currentImage === index
                      ? 'ring-2 ring-[#BA4B1A] ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info & CTAs */}
          <div className="lg:sticky lg:top-24">
            {/* Rating Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(productMeta.rating)
                        ? 'text-[#D3841E] fill-[#D3841E]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#2C2F21] font-medium">{productMeta.rating}</span>
              <span className="text-[#5C5F52]">({productMeta.reviewCount} reviews)</span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-2">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-[#5C5F52] mb-6">
              {product.tagline}
            </p>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-[#2C2F21]">
                ${productMeta.currentPrice.toLocaleString()} <span className="text-lg font-normal">CAD</span>
              </span>
              <span className="text-xl text-[#8B8D85] line-through">
                ${productMeta.originalPrice.toLocaleString()}
              </span>
              <span className="px-2 py-1 bg-[#BA4B1A] text-white text-sm font-semibold rounded">
                SAVE ${productMeta.savings}
              </span>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {quickFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-[#2C2F21]">
                  <Check className="w-4 h-4 text-[#BA4B1A]" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white text-lg font-bold rounded-lg shadow-lg transition-colors mb-3"
            >
              Add to Cart - ${productMeta.currentPrice.toLocaleString()}
            </motion.button>

            {/* Secondary CTAs */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-3 border-2 border-[#2C2F21] text-[#2C2F21] hover:bg-[#2C2F21] hover:text-white font-semibold rounded-lg transition-colors">
                Express Checkout
              </button>
              <button className="flex-1 py-3 border-2 border-[#5C5F52] text-[#5C5F52] hover:border-[#2C2F21] hover:text-[#2C2F21] font-semibold rounded-lg transition-colors">
                Add to Registry
              </button>
            </div>

            {/* Financing */}
            <div className="bg-white rounded-lg p-4 border border-[#E5E5E0]">
              <p className="text-sm text-[#5C5F52] mb-2">
                <span className="font-semibold text-[#2C2F21]">Pay in 4</span> interest-free installments of{' '}
                <span className="font-semibold text-[#2C2F21]">
                  ${Math.round(productMeta.currentPrice / 4).toLocaleString()}
                </span>{' '}
                with Afterpay
              </p>
              <div className="flex items-center gap-4 text-xs text-[#8B8D85]">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> Free Shipping
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> 30-Day Trial
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> 10-Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
