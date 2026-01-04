"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollFadeSection from "../../components/ScrollFadeSection";
import { FiArchive, FiHeart, FiUsers, FiGlobe, FiClock, FiBriefcase } from "react-icons/fi";
import Footer from "../../footer";

export default function JobDetailsPage() {
  const postedDate = new Date("2025-01-01");
  const daysAgo = Math.floor(
    (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <section className="bg-[#F7F7F7] py-16 px-6">
         <div className="max-w-6xl mx-auto">
          <Link
          href="/find-jobs"
          className="inline-flex items-center mb-6 text-3xl font-extrabold text-[#003636] hover:opacity-80"
          >
            ←
            </Link>
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT CARD */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-4 relative">

          {/* Top row */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs text-gray-500">
              Posted {daysAgo} days ago
            </p>

            <div className="flex gap-3 text-gray-500">
              <FiArchive className="cursor-pointer hover:text-[#008080]" />
              <FiHeart className="cursor-pointer hover:text-[#FF7A45]" />
            </div>
          </div>

        

          <h1 className="text-2xl font-bold mb-3">
            ReactJS Developer
          </h1>

          <div className="flex gap-3 text-xs mb-6">
            <span className="bg-green-100 px-2 py-1 rounded">Full time</span>
            <span className="bg-blue-100 px-2 py-1 rounded">Senior level</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Remote</span>
            <span className="text-orange-500">+100 applicants</span>
          </div>

          <button className="mb-8 px-6 py-3 bg-[#FF7A45] text-white rounded-md shadow">
            Apply
          </button>

          {/* Content */}
          <h3 className="font-semibold mb-2">About the Job</h3>
          <p className="text-gray-600 mb-6">
            We are actively looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is motivated and able are actively looking.
          </p>

          <h3 className="font-semibold mb-2">Responsibilities</h3>
          <p className="text-gray-600 mb-6">
            We are actively looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is motivated and able.
          </p>

          <h3 className="font-semibold mb-2">
            Required Skills / Qualifications
          </h3>
          <ul className="list-decimal pl-5 text-gray-600 mb-6 space-y-2">
            <li>We are actively looking for a front-end react JS web developer who is motivated.</li>
            <li>Looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
          </ul>

          <h3 className="font-semibold mb-2">Benefits and Perks</h3>
          <ul className="list-decimal pl-5 text-gray-600 space-y-2">
             <li>We are actively looking for a front-end react JS web developer who is motivated.</li>
            <li>Looking for a front-end react JS web developer who is motivated and able are actively looking for a front-end react JS web developer who is.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
            <li>Motivated and able are actively looking for a front-end react JS web developer who is motivated and able.</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
<div className="bg-white rounded-xl shadow-sm p-6 h-fit">

  {/* Logo */}
  <div className="flex justify-center mb-4">
    <Image
      src="/images/find-jobs/right_main.png"
      width={70}
      height={70}
      alt="AWS"
    />
  </div>

  {/* Center texts */}
  <h3 className="text-center text-2xl font-bold">
    Amazon Web Services
  </h3>

  <p className="text-sm text-gray-500 text-center">
    Cloud Computing & Information Technology
  </p>

  <p className= "text-xs text-gray-500 text-center mb-6" > Seattle, Washington, United States </p>

  <p className="text-xs text-gray-500 text-center mt-2 mb-6">
    Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—use AWS to lower costs, become more agile, and innovate faster.
  </p>

  <hr className="mb-6" />

  {/* 2x2 Info Grid */}
  <div className="grid grid-cols-2 gap-6 text-sm">

    <div className="flex gap-3 items-start">
      <Image src="/images/find-jobs/right_a.png" width={20} height={20} alt="" />
      <div>
        <p className="text-xs text-gray-500">Company size</p>
        <p className="font-semibold">10,000+</p>
      </div>
    </div>

    <div className="flex gap-3 items-start">
      <Image src="/images/find-jobs/right_b.png" width={20} height={20} alt="" />
      <div>
        <p className="text-xs text-gray-500">Language</p>
        <p className="font-semibold">English</p>
      </div>
    </div>

    <div className="flex gap-3 items-start">
      <Image src="/images/find-jobs/right_c.png" width={20} height={20} alt="" />
      <div>
        <p className="text-xs text-gray-500">Work type</p>
        <p className="font-semibold">Remote</p>
      </div>
    </div>

    <div className="flex gap-3 items-start">
      <Image src="/images/find-jobs/right_d.png" width={20} height={20} alt="" />
      <div>
        <p className="text-xs text-gray-500">Schedule</p>
        <p className="font-semibold">Flexible</p>
      </div>
    </div>

  </div>
</div>
</div> 
</div>

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

           </section>
  );
}
