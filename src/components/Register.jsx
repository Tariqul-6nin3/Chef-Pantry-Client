import React, { useContext, useState } from "react";
import { myContext } from "../providers/Context";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [user, setUSer] = useState(null);
  console.log(user);
  const [error, setError] = useState("");
  const { createUser } = useContext(myContext);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password);

    // validattion email

    if (password != confirm) {
      setError("Your password doesn't match. Please check again");
    } else if (password.length < 6) {
      setError("Password Could not be less than 6 character");
    }
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setUSer(createdUser);
        handleDisplayName(result.user, name, photo);
      })
      .catch(error => setError(error.message));
  };

  const handleDisplayName = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Name and photo updated");
      })
      .catch(error => setError(error.message));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 flex justify-center items-center ">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 px-6 py-4">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="photo">
                Profile Photo URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="text"
                name="photo"
                placeholder="Enter the URL for your profile photo"
              />
            </div>
            <p className="text-red-700 text-base ">{error}</p>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="mt-3">
              Already have an account?
              <Link
                className="text-red-500 ml-2 text-lg font-semibold"
                to="/login">
                Login?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
