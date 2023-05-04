import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../providers/Context";
import "../components/styles/root.css";
import { FaBars, FaCross } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(myContext);
  const [open, setOpen] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {});
  };
  return (
    <div className="navbar md:py-4 bg-gray-50 fixed z-40">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case">
          <span className="text-3xl font-serif font-semibold">ChefPantry</span>
        </Link>
      </div>
      <div className="font-bold md:hidden">
        <button className="mr-5" onClick={() => setOpen(!open)}>
          {open ? (
            <FaBars className="h-10 w-10" />
          ) : (
            <FaCross className="h-10 w-10" />
          )}
        </button>
      </div>
      <div className="flex-none   gap-2">
        <div
          className={`md:mr-20 text-2xl font-semibold md:text-xl list-none md:flex md:space-x-12 ${
            open
              ? "absolute -top-40 md:top-6 right-0"
              : "absolute top-16 bg-orange-100 w-full text-center  flex gap-3 left-0 h-48 pt-3 pb-4 items-center  flex-col "
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
              <div className="mb-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-10 rounded-full"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    data-tooltip-place="left">
                    <Tooltip id="my-tooltip"></Tooltip>
                    <img src={user.photoURL} alt={user.displayName} />
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
