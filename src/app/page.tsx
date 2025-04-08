"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Logo / Title */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Beast<span className="text-yellow-400">11</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          The ultimate fantasy cricket experience. Build your dream team,
          dominate the leaderboard, and win big.
        </p>
      </div>

      {/* Spacer */}
      <div className="my-10" />

      {/* Email Waitlist */}
      <div className="w-full max-w-md">
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md bg-white/10 backdrop-blur text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">
          Be the first to know when we launch.
        </p>
      </div>

      {/* Spacer */}
      <div className="mt-16 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Beast11. All rights reserved..
      </div>
    </main>
  );
}
