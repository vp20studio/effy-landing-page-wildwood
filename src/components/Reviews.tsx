'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Vancouver, BC',
    rating: 5,
    title: 'Worth every penny',
    text: 'This desk changed my work-from-home life. The build quality is incredible—you can feel the difference solid wood makes. My back pain has significantly improved.',
    initial: 'S',
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Toronto, ON',
    rating: 5,
    title: 'Executive quality',
    text: 'As someone who spends 10+ hours at my desk, this investment has been transformative. The whisper-quiet motors are a game-changer for video calls.',
    initial: 'J',
  },
  {
    id: 3,
    name: 'Michelle K.',
    location: 'Calgary, AB',
    rating: 5,
    title: 'Perfect for small spaces',
    text: 'The 48" Maple fits perfectly in my condo and the light wood brightens up the whole room. Assembly was surprisingly easy—done in 25 minutes!',
    initial: 'M',
  },
];

export default function Reviews() {
  return (
    <section className="section section-forest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="gradient-blur gradient-blur-gold w-[400px] h-[400px] -top-32 -right-32 opacity-20" />
      <div className="gradient-blur gradient-blur-orange w-[300px] h-[300px] -bottom-24 -left-24 opacity-15" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge badge-gold mb-4">Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
            What Customers <span className="text-[var(--gold)]">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <p className="text-white/60">4.9 out of 5 based on 247+ reviews</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-[var(--radius-2xl)] p-6 md:p-8 border border-white/10"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[var(--gold)] mb-4" />

              {/* Review Text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--gold)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{review.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/50">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
