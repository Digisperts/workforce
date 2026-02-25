import Link from "next/link";

export default function NewPassword() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-8 max-w-md mx-auto">

      <Link href="/auth/verify-code" className="text-teal-400 text-2xl">
        ←
      </Link>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 my-6">
        <span className="w-3 h-3 bg-gray-400 rounded-full" />
        <span className="w-3 h-3 bg-gray-400 rounded-full" />
        <span className="w-3 h-3 bg-teal-500 rounded-full" />
      </div>

      <h1 className="text-3xl font-bold mb-2">New Password</h1>
      <p className="text-gray-400 mb-8">
        Create a new password to access your account
      </p>

      <label className="mb-2 text-gray-300">Password</label>
      <input
        type="password"
        className="mb-6 p-4 rounded-md bg-gray-200 text-black w-full"
      />

      <label className="mb-2 text-gray-300">Confirm Password</label>
      <input
        type="password"
        className="mb-6 p-4 rounded-md bg-gray-200 text-black w-full"
      />

      <button className="bg-teal-600 py-4 rounded-md font-semibold w-full">
        Verify Code
      </button>

    </section>
  );
}
