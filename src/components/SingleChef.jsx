import React from "react";
import { FaGrinStars, FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const SingleChef = props => {
  const { chef_picture, chef_name, years_of_experience, likes, rating, id } =
    props.singleChef;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-96 w-full" src={chef_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>
            <FaGrinStars className="inline mr-4 text-2xl hover:translate-x-1"></FaGrinStars>
            {years_of_experience} Years of Experience
          </p>
          <p>
            <FaThumbsUp className="inline mr-4 text-2xl hover:translate-x-1" />
            {likes} Likes
          </p>
          <div>
            <Rating readOnly style={{ maxWidth: 120 }} value={rating}></Rating>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/recipe/${id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
