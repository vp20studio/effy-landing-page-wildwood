'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What wood finishes are available?',
    answer: 'We offer three premium solid wood options: Walnut (rich, dark chocolate tones), Oak (light, golden grain), and Maple (creamy white, subtle grain). Each desktop is hand-selected for exceptional grain patterns.',
  },
  {
    question: 'How much weight can the desk hold?',
    answer: 'The Wildwood desk supports up to 300 lbs evenly distributed across the desktop. This includes multiple monitors, computers, books, and all your workspace essentials with room to spare.',
  },
  {
    question: 'Is professional assembly available?',
    answer: 'Yes! Select our White Glove Installation service at checkout for $149. Our certified technicians will deliver, assemble, and set up your desk in your home office.',
  },
  {
    question: "What's covered under the warranty?",
    answer: 'Our industry-leading 10-year warranty covers the frame, motors, and electronics against manufacturing defects. The solid wood desktop is covered for 5 years. We also offer a 30-day satisfaction guarantee.',
  },
  {
    question: 'How quiet is the motor?',
    answer: 'The Wildwood operates at under 45 decibels—quieter than a normal conversation. You can comfortably take video calls while adjusting your desk height.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge badge-gold mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)] mb-4">
            Frequently Asked <span className="text-[var(--orange)]">Questions</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Everything you need to know about the Wildwood
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-[var(--cream-dark)] rounded-[var(--radius-xl)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-[var(--cream)] transition-colors"
              >
                <span className="font-semibold text-[var(--forest)] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--orange-light)] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-[var(--orange)]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[var(--orange)]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--text-secondary)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
