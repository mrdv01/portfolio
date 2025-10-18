import React, { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#9d4edd]/30 backdrop-blur-lg text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-semibold tracking-tight text-white hover:text-violet-200 transition"
            >
              &lt;Deepak Verma /&gt;
            </a>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                activeClass="text-[#c77dff] font-semibold border-b-2 border-[#c77dff]"
                to={l.to}
                spy={true}
                smooth={true}
                offset={-80} // account for navbar height
                duration={500}
                className="cursor-pointer text-sm font-medium hover:text-violet-200 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9d4edd]"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all duration-300 ease-out overflow-hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#9d4edd]/40 backdrop-blur-md">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
