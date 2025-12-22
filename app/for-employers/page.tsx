"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "../components/ScrollFadeSection";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function ForEmployersPage() {

const [currentIndex, setCurrentIndex] = useState(0);

  const carouselCards = [
    {
      icon: "/images/for-employers/end2end1.png",
      title: "Source with Intelligence",
      desc: "Go beyond the job post. Our platform provides basic AI-generated match scores for candidates. Upgrade to our Global Talent Suite to proactively search our entire global database of tech professionals and receive intelligent candidate grading based on skills, experience, and test scores.",
    },
    {
      icon: "/images/for-employers/end2end2.png",
      title: "Vet with Confidence",
      desc: "Ensure you are hiring the best. Invite candidates to take skills tests using an integrated sandbox environment directly within the platform. Look for our \"Verified Global Employer\" badge to build your reputation as a trusted company.",
    },
    {
      icon: "/images/for-employers/end2end3.png",
      title: "Hire with Clarity",
      desc: "Streamline your entire process. Our AI-Enriched ATS features a Kanban-style visual pipeline for managing hiring stages. Add multiple team members with different permission levels to collaborate seamlessly on hiring decisions.",
    },
  ];

  const steps = [
  {
    icon: "/images/for-employers/verified-right1&3.png",
    color: "#B0D8D8",
    title: "Create Your Company Profile",
    desc: "Create your profile to showcase your company, culture, and hiring needs. A complete profile helps attract the right talent and sets the foundation for a smooth hiring process.",
  },
  {
    icon: "/images/for-employers/verified-right2&4.png",
    color: "#FFD7C9",
    title: "Post Job Requirements",
    desc: "Create your profile to showcase your company, culture, and hiring needs. A complete profile helps attract the right talent and sets the foundation for a smooth hiring process.",
  },
  {
    icon: "/images/for-employers/verified-right1&3.png",
    color: "#B0D8D8",
    title: "Assess & Shortlist",
    desc: "Create your profile to showcase your company, culture, and hiring needs. A complete profile helps attract the right talent and sets the foundation for a smooth hiring process.",
  },
  {
    icon: "/images/for-employers/verified-right2&4.png",
    color: "#FFD7C9",
    title: "Hire Verified Talent",
    desc: "Create your profile to showcase your company, culture, and hiring needs. A complete profile helps attract the right talent and sets the foundation for a smooth hiring process.",
  },
];


  const chartData = {
    labels: [
      "DevOps",
      "AI/ML Engineers",
      "Data Engineers",
      "Software Developers",
      "Product Design",
    ],
    datasets: [
      {
        label: "Hiring Rate",
        data: [40, 55, 48, 70, 30],
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col scroll-smooth bg-white relative z-10">
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


      {/* SECTION 1 — Strategic Advantage of a Global Workforce */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-[#003636]">
      The Strategic Advantage of a Global Workforce
    </h2>

    {/* Top paragraph */}
    <p className="mt-4 text-gray-600 max-w-3xl align-middle mx-auto leading-relaxed">
      In a competitive market, the best talent is your greatest asset. But sourcing that talent globally presents significant challenges: navigating compliance, benchmarking salaries, and verifying skills across different markets. Legacy HR platforms are too slow and generalist, failing to meet the specific needs of Tech hiring.
    </p>

    {/* Three images */}
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative">
  {/* Left Image */}
  <div className="relative z-10 md:-mr-5">
    <Image
      src="/images/for-employers/global-workforce.png"
      alt="Workforce Left"
      width={350}
      height={250}
      className="rounded-lg"
    />
  </div>

  {/* Center Image — Overlaps */}
  <div className="relative z-15 mt-6 md:mt-20">
    <Image
      src="/images/for-employers/global-workforceb.png"
      alt="Workforce Center"
      width={370}
      height={270}
      className="rounded-lg"
    />
  </div>

  {/* Right Image */}
  <div className="relative z-10 md:-ml-5">
    <Image
      src="/images/for-employers/global-workforce3.png"
      alt="Workforce Right"
      width={350}
      height={250}
      className="rounded-lg"
    />
  </div>
</div>

    {/* Bottom paragraph */}
    <p className="mt-10 text-gray-600 align-middle max-w-3xl mx-auto">
      Digisperts Workforce is your strategic hiring partner, providing an insightful and clear solution. Our platform is engineered to solve the complexities of building and managing a distributed tech team.

    </p>

  </div>
</section>


      
     {/* SECTION 2 — End-to-End Global Hiring Solution (Carousel) */}
<section className="py-20 bg-[#F6F8FA]">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-[#003636]">
      An End-to-End Global Hiring Solution
    </h2>

    {/* Carousel Container */}
    <div className="mt-12 overflow-hidden relative">

      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          width: `${carouselCards.length * 40}%`, // track width
          transform: `translateX(-${currentIndex * 40}%)`, // slide amount
        }}
      >
        {carouselCards.map((card, index) => (
          <div
            key={index}
            className="w-[40%] px-4 flex-shrink-0"  // ensures 2 cards visible
          >
            <div className="relative bg-white rounded-xl shadow-md p-8 pt-14 text-center h-full border border-gray-100">

              {/* TOP-LEFT ICON */}
              <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center">
                <Image
                  src={card.icon}
                  width={60}
                  height={60}
                  alt={card.title}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#003636]">
                {card.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {carouselCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition ${
              currentIndex === index ? "bg-[#003636]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  </div>
</section>



      {/* SECTION 3 — Hire with a Global Toolkit */}
<section className="py-15 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center text-[#005B5B]">
      Hire with a Global Toolkit
    </h2>
    <p className="text-center text-sm text-[#333333] pt-2">
      Our premium Global Hiring Toolkit provides you with the essential resources for success. <br /> Remove the complexity of international employment.
    </p>

    <div className="grid md:grid-cols-3 gap-4 mt-12">

      {/* Card */}
      {[
        {
          img: "/images/for-employers/global-toolkit.png",
          title: "Data-Driven Salary Benchmarking",
          desc: "Access salary data for tech roles across different countries, adjusted for local cost of living."
        },
        {
          img: "/images/for-employers/global-toolkit2.png",
          title: "Compliance & Contracts",
          desc: "Use localized contract templates and compliance checklists for major international markets to hire with peace of mind."
        },
        {
          img: "/images/for-employers/global-toolkit3.png",
          title: "Visa & Relocation Support",
          desc: "Opt for our add-on service, which connects you with immigration and relocation partners to streamline international hires."
        }
      ].map((card, i) => (
        <div key={i} className="relative shadow-lg rounded-lg overflow-hidden">

          {/* Full-width image */}
          <Image
            src={card.img}
            alt={card.title}
            width={400}
            height={300}
            className="w-full h-100% object-cover"
          />

          {/* Overlay text */}
          <div className="absolute bottom-0 w-full text-white p-5">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm mt-1">{card.desc}</p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>


      {/* SECTION 4 — Hire Verified Talent in 4 Steps */}
<section className="py-20 bg-white">
  <h2 className="text-3xl font-bold text-center text-[#005B5B]">
        Hire Verified Talent in <span className="text-[#FF7F50]">4 Simple Steps</span>
  </h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

    {/* Left Image */}
    <Image
      src="/images/for-employers/verified-talentimg.png"
      alt="Verified Talent"
      width={500}
      height={330}
      className="rounded-lg object-cover mt-40"
    />

    {/* Right Steps */}
    <div>
    

      <div className="mt-10 space-y-8">

        {steps.map((step, i) => (
          <div key={i} className="flex gap-5 items-start">

            {/* Color Stroke */}
            <div
              className="w-5 rounded-full h-12 mt-1"
              style={{ backgroundColor: step.color }} 
            />

            {/* Icon */}
            <Image
              src={step.icon}
              alt={step.title}
              width={42}
              height={42}
            />

            {/* Text Block */}
            <div>
              <h3 className="text-lg font-semibold text-[#003636]">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-1">{step.desc}</p>
            </div>

          </div>
        ))}

      </div>

      {/* CTA Button */}
      <div className="flex justify-left mt-12">
        <button className="flex items-center gap-3 px-8 py-3 bg-[#008080] text-white font-bold  rounded-md hover:bg-[#00B3A5]">
          GET STARTED NOW
          <span className="text-x6 font-bold">→</span>
        </button>
      </div>

    </div>
  </div>
</section>

      
      
      {/* SECTION 5 — Current Hiring Trends */}
<section className="py-20 bg-[#F6F8FA]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-2xl font-bold text-[#003636]">
      Current Hiring Trends: Positions Companies Need Now
    </h2>

    {/* Full Width Chart (Large), Slim Bars */}
    <div className="mt-12 w-full max-w-4xl mx-auto" style={{ height: "350px" }}>
      <Bar
        data={{
          labels: ["DevOps", "AI/ML", "Data Engr", "Software Dev", "Product Design"],
          datasets: [
            {
              label: "Hiring Rate",
              data: [40, 55, 48, 70, 30],
              backgroundColor: "#007474",
              borderRadius: 6,

            
              barThickness: 25,      
              maxBarThickness: 25,   
            }
          ]
        }}
        options={{
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Hiring Rate",    
                color: "#003636",
                font: { size: 12, weight: "bold" },
                padding: 10
              }
            },
            x: {
              ticks: { font: { size: 11 } }
            }
          }
        }}
      />
    </div>

  </div>
</section>
      
     {/* SECTION 6 — Explore More Articles */}
<section className="pt-24 pb-40 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-[#003636] mb-16">
      Explore More Articles
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      {[
        {
          title: "What Roles Are in Demand and Why",
          desc: "Discover insights to help you hire smarter and stay ahead.",
          img: "/images/for-employers/explore-img.png",
        },
        {
          title: "The Future of Remote Tech Teams",
          desc: "How distributed teams are reshaping global hiring.",
          img: "/images/for-employers/explore-img.png",
        },
        {
          title: "Building a Global Workforce Efficiently",
          desc: "Simple frameworks to scale your international hiring process.",
          img: "/images/for-employers/explore-img.png",
        },
      ].map((card, i) => (
        <div key={i} className="shadow-lg rounded-xl overflow-hidden">
          
          <Image
            src={card.img}
            width={400}
            height={300}
            alt="Article"
            className="object-cover w-full h-56"
          />

          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#003636]">
              {card.title}
            </h3>

            <p className="text-gray-600 mt-2">{card.desc}</p>

            {/* See More link */}
            <a
              href="#"
              className="mt-4 inline-block text-[#008080] font-medium hover:underline"
            >
              See More →
            </a>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>


      {/* Pre Footer Section */}
<section className="relative w-full flex flex-col items-center -mt-12 z-30">
  <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
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
            <h3 className="font-extrabold text-3xl md:text-3xl mb-2 text-[#333333]">
              Ready to Build Your Global <br /> Dream Team?
            </h3>
            <p className="text-sm md:text-base mb-5 text-[#333333]">
              Post a job for free to access our essential tools, or request a demo to see <br /> 
              how our Global Talent Suite can transform your international hiring strategy.
            </p>
            <Link
              href=""
              className="inline-block px-6 py-3 bg-[#008080] text-white rounded-md font-semibold shadow"
            >
              Post a Job for Free
            </Link>
            <Link
              href=""
              className="inline-block px-6 py-3 text-[#2E2E2E] rounded-md font-semibold shadow"
            >
              Request a Demo
            </Link>
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
