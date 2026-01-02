"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "../components/ScrollFadeSection";

export default function AboutUsPage() {
const teamRow1 = [
  { name: "Mercy Olanrewaju", role: "Product Designer", img: "team.png" },
  { name: "Daniel Adeyemi", role: "Frontend Engineer", img: "team.png" },
  { name: "Sarah Johnson", role: "Product Manager", img: "team.png" },
  { name: "Ibrahim Musa", role: "Backend Engineer", img: "team.png" },
  { name: "Grace Williams", role: "UX Researcher", img: "team.png" },
]

const teamRow2 = [
  { name: "John Okafor", role: "DevOps Engineer", img: "team.png" },
  { name: "Aisha Bello", role: "Talent Manager", img: "team.png" },
  { name: "Michael Chen", role: "Tech Lead", img: "team.png" },
  { name: "Rebecca Stone", role: "QA Engineer", img: "team.png" },
]


  return (
    <main className="min-h-screen flex flex-col scroll-smooth ">
      {/* Navbar */}
      <Navbar />

    {/* Hero Section */}
<section className="relative w-full h-screen -mt-0">

  {/* Background Image */}
  <Image
    src="/images/aboutus/hero-banner.png"
    alt="Hero Background"
    fill
    className="object-cover object-top -z-10"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 -z-10" />

  {/* LEFT TEXT */}
  <div className="relative w-full mx-auto px-4 md:px-6 lg:px-12">
    <p className="text-white leading-tight">
      {/* Not bold */}
      <span className="block text-lg md:text-xl lg:text-[50px] font-normal">
        We Are Closing
      </span>

      {/* Bold */}
      <span className="block mt-2 text-xl md:text-xl lg:text-[60px] font-semibold">
        The Distance Between
      </span>

      {/* Bold */}
      <span className="block mt-4 text-xl md:text-xl lg:text-[60px] font-semibold">
        <span className="text-[#FF7F50]">Talent</span> 
        <span className="text-[#004646] ml-3">Opportunity.</span>
      </span>
    </p>
  </div>

  {/* RIGHT-SIDE IMAGES CONTAINER */}
  <div className="absolute right-8 md:right-24 lg:right-80 top-[17%]">

    {/* FIRST IMAGE — keep exactly as positioned */}
    <div className="relative inline-block">
      <Image
        src="/images/aboutus/heroimga.png"
        alt="Hero Right Image 1"
        width={220}
        height={220}
        className="rounded-xl shadow-xl relative left-[-5px]"
      />

      {/* SECOND IMAGE — placed BESIDE, starting from HALF of first image */}
      <Image
        src="/images/aboutus/heroimg-2.png"
        alt="Hero Right Image 2"
        width={220}
        height={220}
        className="rounded-xl shadow-xl absolute 
                   left-[230px]   /* move to the right of image 1 */
                   top-[110px]    /* half of 220px height */
        "
      />
    </div>

  </div>

</section>



      {/* SECTION 1 — Connected World */}
<section className="bg-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-[#8C462C]">
      In today’s connected world, brilliance is everywhere.
    </h2>

    <p className="mt-4 text-[#333333] leading-relaxed">
      Yet, the path connecting the world&apos;s most skilled Tech professionals with
      the companies that need them often remains complex…
    </p>

    {/* Globe Image */}
    <div className="mt-10 flex justify-center">
  <Image
    src="/images/aboutus/world-img.png"
    width={360}
    height={360}
    alt="Global Talent"
    className="w-[300px] md:w-[360px]"
  />
</div>

    <p className="mt-8 text-[#8C462C] leading-relaxed max-w-3xl mx-auto">
      We knew there had to be a better way.
    </p>
  </div>
</section>


{/* SECTION 2 — Mission + Vision */}
<section className="bg-[#005B5B] py-24 px-6 flex justify-center">

  <div className="relative w-[1280px] h-[620px] rounded-2xl overflow-hidden">

    {/* Banner Image */}
    <Image
      src="/images/aboutus/mission-image.png"
      alt="Mission & Vision Banner"
      fill
      className="object-cover"
    />

    {/* Mission — top-left */}
    <div className="absolute top-0 left-0 pb-2 bg-[#005B5B] max-w-[550px]">
      <h3 className="text-xl font-bold text-white mb-3">OUR MISSION</h3>
      <p className="text-white/90 leading-relaxed">
        Our mission is to build a transparent, AI-driven marketplace that empowers companies to hire world-class tech talent efficiently and enables developers to showcase verified skills and access global opportunities, while managing compliance, compensation benchmarking and international hiring complexity. We are more than a platform, We are your unwavering partner in growth..
      </p>
    </div>

    {/* Vision — bottom-right */}
    <div className="absolute bottom-0 right-0 pl-2 pt-2.5 bg-[#005B5B] max-w-[550px] text-right">
      <h3 className="text-xl font-bold text-white mb-2">OUR VISION</h3>
      <p className="font-bold text-white/80 mb-2 text-sm">
        A World Without Borders for Brilliance
      </p>
      <p className="text-white/90 leading-relaxed">
        Our vision is to be the leading destination where elite tech talent and forward-thinking companies connect seamlessly. We are building a new era of distributed remote teams by removing borders and verifying brilliance.
      </p>
    </div>

  </div>

</section>




{/* SECTION 3 — How We Make It Happen */}
<section className="bg-white py-24 px-6">

  {/* Center heading */}
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="size-40px  font-semibold text-[#8C462C]">
      How We Make It Happen
    </h2>

    <p className="mt-4 text-[#333333] text-lg leading-relaxed">
      Digisperts Workforce was born from a simple belief: hiring should be about potential, not postcodes. We built a transparent, AI-driven marketplace that empowers both sides of the hiring equation.

    </p>
  </div>

  {/* CARD 1 */}
  <div className="mt-16 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
    
    {/* Left Image (30%) */}
    <div className="md:w-[30%] w-full relative min-h-[260px]">
      <img
        src="/images/aboutus/ambition1st.png"
        className="object-cover"
        alt=""
      />
    </div>

    {/* Right Text (70%) */}
    <div className="md:w-[70%] p-8 flex items-center">
      <div>
        <h3 className="text-xl font-semibold text-[#005B5B]">
          For Ambitious Tech Professionals
        </h3>
        <p className="mt-3 text-[#005B5B] leading-relaxed">
          We provide a trusted path to premier international work. For too long, you’ve been left in the dark. We give you back control with a platform that offers real-time tracking on every application. Create a rich profile, showcase your verified skills through assessments , and connect with a global network of mentors. We empower you to build the global career you deserve.
        </p>
      </div>
    </div>
  </div>


  {/* CARD 2 — Dark, Text Left, Image Right */}
  <div className="mt-10 bg-[#0D1A1A] text-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">

    {/* Left Text (70%) */}
    <div className="md:w-[70%] p-10 flex items-center">
      <div>
        <h3 className="text-xl text-[#FFFFFF] font-semibold">
          For Innovative Companies+
        </h3>
        <p className="mt-3 text-[#FFFFFF] leading-relaxed">
          We empower you to build world-class teams efficiently. Our platform combines skill verification with powerful AI hiring tools to give you fast access to top engineers. Go beyond the resume with integrated technical assessments and manage your pipeline visually. Our Global Hiring Toolkit simplifies the complexities of international employment, from data-driven salary benchmarking to compliance and contract templates.
        </p>
      </div>
    </div>

    {/* Right Image (30%) */}
    <div className="md:w-[30%] w-full">
      <img
        src="/images/aboutus/ambition2nd.png"
        className="w-full h-full object-cover"
        alt=""
      />
    </div>

  </div>

</section>

{/* Meet The Team */}
<section className="py-24 bg-white px-6">
  <h2 className="text-center text-2xl font-bold text-[#003636] mb-14">
    Meet The Team
  </h2>

  <div className="max-w-6xl mx-auto space-y-16">

    {/* Row 1 */}
<div className="flex justify-center gap-12 flex-wrap">
  {teamRow1.map((member, i) => (
    <div key={i} className="text-center">
      <img
        src={`/images/aboutus/${member.img}`}
        className="w-32 h-32 rounded-full object-cover mx-auto"
        alt={member.name}
      />
      <p className="mt-3 font-semibold text-[#333333]">{member.name}</p>
      <p className="text-sm text-[#8C462C]">{member.role}</p>
    </div>
  ))}
</div>

{/* Row 2 */}
<div className="flex justify-center gap-12 flex-wrap">
  {teamRow2.map((member, i) => (
    <div key={i} className="text-center">
      <img
        src={`/images/aboutus/${member.img}`}
        className="w-32 h-32 rounded-full object-cover mx-auto"
        alt={member.name}
      />
      <p className="mt-3 font-semibold text-[#333333]">{member.name}</p>
      <p className="text-sm text-[#8C462C]">{member.role}</p>
    </div>
  ))}
</div>


  </div>
</section>



{/* SECTION 5 — Top Hiring Companies */}
<section className="py-20 bg-white px-6 overflow-hidden">

  <h2 className="text-center text-lg font-semibold text-[#003636] mb-10">
    Top Hiring Companies
  </h2>

  <div className="relative w-full overflow-hidden">
    <div className="flex gap-20 animate-scroll whitespace-nowrap opacity-90">

      {[
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png',
        'top-hiring.png'
      ].map((logo, i) => (
        <img
          key={i}
          src={`/images/aboutus/${logo}`}
          className="h-12 w-auto"
          alt="Company Logo"
        />
      ))}

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
