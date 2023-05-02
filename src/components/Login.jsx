import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../providers/Context";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const { loggedInUser } = useContext(myContext);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loggedInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        form.reset();
      })
      .catch(error => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const githubUser = result.user;
        console.log(githubUser);
        setUser(githubUser);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex flex-col w-2/3 md:w-5/6 lg:w-1/3">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-700">
            Login
          </h1>
        </div>
        <form onSubmit={handleLogin}>
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
              required
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Login
            </button>
          </div>
          <hr className="border-2 text-black text-center mb-6" />
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline mx-2">
              <FaGoogle className="mr-3 text-2xl" />
              Continue with Google
            </button>
            <button
              onClick={handleGithubLogIn}
              className="btn btn-outline mx-2">
              <FaGithub className="mr-3 text-2xl" />
              Continue with Github
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-base">
              New to here? please{" "}
              <Link
                className="text-red-500 ml-2 text-lg font-semibold"
                to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
