import symbol from "../assets/photo2.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 bg-white dark:bg-[#0b0b0d]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/40 to-orange-50/30 dark:from-[#0b0b0d] dark:via-[#111114] dark:to-[#17171b]"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center lg:text-left">

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm mb-7">

            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>

              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Available for internships & freelance work
            </p>

          </div>

          {/* ROLE */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
            
            <img
              src={symbol}
              alt="symbol"
              className="w-9 h-9 opacity-90"
            />

            <p className="uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold text-red-500">
              Full Stack Developer
            </p>

          </div>

          {/* MAIN TITLE */}
          <div className="space-y-5">
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
              Building real-world
              <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mt-2">
                business systems
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Full Stack Developer creating AI tools, secure applications, and real-world systems using React, Django, and modern technologies.
            </p>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-7 text-gray-500 dark:text-gray-400 leading-relaxed text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Focused on solving operational problems with practical software —
            from inventory tracking and GST billing to dashboard systems and
            business automation workflows.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">

            {[
              {
                value: "4+",
                label: "Systems Built",
              },

              {
                value: "Full Stack",
                label: "React + Django",
              },

              {
                value: "ERP",
                label: "Workflow Logic",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="px-5 py-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl min-w-[120px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {item.label}
                </p>
              </div>

            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            {/* PROJECTS */}
            <a
              href="#projects"
              className="group bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 flex items-center justify-center gap-2"
            >
              Explore Projects

              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>

            {/* RESUME */}
           <a
            href="#contact"
            className="group border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl text-gray-800 dark:text-white px-7 py-3.5 rounded-2xl hover:border-red-400 hover:bg-red-50 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get In Touch

            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>

          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-9 justify-center lg:justify-start">

            {[
              {
                icon: "ri-github-fill",
                link: "https://github.com/Keshavejr",
              },

              {
                icon: "ri-linkedin-box-fill",
                link: "https://www.linkedin.com/in/keshave-basnet-b12ab3289",
              },

              {
                icon: "ri-whatsapp-fill",
                link: "https://wa.me/97517564310",
              },
            ].map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-gray-700 dark:text-white hover:-translate-y-1 hover:border-red-400 hover:text-red-500 transition-all duration-300"
              >
                <i className={`${item.icon} text-xl`}></i>
              </a>

            ))}

          </div>

          {/* SMALL TEXT */}
          <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
            Based in Bhutan • Open to remote opportunities worldwide
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* CONTAINER */}
          <div className="relative">

            {/* OUTER GLOW */}
            <div className="absolute -inset-5 bg-gradient-to-tr from-red-500/20 to-orange-400/20 blur-3xl rounded-[40px]"></div>

            {/* IMAGE CARD */}
            <div className="relative rounded-[32px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-3 shadow-2xl">

              <img
                src="/photo3.jpeg"
                alt="Keshave"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] rounded-[24px] object-cover"
              />
              

              {/* FLOATING CARD */}
             <div className="
absolute
-bottom-3
left-1/2
-translate-x-1/2
sm:-bottom-6
sm:-left-6
sm:translate-x-0
bg-white dark:bg-[#141418]
border border-black/5 dark:border-white/10
rounded-2xl
px-3 py-2.5
sm:px-4 sm:py-3
shadow-xl
backdrop-blur-xl
w-[82%]
sm:w-auto
max-w-[250px]
sm:max-w-none
">

  <div className="flex items-center gap-3">

    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-lg sm:text-xl flex-shrink-0">
      <i className="ri-code-box-line"></i>
    </div>

    <div>

      <h4 className="text-xs sm:text-base font-semibold text-gray-900 dark:text-white">
        Business Systems
      </h4>

      <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400">
        ERP • Billing • Inventory
      </p>

    </div>
    </div>

  </div>
  

              

              {/* FLOATING TECH */}
              <div className="absolute -top-4 right-2 sm:-top-5 sm:-right-5 px-4 py-3 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#141418] shadow-xl backdrop-blur-xl">

                <div className="flex items-center gap-3">
                  
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      React + Django
                    </h4>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Full Stack Workflow
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