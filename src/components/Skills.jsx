import React from "react";
import Lottie from "react-lottie-player";

import reactAnim from "../assets/React.json";
import nodeAnim from "../assets/Nodejs.json";
import jsAnim from "../assets/JavaScript.json";
import mongoAnim from "../assets/mongo.json";
import nextAnim from "../assets/Nextjs.json";
import HtmlAnim from "../assets/HTML 5.json";
import cssAnim from "../assets/css3.json";
import tailwindLogo from "../assets/tailwincss/logo.svg"; // 🟣 your downloaded SVG

const skills = [
  { name: "React", animation: reactAnim, type: "lottie" },
  { name: "Node.js", animation: nodeAnim, type: "lottie" },
  { name: "JavaScript", animation: jsAnim, type: "lottie" },
  { name: "MongoDB", animation: mongoAnim, type: "lottie" },
  { name: "NextJS", animation: nextAnim, type: "lottie" },
  { name: "HTML", animation: HtmlAnim, type: "lottie" },
  { name: "CSS", animation: cssAnim, type: "lottie" },
  { name: "Tailwind CSS", icon: tailwindLogo, type: "svg" }, // 🟣 added at the end
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#f3d1ff] to-[#ffffff] text-transparent bg-clip-text">
          Tech Stack & Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group w-40 h-44 sm:w-44 sm:h-48 flex flex-col items-center justify-center
                         rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20
                         shadow-lg hover:shadow-[0_0_25px_rgba(157,78,221,0.6)]
                         transition-all duration-500 hover:scale-105 hover:border-[#9d4edd]/60"
            >
              {/* Gloss overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9d4edd]/40 to-transparent opacity-25 group-hover:opacity-40 transition-opacity"></div>

              {/* Animation or SVG */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {skill.type === "lottie" ? (
                  <Lottie
                    play
                    loop
                    animationData={skill.animation}
                    style={{ height: "100%", width: "100%" }}
                  />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(157,78,221,0.5)]"
                  />
                )}
              </div>

              <p className="relative text-center mt-3 text-base font-semibold text-white/90">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
