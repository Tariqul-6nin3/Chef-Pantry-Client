import React from "react";
import { FaHamburger, FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeAuthorCard = props => {
  const {
    chef_name,
    chef_picture,
    likes,
    ratings,
    chef_about,
    number_of_recipes,
    years_of_experience,
  } = props.recipe;

  return (
    <div className="max-w-xl md:w-full w-11/12 mx-auto bg-white rounded-xl shadow-2xl overflow-visible md:max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="h-64 p-3">
          <img
            className="h-48 rounded-t-xl w-full object-cover md:h-full md:w-64"
            src={chef_picture}
            alt={chef_name}
          />
        </div>
        <div className="px-3 md:py-4 md:mt-5">
          <h2 className=" text-2xl font-bold text-gray-900">{chef_name}</h2>
          <p className="text-slate-600 font-medium text-base mt-2">
            {chef_about} {chef_about}
          </p>
        </div>
        <div className="md:px-7 py-6 px-3 md:py-10">
          <div className="uppercase tracking-wide text-xl text-indigo-800 font-semibold">
            {years_of_experience} years of experience
          </div>

          <p className="mt-2">
            <FaThumbsUp className="inline mr-4 text-blue-800 text-2xl hover:translate-x-1" />
            {likes} Likes on our platform.
          </p>
          <p className="mt-2 text-gray-600">
            <FaHamburger className="inline mr-4 text-orange-500 text-2xl hover:translate-x-1"></FaHamburger>
            {number_of_recipes} recipes published
          </p>
          <div className="mt-1">
            <Rating readOnly style={{ maxWidth: 120 }} value={ratings}></Rating>
          </div>
          <button className="btn-secondary mt-4 md:mt-0 w-5/6">About</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeAuthorCard;
