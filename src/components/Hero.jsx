import symbol from "../assets/photo2.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-white dark:bg-[#0f0f11]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-orange-50 dark:from-[#0f0f11] dark:via-[#141418] dark:to-[#1b1b20]"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* LIGHT GLOW */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-300 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-14">

        {/* LEFT */}
        <div className="max-w-2xl text-center md:text-left">

          {/* BADGE */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">

            <img
              src={symbol}
              alt="symbol"
              className="w-10 h-10"
            />

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Available for work
              </p>

            </div>

          </div>

          {/* TITLE */}
          <div className="space-y-5">

            <p className="uppercase tracking-[0.3em] text-sm text-red-500 font-semibold">
              Full-Stack Developer
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">

              <span className="text-gray-900 dark:text-white">
                Keshave
              </span>

              <br />

              <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
                Basnet
              </span>

            </h1>

            <h2 className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Building scalable ERP systems, inventory platforms,
              and modern web applications.
            </h2>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Focused on building practical business solutions using React,
            Django, and modern web technologies with clean architecture
            and scalable workflows.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <i className="ri-arrow-right-line"></i>
            </a>

            <a
              href="mailto:keshaveneymar11@gmail.com"
              className="border border-red-500 text-red-600 dark:text-red-400 px-6 py-3 rounded-xl hover:bg-red-600 hover:text-white transition duration-300 flex items-center justify-center"
            >
              Hire Me
            </a>

          </div>

          {/* SMALL TEXT */}
          <p className="mt-5 text-sm text-gray-400 dark:text-gray-500">
            Open to freelance, internships & full-time opportunities
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-7 justify-center md:justify-start">

            {[
              {
                icon: "ri-github-fill",
                link: "https://github.com/Keshavejr",
              },

              {
                icon: "ri-linkedin-box-fill",
                link: "https://www.linkedin.com/in/keshave-basnet-b12ab3289",
              },

              {
                icon: "ri-whatsapp-fill",
                link: "https://wa.me/97517564310",
              },
            ].map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-white hover:-translate-y-1 hover:border-red-400 transition duration-300"
              >
                <i className={`${item.icon} text-xl`}></i>
              </a>

            ))}

          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">

            {[
              "💻 Web Development",
              "🔐 Cybersecurity",
              "⚙️ Backend Systems",
            ].map((tag) => (

              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center gap-5">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-red-500 to-orange-400 opacity-60 blur-md"></div>

            <div className="relative p-1 bg-gradient-to-tr from-red-500 to-orange-400 rounded-3xl">

              <div className="bg-white dark:bg-[#16161a] rounded-3xl p-1">

                <img
                  src="/photo3.jpeg"
                  alt="Keshave"
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[360px] rounded-3xl object-cover shadow-2xl"
                />

              </div>

            </div>

          </div>

          {/* LOCATION */}
          <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 shadow-sm">
            📍 Bhutan • Available Worldwide
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 justify-center">

            {["Python", "React", "Django", "Node.js", "Security"].map(
              (tech) => (

                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>

              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}