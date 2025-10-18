import React from "react";
import { ExternalLink, Github } from "lucide-react"; // icons

const projects = [
  {
    title: "StudyWithAI – AI-Powered Study Assistant",
    description:
      "An intelligent study assistant using Next.js, Supabase, and Gemini AI that helps students learn via AI-driven chat, quizzes, and summaries. Includes RAG-powered tutoring, gamified quizzes, and an AI dashboard.",
    live: "https://study-tutor-2rc5.vercel.app/",
    github: "https://github.com/mrdv01/StudyTutor",
  },
  {
    title: "Kitchen Ledger – AI-Powered Inventory Management System",
    description:
      "A full-stack MERN app for managing shared kitchen expenses and inventory. Integrated OCR with Tesseract.js and AI-based parsing to auto-read receipts, plus real-time dashboards and JWT authentication.",
    live: "https://kitchen-ledger-frontend.vercel.app/",
    github: "https://github.com/mrdv01/kitchen-ledger-frontend",
  },
  {
    title: "VISION-AI – Image Captioning System",
    description:
      "A full-stack image captioning project using React and Streamlit. Fine-tuned BLIP transformer and ViT models on Flickr8k dataset to generate rich image captions with high METEOR and ROUGE-L scores.",
    live: "",
    github:
      "https://github.com/mrdv01/vision-ai-image-captioning-and-text-extraction-",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#f3d1ff] to-[#ffffff] text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group w-full sm:w-80 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20
                         shadow-lg hover:shadow-[0_0_25px_rgba(157,78,221,0.6)]
                         transition-all duration-500 hover:scale-105 hover:border-[#9d4edd]/60"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9d4edd]/40 to-transparent opacity-25 group-hover:opacity-40 transition-opacity"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/80 mb-6 line-clamp-4">
                  {p.description}
                </p>

                <div className="flex items-center justify-between">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#9d4edd]/80 hover:bg-[#9d4edd] px-3 py-2 rounded-lg text-sm font-medium transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-sm font-medium transition"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
