import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../providers/Context";

const Login = () => {
  const { createUser } = useContext(myContext);
  const handleLogin = event => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("clicked");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-2/3 md:w-1/2 lg:w-1/3">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">Login</h1>
        </div>
        <form onClick={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <p>
            <small>
              New to here? please <Link to="/register">Register</Link>
            </small>
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
