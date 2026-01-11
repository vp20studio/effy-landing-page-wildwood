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
    title: 'My back pain is gone',
    text: 'After 3 weeks of using the Wildwood, my chronic lower back pain has completely disappeared. The sit-stand transitions throughout the day have been life-changing. Worth every penny.',
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
    title: 'Quietest desk I\'ve ever owned',
    text: 'I take video calls all day and was worried about motor noise. This thing is whisper quiet—my colleagues can\'t even tell when I\'m adjusting it mid-meeting. Incredible engineering.',
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
    title: 'Assembly was actually easy',
    text: 'Was dreading assembly but it was surprisingly straightforward. Done in about 30 minutes with just the included tools. The instructions were clear and everything fit perfectly.',
    initial: 'M',
    gradient: 'from-emerald-500 to-teal-600',
    verified: true,
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Montreal, QC',
    role: 'Architect',
    rating: 5,
    title: 'Worth every penny, looks stunning',
    text: 'The walnut desktop is absolutely gorgeous—clients always comment on it during video calls. It\'s not just a desk, it\'s a statement piece. The quality is obvious the moment you touch it.',
    initial: 'D',
    gradient: 'from-violet-500 to-purple-600',
    verified: true,
  },
  {
    id: 5,
    name: 'Emily R.',
    location: 'Ottawa, ON',
    role: 'Marketing Manager',
    rating: 5,
    title: 'Customer service was incredible',
    text: 'Had a question about cable management options and their support team responded within an hour with detailed photos and suggestions. This level of service is rare nowadays.',
    initial: 'E',
    gradient: 'from-cyan-500 to-blue-600',
    verified: true,
  },
  {
    id: 6,
    name: 'Mark H.',
    location: 'Edmonton, AB',
    role: 'Financial Analyst',
    rating: 5,
    title: '20-year warranty sealed the deal',
    text: 'I compared a dozen standing desks and no one else offers a 20-year warranty. That confidence in their product made my decision easy. Already recommending it to my colleagues.',
    initial: 'M',
    gradient: 'from-amber-500 to-orange-600',
    verified: true,
  },
  {
    id: 7,
    name: 'Jessica W.',
    location: 'Winnipeg, MB',
    role: 'UX Designer',
    rating: 5,
    title: 'Upgraded from IKEA, night and day',
    text: 'My old IKEA desk wobbled at standing height and the motor was loud. The Wildwood is rock solid even at max height. The dual motors make a real difference—smooth and stable.',
    initial: 'J',
    gradient: 'from-rose-500 to-pink-600',
    verified: true,
  },
  {
    id: 8,
    name: 'Chris P.',
    location: 'Halifax, NS',
    role: 'Developer',
    rating: 5,
    title: 'Wireless charging is a game-changer',
    text: 'Didn\'t think I\'d use the built-in wireless charging much, but now I can\'t imagine a desk without it. Phone always charged, no cable clutter. Small detail, big quality of life improvement.',
    initial: 'C',
    gradient: 'from-indigo-500 to-blue-600',
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)]/30"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 5) * 18}%`,
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
            Verified Reviews
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Real Results from{' '}
            <span className="relative">
              <span className="text-[var(--gold)]">Real People</span>
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
                  <Star className="w-8 h-8 fill-[var(--gold)] text-[var(--gold)]" />
                </motion.div>
              ))}
            </div>
            <p className="text-white/60 text-lg">
              <span className="text-white font-bold text-2xl">4.9</span> out of 5 based on <span className="text-white font-semibold">233+</span> verified reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Reviews Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--gold)]/40 to-[var(--orange)]/40 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
                {/* Quote icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-[var(--gold)]/15" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold text-white mb-2">
                  "{review.title}"
                </h4>

                {/* Review Text */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  {/* Avatar with gradient */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold">{review.initial}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-white text-sm">{review.name}</p>
                      {review.verified && (
                        <BadgeCheck className="w-3.5 h-3.5 text-[var(--gold)]" />
                      )}
                    </div>
                    <p className="text-xs text-white/40">{review.location}</p>
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
