'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Check, Clock, Users, Wrench, Download } from 'lucide-react';
import { assemblyInfo } from '@/lib/constants';

const assemblyHighlights = [
  { icon: Clock, text: assemblyInfo.time },
  { icon: Users, text: assemblyInfo.people },
  { icon: Wrench, text: assemblyInfo.tools },
];

export default function AssemblyInfo() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT: Product Image with PDF overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <a
              href={assemblyInfo.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#2C2F21] shadow-xl group cursor-pointer">
                <Image
                  src={assemblyInfo.thumbnail}
                  alt="Wildwood Standing Desk"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* PDF Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-[#BA4B1A] flex items-center justify-center shadow-lg"
                  >
                    <FileText className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* PDF Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded text-white text-sm flex items-center gap-2">
                  <Download className="w-3 h-3" />
                  PDF Guide
                </div>
              </div>
            </a>

            {/* Download Text */}
            <p className="text-center text-[#5C5F52] text-sm mt-4">
              Download the complete assembly guide
            </p>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Sparkle */}
            <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-6">
              Easy <span className="text-[#BA4B1A]">Assembly</span>
            </h2>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-8">
              {assemblyHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FDF5EF] rounded-full"
                >
                  <highlight.icon className="w-4 h-4 text-[#BA4B1A]" />
                  <span className="text-sm font-medium text-[#2C2F21]">{highlight.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Steps List */}
            <ul className="space-y-3 mb-8">
              {assemblyInfo.steps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#BA4B1A]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#BA4B1A]" />
                  </div>
                  <span className="text-[#2C2F21]">{step}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={assemblyInfo.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#2C2F21] hover:bg-[#3D4030] text-white font-semibold rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF Guide
              </a>
              <button className="text-[#BA4B1A] hover:text-[#9E3F16] font-medium underline transition-colors py-3">
                Book professional installation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
