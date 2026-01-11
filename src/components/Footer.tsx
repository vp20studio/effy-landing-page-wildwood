'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'Wildwood Desk', href: '#' },
      { label: 'All Standing Desks', href: '#' },
      { label: 'Accessories', href: '#' },
      { label: 'Office Chairs', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/EFFYDESK', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/effydesk/', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/effydesk', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCUG47j7B_LvGmEuFL5WRlDg', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[var(--forest)] text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-4">EFFYDESK</h3>
              <p className="text-white/70 mb-6 max-w-sm">
                Premium standing desks designed for the modern workspace.
                Elevate your productivity with Canadian craftsmanship.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  <span>Vancouver, BC, Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--gold)]" />
                  <a href="mailto:hello@effydesk.com" className="hover:text-white transition-colors">
                    hello@effydesk.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--gold)]" />
                  <a href="tel:1-888-EFFYDESK" className="hover:text-white transition-colors">
                    1-888-EFFYDESK
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-[var(--gold)]">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-[var(--gold)]">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-[var(--gold)]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} EFFYDESK. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
