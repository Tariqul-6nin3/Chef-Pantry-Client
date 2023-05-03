import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../providers/Context";
import "../components/styles/root.css";

const Header = () => {
  const { user, logOut } = useContext(myContext);
  const [open, setOpen] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {});
  };
  return (
    <div className="navbar bg-black fixed z-40">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case">
          <span className="logo">Chef</span> <span className="span">Eye</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="md:mr-44 text-2xl font-semibold md:text-xl list-none md:flex md:space-x-7">
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
                className={({ isActive }) => (isActive ? "active" : "default")}
                onClick={() => setOpen(false)}>
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
