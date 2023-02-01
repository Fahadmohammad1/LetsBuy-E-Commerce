import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header";

const DashboardLayout = () => {
  return (
    <section>
      <Header />
      <div className="drawer drawer-mobile container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/all-users">All User</Link>
            </li>
            <li>
              <Link to="/dashboard/latest-payments">Latest Transactions</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;