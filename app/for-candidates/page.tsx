"use client";

import Navbar from "../nav";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeSection from "../components/ScrollFadeSection";

export default function CandidatesPage() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-screen -mt-0">
        {/* Placeholder background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/for-candidates/hero.png"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 h-full flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Your Talent is Global.
              <br />
              <span> Your Career Should Be, Too.</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-sm sm:text-base text-white/90">
              Stop navigating the opaque and complex world of international job
              hunting. Digisperts Workforce is your transparent, trusted partner
              for finding premier tech opportunities with the world&apos; most
              innovative companies.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
              <Link
                href="#"
                className="inline-block px-6 py-3 bg-[#FF7F50] text-white font-semibold rounded-md shadow hover:brightness-95 transition"
              >
                Find My Global Role
              </Link>
              <Link
                href="#"
                className="inline-block px-6 py-3 border border-white text-white bg-black/20 rounded-md font-medium hover:bg-white hover:text-[#233876] transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER PATH */}
<ScrollFadeSection>
  <section className="bg-white py-12 md:py-20">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#003399] text-center">
        A Career Path Designed for You
      </h2>

      {/* TOP PARAGRAPH — LEFT ALIGNED */}
      <p className="mt-4 text-gray-600 max-w-3xl text-left">
        We understand the challenges faced by today&apos;s tech professionals.
        You possess in-demand skills and global ambition, but you&apos;re tired
        of job portals that lack transparency and platforms that are too exclusive.
      </p>

      {/* TIMELINE */}
      <div className="relative mt-12 flex justify-center">

        {/* Horizontal line behind icons */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
          <div className="w-[70%] max-w-2xl h-1 bg-[#FFDBD0] rounded-full"></div>
        </div>


        {/* Timeline items */}
        <div className="relative flex items-center justify-between w-full max-w-4xl gap-20">

          {[
            { label: "Sign Up", icon: "/images/for-candidates/sign-up.png" },
            { label: "Submit Application", icon: "/images/for-candidates/application.png" },
            { label: "Interview", icon: "/images/for-candidates/interview.png" },
            { label: "Get Hired", icon: "/images/for-candidates/verify.png" },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center w-28">

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#B0D8D8]/90 shadow-md flex items-center justify-center z-10 border border-gray-100">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={20}
                  height={20}
                  className="opacity-90"
                />
              </div>

              {/* Label */}
              <p className="mt-3 text-sm font-medium text-gray-700 max-w-[80px] leading-tight">
                {step.label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM PARAGRAPH — RIGHT ALIGNED */}
      <p className="mt-12 text-gray-600 max-w-3xl ml-auto text-right">
        We built Digisperts Workforce to be different — inclusive,
        transparent, and designed for skilled professionals
        with 2–7 years of experience. Take the next meaningful step in your
        global career with clarity and confidence.
      </p>
    </div>
  </section>
</ScrollFadeSection>

      {/* HOW WE EMPOWER YOUR JOURNEY */}
<ScrollFadeSection>
  <section className="py-16 md:py-24 bg-[#E9F9F6]">
  <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 
    grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-16 items-stretch">

    {/* LEFT CONTENT */}
    <div className="space-y-6 flex flex-col h-full">

      <h3 className="text-2xl md:text-3xl font-semibold text-[#005B5B]">
        How We Empower Your Journey
      </h3>

      {/* LEFT IMAGE WITH CTA INSIDE */}
      <div className="relative rounded-lg overflow-hidden shadow-lg h-full">
        <Image
          src="/images/for-candidates/feature.png"
          alt="Empower Your Journey"
          fill
          className="object-cover"
        />

        {/* CTA BUTTON */}
        <Link
          href=""
          className="absolute bottom-6 right-6 px-6 py-3 bg-[#FF7F50] 
          text-white font-semibold rounded-md shadow hover:brightness-95"
        >
          Start Your Journey
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE — FOUR CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center p-2.5">

      {/* Card 1 */}
      <div className="rounded-lg p-6 shadow-md bg-[#54AAAA] border border-[#009E8E] w-full h-full flex flex-col">
        <div className="text-[#003399] font-semibold mb-2 text-lg">
          1. <p className="text-[#FEFEFE] text-lg">Create Your Rich Profile</p>
        </div>
        <p className="text-[#FEFEFE] text-sm">
          Showcase your full potential. Build a detailed profile with your skills, experience, and portfolio links from GitHub, Behance, and more. Clearly define your work preferences, including remote, hybrid, and preferred time zones.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-lg p-6 shadow-md bg-white border border-gray-100 w-full h-full flex flex-col">
        <div className="text-[#767676] font-semibold mb-2 text-2xl">
          2. <p className="text-[#767676] text-lg">Verify Your Brilliance</p>
        </div>
        <p className="text-gray-600 text-sm">
          Move beyond the CV. Take free skills tests to earn a "Skills Assessed" badge on your profile, proving your expertise to top employers before the first interview.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-lg p-6 shadow-md bg-white border border-gray-100 w-full h-full flex flex-col">
        <div className="text-[#767676] font-semibold mb-2">
          3. <p className="text-[#767676] text-lg">Track Opportunities</p>
        </div>
        <p className="text-gray-600 text-sm">
          Experience radical transparency. Our platform allows you to view the real-time status of every application you submit. You'll know exactly where you stand, from the moment your application is viewed to when an offer is made.
        </p>
      </div>
 
      {/* Card 4 */}
      <div className="rounded-lg p-6 shadow-md bg-white border border-gray-100 w-full h-full flex flex-col">
        <div className="text-[#767676] font-semibold mb-2">
          4. <p className="text-[#767676] text-lg">Accelerate Growth</p>
        </div>
        <p className="text-[#767676] text-sm">
          We invest in your success. Upgrade to our Global Career Accelerator to connect with experienced tech mentors from different countries , practice with AI-powered interview simulations , and get detailed advice on how to optimize your profile for international roles.
        </p>
      </div>

    </div>
  </div>
</section>

</ScrollFadeSection>


   
{/* FEATURES BUILT FOR A GLOBAL CAREER */}

<section className="py-20 pb-55 bg-[#FEFEFE]">
  <div className="max-w-6xl mx-auto px-6">

    <h3 className="text-2xl md:text-3xl font-semibold text-[#003399] mb-12 text-center">
      Features Built for a Global Career
    </h3>

    <div className="grid grid-cols-12 gap-6">

      {/* Row 1 – Left (Wider) */}
      <div className="col-span-12 md:col-span-7 bg-white rounded-xl p-6 shadow-md relative">
        {/* Corner highlight */}
        <div className="absolute inset-0 pointer-events-none"
        style={{background:"linear-gradient(225deg, rgba(234,242,255,0.8) 0%, rgba(234,242,255,0.45) 35%, rgba(234,242,255,0.15) 60%, rgba(234,242,255,0) 80%)",}}
      />

        <div className="relative w-50 h-30 mb-4">
    <Image
      src="/images/for-candidates/feature-first.png"
      alt="Advanced Job Search"
      fill
      className="object-cover"
    />
  </div>
        <h4 className="font-semibold text-[#003399]">Advanced Job Search</h4>
        <p className="text-gray-600 text-sm mt-2">
          Use global filters to search by country, continent, and remote-friendly status. Premium users can unlock filters for salary range with automatic currency conversion.
        </p>
      </div>

      {/* Row 1 – Right (Narrower) */}
      <div className="col-span-12 md:col-span-5 bg-white rounded-xl p-6 shadow-md relative ">
        {/* Corner highlight */}
        <div className="absolute inset-0 pointer-events-none"
        style={{background:"linear-gradient(135deg, rgba(234,242,255,0.8) 0%, rgba(234,242,255,0.45) 35%, rgba(234,242,255,0.15) 60%, rgba(234,242,255,0) 80%)",}}/>

        <div className="relative w-full h-30 mb-4">
          <div className="absolute right-3 top-0 w-50 h-30">
            <Image
          src="/images/for-candidates/feature-second.png"
          alt="Advanced Job Search"
          fill
          className="object-contain"
          />
          </div>
        </div>
        <h4 className="font-semibold text-[#003399]">Global Mentorship</h4>
        <p className="text-gray-600 text-sm mt-2">
          Connect with experienced mentors for career guidance and industry insights.
        </p>
      </div>

      {/* Row 2 – Left (Narrower) */}
      <div className="col-span-12 md:col-span-5 bg-white rounded-xl p-6 shadow-md relative">
        <div className="absolute inset-0 pointer-events-none"
        style={{background:"linear-gradient(225deg, rgba(234,242,255,0.8) 0%, rgba(234,242,255,0.45) 35%, rgba(234,242,255,0.15) 60%, rgba(234,242,255,0) 80%)",}}/>
        <div className="relative w-50 h-30 mb-4">
            <Image
          src="/images/for-candidates/feature-third.png"
          alt="Advanced Job Search"
          fill
          className="object-cover"
          />

        </div>

        <h4 className="font-semibold text-[#003399]">Available for Offers</h4>
        <p className="text-gray-600 text-sm mt-2">
          Pass a rigorous skills assessment to signal your immediate availability to employers worldwide.
        </p>
      </div>

      {/* Row 2 – Right (Wider) */}
      <div className="col-span-12 md:col-span-7 bg-white rounded-xl p-6 shadow-md relative">
        <div className="absolute inset-0 pointer-events-none"
        style={{background:"linear-gradient(135deg, rgba(234,242,255,0.8) 0%, rgba(234,242,255,0.45) 35%, rgba(234,242,255,0.15) 60%, rgba(234,242,255,0) 80%)",}}/>

        <div className="relative w-full h-30 mb-4">
          <div className="absolute right-3 top-0 w-50 h-30">
            <Image
          src="/images/for-candidates/feature-fourth.png"
          alt="Advanced Job Search"
          fill
          className="object-contain"
          />
          </div>
        </div>
        <h4 className="font-semibold text-[#003399]">AI Interview Practice</h4>
        <p className="text-gray-600 text-sm mt-2">
          Prepare for technical and behavioral interviews with our AI-powered simulation tools.
        </p>
      </div>

    </div>
  </div>
</section>


     {/* Pre Footer Section */}
<section className="relative w-full flex flex-col items-center -mt-40 z-30">
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
            <h3 className="font-extrabold text-2xl md:text-3xl mb-2 text-[#333333]">
              Ready to Find Your Place on the Global Stage?
            </h3>
            <p className="text-sm md:text-base mb-5 text-[#333333]">
              Create your free profile today and let the world&apos;s most forward-thinking companies discover your talent
            </p>
            <Link
              href=""
              className="inline-block px-6 py-3 bg-[#FF7F50] text-white rounded-md font-semibold shadow"
            >
              Sign Up and Get Discovered
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

