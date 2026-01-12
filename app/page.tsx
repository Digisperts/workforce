"use client";
import { useRef } from "react";
import Navbar from "./nav";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "./components/ScrollFadeSection"

export default function Home() {

const testimonials = [
  {
    icon: "/images/homepage/global_icon.png",
    location: "Global Tech Inc.",
    text:
      "Finally, a platform that understands the complexities of hiring engineers globally. The salary benchmarking tool alone is a game-changer.",
    avatar: "/images/homepage/salami.png",
    name: "Salami David",
    role: "Social Media Manager",
  },
  {
    icon: "/images/homepage/nigeria.png",
    location: "Lagos, Nigeria",
    text:
      "The application tracker is incredible. For the first time, I felt respected and informed during my job search.",
    avatar: "/images/homepage/mercy.png",
    name: "Olanrewaju Mercy",
    role: "Senior Software Engineer",
  },
  {
    icon: "/images/homepage/global_icon.png",
    location: "Lagos, Nigeria",
    text:
      "The application tracker is incredible. For the first time, I felt respected and informed during my job search.",
    avatar: "/images/homepage/mercy.png",
    name: "Olanrewaju Mercy",
    role: "Senior Designer",
  },
  {
  icon: "/images/homepage/nigeria.png",
    location: "Global Tech Inc.",
    text:
      "Finally, a platform that understands the complexities of hiring engineers globally. The salary benchmarking tool alone is a game-changer.",
    avatar: "/images/homepage/salami.png",
    name: "Salami David",
    role: "Hiring Manager",
  },
];

const sliderRef = useRef<HTMLDivElement>(null);

const scrollLeft = () => {
  if (!sliderRef.current) return;
  sliderRef.current.scrollBy({
    left: -720, // 2 cards (340 * 2 + gap)
    behavior: "smooth",
  });
};

const scrollRight = () => {
  if (!sliderRef.current) return;
  sliderRef.current.scrollBy({
    left: 720,
    behavior: "smooth",
  });
};

const roles = [
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
];

const companies = [
  "/images/homepage/meta.png",
  "/images/homepage/microsoft.png",
  "/images/homepage/nvidia.png",
  "/images/homepage/oracle.png",
  "/images/homepage/samsung.png",
  "/images/homepage/tesla.png",
  "/images/homepage/microsoft2.png",
  "/images/homepage/google2.png",
];


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

      {/* ORANGE ROW*/}
      <div className="bg-[#E87449] text-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full h-[293px]">

        {/* Text left */}
        <div className="p-6 md:p-10 flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-[#FEFEFE] mb-4">
            The World of Work Has Changed. Access to Talent Has Not Kept Up.
          </h3>
          <p className="text-[#FEFEFE] leading-relaxed">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[#005B5B] mb-8">
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
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

      {/* ---- A Platform Built on Trust and Transparency----- */}
      <ScrollFadeSection>
        
  <section className="relative w-full h-screen pt-5 pb-40 overflow-hidden">
  {/* BACKGROUND IMAGE (includes globe) */}
  <div className="absolute inset-0 -z-10 flex items-end justify-center">
    <div
      className="
        w-full h-full
        bg-[url('/images/homepage/platformbg.png')]
        bg-no-repeat
        bg-cover
        bg-bottom
        
      "
    />

    {/* soft overlay */}
    <div className="absolute inset-0 bg-white/60" />
  </div>
  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-2 sm:px-10 md:px-16 lg:px-20 text-center">
    {/* toggle pills */}
    <div className="inline-flex items-center gap-2 bg-[#EBEBEB] shadow-md rounded-full p-1 mb-8">
      <button className="px-5 py-2 text-sm rounded-full bg-[#333333] text-[#FFFFFF]">
        For Global Talent
      </button>
      <button className="px-5 py-2 text-sm rounded-full text-[#003399]">
        For Global Organizations
      </button>
    </div>

    <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
      A Platform Built on <br className="hidden sm:block" />
      Trust and Transparency
    </h2>

    <p className="max-w-3xl mx-auto text-[#5C5C5C] text-sm leading-relaxed mb-2">
      Your career, empowered. Land your dream international role with a platform <br /> built for you. Experience a transparent process where you can track your <br /> 
      application&aposs status in real-time , showcase your verified skills , and connect <br /> with a global network of mentors to accelerate your growth.
    </p>

    {/* CTA */}
    <div className="flex justify-center gap-4">
      <button className="px-3 py-3 rounded-md bg-[#FF7F50] text-white font-semibold hover:bg-[#00B19F] transition">
        Explore Tech Careers
      </button>
  
    </div>
  </div>
</section>

      </ScrollFadeSection>

      {/* ---What Hired Tech Professionals Says--- */}
      <ScrollFadeSection>
  <section className="py-20 bg-[#005B5B] text-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* controls */}
        <div className="flex flex-col justify-between h-full">

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        What Hired Tech <br className="hidden sm:block" />
        Professionals Says
      </h2>
          <div className="flex gap-4 mt-12 lg:mt-auto">
             <button
  onClick={scrollLeft}
  className="w-11 h-11 rounded-full border border-white/30 text-5xl text-gray-900 bg-white flex items-center justify-center hover:bg-white/20 transition"
>
  ‹
</button>

<button
  onClick={scrollRight}
  className="w-11 h-11 rounded-full border border-white/30 text-5xl text-gray-900 bg-white flex items-center justify-center hover:bg-white/20 transition"
>
  ›
</button>

          </div>
        </div>

      {/* RIGHT SIDE — cards */}
<div ref={sliderRef}
  className="flex gap-8 overflow-x-hidden scroll-smooth md:col-span-2"
  style={{ maxWidth: "720px" }}>
  {testimonials.map((t, index) => (
    <div
      key={index}
      className="bg-white text-gray-800 rounded-xl p-8 shadow-lg min-h-[360px] w-[340px] flex flex-col justify-between shrink-0"
    >
      {/* ICON + LOCATION */}
      <div>
        <Image
          src={t.icon}
          alt=""
          width={32}
          height={32}
          className="mb-3"
        />

        <p className="text-sm text-gray-500 mb-4">
          {t.location}
        </p>

        <p className="leading-relaxed mb-6">
          “{t.text}”
        </p>
      </div>

      {/* DIVIDER */}
      <hr className="my-4 border-gray-200" />

      {/* PROFILE */}
      <div className="flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />

        <div>
          <p className="font-semibold">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  </section>
</ScrollFadeSection>

      <ScrollFadeSection>
  <section className="py-20 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-center">
      <h3 className="text-lg font-semibold text-[#005B5B] mb-3">
        Join a Global Community
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Connect with the Vanguard of Tech.
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mb-14">
        Digisperts Workforce is more than a platform,it&apos;s an ecosystem for the world&apos;s most ambitious tech professionals and the innovative companies building the future. 
        We are the leading destination where elite tech talent and forward-thinking companies connect seamlessly
      </p>
    </div>

    {/* ROW 1 — JOB ROLES */}
    <div className="relative overflow-hidden mb-6">
      <div className="marquee gap-4">
        {[...roles, ...roles].map((role, i) => (
          <span
            key={i}
            className="px-5 py-2 text-sm border border-[#FFD7C9] rounded-full text-gray-700 whitespace-nowrap"
          >
            {role}
          </span>
        ))}
      </div>
    </div>

    {/* ROW 2 — COMPANY LOGOS */}
    <div className="relative overflow-hidden mb-6">
      <div className="marquee marquee-slow gap-6">
        {[...companies, ...companies].map((logo, i) => (
          <div
            key={i}
            className="w-32 h-16 flex items-center justify-center border border-[#B0D8D8] rounded-xl bg-white"
          >
            <Image
              src={logo}
              alt="Company logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    {/* ROW 3 */}
    <div className="relative overflow-hidden">
      <div className="marquee gap-4">
        {[...roles, ...roles].map((role, i) => (
          <span
            key={i}
            className="px-5 py-2 text-sm border border-[#FFD7C9] rounded-full text-gray-700 whitespace-nowrap"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  </section>
</ScrollFadeSection>



 {/* Pre Footer Section */}
<section className="relative w-full flex flex-col items-center -mt-12 z-30">
  <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">

    {/* CARD — white background stays here */}
    <div className="relative w-full h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-white">

      <Image
        src="/images/prefooter-banner.png"
        alt="PreFooter Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center">
        <div className="p-6 md:p-10 max-w-4xl ml-6 md:ml-12">
          <ScrollFadeSection>
            <h3 className="font-extrabold text-3xl mb-2 text-[#333]">
              Join the Future of Global Work.
            </h3>

            <p className="text-xsm md:text-base mb-5 text-[#333]">
              Whether you are a developer seeking a premier international role or a company building a world-class distributed team, Digisperts Workforce is your destination.
            </p>

            <div className="flex gap-4">
              <Link
                href=""
                className="px-6 py-3 bg-[#008080] text-[#FEFEFE] rounded-md font-semibold shadow"
              >
                Post a Job for Free
              </Link>

              <Link
                href=""
                className="px-6 py-3 bg-[#FF7F50] text-[#FEFEFE] rounded-md font-semibold shadow"
              >
                Start Your Journey
              </Link>
            </div>
          </ScrollFadeSection>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
