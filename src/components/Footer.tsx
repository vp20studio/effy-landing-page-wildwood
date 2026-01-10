'use client';

import { motion } from 'framer-motion';
import { Truck, Calendar, Shield, MapPin, ArrowRight } from 'lucide-react';
import { footerLinks, socialLinks } from '@/lib/constants';

// Social icons as simple text for now (can be replaced with actual icons)
const SocialIcon = ({ name }: { name: string }) => {
  const icons: Record<string, string> = {
    Facebook: 'f',
    X: '𝕏',
    Instagram: '📷',
    Pinterest: 'P',
    YouTube: '▶',
    LinkedIn: 'in',
  };
  return <span className="text-sm">{icons[name] || name[0]}</span>;
};

export default function Footer() {
  return (
    <footer className="bg-[#FDF5EF]">
      {/* Trust Badges Strip */}
      <div className="border-y border-[#E5E5E0] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: 'Fast & Free Shipping' },
              { icon: Calendar, label: '30 Day Trial' },
              { icon: Shield, label: '10 Year Warranty' },
              { icon: MapPin, label: 'Designed in Canada' },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <badge.icon className="w-6 h-6 text-[#2C2F21] mb-2" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#2C2F21]">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Work with Wonder */}
          <div>
            <h3 className="text-[#BA4B1A] font-semibold mb-4">{footerLinks.workWithWonder.title}</h3>
            <p className="text-sm text-[#5C5F52] mb-4">{footerLinks.workWithWonder.description}</p>
            <div className="space-y-2 text-sm text-[#2C2F21]">
              <a href={`mailto:${footerLinks.workWithWonder.email}`} className="block hover:text-[#BA4B1A] transition-colors">
                {footerLinks.workWithWonder.email}
              </a>
              <p>{footerLinks.workWithWonder.phone}</p>
              <p className="text-[#5C5F52]">{footerLinks.workWithWonder.address}</p>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-[#BA4B1A] font-semibold mb-4">{footerLinks.shop.title}</h3>
            <ul className="space-y-2">
              {footerLinks.shop.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Wonder Care */}
          <div>
            <h3 className="text-[#BA4B1A] font-semibold mb-4">{footerLinks.wonderCare.title}</h3>
            <ul className="space-y-2">
              {footerLinks.wonderCare.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-[#BA4B1A] font-semibold mb-4">Sign up to newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 bg-white border border-[#E5E5E0] rounded-l-md text-sm focus:outline-none focus:border-[#BA4B1A]"
              />
              <button className="px-4 py-2 bg-[#2C2F21] text-white rounded-r-md hover:bg-[#3D4030] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full border border-[#2C2F21] flex items-center justify-center text-[#2C2F21] hover:bg-[#2C2F21] hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#5C5F52]">
              <div className="flex items-center gap-1">
                <span>🇨🇦</span>
                <span>CAD</span>
              </div>
              <a href="#" className="hover:text-[#2C2F21] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#2C2F21] transition-colors">Privacy Policy</a>
              <span>© {new Date().getFullYear()} EffyDesk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative "effy" text */}
      <div className="relative overflow-hidden py-4">
        <div className="absolute right-0 bottom-0 text-[120px] md:text-[200px] font-bold italic text-[#E5E5E0] leading-none select-none pointer-events-none" style={{ fontFamily: 'Georgia, serif' }}>
          effy
        </div>
      </div>
    </footer>
  );
}
