import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white scroll-mt-24">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ERP PROJECT (FEATURED FIRST) */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              🔧 Tyre Repair & Service ERP
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              A full-stack ERP system built for a tyre business to manage inventory, staff, and operations. Includes an integrated customer booking system where staff can accept or cancel appointments directly from the dashboard.
            </p>

            <p className="text-xs text-gray-500">
              Python • Django • Tailwind CSS
            </p>

            <div className="flex gap-4 mt-4">
              <Link
              to="/tyre-erp"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition"
            >
              View Project
            </Link>
              <a href="https://github.com/Keshavejr/tyre-inventory-erp.git" className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
                GitHub
              </a>
            </div>
          </div>

          {/* LIBRARY PROJECT */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              📚 Library Management System
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              A web-based platform for managing book records, member registrations, and borrowing history with a built-in reservation system.
            </p>

            <p className="text-xs text-gray-500">
              Python • Django • Bootstrap
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://library-management-system-i21b.onrender.com" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
                Live Demo
              </a>
              <a href="https://github.com/Keshavejr/library-management-system.git" className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
                GitHub
              </a>
            </div>
          </div>

          {/* MRI PROJECT */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              🧠 Brain MRI Tumor Detection
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              A machine learning project that detects brain tumors from MRI scans using a trained classification model with a simple upload interface.
            </p>

            <p className="text-xs text-gray-500">
              Python • TensorFlow • Keras
            </p>

            <div className="flex gap-4 mt-4">
              <a href="/brain-mri" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
                View Project
              </a>
              <a href="https://github.com/Keshavejr/brain-tumor-ai.git" className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;