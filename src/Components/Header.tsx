import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageName, setPageName] = useState("Contact Page");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const pathname = location.pathname;
    let pageTitle = "";

    if (pathname === "/") {
      pageTitle = "Contact Page";
      setPageName(pageTitle);
    } else if (pathname === "/chartsandmaps") {
      pageTitle = "Charts and Maps";
      setPageName(pageTitle);
    }

    document.title = pageTitle;
  }, [location, setPageName]);

  return (
    <div>
      <div>
        <nav className="bg-indigo-500 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold"> {pageName}</h1>
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
          className={`lg:w-56 lg:fixed lg:top-0 lg:left-0 lg:h-[350px] text-white lg:mt-20 lg:ml-5 bg-white  ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="lg:border-r  lg:h-full lg:w-56 bg-white lg:shadow-lg rounded-lg">
            <ul className="py-4 px-6">
              <li className="mb-2">
                <Link
                  to="/"
                  className="block p-2 hover:bg-indigo-100 transition duration-300 text-gray-700"
                >
                  Contact
                </Link>
              </li>
              <hr />
              <li className="mb-2">
                <Link
                  to="/chartsandmaps"
                  className="block p-2 hover:bg-indigo-100 transition duration-300 text-gray-700"
                >
                  Charts and Maps
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Header;
