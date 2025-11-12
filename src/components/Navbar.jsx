import React, { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },

    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-sm text-gray-800 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition"
            >
              &lt;Deepak Verma /&gt;
            </a>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
                to={l.to}
                spy={true}
                smooth={true}
                offset={-80} // account for navbar height
                duration={500}
                className="cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition"
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
              className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition cursor-pointer"
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
