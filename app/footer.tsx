"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#003636] w-full -mt-50 pt-50" style={{ minHeight: 320 }}>
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between py-17 px-4">

        {/* Contact / Social Links */}
        <div className= "flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0"> 
          
          <Image
              src="/images/footer-logo.png"
              alt="Footer Logo"
              width={150}
              height={50}
              className="mb-4"
              priority
            />
          
          <p className="text-gray-300 text-sm mb-4">
            Connecting tech talent and companies across three continents with a transparent ATS and smarter, human-centered hiring.
          </p>

          <div className="flex items-center space-x-5 text-xl">
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="hover:text-teal-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      
        {/* Company Links */}
          <div className="flex flex-col items-start w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">Company</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="/who-we-are" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work-in-progress" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/process" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/process" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        {/* Product Links */}
          <div className="flex flex-col items-start w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">Product</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Features
                </Link>
              </li>
              <li className="group">
                <Link href="" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Careers
                </Link>
              </li>
              <li className="group">
                <Link 
                // href="/resources/blog" 
                href=""
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  How it works
                </Link>
              </li>
              <li className="group">
                <Link href="" 
                className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        {/* legal section */}
      <div className="flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-white font-extrabold mb-2">Legal</h4>
            <ul className="pt-6 w-full max-w-xs text-white flex flex-col gap-4">
              <li className="group">
                <Link href="/what-we-do/software-development" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Privacy Policy
                </Link>
              </li>
              <li className="group">
                <Link href="/what-we-do/business-automation" className="relative text-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        
        
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} etail.me — All rights reserved.
      </div>
    </footer>
  );
}
