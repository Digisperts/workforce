import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-white text-white px-6 py-8 flex flex-col justify-center max-w-md mx-auto">

      {/* Account toggle */}
      <div className="flex bg-gray-200 rounded-xl overflow-hidden mb-8">
        <button className="flex-1 bg-gray-700 text-white py-3">
          Candidate
        </button>
        <button className="flex-1 text-gray-700 py-3">
          Employer
        </button>
      </div>

      <h1 className="text-3xl font-bold text-black mb-2">Sign In</h1>
      <p className="text-gray-400 mb-8">
        Enter your information to Sign in to your account
      </p>

      {/* Email */}
      <label className="mb-2 text-black">Email Address</label>
      <input
        placeholder="Your email address"
        className="mb-6 p-4 rounded-md bg-gray-200 text-black w-full"
      />

      {/* Password */}
      <label className="mb-2 text-black">Password</label>
      <input
        type="password"
        placeholder="Your password"
        className="mb-2 p-4 rounded-md bg-gray-200 text-black w-full"
      />

      <div className="flex justify-end mb-4">
        <Link
          href="/auth/employer/forgot-password"
          className="text-[#E87449] text-sm"
        >
          Forgot password?
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <input type="checkbox" />
        <span className="text-gray-800 text-sm">Save Password</span>
      </div>

      <button className="bg-[#E87449] py-4 rounded-md font-semibold mb-6">
        Sign In
      </button>

      <p className="text-left text-black mb-6">
        Don’t have an account?{" "}
        <Link href="/auth/employer/get-started" className="text-[#E87449]">
          Create account
        </Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-gray-400">Or</span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      {/* Google */}
      <button className="flex items-center justify-center gap-3 bg-gray-200 text-black py-4 rounded-md mb-4">
        <Image 
        src="/images/auth/google-icon.png" 
        alt=""
         width={20} 
         height={20} />
        Sign in with Google
      </button>

      {/* LinkedIn */}
      <button className="flex items-center justify-center gap-3 bg-gray-200 text-black py-4 rounded-md">
        <Image 
        src="/images/auth/linkedin-icon.png" 
        alt="" 
        width={20} 
        height={20} />
        Sign in with LinkedIn
      </button>

    </section>
  );
}
