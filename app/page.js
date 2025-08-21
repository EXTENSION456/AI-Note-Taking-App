import ContactForm from "@/components/contactForm";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center px-6 text-white">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4 max-w-6xl border-b border-white/20">
        <h1 className="text-2xl font-bold">AI Notes</h1>
        <nav className="flex items-center gap-4">
          <Link
            href="login"
            className="px-4 py-2 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
          <Link
            href="signup"
            className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-20 max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6">
          Full Stack AI Note Taking App
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Capture your thoughts instantly, organize with AI, and access your
          notes anywhere. Productivity meets simplicity.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-2xl border border-white text-white font-medium hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </main>

      {/* Features */}
      <section
        id="features"
        className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl"
      >
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Smart AI Summaries</h3>
          <p className="text-gray-200">
            Turn long notes into concise summaries instantly.
          </p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Cloud Sync</h3>
          <p className="text-gray-200">
            Access your notes on any device, anytime.
          </p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Organized & Searchable</h3>
          <p className="text-gray-200">
            Find the right note in seconds with AI-powered search.
          </p>
        </div>
      </section>

      {/* Contact Us */}
      <ContactForm />

      {/* Footer */}
      <footer className="mt-16 py-6 text-gray-200 text-center">
        <p>© 2025 AI Notes. All rights reserved.</p>
      </footer>
    </div>
  );
}
