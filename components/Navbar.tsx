'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-button rounded-lg shadow-lg" />
            <span className="text-xl font-bold text-white">Squid</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-pink-400 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">
              Features
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/login">
              <button className="gradient-button px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
                Download Template
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors">
              Home
            </Link>
            <Link href="#features" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              Features
            </Link>
            <div className="px-4 pt-4">
              <Link href="/login">
                <button className="gradient-button w-full px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
                  Download Template
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
