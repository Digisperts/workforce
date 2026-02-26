"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "For Candidates", href: "/for-candidates" },
    { name: "For Employers", href: "/for-employers" },
    { name: "Find Jobs", href: "/find-jobs" },
    { name: "About Us", href: "/about-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] backdrop-blur-lg border rounded-2xl shadow-lg z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-gray-200" : "bg-white/10 border-white/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo (untouched) */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src="/images/homepage/workforce.png"
            alt="Workforce Logo"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-8 font-small transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? "text-[#FF7F50]"
                  : scrolled
                  ? "hover:text-[#FF7F50] text-black"
                  : "hover:text-[#FF7F50] text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className={`flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
                pathname.startsWith("/resources")
                  ? "text-[#FF7F50]"
                  : scrolled
                  ? "hover:text-[#FF7F50] text-black"
                  : "hover:text-[#FF7F50] text-white"
              }`}
            >
              Resources <FiChevronDown className="mt-0.5" />
            </button>

            {dropdownOpen && (
              <div
                className={`absolute left-0 top-full w-44 rounded-md py-2 transition-all duration-200 z-100 ${
                  scrolled
                    ? "bg-white border border-gray-200"
                    : "bg-white/10 backdrop-blur-lg border border-white/20"
                }`}
              >
                {["Blog", "Guides", "Contact"].map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className={`block px-4 py-2 text-sm transition ${
                      scrolled
                        ? "text-black hover:text-[#FF7F50] hover:bg-gray-100"
                        : "text-white hover:text-[#FF7F50] hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 transition-colors duration-300">
          <Link
          href="/auth/login"
          className={`px-5 py-2 rounded-md font-medium transition ${
            scrolled
            ? "border border-black text-black hover:bg-gray-100"
            : "border border-white text-white hover:bg-white/10"
            }`}
            >
              Log In
          </Link>
          
          <Link
          href="/auth/get-started"
          className="px-5 py-2 bg-[#242424] text-white rounded-md font-medium hover:bg-[#ff946c] transition"
          >
            Sign Up Now
          </Link>
        </div>

        {/* Mobile Toggle (changes color on scroll) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 rounded-b-2xl ${
            scrolled
              ? "bg-white border-t border-gray-200 text-black"
              : "bg-white/10 backdrop-blur-lg border-t border-white/20 text-white"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-6 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-[#FF7F50]"
                    : "hover:text-[#FF7F50]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Dropdown */}
            <details className="w-full text-center">
              <summary className="cursor-pointer hover:text-[#FF7F50]">
                Resources
              </summary>
              <div className="flex flex-col mt-2 space-y-2">
                {["Blog", "Guides", "Contact"].map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className={`${
                      scrolled
                        ? "text-black hover:text-[#FF7F50]"
                        : "text-gray-200 hover:text-[#FF7F50]"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </details>

            <div className="flex flex-col space-y-3 pt-4">
              <Link
              href="/auth/login"
              className={`px-6 py-2 rounded-md font-medium transition ${
                scrolled
                ? "border border-black text-black hover:bg-gray-100"
                : "border border-white text-white hover:bg-white/10"
              }`}
              >
                Log In
              </Link>
              <Link
              href="/auth/get-started"
              className="px-6 py-2 bg-[#242424] text-white rounded-md font-medium hover:bg-[#ff946c] transition"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
