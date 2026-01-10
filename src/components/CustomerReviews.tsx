'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { reviews, productMeta } from '@/lib/constants';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-4">
            What Customers <span className="text-[#BA4B1A]">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#5C5F52]">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#D3841E] text-[#D3841E]"
                />
              ))}
            </div>
            <span className="font-semibold text-[#2C2F21]">{productMeta.rating}</span>
            <span>from {productMeta.reviewCount} reviews</span>
          </div>
        </motion.div>

        {/* Review Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-[#FDF5EF] hover:bg-[#E5E5E0] flex items-center justify-center transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-[#2C2F21]" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-[#FDF5EF] hover:bg-[#E5E5E0] flex items-center justify-center transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-[#2C2F21]" />
          </button>

          {/* Review Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FDF5EF] rounded-2xl p-8 md:p-12"
            >
              {/* Quote */}
              <p className="text-xl md:text-2xl text-[#2C2F21] leading-relaxed mb-8 text-center">
                "{currentReview.text}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentReview.rating
                        ? 'fill-[#D3841E] text-[#D3841E]'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Review Title */}
              <p className="text-center font-semibold text-[#2C2F21] mb-4">
                {currentReview.title}
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2C2F21]">
                    {currentReview.name}
                  </span>
                  {currentReview.verified && (
                    <BadgeCheck className="w-4 h-4 text-[#BA4B1A]" />
                  )}
                </div>
                <span className="text-sm text-[#5C5F52]">
                  {currentReview.location} · {currentReview.variant}
                </span>
                <span className="text-xs text-[#8B8D85]">
                  {currentReview.date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#BA4B1A] w-6'
                    : 'bg-[#E5E5E0] hover:bg-[#5C5F52]'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button className="text-[#BA4B1A] hover:text-[#9E3F16] font-medium underline transition-colors">
            Read all reviews
          </button>
          <span className="text-[#E5E5E0]">|</span>
          <button className="text-[#5C5F52] hover:text-[#2C2F21] font-medium transition-colors">
            Write a review
          </button>
        </motion.div>
      </div>
    </section>
  );
}
