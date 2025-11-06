"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";

export default function ForEmployersPage() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/for-employers/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-top -z-10"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Hero Content */}
        <div className="max-w-3xl md:mt-20 px-6 sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold leading-tight">
            Build Your World-Class Team, <br /> Without Borders.
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-5 leading-relaxed">
            Stop searching, Start hiring. Digisperts Workforce is your
            end-to-end platform to efficiently source, vet, and hire elite
            international Tech talent with confidence and clarity.
          </p>

          {/* Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-[#009E8E] text-white font-semibold rounded-md hover:bg-[#00B19F] transition duration-300">
              Hire Verified Talent
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
