import React from "react";
import { ExternalLink, Github } from "lucide-react"; // icons

const projects = [
  {
    title: "Prepzenx – AI-Powered Study Assistant",
    description:
      "An intelligent study assistant using Next.js, Supabase, and Gemini AI that helps students learn via AI-driven chat, quizzes, and summaries. Includes RAG-powered tutoring, gamified quizzes, and an AI dashboard.",
    live: "https://study-tutor-2rc5.vercel.app/",
    github: "https://github.com/mrdv01/StudyTutor",
  },
  {
    title: "Ledgerly – AI-Powered Inventory Management System",
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
    <section id="projects" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group w-full sm:w-80 p-6 rounded-2xl
                         bg-gradient-to-br from-gray-50 to-white border border-gray-200
                         shadow-md hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]
                         transition-all duration-500 hover:scale-105 hover:border-blue-200"
            >
              {/* Subtle overlay for hover emphasis */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-4">
                  {p.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 flex gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                                   bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                                   bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>

                  {/* small indicator / chevron or tag could go here if you want */}
                  <div className="text-xs text-gray-400">
                    {p.live ? "Deployed" : "Code only"}
                  </div>
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
