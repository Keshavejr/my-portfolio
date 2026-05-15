import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Contact() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(
      "service_yo015x5",
      "template_sr8hjtu",
      e.target,
      "RU8TMZY8XJkzAPvuY"
    )
    .then(() => {

      toast.success("Message sent successfully!");

      e.target.reset();

    })
    .catch((error) => {

      console.error(error);

      toast.error("Failed to send message");

    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 scroll-mt-24">
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to reach out if you want to collaborate, have a project in mind, or just want to connect.
        </p>

        {/* ✅ ADD onSubmit HERE */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"   // ✅ IMPORTANT
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"  // ✅ IMPORTANT
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name="message"  // ✅ IMPORTANT
              placeholder="Your message..."
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-700 text-white py-3 rounded-md font-medium hover:bg-red-800 transition disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        </form>

        <div className="mt-10 text-sm text-gray-600">
          <p>Email: Keshaveneymar11@email.com</p>
          <p>Location: Thimphu, Bhutan</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;