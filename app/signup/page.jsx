import Image from "next/image";
import Link from "next/link";
import OAuth from "../login/oauth";
import SignupForm from "@/components/form/signupForm";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-3 sm:mb-4">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
          Sign up to join <span className="font-semibold">AI Notes</span>
        </p>

        {/* signup form */}
        <SignupForm />

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="px-3 sm:px-4 text-gray-300 text-xs sm:text-sm">
            or sign up with
          </span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* OAuth buttons */}
        <OAuth />

        <p className="text-center text-gray-300 text-xs sm:text-sm mt-5 sm:mt-6">
          Already have an account?{" "}
          <Link
            href="login"
            className="text-white font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
