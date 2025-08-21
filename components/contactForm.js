export default function ContactForm() {
  return (
    <section
      id="contact"
      className="mt-28 w-full max-w-3xl p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20"
    >
      <h3 className="text-3xl font-extrabold text-center mb-8 text-white">
        Contact Us
      </h3>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
        ></textarea>
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition">
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
