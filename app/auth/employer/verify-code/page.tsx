import Link from "next/link";

export default function VerifyCode() {
  return (
    <section className="min-h-screen bg-white
     text-white px-6 py-8 max-w-md mx-auto">

      <Link href="/auth/employer/forgot-password" className="bg-[#E87449] text-white text-6xl">
        ←
      </Link>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 my-6">
        <span className="w-3 h-3 bg-gray-400 rounded-full" />
        <span className="w-3 h-3 bg-[#E87449] rounded-full" />
        <span className="w-3 h-3 bg-gray-400 rounded-full" />
      </div>

      <h1 className="text-3xl font-bold mb-2">Verification code</h1>
      <p className="text-gray-400 mb-8">
        A 6-digits verification code has been sent to Johndoe@gmail.com
      </p>

      {/* Code boxes */}
      <div className="flex gap-3 mb-8 justify-center">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="password"
            maxLength={1}
            className="w-12 h-12 text-center text-xl rounded-md bg-gray-200 text-black"
          />
        ))}
      </div>

      <Link href="/auth/employer/new-password">
        <button className="bg-[#E87449] py-4 rounded-md font-semibold w-full">
          Verify Code
        </button>
      </Link>

    </section>
  );
}
