import { Link, NavLink } from "react-router-dom";
import heartIcon from "../assets/image/icons8-heart-50.png";
import cartIcon from "../assets/image/icons8-cart-50.png";

const NavBar = () => {
  return (
    <div className="navbar px-28 backdrop-blur-xl bg-white/30 z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/contactform"
              >
                Connect
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/contactform"
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3">
          <img
            className="border-1 border-gray-400 rounded-full w-8 h-8 p-2 cursor-pointer"
            src={cartIcon}
            alt=""
          />
          <img
            className="border-1 border-gray-400 rounded-full w-8 h-8 p-2 cursor-pointer"
            src={heartIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
