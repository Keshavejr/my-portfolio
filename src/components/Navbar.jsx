import { useEffect, useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // SCROLL EFFECT
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // DARK MODE
  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

    } else {

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");

    }

  }, [darkMode]);

  return (
    <>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300
        ${
          scrolled
            ? "bg-white/90 dark:bg-[#0f0f11]/90 shadow-md border-gray-200 dark:border-white/10 backdrop-blur-md"
            : "bg-white/80 dark:bg-[#0f0f11]/80 border-transparent backdrop-blur-md"
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <a href="#home">

            <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Keshave Basnet
            </h1>

          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">

            {[
              "Home",
              "About",
              "Stats",
              "Skills",
              "Projects",
              "Contact",
            ].map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-red-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:scale-105 transition duration-300"
            >

              <i className={darkMode ? "ri-sun-line" : "ri-moon-line"}></i>

            </button>

            {/* HIRE BUTTON */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition duration-300"
            >

              Hire Me

              <i className="ri-arrow-right-line"></i>

            </a>

          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-3">

            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-200 transition duration-300"
            >

              <i className={darkMode ? "ri-sun-line" : "ri-moon-line"}></i>

            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800 dark:text-white transition duration-300"
            >

              <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>

            </button>

          </div>

        </div>

      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[78%] max-w-sm z-50 bg-white dark:bg-[#121214] shadow-2xl border-l border-gray-100 dark:border-white/10 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* TOP */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/10">

          <h2 className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-white"
          >

            <i className="ri-close-line"></i>

          </button>

        </div>

        {/* LINKS */}
        <ul className="flex flex-col px-6 py-8 gap-6 text-gray-700 dark:text-gray-200 font-medium text-lg">

          {[
            "Home",
            "About",
            "Stats",
            "Skills",
            "Projects",
            "Contact",
          ].map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between hover:text-red-500 transition duration-300 py-2"
              >

                {item}

                <i className="ri-arrow-right-up-line text-sm"></i>

              </a>

            </li>

          ))}

        </ul>

        {/* MOBILE BUTTON */}
        <div className="px-6 mt-4">

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition duration-300 shadow-lg"
          >

            Hire Me

            <i className="ri-arrow-right-line"></i>

          </a>

        </div>

      </div>

    </>
  );
}