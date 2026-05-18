function Skills() {

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: "ri-layout-masonry-line",
      desc: "Building responsive interfaces, dashboards, and modern user experiences.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",   
      ]   
    },

    {
      title: "Backend Systems",
      icon: "ri-server-line",
      desc: "Developing backend workflows, APIs, authentication, and business logic.",
      skills: [
        "Python",
        "Django",
        "Node.js",
        
        
      ],
    },

    {
      title: "Database & Operations",
      icon: "ri-database-2-line",
      desc: "Managing structured operational data and scalable workflow systems.",
      skills: [
        "SQLite",
        "Inventory Logic",
        "ERP Workflows",
      ],
    },

    {
      title: "Tools & Development",
      icon: "ri-code-s-slash-line",
      desc: "Version control, deployment workflows, and modern development tooling.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Responsive Design",
        "System Architecture",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-red-50/40 dark:from-[#0b0b0d] dark:to-[#121215] scroll-mt-24"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold text-red-500 mb-5">
            Engineering Stack
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
            Technologies used to build
            <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mt-2">
              operational software systems
            </span>
          </h2>

          <p className="mt-7 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Focused on modern frontend interfaces, scalable backend workflows,
            structured database systems, and business-oriented application development.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-7">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-8 md:p-9 shadow-xl hover:-translate-y-1 hover:border-red-400/30 transition-all duration-300"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-orange-400/[0.03] opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-start gap-5 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <i className={category.icon}></i>
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                      {category.desc}
                    </p>

                  </div>

                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-sm text-gray-700 dark:text-gray-300 hover:border-red-400/40 hover:text-red-500 transition-all duration-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>
        

      </div>

    </section>
  );
}

export default Skills;