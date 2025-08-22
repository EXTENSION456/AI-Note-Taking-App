import Image from "next/image";
import Link from "next/link";
import OAuth from "./oauth";
import LoginForm from "@/components/form/loginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-4 sm:px-6">
      <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
          Sign in to continue to <span className="font-semibold">AI Notes</span>
        </p>

        {/* login form */}
        <LoginForm />

        <div className="flex items-center my-5 sm:my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="px-3 sm:px-4 text-gray-300 text-xs sm:text-sm">
            or continue with
          </span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* OAuth buttons */}
        <OAuth />

        <p className="text-center text-gray-300 text-xs sm:text-sm mt-5 sm:mt-6">
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
