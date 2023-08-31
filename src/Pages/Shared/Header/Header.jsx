import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/home/yummy.jpg";

const Header = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop">Our Shop</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl  bg-slate-700 z-10 fixed bg-opacity-50 text-white">
        <div className="navbar-start ">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl uppercase  text-yellow-500 ">
            Yummy |
          </a>

          <p className="uppercase text-xl">| Restaurant |</p>
          <img className="h-[50px]" src={img1} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex  navbar-end">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Header;
