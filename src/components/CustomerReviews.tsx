'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { reviews, productMeta } from '@/lib/constants';

// Rating distribution data
const ratingDistribution = [
  { stars: 5, percentage: 92, count: 227 },
  { stars: 4, percentage: 5, count: 12 },
  { stars: 3, percentage: 2, count: 5 },
  { stars: 2, percentage: 1, count: 2 },
  { stars: 1, percentage: 0, count: 1 },
];

// Review tags
const reviewTags = ['Quality', 'Setup', 'Stability', 'Design', 'Value', 'Customer Service'];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-[#F5F5F0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21]">
            Customer <span className="text-[#BA4B1A]">Reviews</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT: Rating Summary & Histogram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 h-fit"
          >
            {/* Overall Rating */}
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#2C2F21] mb-2">
                {productMeta.rating}
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(productMeta.rating)
                        ? 'fill-[#D3841E] text-[#D3841E]'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-[#5C5F52]">
                Based on {productMeta.reviewCount} reviews
              </p>
            </div>

            {/* Rating Histogram */}
            <div className="space-y-2">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2">
                  <span className="text-sm text-[#5C5F52] w-4">{rating.stars}</span>
                  <Star className="w-4 h-4 fill-[#D3841E] text-[#D3841E]" />
                  <div className="flex-1 h-2 bg-[#E5E5E0] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${rating.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-[#D3841E] rounded-full"
                    />
                  </div>
                  <span className="text-xs text-[#8B8D85] w-8 text-right">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Review Tags */}
            <div className="mt-6 pt-6 border-t border-[#E5E5E0]">
              <p className="text-sm font-medium text-[#2C2F21] mb-3">Filter by topic:</p>
              <div className="flex flex-wrap gap-2">
                {reviewTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedTag === tag
                        ? 'bg-[#BA4B1A] text-white'
                        : 'bg-[#F5F5F0] text-[#5C5F52] hover:bg-[#E5E5E0]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Review Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-white hover:bg-[#FDF5EF] shadow-md flex items-center justify-center transition-colors z-10"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 text-[#2C2F21]" />
              </button>

              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-white hover:bg-[#FDF5EF] shadow-md flex items-center justify-center transition-colors z-10"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 text-[#2C2F21]" />
              </button>

              {/* Review Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 mx-4 md:mx-8"
                >
                  {/* Header: Rating & Date */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
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
                    <span className="text-sm text-[#8B8D85]">{currentReview.date}</span>
                  </div>

                  {/* Review Title */}
                  <h3 className="text-xl font-bold text-[#2C2F21] mb-3">
                    {currentReview.title}
                  </h3>

                  {/* Review Text */}
                  <p className="text-[#5C5F52] leading-relaxed mb-6">
                    "{currentReview.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E0]">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#BA4B1A] flex items-center justify-center text-white font-bold">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#2C2F21]">
                          {currentReview.name}
                        </span>
                        {currentReview.verified && (
                          <span className="flex items-center gap-1 text-xs text-[#4ADE80]">
                            <BadgeCheck className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#5C5F52]">
                        {currentReview.location} · {currentReview.variant}
                      </p>
                    </div>
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
                        : 'bg-[#D4D4D4] hover:bg-[#5C5F52]'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="px-6 py-3 bg-[#2C2F21] hover:bg-[#3D4030] text-white font-semibold rounded-lg transition-colors">
                Read All Reviews
              </button>
              <button className="px-6 py-3 border-2 border-[#BA4B1A] text-[#BA4B1A] hover:bg-[#BA4B1A] hover:text-white font-semibold rounded-lg transition-colors">
                Write a Review
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
