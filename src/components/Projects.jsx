import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      title: "Tyre Inventory & Service ERP",
      description:
        "A full-stack ERP platform developed for tyre business operations including inventory tracking, supplier management, booking workflows, invoice systems, and customer operations.",
      tech: ["Python", "Django", "JavaScript",  "Tailwind CSS", "SQLite"],
      featured: true,
      internal: true,
      path: "/tyre-erp",
      github: "https://github.com/Keshavejr/tyre-inventory-erp.git",
      icon: "ri-settings-3-line",
    },

    {
      title: "Library Management System",
      description:
        "A structured management platform for handling book inventories, borrowing workflows, reservations, and member operations.",
      tech: ["Python", "Django", "Bootstrap"],
      live: "https://library-management-system-i21b.onrender.com",
      github: "https://github.com/Keshavejr/library-management-system.git",
      icon: "ri-book-2-line",
    },

    {
      title: "Brain Tumor Detection System",
      description:
        "A machine learning application designed to classify MRI brain scans using a trained image classification model with an integrated prediction workflow and image analysis interface.",
      tech: ["Python", "TensorFlow", "Keras", "Django REST Framework",],
      internal: true,
      path: "/brain-mri",
      github: "https://github.com/Keshavejr/brain-tumor-ai.git",
      icon: "ri-brain-line",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-red-50/40 dark:from-[#121215] dark:to-[#0b0b0d] scroll-mt-24"
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
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
            Building software for
            <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mt-2">
              operational business workflows
            </span>
          </h2>

        </div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl shadow-xl hover:-translate-y-2 hover:border-red-400/30 transition-all duration-300 ${
                project.featured
                  ? "lg:col-span-2 p-8 md:p-10"
                  : "p-7"
              }`}
            >

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-orange-400/[0.03] opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 h-full flex flex-col">

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-6 group-hover:scale-110 transition duration-300">
                  <i className={project.icon}></i>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-7">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-8">

                  {project.internal ? (

                    <Link
                      to={project.path}
                      state={{ scrollY: window.scrollY }}
                      className="group/button bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20 flex items-center gap-2"
                    >
                      View Case Study

                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover/button:translate-x-1"></i>
                    </Link>

                  ) : (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20 flex items-center gap-2"
                    >
                      Live Demo

                      <i className="ri-external-link-line transition-transform duration-300 group-hover/button:translate-x-1"></i>
                    </a>

                  )}

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl text-gray-700 dark:text-gray-200 px-5 py-3 rounded-2xl hover:border-red-400/40 hover:bg-gray-50 dark:hover:bg-white/[0.06] transition-all duration-300"
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