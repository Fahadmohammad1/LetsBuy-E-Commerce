import React from "react";

const Categories = () => {
  return (
    <div>
      <div class="navbar-center">
        <a href="/" class="text-2xl font-bold">
          {" "}
          <span className="text-[#FF4E16]">L</span>ets
          <span className="text-[#FF4E16]">B</span>uy
        </a>
      </div>
      <div class="navbar-end">
        <button
          //   onClick={() => navigate("/login")}
          class="btn btn-sm text-[#FF4E16] bg-white"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Categories;
