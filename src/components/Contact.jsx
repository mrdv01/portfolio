import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g7amhzd",
        "template_6c7mp9n",
        formRef.current,
        "lLC8VWf4tEL6pszpm"
      )
      .then(
        () => {
          setLoading(false);
          setDone(true);
          setTimeout(() => setDone(false), 4000);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Please try again later 😔");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Let’s Connect 💬
        </h2>
        <p className="text-gray-600 mb-12">
          Have an idea, collaboration, or just want to say hi? Fill out the form
          below or reach me directly!
        </p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium text-white transition
                ${
                  loading
                    ? "bg-blue-400/60 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {done && (
              <p className="text-green-600 font-medium">
                Message sent successfully! I’ll reply soon.
              </p>
            )}
          </div>
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-12 gap-8 text-gray-700">
          <a
            href="mailto:dv87178@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Mail size={22} /> Email
          </a>
          <a
            href="https://linkedin.com/in/deepak-verma-70665a226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://github.com/mrdv01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Github size={22} /> GitHub
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Deepak Verma. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
