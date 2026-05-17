import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function BrainMRI() {

  const navigate = useNavigate();

  // SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-[#0f0f11] dark:to-[#16161a] transition-colors duration-300 px-4 py-10 md:px-10 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-red-300 dark:bg-red-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={handleBack}
          className="mb-8 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300"
        >
          ← Back
        </button>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Brain MRI Tumor Detection
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-3xl mb-12">
          A machine learning project that detects brain tumors
          from MRI scans using TensorFlow and CNN models with
          an image upload and prediction interface.
        </p>

        {/* IMAGES */}
        <div className="space-y-10">

          <img
            src="/brain-home.png"
            alt="Home"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-lg border border-gray-200 dark:border-white/10"
          />

          <img
            src="/brain-upload.png"
            alt="Upload"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-lg border border-gray-200 dark:border-white/10"
          />

          <img
            src="/brain-result.png"
            alt="Result"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-lg border border-gray-200 dark:border-white/10"
          />

        </div>

      </div>

    </div>

  );
}