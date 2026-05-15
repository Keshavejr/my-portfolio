function Skills() {
  const skills = [
    "Python",
    "Django",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TensorFlow",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white to-red-50 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Skills
        </h2>

        <p className="text-gray-500 mb-12">
          Technologies I work with
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
                className="
                bg-red 50
                p-5
                rounded-xl
                shadow-md
                hover:shadow-lg
                hover:bg-red-50
                transition
              "
            >
              <p className="text-gray-700 font-semibold">
                {skill}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;