import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Chef Eye</a>
      </div>
      <div className="flex-none gap-2">
        <div className="md:mr-44 text-2xl font-semibold text-black md:text-xl list-none md:flex md:space-x-7">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
              onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              aria-label="Blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
              onClick={() => setOpen(false)}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              aria-label="login"
              title="login"
              className={({ isActive }) => (isActive ? "active" : "default")}
              onClick={() => setOpen(false)}>
              Login
            </NavLink>
          </li>
          <div className="">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
