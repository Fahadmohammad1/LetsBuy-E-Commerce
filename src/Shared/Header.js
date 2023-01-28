import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-40 bg-white mb-4">
      <div class="navbar bg-slate-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a href="/" class="text-2xl font-bold">
            {" "}
            <span className="text-[#FF4E16]">L</span>ets
            <span className="text-[#FF4E16]">B</span>uy
          </a>
        </div>
        <div class="navbar-end">
          <button
            onClick={() => navigate("/login")}
            class="btn btn-sm text-[#FF4E16] bg-white"
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
