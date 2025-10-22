import { Github } from "lucide-react";
import "../Components/NavBar.css";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-[10px] sm:px-[20px] lg:px-[40px] xl:px-[80px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost p-0 pr-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/home"
                onClick={() => document.activeElement.blur()}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  hover:text-white"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                onClick={() => document.activeElement.blur()}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-medium hover:text-white "
                      : ""
                  }`
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                onClick={() => document.activeElement.blur()}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-medium hover:text-white "
                      : ""
                  }`
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-[40px]" src="../image/logo.png" alt="" />
          <Link
            to="/"
            className="btn btn-ghost text-xl p-0 border-none hover:border-none hover:shadow-none text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
          >
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium ">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] underline decoration-2 underline-offset-3 decoration-[#7b4fe0] hover:decoration-transparent font-medium hover:text-white "
                    : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] underline decoration-2 underline-offset-3 decoration-[#7b4fe0] hover:decoration-transparent font-medium hover:text-white "
                    : ""
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] underline decoration-2 underline-offset-3 decoration-[#7b4fe0] hover:decoration-transparent font-medium hover:text-white "
                    : ""
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          onClick={() => window.open("https://github.com/gulamrasul23")}
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
