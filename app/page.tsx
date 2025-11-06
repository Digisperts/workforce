"use client";

import Navbar from "./nav";
import Footer from "./footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/homepage/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-top -z-10"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 mt-24 md:mt-0">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight">
              Where Brilliance <br /> Knows No Borders
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-5 leading-relaxed">
              We are the premier destination connecting the world&apos;s elite
              tech talent with innovative companies. We remove the complexities
              of global hiring to build a new era of distributed teams.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button className="px-6 py-3 bg-[#009E8E] text-white font-semibold rounded-md hover:bg-[#00B19F] transition duration-300">
                Hire Verified Talent
              </button>
              <button className="px-6 py-3 bg-[#FF7F50] text-white font-semibold rounded-md hover:bg-[#ff946c] transition duration-300">
                Find My Global Role
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="absolute bottom-4 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-white text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Top Hiring Companies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-90">
              <Image
                src="/images/homepage/logoipsum.svg"
                alt="Company Logo"
                width={140}
                height={40}
                className="object-contain opacity-90"
              />

              <Image
                src="/images/homepage/logoipsum.svg"
                alt="Company Logo"
                width={140}
                height={40}
                className="object-contain opacity-90"
              />

              <Image
                src="/images/homepage/logoipsum.svg"
                alt="Company Logo"
                width={140}
                height={40}
                className="object-contain opacity-90"
              />

              <Image
                src="/images/homepage/logoipsum.svg"
                alt="Company Logo"
                width={140}
                height={40}
                className="object-contain opacity-90"
              />

              <Image
                src="/images/homepage/logoipsum.svg"
                alt="Company Logo"
                width={140}
                height={40}
                className="object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section
        id="section1"
        className="py-20 bg-gray-50 text-center px-6 sm:px-10 md:px-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Section 1 Placeholder
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Content for this section will be added once the next mockup is
          uploaded.
        </p>
      </section>

      <section
        id="section2"
        className="py-20 bg-white text-center px-6 sm:px-10 md:px-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Section 2 Placeholder
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          More content will appear here once the design mockups are provided.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
