function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },

    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Python", "Django", "Node.js"],
    },

    {
      title: "Database & Tools",
      icon: "🗄️",
      skills: ["SQLite", "db.sqlite3", "GitHub"],
    },

    {
      title: "Cybersecurity & AI",
      icon: "🔐",
      skills: ["Cybersecurity", "TensorFlow", "Keras", "System Security"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white to-red-50 dark:from-[#0f0f11] dark:to-[#16161a] scroll-mt-24 relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-red-300 dark:bg-red-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-red-500 font-semibold mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Technologies & Expertise
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Tools, frameworks, and technologies I use to build scalable
            applications and secure systems.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="group relative overflow-hidden bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 dark:hover:border-red-500/20 transition duration-300"
            >

              {/* CARD HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-400/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-orange-400/5 transition duration-300"></div>

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center gap-4 mb-6">

                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Core technologies & tools
                    </p>

                  </div>

                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium border border-red-100 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 hover:scale-105 transition duration-300 cursor-default"
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