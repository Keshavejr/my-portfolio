export default function Stats() {

  const stats = [
    {
      value: "5+",
      title: "Projects Built",
      icon: "💻",
      desc: "Full-stack and real-world applications",
    },

    {
      value: "ERP",
      title: "Business Systems",
      icon: "⚙️",
      desc: "Inventory & workflow automation",
    },

    {
      value: "6+",
      title: "GitHub Repositories",
      icon: "🚀",
      desc: "Consistent development & learning",
    },

    {
      value: "Security",
      title: "Cybersecurity Focus",
      icon: "🔐",
      desc: "Learning secure system design",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-red-50 to-white dark:from-[#16161a] dark:to-[#0f0f11] scroll-mt-24 relative overflow-hidden"
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
            Highlights
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Experience & Focus
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Focused on building scalable applications, ERP systems,
            and continuously improving development and cybersecurity skills.
          </p>

        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="group bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 dark:hover:border-red-500/20 transition duration-300 text-center relative overflow-hidden"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-400/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-orange-400/5 transition duration-300"></div>

              <div className="relative z-10">

                {/* ICON */}
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* VALUE */}
                <h3 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </h3>

                {/* TITLE */}
                <p className="text-gray-900 dark:text-white font-semibold mt-3 text-lg">
                  {stat.title}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-500 dark:text-gray-300 mt-3 text-sm leading-relaxed">
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