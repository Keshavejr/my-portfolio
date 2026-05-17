import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Contact() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_yo015x5",
        "template_sr8hjtu",
        e.target,
        "RU8TMZY8XJkzAPvuY"
      )

      .then(() => {

        toast.success("Message sent successfully!");

        e.target.reset();

      })

      .catch((error) => {

        console.error(error);

        toast.error("Failed to send message");

      })

      .finally(() => {

        setLoading(false);

      });

  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-red-50 dark:from-[#0f0f11] dark:to-[#16161a] scroll-mt-24 transition-colors duration-500 relative overflow-hidden"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-500 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-red-500 font-semibold mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Work Together
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out for collaborations, freelance work,
            internships, or simply to connect and discuss ideas.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* INFO CARD */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm currently open to freelance opportunities, internships,
                collaborations, and real-world development projects.
              </p>

              {/* CONTACT ITEMS */}
              <div className="space-y-5">

                {/* EMAIL */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-2xl">
                    📧
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      keshaveneymar11@email.com
                    </p>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Location
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Thimphu, Bhutan
                    </p>
                  </div>

                </div>

                {/* AVAILABILITY */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-2xl">
                    💼
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Availability
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Open for projects & opportunities
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="grid grid-cols-2 gap-4">

              {/* GITHUB */}
              <a
                href="https://github.com/Keshavejr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >

                <i className="ri-github-fill text-3xl text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300"></i>

                <p className="mt-2 font-medium text-gray-700 dark:text-gray-200">
                  GitHub
                </p>

              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/keshave-basnet-b12ab3289"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >

                <i className="ri-linkedin-box-fill text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300"></i>

                <p className="mt-2 font-medium text-gray-700 dark:text-gray-200">
                  LinkedIn
                </p>

              </a>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-300">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3.5 rounded-xl font-medium hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 disabled:opacity-70"
              >

                {loading ? "Sending..." : "Send Message"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;