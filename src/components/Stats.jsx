export default function Stats() {
  return (
    <section id = "stats" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-red-600">5+</h3>
            <p className="text-gray-600 mt-2 text-sm">Projects Built</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-red-600">500+</h3>
            <p className="text-gray-600 mt-2 text-sm">Hours Coding</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-red-600">6+</h3>
            <p className="text-gray-600 mt-2 text-sm">GitHub Repos</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-red-600">Full-Stack</h3>
            <p className="text-gray-600 mt-2 text-sm">Developer</p>
          </div>

        </div>

      </div>
    </section>
  );
}