"use client";

import Navbar from "./nav";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "./components/ScrollFadeSection"

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

      {/* ---------------------------
          The Problem Vs Our Solution
         --------------------------- */}
      <ScrollFadeSection>
        <section className="py-12 md:py-20 bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
    
    <h3 className="text-xl md:text-2xl font-semibold text-[#FF7F50] mb-8">
      The Problem <span className="text-[#5C5C5C]"> Vs </span>  <span className="text-[#339999]"> Our Solution </span>
    </h3>

    <div className="flex flex-col gap-10">

      {/* ORANGE ROW — full width */}
      <div className="bg-[#E87449] text-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full h-[293px]">

        {/* Text left */}
        <div className="p-6 md:p-10 flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-[#FF7F50] mb-4">
            The World of Work Has Changed. Access to Talent Has Not Kept Up.
          </h3>
          <p className="text-white leading-relaxed">
            Brilliance is distributed globally, but opportunity is not.
            Ambitious tech professionals are frustrated by the complexities
            and lack of transparency in international job hunting.
            Simultaneously, forward-thinking companies struggle to
            efficiently source, vet, and hire the best talent,
            regardless of location.
          </p>
        </div>

        {/* Image right */}
        <div className="hidden md:block w-[45%] bg-[url('/images/homepage/orange-image.png')] bg-cover bg-center" />
      </div>

      {/* TEAL ROW — full width */}
      <div className="bg-[#009E8E] text-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full h-[293px]">

        {/* Image left */}
        <div className="hidden md:block w-[45%] bg-[url('/images/homepage/teal-image.png')] bg-cover bg-center" />

        {/* Text right */}
        <div className="p-6 md:p-10 flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Digisperts Workforce is the Catalyst for Connection.
          </h3>
          <p className="leading-relaxed">
            We are the tech-talent platform that combines skill verification,
            AI hiring tools, and global hiring toolkits. We give employers fast
            access to top engineers while giving candidates a trusted path
            to premier international work.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
</ScrollFadeSection>

      {/* ---------------------------
            At Our Core (three cards)
         --------------------------- */}
      <ScrollFadeSection>
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#003399] mb-8">
              At Our Core
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F1FAF9] mb-4">
                  {/* icon placeholder */}
                  <Image
                  src="/images/homepage/user-icon.png"
                  alt="User Icon"
                  width={24}
                  height={24}
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Verified Brilliance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our integrated skills assessments and rich, detailed profiles mean
                  you can connect with verified, high-quality candidates and employers.
                  Companies receive a &rdquo;Verified Global Employer&rdquo; badge to build trust.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F1FAF9] mb-4">
                  <Image
                  src="/images/homepage/verified.png"
                  alt="Verified Brilliance Icon"
                  width={24}
                  height={24}
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Radical Transparency</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are designed to provide clarity. Candidates can view the
                  real-time status of all submitted applications — from &rdquo;Application viewed&rdquo;
                  to &rdquo;Offer&rdquo;. We believe in an open and empowering process for everyone.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F1FAF9] mb-4">
                  <Image
                  src="/images/homepage/website.png"
                  alt="Website Icon"
                  width={24}
                  height={24}
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">A Global Hiring Toolkit</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hiring across borders is made simple with our end-to-end hiring toolkits,
                  salary benchmarking, and legal templates to streamline international hiring.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      {/* -----------------------------------------
          A Platform Built on Trust and Transparency
         ----------------------------------------- */}
      <ScrollFadeSection>
        <section className="py-12 md:py-20 bg-[#FFF7F4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <button className="px-4 py-2 text-sm bg-[#003399] text-white rounded-full">
                For Global Talent
              </button>
              <button className="px-4 py-2 text-sm bg-white text-[#003399] border border-[#003399] rounded-full">
                For Global Organizations
              </button>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A Platform Built on Trust and Transparency
            </h3>

            <p className="max-w-3xl mx-auto text-gray-700 mb-10">
              Your career, empowered. Land your dream international role with a platform
              built for you. Experience a transparent process where you can track your
              application's status in real-time, showcase your verified skills, and connect
              with a global network of mentors to accelerate your growth.
            </p>

            {/* decorative globe semicircle */}
            <div className="flex justify-center">
              <div className="w-72 h-36 md:w-96 md:h-44 rounded-t-full bg-gradient-to-t from-[#dff6f2] to-white shadow-inner" />
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      {/* -----------------------------------------
          Testimonials / What Hired Tech Professionals Says
         ----------------------------------------- */}
      <ScrollFadeSection>
        <section className="py-12 md:py-20 bg-[#005B5B] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              What Hired Tech Professionals Says
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* left control area */}
              <div className="flex items-center justify-center">
                <div className="space-x-3">
                  <button className="w-10 h-10 bg-white/10 rounded-full" aria-hidden>
                    ‹
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-full" aria-hidden>
                    ›
                  </button>
                </div>
              </div>

              {/* testimonial card 1 */}
              <div className="bg-white rounded-lg p-6 text-gray-800 shadow-md">
                <div className="text-sm text-gray-500 mb-4">Global Tech Inc.</div>
                <div className="text-base mb-4">
                  “Finally, a platform that understands the complexities of hiring
                  engineers globally. The salary benchmarking tool alone is a game-changer.”
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold">Salami David</div>
                    <div className="text-sm text-gray-500">Hiring Manager</div>
                  </div>
                </div>
              </div>

              {/* testimonial card 2 */}
              <div className="bg-white rounded-lg p-6 text-gray-800 shadow-md">
                <div className="text-sm text-gray-500 mb-4">Lagos, Nigeria</div>
                <div className="text-base mb-4">
                  “The application tracker is incredible. For the first time, I felt
                  respected and informed during my job search.”
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold">Olanrewaju Mercy</div>
                    <div className="text-sm text-gray-500">Senior Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      {/* -----------------------------------------
          Connect with the Vanguard of Tech
         ----------------------------------------- */}
      <ScrollFadeSection>
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#003399] mb-4">
              Join a Global Community
            </h3>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Connect with the Vanguard of Tech.
            </h2>

            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              Digisperts Workforce is more than a platform; it’s an ecosystem for
              the world’s most ambitious tech professionals and the innovative
              companies building the future. We are the leading destination where
              elite tech talent and forward-thinking companies connect seamlessly.
            </p>

            {/* tag chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Software Engineer",
                "Cybersecurity Analyst",
                "Full-Stack Developer",
                "Cloud Engineer",
                "Product Manager",
                "UI/UX Designer",
                "Network Engineer",
                "AI Engineer",
                "Data Scientist",
                "DevOps Engineer",
              ].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-2 bg-gray-100 text-gray-700 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeSection>
{/* Pre Footer Section */}
      <section className="relative w-full flex flex-col items-center bg-transparent pb-0 mb-0 -mb-32 z-30">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 lg:px-0">
          <div className="relative w-full h-[280px] md:h-[370px] flex items-center justify-center">
            <Image
              src="/images/footer.jpg"
              alt="Footer Background"
              fill
              className="object-cover z-0"
              style={{ objectPosition: "center" }}
              priority
            />
            <div
              className="absolute left-0 top-0 w-full h-full flex items-center"
              style={{ zIndex: 2 }}
            >
              <div className="p-6 md:p-27 max-w-full md:max-w-4xl text-white ml-8 mt-1 rounded-lg">
                <ScrollFadeSection>
                  <div className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">
                    Ready to Build Your Future?
                  </div>
                  <div className="text-sm md:text-base font-normal mb-5">
                    Let&apos;s discuss how a custom software solution can help
                    you overcome inefficiencies and drive your business forward.
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href=""
                      className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                      style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                    >
                      TALK TO AN EXPERT
                    </Link>
                  </div>
                  </ScrollFadeSection>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
