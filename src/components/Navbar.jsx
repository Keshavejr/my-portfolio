import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a href="#home">
          <h1 className="text-lg sm:text-xl font-bold text-red-700">
            Keshave Basnet
          </h1>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li><a href="#home" className="hover:text-red-700 transition">Home</a></li>

          <li><a href="#about" className="hover:text-red-700 transition">About</a></li>

          <li><a href="#stats" className="hover:text-red-700 transition">Stats</a></li>

          <li><a href="#skills" className="hover:text-red-700 transition">Skills</a></li>

          <li><a href="#projects" className="hover:text-red-700 transition">Projects</a></li>

          <li><a href="#contact" className="hover:text-red-700 transition">Contact</a></li>

        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Hire Me
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-red-700"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">

          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#stats" onClick={() => setMenuOpen(false)}>
                Stats
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <a
              href="#contact"
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}