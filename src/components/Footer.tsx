'use client';

import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'Standing Desks', href: 'https://effydesk.com/collections/electric-standing-desks' },
    { label: 'Ergonomic Office Chairs', href: 'https://effydesk.com/collections/ergonomic-chairs' },
    { label: 'Standing Desk Accessories', href: 'https://effydesk.com/collections/desk-accessories' },
    { label: 'Essential Bundle', href: 'https://effydesk.com/products/essential-bundle' },
    { label: 'Wildwood Bundle', href: 'https://effydesk.com/products/grove-bundle' },
    { label: 'Installation Services', href: 'https://effydesk.com/products/standing-desk-installation-service' },
    { label: 'Gift Cards', href: 'https://effydesk.com/collections/gift-cards' },
  ];

  const wonderCareLinks = [
    { label: 'F.A.Q', href: 'https://effydesk.com/pages/faq' },
    { label: 'Installation Guide', href: 'https://effydesk.com/pages/how-to-assemble-your-height-adjustable-standing-desk' },
    { label: 'Warranty', href: 'https://effydesk.com/pages/faq#warranty' },
    { label: 'Shipping', href: 'https://effydesk.com/pages/faq#shipping' },
    { label: 'Returns & Exchanges', href: 'https://effydesk.com/pages/faq#returns' },
    { label: 'Privacy Policy', href: 'https://effydesk.com/pages/privacy-policy' },
    { label: 'Terms and Conditions', href: 'https://effydesk.com/pages/terms-and-conditions' },
    { label: 'Contact Us', href: 'https://effydesk.com/pages/contact' },
  ];

  const aboutLinks = [
    { label: 'Our Story', href: 'https://effydesk.com/pages/about' },
    { label: 'Inspiration', href: 'https://effydesk.com/pages/inspiration' },
    { label: 'Blog', href: 'https://effydesk.com/blogs/news' },
    { label: 'Corporate Office Furniture', href: 'https://effydesk.com/pages/corporate-office-furniture' },
    { label: 'Wholesale Solutions', href: 'https://effydesk.com/pages/wholesale' },
    { label: 'Open Box Sales', href: 'https://effydesk.com/pages/open-box-sales' },
    { label: 'Student Discount', href: 'https://effydesk.com/pages/student-discount' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/EFFYDESK', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/effydesk/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCUG47j7B_LvGmEuFL5WRlDg', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/effydesk', label: 'X' },
  ];

  return (
    <footer className="bg-[var(--forest)] text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/effydesk-logo.png"
                alt="EFFYDESK"
                width={160}
                height={50}
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-sm">
              Premium standing desks designed for the modern workspace.
              Elevate your productivity with Canadian craftsmanship.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/70 mb-6">
              <a href="https://maps.google.com/?q=110-2440+Canoe+Ave,+Coquitlam+BC" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span>110-2440 Canoe Ave, Coquitlam BC</span>
              </a>
              <a href="mailto:team@effydesk.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[var(--gold)]" />
                <span>team@effydesk.com</span>
              </a>
              <a href="tel:604-715-7577" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[var(--gold)]" />
                <span>604-715-7577</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--orange)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--gold)] text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Wonder Care Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--gold)] text-sm uppercase tracking-wider">Wonder Care</h4>
            <ul className="space-y-2.5">
              {wonderCareLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--gold)] text-sm uppercase tracking-wider">About Us</h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 md:mt-12">
        <div className="container py-6">
          <p className="text-center text-xs text-white/40">
            &copy; {currentYear} EFFYDESK. All rights reserved. &nbsp;·&nbsp;{' '}
            <a href="https://effydesk.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            {' '}&nbsp;·&nbsp;{' '}
            <a href="https://effydesk.com/pages/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
