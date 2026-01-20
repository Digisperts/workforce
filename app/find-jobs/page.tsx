"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "../components/ScrollFadeSection";
import JobCards from "../components/JobCards";


export default function FindJobsPage() {

  const jobs = Array.from({ length: 9 }, (_, i) => ({
  id: `${i + 1}`,
  title: "Frontend React Developer",
  company: "Amazon",
}));

  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
            <section className="relative w-full h-screen -mt-0">
              {/* Placeholder background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/find-jobs/hero.png"
                  alt="Hero background"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>
      
              <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 h-full flex flex-col justify-center align-text-center">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Find Global Opportunities
                  </h1>
      
                  <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-sm sm:text-base text-white/90">
                    Jobs on our board are highly vetted by industry experts, saving your time on fact-checking.
                  </p>
    
                </div>
              </div>
            </section>

            {/* JOB SEARCH & LISTINGS */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Search Bar */}
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
        </span>
        <input
        type="text"
        placeholder="What job are you looking for?"
        className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none"
        />
      </div>

      <button className="px-6 py-3 bg-[#FF7A45] text-white rounded-lg shadow-sm hover:shadow-md">
        Search
      </button>

      <button className="px-6 py-3 border rounded-lg font-medium text-[#003636] shadow-sm hover:shadow-md">
        Search with AI ✨
      </button>
    </div>

    {/* Filters */}
    <div className="mt-6 flex flex-wrap gap-4">
      {[
        "Location",
        "Job type",
        "Experience level",
        "Date posted",
        "Company type",
        "Salary range",
      ].map((filter, i) => (
        <select
          key={i}
          className="border rounded-lg px-4 py-2 text-sm text-gray-600"
        >
          <option>{filter}</option>
        </select>
      ))}
    </div>

    {/* Your Best Matches */}
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-[#003636] mb-8">
        Your Best Matches
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {jobs.slice(0, 6).map((job) => (
          <JobCards
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          />
          ))}
      </div>
    </div>

    {/* Recommended */}
    <div className="mt-24">
      <h2 className="text-xl font-semibold text-[#81a3a3] mb-8">
        Recommended for You
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCards
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          />
          ))}

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-16 text-sm">
        <span>1 of 2</span>
        <Link
        href=""
        className="text-[#008080] font-medium"
        >
          Next Page →
        </Link>
        </div>

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
              Join us in building the future <br /> of work.
            </h3>

            <p className="text-sm md:text-base mb-5 text-[#333]">
              Whether you are a developer seeking a premier international role or <br /> a company building a world-class distributed team, Digisperts Workforce <br /> is your destination.
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
                Request a Demo
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
