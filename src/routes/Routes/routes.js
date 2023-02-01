import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import LatestPayments from "../../Pages/Dashboard/LatestPayments";
import MyProfile from "../../Pages/Dashboard/MyProfile";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/latest-payments",
        element: <LatestPayments />,
      },
    ],
  },
]);
