function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-red-50/40 dark:from-[#0b0b0d] dark:to-[#121215] scroll-mt-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-400/10 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold text-red-500 mb-5">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
            Building software that powers
            <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mt-2">
              real business operations
            </span>
          </h2>

          <p className="mt-7 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Focused on developing practical business systems — from ERP workflows
            and inventory management to billing platforms and operational dashboards.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* MAIN CARD */}
            <div className="rounded-[32px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-xl">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-500/20">
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Who I Am
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Full Stack Developer • ERP & Business Systems
                  </p>
                </div>

              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-[16px]">

                <p>
                  I'm{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Keshave Basnet
                  </span>
                  , a final-year BCA student focused on building real-world
                  business software using React, Django, and modern backend systems.
                </p>

                <p>
                  My primary interest lies in creating systems that solve
                  operational problems — including inventory tracking,
                  ERP workflows, billing systems, booking platforms,
                  and business automation tools.
                </p>

                <p>
                  Rather than building tutorial-style projects, I enjoy developing
                  applications that simulate real business environments with
                  scalable workflows, database relationships, and practical system logic.
                </p>

              </div>

            </div>

            {/* EXPERIENCE CARD */}
            <div className="rounded-[32px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-8 shadow-xl">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl">
                  <i className="ri-building-2-line"></i>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Current Work
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    ERP • Inventory • Billing Systems
                  </p>
                </div>

              </div>

              <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed">

                <p>
                  I'm currently building a real-world ERP system for a tyre
                  business focused on inventory management, supplier workflows,
                  customer booking systems, invoice generation, and operational tracking.
                </p>

                <p>
                  The system is being developed using Django, Python,
                  Tailwind CSS, and relational database workflows
                  designed for scalable business operations.
                </p>

              </div>

              {/* MINI STATS */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  {
                    title: "Inventory Logic",
                    icon: "ri-database-2-line",
                  },

                  {
                    title: "Invoice Systems",
                    icon: "ri-file-list-3-line",
                  },

                  {
                    title: "ERP Workflows",
                    icon: "ri-flow-chart",
                  },

                  {
                    title: "Dashboard Systems",
                    icon: "ri-layout-grid-line",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-4"
                  >

                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#18181b] flex items-center justify-center text-red-500 text-lg mb-4 border border-black/5 dark:border-white/10">
                      <i className={item.icon}></i>
                    </div>

                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h4>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* SKILLS GRID */}
            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: "ri-window-line",
                  title: "Frontend Systems",
                  desc: "Building responsive interfaces and dashboard experiences using React and modern UI workflows.",
                },

                {
                  icon: "ri-server-line",
                  title: "Backend Architecture",
                  desc: "Developing scalable backend logic, APIs, authentication systems, and database relationships.",
                },

                {
                  icon: "ri-settings-3-line",
                  title: "ERP Operations",
                  desc: "Creating inventory systems, booking workflows, invoice logic, and business automation tools.",
                },

              
              ].map((item) => (

                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-7 shadow-lg hover:-translate-y-1 hover:border-red-400/40 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                    <i className={item.icon}></i>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

            {/* PHILOSOPHY CARD */}
            <div className="rounded-[32px] bg-gradient-to-r from-red-600 to-orange-500 p-[1px] shadow-xl">

              <div className="rounded-[32px] bg-white dark:bg-[#141418] p-10">

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl shrink-0">
                    <i className="ri-lightbulb-flash-line"></i>
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
                      Development Philosophy
                    </h3>

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                      I enjoy building software that feels practical,
                      scalable, and useful in real operational environments —
                      focusing not just on UI design, but on workflows,
                      business logic, and long-term usability.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;