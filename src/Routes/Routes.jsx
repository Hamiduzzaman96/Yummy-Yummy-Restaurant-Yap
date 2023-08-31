import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);
