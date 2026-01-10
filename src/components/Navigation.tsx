'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-[#BA4B1A] text-white text-center py-2 px-4 text-sm">
        <p>
          New year, new workspace - Use code <span className="font-semibold">NEWYEAR25</span> for 20% off!
        </p>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm'
            : 'bg-[#FDF5EF]'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold italic text-[#2C2F21]" style={{ fontFamily: 'Georgia, serif' }}>
              effydesk
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Shop Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
                SHOP
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <a href="#" className="text-sm font-medium text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
              WONDER BUNDLES
            </a>

            <a href="#" className="text-sm font-medium text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
              INSPIRATION
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Currency Selector - Desktop */}
            <div className="hidden md:flex items-center gap-1 text-sm text-[#2C2F21]">
              <span className="text-lg">🇨🇦</span>
              <span>CAD</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            {/* Search */}
            <button className="p-2 text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button className="hidden md:block p-2 text-[#2C2F21] hover:text-[#BA4B1A] transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="p-2 text-[#2C2F21] hover:text-[#BA4B1A] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#BA4B1A] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C2F21]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[120px] z-40 lg:hidden bg-[#FDF5EF] border-b border-[#E5E5E0] shadow-lg"
          >
            <nav className="px-6 py-6 space-y-4">
              <a href="#" className="block text-lg font-medium text-[#2C2F21] py-2">
                Shop
              </a>
              <a href="#" className="block text-lg font-medium text-[#2C2F21] py-2">
                Wonder Bundles
              </a>
              <a href="#" className="block text-lg font-medium text-[#2C2F21] py-2">
                Inspiration
              </a>
              <div className="pt-4 border-t border-[#E5E5E0]">
                <a href="#" className="block text-sm text-[#5C5F52] py-2">Account</a>
                <div className="flex items-center gap-2 py-2 text-sm text-[#5C5F52]">
                  <span>🇨🇦</span> CAD
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
