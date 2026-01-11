'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

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
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--cream)] to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4 text-[var(--gold)]" />
            Common Questions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            Frequently Asked{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">Questions</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--orange)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-xl text-[var(--forest)]/60 max-w-2xl mx-auto">
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-[var(--cream)] to-white shadow-lg border-2 border-[var(--gold)]/20'
                    : 'bg-[var(--cream)]/50 hover:bg-[var(--cream)] border-2 border-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold pr-4 transition-colors ${
                    openIndex === index ? 'text-[var(--forest)]' : 'text-[var(--forest)]/80'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-[var(--gold)] to-[var(--orange)]'
                        : 'bg-[var(--forest)]/10'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-[var(--forest)]'}`} />
                    ) : (
                      <Plus className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-[var(--forest)]'}`} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-[var(--forest)]/10">
                          <p className="text-[var(--forest)]/70 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--cream)] rounded-2xl border border-[var(--cream-dark)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--orange)] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--forest)]/60">Still have questions?</p>
              <a href="#" className="text-[var(--orange)] font-semibold hover:underline">
                Chat with our team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
