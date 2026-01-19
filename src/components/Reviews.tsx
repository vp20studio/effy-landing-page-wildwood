'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Software Engineer',
    location: 'Vancouver, BC',
    rating: 5,
    headline: 'My back pain disappeared after 3 weeks',
    text: 'I was skeptical that a desk could make such a difference, but the Wildwood has completely changed my workday. The sit-stand transitions are so smooth and quiet that I actually use them. After years of chronic lower back pain, I finally feel comfortable working for hours.',
    image: '/review-1.avif',
  },
  {
    id: 2,
    name: 'James Chen',
    title: 'Creative Director',
    location: 'Toronto, ON',
    rating: 5,
    headline: 'The quietest desk motor I have ever used',
    text: 'I take video calls all day and was worried about motor noise. This thing is whisper quiet - my colleagues cannot even tell when I am adjusting it mid-meeting. The walnut top gets compliments on every call. It is furniture-grade quality.',
    image: '/review-2.avif',
  },
  {
    id: 3,
    name: 'Michelle Park',
    title: 'Architect',
    location: 'Calgary, AB',
    rating: 5,
    headline: 'Worth every penny for the 20-year warranty alone',
    text: 'I compared a dozen standing desks before choosing the Wildwood. No one else offers a 20-year warranty - that tells you everything about quality. Assembly took 25 minutes. The solid wood top and steel frame feel like they will last forever.',
    image: '/review-3.avif',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative py-20 md:py-28 bg-[var(--cream)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <p className="text-lg text-[var(--forest)]/60 mb-2">
            <span className="font-bold text-[var(--forest)]">4.9/5</span> from 233+ verified reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)]">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Featured Review */}
        <motion.div
          key={currentReview.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${currentReview.image})` }}
              />

              {/* Content */}
              <div className="p-8 md:p-10">
                <Quote className="w-10 h-10 text-[var(--orange)]/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-[var(--forest)] mb-3">
                  "{currentReview.headline}"
                </h3>

                {/* Text */}
                <p className="text-[var(--forest)]/70 leading-relaxed mb-6">
                  {currentReview.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[var(--forest)]">{currentReview.name}</p>
                    <p className="text-sm text-[var(--forest)]/50">
                      {currentReview.title} • {currentReview.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Buyer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-[var(--orange)] w-8'
                      : 'bg-[var(--forest)]/20 hover:bg-[var(--forest)]/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-[var(--forest)]/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            All reviews verified
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Judge.me certified
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Real customer photos
          </div>
        </div>
      </div>
    </section>
  );
}
