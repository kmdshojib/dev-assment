import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To control the state of the left-side menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="bg-indigo-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Contact Page</h1>
          <button
            type="button"
            title="button"
            onClick={toggleMenu}
            className="lg:hidden text-xl focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <aside
        className={`lg:w-56 lg:fixed lg:top-0 lg:left-0 lg:h-full bg-gray-800 text-white ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-4 px-6">
          <li className="mb-2">
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/about"
              className="block p-2 hover:bg-gray-700 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Header;
