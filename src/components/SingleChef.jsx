import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleChef = props => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    likes,
    rating,
    number_of_recipes,
  } = props.singleChef;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-96 w-full" src={chef_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>Experience:{years_of_experience} Years of Experience</p>
          <p>
            <FaThumbsUp className="inline mr-3" />
            {likes} Likes
          </p>
          <div>
            <Rating readOnly style={{ maxWidth: 120 }}></Rating>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
