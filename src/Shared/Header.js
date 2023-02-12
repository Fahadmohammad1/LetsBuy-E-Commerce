import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Loading from "./Loading";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, userLoading, userError] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const cart = useSelector((state) => state?.product?.cart);

  if (userLoading || loading) {
    <Loading />;
  }
  if (userError || error) {
    toast.error(userError, error);
  }
  const navigate = useNavigate();

  window.onscroll = function () {
    const navbar = document.querySelector("nav");
    if (window.pageYOffset > 100) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.remove("bg-white");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent w-full transition-all duration-50">
      <div className="navbar container mx-auto border-primary">
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
                <Link to="/dashboard">Dashboard</Link>
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
          <Link to="/" class="text-2xl font-bold">
            {" "}
            <span className="text-primary">L</span>ets
            <span className="text-primary">B</span>uy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-700 text-sm font-bold uppercase">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li tabIndex={0}>
              <Link to="">
                Shop
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
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <Link to="/cart" className="mx-5 relative">
              <span className="badge absolute -top-2 -right-4 text-white border-0">
                {cart.length}
              </span>
              <AiOutlineShoppingCart className="text-3xl" />
            </Link>
          )}
          {user?.uid ? (
            <button
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  toast.success("You are sign out");
                  localStorage.removeItem("accessToken2");
                  navigate("/");
                }
              }}
              class="btn btn-sm text-primary bg-white hover:text-white"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              class="btn btn-sm text-primary bg-white hover:text-black"
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
