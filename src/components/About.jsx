import { useEffect, useRef } from "react";
import { animate, splitText, stagger } from "animejs"; // Anime.js v4 syntax
import Lottie from "react-lottie-player";
import Dev from "../assets/Dev.json"; // Your Lottie animation file

export const About = () => {
  // Create a reference for heading text
  const greetingRef = useRef(null);

  // Run this once when component mounts
  useEffect(() => {
    // 1️ Split greeting text into characters
    const { chars } = splitText(greetingRef.current, {
      chars: { wrap: "clip" },
    });

    // 2️ Animate each character
    animate(chars, {
      // Y-axis motion: enters from below, exits upward
      y: [
        { to: ["100%", "0%"] }, // slide up into place
        { to: "-100%", delay: 1200, ease: "in(3)" }, // slide out after a delay
      ],
      duration: 900, // each character animation lasts 900ms
      ease: "out(3)", // smooth easing for entry
      delay: stagger(50), // delay each char by 50ms (wave-like effect)
      loop: true, // repeat animation forever
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section
      id="about"
      className="
        flex flex-col md:flex-row
        items-center justify-center
        gap-10 md:gap-10
        px-12 py-20
        bg-white text-gray-800
        "
    >
      {/* LEFT SIDE — Text content */}
      <div className="flex-1">
        {/* Animated heading */}
        <h1
          ref={greetingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 overflow-hidden"
          style={{
            color: "rgb(17,24,39)",
          }} /* explicit dark for animation chars */
        >
          Hi all, I'm Deepak Verma
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-gray-700 text-lg sm:text-xl leading-relaxed">
          I’m a{" "}
          <span className="font-semibold text-blue-600">
            Full Stack Software Developer
          </span>{" "}
          pursuing B.Tech in Computer Science from{" "}
          <span className="font-semibold text-gray-800">IIIT Bhopal</span>,
          passionate about building modern, intelligent web applications. I love
          transforming ideas into scalable, user-focused products with
          technologies like{" "}
          <span className="font-semibold text-blue-600">React.js</span>,{" "}
          <span className="font-semibold text-blue-600">Node.js</span>,{" "}
          <span className="font-semibold text-blue-600">Express.js</span>, and{" "}
          <span className="font-semibold text-blue-600">MongoDB</span>.
          <br />
        </p>
      </div>

      {/*  Lottie animation */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <Lottie
          loop
          play
          animationData={Dev}
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
      </div>
    </section>
  );
};
