import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      title: "🔧 Tyre Repair & Service ERP",
      description:
        "A full-stack ERP system built for a tyre business to manage inventory, staff, and operations. Includes an integrated customer booking system where staff can accept or cancel appointments directly from the dashboard.",
      tech: ["Python", "Django", "Tailwind CSS"],
      featured: true,
      internal: true,
      path: "/tyre-erp",
      github: "https://github.com/Keshavejr/tyre-inventory-erp.git",
    },

    {
      title: "📚 Library Management System",
      description:
        "A web-based platform for managing book records, member registrations, and borrowing history with a built-in reservation system.",
      tech: ["Python", "Django", "Bootstrap"],
      live: "https://library-management-system-i21b.onrender.com",
      github: "https://github.com/Keshavejr/library-management-system.git",
    },

    {
      title: "🧠 Brain MRI Tumor Detection",
      description:
        "A machine learning project that detects brain tumors from MRI scans using a trained classification model with a simple upload interface.",
      tech: ["Python", "TensorFlow", "Keras"],
      internal: true,
      path: "/brain-mri",
      github: "https://github.com/Keshavejr/brain-tumor-ai.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-red-50 dark:from-[#0f0f11] dark:to-[#16161a] scroll-mt-24 relative overflow-hidden"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-red-300 dark:bg-red-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-red-500 font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Real-world systems and applications focused on business workflows,
            automation, and scalable full-stack development.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 dark:hover:border-red-500/20 transition duration-300 ${
                project.featured ? "lg:col-span-2 p-8" : "p-6"
              }`}
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-400/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-orange-400/5 transition duration-300"></div>

              <div className="relative z-10">

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-xs font-medium border border-red-100 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition duration-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4">

                  {/* INTERNAL PROJECT */}
                  {project.internal ? (

                    <Link
                      to={project.path}
                      state={{ scrollY: window.scrollY }}
                      className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
                    >
                      View Project
                    </Link>

                  ) : (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
                    >
                      Live Demo
                    </a>

                  )}

                  {/* GITHUB BUTTON */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition duration-300"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;