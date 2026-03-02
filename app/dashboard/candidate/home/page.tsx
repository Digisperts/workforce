"use client";

import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* GREETING */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/topbar/avatar.png"
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">
            Good Morning, <span className="font-bold">Mercy</span>
          </h2>
          <p className="text-sm text-teal-600 cursor-pointer">
            View Profile →
          </p>
        </div>
      </div>

      {/* PROFILE COMPLETION */}
      <div className="bg-[#E6F4F1] border border-teal-200 rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">
            Complete Your Profile
          </p>
          <h3 className="text-lg font-semibold text-teal-700">
            Your profile is 70% completed
          </h3>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">✔ Add portfolio links</span>
          <span className="flex items-center gap-2">✔ Define preferences</span>
          <span className="flex items-center gap-2 text-gray-400">
            ○ Upload CV
          </span>
        </div>

        <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm">
          Continue here
        </button>
      </div>

      {/* APPLICATION TRACKER */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Application Status Tracker
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          
          {/* LEFT CARDS */}
          <div className="grid grid-cols-2 gap-4 col-span-2">
            
            {/* CARD */}
            {[
              { title: "Total Application Sent", value: "1,000" },
              { title: "Reviewed Application", value: "1,000" },
              { title: "Invite Received", value: "1,000" },
              { title: "Rejected Application", value: "1,000" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm"
              >
                <p className="text-sm text-gray-500 mb-1">
                  {item.title}
                </p>
                <h2 className="text-2xl font-bold text-teal-700">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* RIGHT BANNER */}
          <div className="bg-[#E6F4F1] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">
                Prove your expertise to top employers
              </h3>
              <p className="text-sm text-gray-600">
                Take a verified skills test and earn badges that help you stand out.
              </p>
            </div>

            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md w-fit">
              Take a Skills Test
            </button>
          </div>
        </div>
      </div>

      {/* RECOMMENDED JOBS */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Recommended Jobs
          </h3>
          <span className="text-teal-600 text-sm cursor-pointer">
            See All
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((job) => (
            <div
              key={job}
              className="bg-white rounded-xl p-5 shadow-sm space-y-3"
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/jobs/aws.png"
                    alt="Company"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-semibold">Amazon</p>
                    <p className="text-xs text-gray-500">USA</p>
                  </div>
                </div>

                <div className="flex gap-2 text-gray-400">
                  ♡ ↗
                </div>
              </div>

              {/* TITLE */}
              <h4 className="font-semibold">
                React JS Developer
              </h4>

              <p className="text-sm text-gray-500">
                We are actively looking for a frontend developer...
              </p>

              {/* TAGS */}
              <div className="flex gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">
                  7 positions
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  Full time
                </span>
              </div>

              {/* CTA */}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-teal-100 text-teal-700 py-2 rounded-md">
                  Apply
                </button>
                <button className="flex-1 border py-2 rounded-md">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACCELERATE */}
      <div className="bg-teal-700 text-white rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-6 text-sm">
          <span>Access global salary & trends</span>
          <span>Unlock advanced filters</span>
          <span>Activate “Available for Offers” badge</span>
        </div>

        <button className="bg-white text-teal-700 px-4 py-2 rounded-md">
          Upgrade Now
        </button>
      </div>

    </div>
  );
}
