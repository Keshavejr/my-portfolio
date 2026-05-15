export default function BrainMRI() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Brain MRI Tumor Detection
      </h1>

      <p className="text-gray-700 mb-10 leading-relaxed">
        A machine learning project that detects brain tumors
        from MRI scans using TensorFlow and CNN models.
      </p>

      <div className="space-y-8">

        <img
          src="/brain-home.png"
          alt="Home"
          className="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
        />

        <img
          src="/brain-upload.png"
          alt="Upload"
          className="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
        />

        <img
          src="/brain-result.png"
          alt="Result"
          className="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
        />

      </div>

    </div>
  )
}