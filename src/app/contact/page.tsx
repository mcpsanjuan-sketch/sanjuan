export default function ContactPage() {
  return (
    <>
<a
        href="home"
        className="absolute top-6 left-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        <span className="mr-2">←</span> Back to Home
      </a>

      <div className="text-center py-10"></div>
    
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-14 text-center text-white shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">Contact Me</h1>
        <p className="mt-3 text-lg opacity-90">
          Get in touch — I’d love to hear from you! 💬
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="p-8 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Reach Me At</h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <strong>christsanjuan@gmail.com</strong>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <strong>0912923291</strong>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <strong>Ma.Christ SanJuan</strong>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <strong>Naga City, Philippines</strong>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">🕒</span>
              <span>Available: Mon–Sat (8AM–6PM)</span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-gray-50 rounded-xl shadow-xl border hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Send me a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name..."
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email..."
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg shadow-sm h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center pb-10 text-gray-600">
        <p>Thank you for reaching out ❤️</p>
        <p className="text-sm">I usually respond within 24 hours.</p>
      </div>
    </>
  );
}
