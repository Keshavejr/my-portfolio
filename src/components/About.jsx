function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-red-50 dark:from-[#0f0f11] dark:to-[#16161a] scroll-mt-24 relative overflow-hidden"
    >

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-300 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-red-500 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Passionate About Building
            <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              {" "}Secure & Scalable Systems
            </span>
          </h2>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {/* CARD 1 */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-sm">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold text-gray-800 dark:text-white">
                  Keshave Basnet
                </span>{" "}
                — a final-year BCA student at Assam Down Town University with a
                strong interest in cybersecurity, backend systems, and
                full-stack web development.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                I completed my higher secondary education at Yangchenphug Higher
                Secondary School in Thimphu, Bhutan, and have been deeply
                interested in technology and system design ever since.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-sm">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Current Focus
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently building a real-world ERP system for a tyre
                business using Django, React, and Tailwind CSS — focused on
                inventory workflows, booking systems, customer management,
                and scalable operations.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Alongside development, I’m actively learning cybersecurity and
                secure system practices to build applications that are both
                efficient and secure by design.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* SKILL CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: "💻",
                  title: "Full-Stack Development",
                  desc: "Building scalable frontend and backend applications with modern technologies.",
                },

                {
                  icon: "🔐",
                  title: "Cybersecurity",
                  desc: "Exploring secure system design, ethical hacking, and modern security practices.",
                },

                {
                  icon: "⚙️",
                  title: "ERP Systems",
                  desc: "Designing business workflow systems focused on operations and automation.",
                },

                {
                  icon: "🚀",
                  title: "Continuous Learning",
                  desc: "Constantly improving through projects, experimentation, and real-world problem solving.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:border-red-400 transition duration-300"
                >

                  <div className="text-4xl mb-4">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

            {/* QUOTE */}
            <div className="rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 p-[1px]">

              <div className="rounded-3xl bg-white dark:bg-[#18181b] p-8">

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic">
                  “I enjoy building systems that solve practical problems while
                  continuously improving my skills in development and
                  cybersecurity.”
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;