import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Loading from "./Loading";
import { toast } from "react-hot-toast";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  if (loading) {
    <Loading />;
  }
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-40 bg-white mb-4">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">Dashboard</Link>
              </li>
              <li tabIndex={0}>
                <Link to="" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="">Submenu 1</Link>
                  </li>
                  <li>
                    <Link to="">Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <a href="/" class="text-2xl font-bold">
            {" "}
            <span className="text-[#FF4E16]">L</span>ets
            <span className="text-[#FF4E16]">B</span>uy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="">Dashboard</Link>
            </li>
            <li tabIndex={0}>
              <Link to="">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="">Submenu 1</Link>
                </li>
                <li>
                  <Link to="">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    toast.success("Successfully Logged out");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              class="btn btn-sm text-[#FF4E16] bg-white"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              class="btn btn-sm text-[#FF4E16] bg-white"
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
