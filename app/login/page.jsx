import Image from "next/image";
import Link from "next/link";
import OAuth from "./oauth";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Sign in to continue to <span className="font-semibold">AI Notes</span>
        </p>

        <form className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl text-black bg-white focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl text-black bg-white focus:outline-none"
          />
          <button className="cursor-pointer w-full px-4 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="px-4 text-gray-300 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* OAuth buttons */}
        <OAuth />

        <p className="text-center text-gray-300 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="signup"
            className="text-white font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
