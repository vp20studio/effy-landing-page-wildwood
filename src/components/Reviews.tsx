'use client';

import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Vancouver, BC',
    role: 'Software Engineer',
    rating: 5,
    title: 'Worth every penny',
    text: 'This desk changed my work-from-home life. The build quality is incredible—you can feel the difference solid wood makes. My back pain has significantly improved.',
    initial: 'S',
    gradient: 'from-pink-500 to-rose-600',
    verified: true,
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Toronto, ON',
    role: 'Creative Director',
    rating: 5,
    title: 'Executive quality',
    text: 'As someone who spends 10+ hours at my desk, this investment has been transformative. The whisper-quiet motors are a game-changer for video calls.',
    initial: 'J',
    gradient: 'from-blue-500 to-indigo-600',
    verified: true,
  },
  {
    id: 3,
    name: 'Michelle K.',
    location: 'Calgary, AB',
    role: 'Product Manager',
    rating: 5,
    title: 'Perfect for small spaces',
    text: 'The 48" Maple fits perfectly in my condo and the light wood brightens up the whole room. Assembly was surprisingly easy—done in 25 minutes!',
    initial: 'M',
    gradient: 'from-emerald-500 to-teal-600',
    verified: true,
  },
];

export default function Reviews() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--forest)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(211, 132, 30, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(211, 132, 30, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(211, 132, 30, 0.2) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)]/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/10"
          >
            <Star className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]" />
            Customer Reviews
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            What Customers{' '}
            <span className="relative">
              <span className="text-[var(--gold)]">Say</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--gold)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-7 h-7 fill-[var(--gold)] text-[var(--gold)]" />
                </motion.div>
              ))}
            </div>
            <p className="text-white/60">
              <span className="text-white font-semibold">4.9</span> out of 5 based on <span className="text-white font-semibold">247+</span> reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--gold)]/50 to-[var(--orange)]/50 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 h-full">
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-10 h-10 text-[var(--gold)]/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-white mb-3">
                  "{review.title}"
                </h4>

                {/* Review Text */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {review.text}
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Avatar with gradient */}
                  <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{review.initial}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{review.name}</p>
                      {review.verified && (
                        <BadgeCheck className="w-4 h-4 text-[var(--gold)]" />
                      )}
                    </div>
                    <p className="text-sm text-white/50">{review.role} • {review.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            <BadgeCheck className="w-4 h-4" />
            All reviews verified by Judge.me
          </p>
        </motion.div>
      </div>
    </section>
  );
}
