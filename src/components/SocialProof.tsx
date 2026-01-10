'use client';

import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck } from 'lucide-react';

const featuredReview = {
  text: "This desk changed my work-from-home life. The build quality is incredible—you can feel the difference solid wood makes. My back pain has significantly improved since I started alternating between sitting and standing.",
  author: 'Sarah M.',
  title: 'Software Engineer',
  location: 'Vancouver, BC',
  variant: 'Walnut 60"',
  rating: 5,
  verified: true,
};

const stats = [
  { value: '4.9', label: 'Average Rating' },
  { value: '247+', label: 'Happy Customers' },
  { value: '98%', label: 'Would Recommend' },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center mb-12"
        >
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-[#D3841E] mx-auto mb-6 opacity-50" />

          {/* Quote Text */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-[#2C2F21] font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
            "{featuredReview.text}"
          </blockquote>

          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#D3841E] fill-[#D3841E]"
              />
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-3">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-[#BA4B1A] flex items-center justify-center text-white font-bold text-lg">
              {featuredReview.author.charAt(0)}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#2C2F21]">{featuredReview.author}</span>
                {featuredReview.verified && (
                  <BadgeCheck className="w-4 h-4 text-[#4ADE80]" />
                )}
              </div>
              <p className="text-sm text-[#5C5F52]">
                {featuredReview.location} · {featuredReview.variant}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-4 md:p-6 bg-[#FDF5EF] rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#BA4B1A] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#5C5F52]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
