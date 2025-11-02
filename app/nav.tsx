"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tight">
          etail<span className="text-teal-400">.me</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="#about" className="hover:text-blue-900 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-blue-900 transition">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-blue-900 transition">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-blue-900 transition">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-5 py-2 border border-gray-300 text-blue-900 rounded-full font-medium hover:bg-gray-100 transition">
            Login
          </button>
          <button className="px-5 py-2 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition">
            Start selling
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium">
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <button className="px-6 py-2 border border-gray-300 text-blue-900 rounded-full font-medium hover:bg-gray-100 transition">
                Login
              </button>
              <button className="px-6 py-2 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition">
                Start selling
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
