"use client";

import Navbar from "./nav";
import Footer from "./footer";
import Image from "next/image";
import HeroImage from "../public/images/homepage/mock-up banner.jpg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-start text-white">
        {/* Background Image */}
        <Image
          src={HeroImage}
          alt="Hero Background"
          fill
          className="object-cover -z-10"
          priority
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 -z-10" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-6 mt-20 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build better DevOps, Data, and AI solutions — faster
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            There are more than 150,000 highly skilled tech professionals on our roster.
            Most in largely untapped markets. Ready to be placed quickly and effectively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-500 transition duration-300">
              Hire Talent
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
              What is Adaptive Hiring?
            </button>
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
          Content for this section will be added once the next mockup is uploaded.
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
