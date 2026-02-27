"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black px-6">
      <div className="w-full max-w-md">

        {/* Back Button */}
        <Link
          href="/auth/employer/get-started"
          className="inline-flex items-center justify-center w-10 h-10 rounded-b-md bg-[#E87449] text-white mb-6"
        >
          ←
        </Link>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-[#E87449]" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">
          Create Password
        </h1>

        <p className="text-gray-500 mb-6">
          Create a strong password to secure your account
        </p>

        {/* PASSWORD FIELD */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">
            Password
          </label>

          <div className="relative">
            {/* Lock Icon */}
            <Image
              src="/images/auth/lock-icon.png"
              alt="lock"
              width={18}
              height={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Image
                src="/images/auth/Show-icon.png"
                alt="toggle"
                width={18}
                height={18}
                className="opacity-60"
              />
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">
            Confirm Password
          </label>

          <div className="relative">
            {/* Lock Icon */}
            <Image
              src="/images/auth/lock-icon.png"
              alt="lock"
              width={18}
              height={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Image
                src="/images/auth/Hide-icon.png"
                alt="toggle"
                width={18}
                height={18}
                className="opacity-60"
              />
            </button>
          </div>
        </div>

        {/* TERMS */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" />

          <p className="text-sm">
            I agree to the{" "}
            <Link
              href="/terms-and-conditions"
              className="text-[#E87449] hover:underline"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>

        {/* CTA */}
        <button className="w-full bg-[#E87449] text-white py-3 rounded-md font-semibold hover:bg-[#E87449] transition">
          Create Account
        </button>
      </div>
    </main>
  );
}