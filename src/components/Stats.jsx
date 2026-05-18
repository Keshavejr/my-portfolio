export default function Stats() {

  const stats = [
    {
      value: "6+",
      title: "Systems Built",
      icon: "ri-code-box-line",
      desc: "Full stack applications focused on real business workflows and operational systems.",
    },

    {
      value: "ERP",
      title: "Business Operations",
      icon: "ri-building-2-line",
      desc: "Inventory management, billing systems, booking workflows, and automation logic.",
    },

    {
      value: "Python, React + Django",
      title: "Full Stack Architecture",
      icon: "ri-stack-line",
      desc: "Frontend interfaces integrated with scalable backend workflows and APIs.",
    },

    {
      value: "SQL",
      title: "Database Systems",
      icon: "ri-database-2-line",
      desc: "Relational database design optimized for structured operational data and workflows.",
    },
  ];

  return (
    <section
      id="stats"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-red-50/40 to-white dark:from-[#121215] dark:to-[#0b0b0d] scroll-mt-24"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold text-red-500 mb-5">
            Highlights
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
            Engineering focused on
            <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mt-2">
              real operational systems
            </span>
          </h2>

          <p className="mt-7 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Building practical software solutions with scalable workflows,
            structured backend systems, and business-oriented architecture.
          </p>

        </div>

        {/* STATS GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="group relative rounded-[30px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-8 shadow-xl hover:-translate-y-1 hover:border-red-400/30 transition-all duration-300 overflow-hidden"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-orange-400/[0.03] opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10">

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-8 group-hover:scale-105 transition-transform duration-300">
                  <i className={stat.icon}></i>
                </div>

                {/* VALUE */}
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </h3>

                {/* TITLE */}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">
                  {stat.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mt-4">
                  {stat.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}