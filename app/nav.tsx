"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "For Candidates", href: "#candidates" },
    { name: "For Employers", href: "#employers" },
    { name: "Find Jobs", href: "#jobs" },
    { name: "About Us", href: "#about" },
  ];

  const handleActive = (name: string) => {
    setActive(name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9; // adjust if needed
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
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <img
            src="/images/homepage/workforce.png"
            alt="Workforce Logo"
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
              onClick={() => handleActive(item.name)}
              className={`transition ${
                active === item.name
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
                active === "Resources"
                  ? "text-[#FF7F50]"
                  : scrolled
                  ? "hover:text-[#FF7F50] text-black"
                  : "hover:text-[#FF7F50] text-white"
              }`}
              onClick={() => handleActive("Resources")}
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
          <button
            className={`px-5 py-2 rounded-md font-medium transition ${
              scrolled
                ? "border border-black text-black hover:bg-gray-100"
                : "border border-white text-white hover:bg-white/10"
            }`}
          >
            Log In
          </button>
          <button className="px-5 py-2 bg-[#242424] text-white rounded-md font-medium hover:bg-[#ff946c] transition">
            Sign Up Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 transition-all duration-300 rounded-b-2xl">
          <div className="flex flex-col items-center space-y-4 py-6 font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleActive(item.name)}
                className={`${
                  active === item.name
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
                    className="text-gray-200 hover:text-[#FF7F50]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </details>

            <div className="flex flex-col space-y-3 pt-4">
              <button className="px-6 py-2 border border-white text-white rounded-md font-medium hover:bg-white/10 transition">
                Log In
              </button>
              <button className="px-6 py-2 bg-[#FF7F50] text-white rounded-md font-medium hover:bg-[#ff946c] transition">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
