"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            etail<span className="text-teal-400">.me</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Empowering businesses to connect with top-tier tech talent and
            accelerate innovation through adaptive hiring solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link href="#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Resources
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">Connect</h3>
          <p className="text-gray-300 text-sm mb-4">
            info@etail.me <br /> +234 (0) 901 234 5678
          </p>
          <div className="flex items-center space-x-5 text-xl">
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} etail.me — All rights reserved.
      </div>
    </footer>
  );
}
