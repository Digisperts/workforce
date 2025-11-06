"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";

export default function FindJobsPage() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/find-jobs/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center -z-10"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Hero Content */}
        <div className="max-w-5xl px-6 sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold leading-tight">
            Find Global Opportunities
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-2 leading-relaxed">
            Jobs on our board are highly vetted by industry experts, saving your
            time on fact-checking.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
