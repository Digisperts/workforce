"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function GetStartedPage() {
  const [accountType, setAccountType] = useState<"candidate" | "employer">(
    "employer"
  );

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
  <div className="w-full max-w-md text-black">

    {/* ACCOUNT TOGGLE */}
    <div className="flex justify-center mb-6">
      <div className="flex bg-gray-200 p-1 rounded-full">
        <button
          onClick={() => setAccountType("employer")}
          className={`px-5 py-2 text-sm rounded-full transition ${
            accountType === "candidate"
              ? "bg-[#E87449] text-white"
              : "text-gray-600"
          }`}
        >
          Candidate
        </button>

        <button
          onClick={() => setAccountType("employer")}
          className={`px-5 py-2 text-sm rounded-full transition ${
            accountType === "employer"
              ? "bg-[#E87449] text-white"
              : "text-gray-600"
          }`}
        >
          Employer
        </button>
      </div>
    </div>

    {/* PROGRESS DOTS */}
    <div className="flex justify-center gap-2 mb-8">
      <div className="w-3 h-3 rounded-full  bg-gray-300" />
      <div className="w-3 h-3 rounded-full bg-[#E87449]" />
    </div>

    {/* HEADING */}
    <h1 className="text-2xl font-bold mb-2">Get Started</h1>

    <p className="text-gray-500 mb-8">
      Enter your Personal information to create an account
    </p>

    {/* FORM */}
    <div className="space-y-4">

      {/* FIRST + LAST NAME SIDE BY SIDE */}
    <div className="flex gap-3">
  
  {/* First Name */}
  <div className="w-1/2">
    <label className="block mb-2 text-black">First Name</label>
    <div className="relative">
      <Image
        src="/images/auth/name-icon.png"
        alt="User"
        width={18}
        height={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
      />
      <input
        type="text"
        placeholder="First Name"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  </div>

  {/* Last Name */}
  <div className="w-1/2">
    <label className="block mb-2 text-black">Last Name</label>
    <div className="relative">
      <Image
        src="/images/auth/name-icon.png"
        alt="User"
        width={18}
        height={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  </div>

</div>
      {/* EMAIL FIELD */}
      <label className="mb-2 text-black">Email Address</label>
      <div className="relative">
        <Image
          src="/images/auth/email-icon.png"
          alt="Email"
          width={18}
          height={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
    </div>

        {/* CONTINUE CTA */}
        <Link
          href="/auth/employer/create-password"
          className="block w-full mt-6 text-center py-3 rounded-md bg-[#E87449] hover:bg-[#E87449] transition font-semibold"
        >
          Continue
        </Link>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[#E87449] font-medium hover:underline"
          >
            Login
          </Link>
        </p>

        {/* DIVIDER */}
<div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-px bg-gray-300" />
  <span className="text-sm text-gray-500">Or</span>
  <div className="flex-1 h-px bg-gray-300" />
</div>

{/* SOCIAL LOGIN */}
<div className="space-y-3">
  {/* Google */}
  <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition">
    <Image
      src="/images/auth/google-icon.png"
      alt="Google"
      width={20}
      height={20}
    />
    <span className="text-sm font-medium">
      Sign up with Google
    </span>
  </button>

  {/* LinkedIn */}
  <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition">
    <Image
      src="/images/auth/linkedin-icon.png"
      alt="LinkedIn"
      width={20}
      height={20}
    />
    <span className="text-sm font-medium">
      Sign up with LinkedIn
    </span>
  </button>
</div>
    </div>
    </main>
  );
}
