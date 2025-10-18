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
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f3d1ff] to-[#ffffff] text-transparent bg-clip-text">
          Let’s Connect 💬
        </h2>
        <p className="text-white/80 mb-12">
          Have an idea, collaboration, or just want to say hi? Fill out the form
          below or reach me directly!
        </p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-[0_0_25px_rgba(157,78,221,0.6)] transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-[#9d4edd]/50" : "bg-[#9d4edd]/80 hover:bg-[#9d4edd]"
            } px-6 py-2 rounded-lg font-medium text-white transition-all`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {done && (
            <p className="text-green-400 font-medium mt-3">
              Message sent successfully! I’ll reply soon.
            </p>
          )}
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-12 gap-8">
          <a
            href="mailto:dv87178@gmail.com"
            className="flex items-center gap-2 hover:text-[#c77dff] transition"
          >
            <Mail size={22} /> Email
          </a>
          <a
            href="https://linkedin.com/in/deepak-verma-70665a226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#c77dff] transition"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://github.com/mrdv01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#c77dff] transition"
          >
            <Github size={22} /> GitHub
          </a>
        </div>

        <p className="text-sm text-white/60 mt-10">
          © {new Date().getFullYear()} Deepak Verma. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
