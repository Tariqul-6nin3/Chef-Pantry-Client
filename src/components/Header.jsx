import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../providers/Context";
import "../components/styles/root.css";
import { FaBars, FaCross } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(myContext);
  const [open, setOpen] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {});
  };
  return (
    <div className="navbar bg-gray-50 fixed z-40">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case">
          <span className="logo">Chef</span> <span className="span">Eye</span>
        </Link>
      </div>
      <div className="font-bold md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <FaBars className="h-12 w-12" />
          ) : (
            <FaCross className="h-12 w-12" />
          )}
        </button>
      </div>
      <div className="flex-none gap-2">
        <div
          className={`md:mr-44 text-2xl font-semibold md:text-xl list-none md:flex md:space-x-7 ${
            open
              ? "absolute -top-60 duration-700"
              : "absolute top-16 bg-black w-full text-center  flex left-0 h-36 items-center  flex-col "
          }`}>
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              aria-label="Blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Blogs
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={handleLogOut}>
                  SignOut
                </NavLink>
              </li>
              <div className="">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
              </div>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                aria-label="login"
                title="login"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Login
              </NavLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
