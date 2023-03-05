import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header";

const DashboardLayout = () => {
  return (
    <section>
      <Header />
      <div className="drawer drawer-mobile container mx-auto mt-14">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex pl-6">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side shadow-2xl">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-base-100 text-base-content">
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
