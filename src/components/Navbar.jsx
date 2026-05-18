import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // NAV ITEMS
  const navItems = [
    "home",
    "about",
    "stats",
    "skills",
    "projects",
    "contact",
  ];

  // SCROLL EFFECT + ACTIVE SECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((id) =>
        document.getElementById(id)
      );

      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.id);
        }
      });
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 dark:bg-[#0b0b0d]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            className="group flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-red-500/20 transition-transform duration-300 group-hover:scale-105">
              KB
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
                Keshave Basnet
              </span>

              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 px-3 py-2 rounded-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300
                  ${
                    activeSection === item
                      ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                  }`}
                >
                  {item}

                  {activeSection === item && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-500"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-700 dark:text-gray-200 hover:scale-105 hover:rotate-6 transition-all duration-300"
            >
              <i
                className={`text-lg transition-all duration-300 ${
                  darkMode ? "ri-sun-line" : "ri-moon-line"
                }`}
              ></i>
            </button>

            {/* RESUME BUTTON */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
            >
              Resume

              <i className="ri-arrow-right-up-line transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
            </a>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-2">
            
            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all duration-300"
            >
              <i
                className={`text-lg ${
                  darkMode ? "ri-sun-line" : "ri-moon-line"
                }`}
              ></i>
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-800 dark:text-white transition-all duration-300"
            >
              <i
                className={`text-xl transition-all duration-300 ${
                  menuOpen ? "ri-close-line rotate-90" : "ri-menu-line"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden
        ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm z-50 bg-white dark:bg-[#0f0f11] border-l border-black/5 dark:border-white/10 shadow-2xl transition-transform duration-300 md:hidden
        ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-black/5 dark:border-white/10">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-semibold text-sm">
              KB
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                Keshave Basnet
              </h2>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-white"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* LINKS */}
        <ul className="flex flex-col px-6 py-8 gap-2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl capitalize transition-all duration-300
                ${
                  activeSection === item
                    ? "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                }`}
              >
                {item}

                <i className="ri-arrow-right-up-line text-sm"></i>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE CTA */}
        <div className="px-6 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20"
          >
            Resume

            <i className="ri-download-line transition-transform duration-300 group-hover:translate-y-[2px]"></i>
          </a>
        </div>
      </div>
    </>
  );
}