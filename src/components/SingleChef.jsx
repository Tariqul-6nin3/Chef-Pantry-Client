import React from "react";
import { FaGrinStars, FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import "./styles/root.css";

const SingleChef = props => {
  const {
    chef_picture,
    chef_about,
    chef_name,
    years_of_experience,
    likes,
    rating,
    id,
  } = props.singleChef;
  return (
    <>
      <div className="card menu-item card-compact pt-2 pb-7 w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-96 px-2 py-4 w-full object-cover  rounded-md"
            src={chef_picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="px-4 py-2">
            <h2 className="card-title text-2xl font-bold">{chef_name}</h2>
            <p className="mt-3 text-base">{chef_about}</p>
            <h4 className="text-lg mt-2 font-semibold">
              Experience:
              <span className="text-stone-950">
                {" "}
                {years_of_experience}
              </span>{" "}
              Years of Experience
            </h4>
            <p className="mt-2">
              <FaThumbsUp className="inline mr-4 text-2xl hover:translate-x-1" />
              {likes} Likes
            </p>

            <div className="card-actions mt-3 flex flex-col md:flex-row justify-between items-center">
              <div className="mt-1">
                <Rating
                  readOnly
                  style={{ maxWidth: 120 }}
                  value={rating}></Rating>
              </div>
              <button className="btn-secondary">
                <Link to={`/recipe/${id}`}>View Recipes</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
