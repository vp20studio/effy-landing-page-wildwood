'use client';

import { motion } from 'framer-motion';
import { product } from '@/lib/constants';

export default function FooterCTA() {
  return (
    <section className="bg-[#0F4C81] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-[#BA4B1A] mx-auto mb-12 origin-center"
        />

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Elevate
          <br />
          <span className="text-[#BA4B1A]">Your Workspace?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/70 max-w-xl mx-auto mb-12"
        >
          Join thousands of professionals who transformed their work with the
          Wildwood Standing Desk.
        </motion.p>

        {/* Price Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-block mb-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <p className="text-sm text-white/60 uppercase tracking-wider mb-1">
              Starting from
            </p>
            <p className="text-4xl font-bold text-white">
              ${product.price.toLocaleString()}
              <span className="text-lg text-white/60 font-normal ml-2">
                {product.currency}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-sm text-white/50 mb-12"
        >
          Free shipping across Canada • 30-day risk-free trial • 10-year warranty
        </motion.p>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2024 EffyDesk. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
