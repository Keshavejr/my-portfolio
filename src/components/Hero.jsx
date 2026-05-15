import symbol from "../assets/photo2.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-20 md:pt-0"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50 z-0"></div>

      {/* ANGLED SHAPE */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-red-100 clip-hero z-0"></div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

      {/* GLOW */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30 z-0"></div>

      {/* CONTENT */}
<div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12">
        {/* LEFT */}
        <div className="max-w-lg space-y-5 text-center md:text-left">

          {/* AVAILABILITY DOT + HELLO */}
          <div className="flex items-center justify-center md:justify-start gap-3">

            <img
              src={symbol}
              alt="symbol"
              className="w-10 h-10 hover:rotate-6 hover:scale-110 transition duration-300"
            />

            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            </span>

            <p className="text-gray-500 tracking-wide">
              · Hello, I'm
            </p>

          </div>

          {/* NAME */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Keshave
          </h1>

          {/* ROLE */}
          <h2 className="text-lg md:text-xl text-gray-700 font-medium">
            Python & React Developer
          </h2>

          {/* DESC */}
          <p className="text-gray-600 leading-relaxed">
            I build scalable applications and solve real-world problems with clean and efficient code.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="mailto:keshaveneymar11@gmail.com"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
            >
              Hire Me
            </a>

          </div>

          {/* TRUST TEXT */}
          <p className="text-sm text-gray-400">
            Open to freelance & full-time opportunities
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-4 justify-center md:justify-start">

            <a
              href="https://github.com/Keshavejr"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:text-black transition"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/keshave-basnet-b12ab3289"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:text-blue-600 transition"
            >
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>

            <a
              href="https://wa.me/97517564310"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:text-green-600 transition"
            >
              <i className="ri-whatsapp-fill text-xl"></i>
            </a>

          </div>

          {/* TAGS */}
          <div className="flex gap-3 pt-4 flex-wrap justify-center md:justify-start">

            <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm text-sm border border-transparent hover:shadow-md hover:text-red-700 hover:border-red-200 transition cursor-default">
              💻 Web Dev
            </span>

            <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm text-sm border border-transparent hover:shadow-md hover:text-red-700 hover:border-red-200 transition cursor-default">
              🔐 Security
            </span>

            <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm text-sm border border-transparent hover:shadow-md hover:text-red-700 hover:border-red-200 transition cursor-default">
              ⚙️ Backend
            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center gap-5">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-red-500 to-orange-400 opacity-60 blur-sm"></div>

            <div className="p-1 bg-gradient-to-tr from-red-500 to-orange-400 rounded-2xl relative">

              <img
                src="/photo3.jpeg"
                alt="Keshave"
                className="w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-3xl shadow-xl hover:scale-105 transition duration-300"              />

            </div>

          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full inline-block"></span>
            📍 Based in Bhutan BT
          </div>

          {/* STACK BADGES */}
          <div className="flex gap-2 flex-wrap justify-center">

            {["Python", "React", "Security", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:border-red-300 hover:text-red-700 transition duration-200"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}