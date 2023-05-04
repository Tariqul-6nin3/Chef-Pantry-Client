import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RacipeList = props => {
  const toastifying = () => {
    toast("Added as a favourite dish!!!");
    setFavourite(true);
  };

  const [favourite, setFavourite] = useState(false);
  const { recipe_picture, recipe_name, ingredients, cooking_method, rating } =
    props.singleRecipe;

  return (
    <div className="max-w-4xl grid grid-cols-3 gap-5 mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
      <div>
        <img
          className="object-cover w-full h-72"
          src={recipe_picture}
          alt={recipe_name}
        />
      </div>
      <div className="py-4 px-6">
        <h2 className="text-2xl font-serif font-bold text-gray-800">
          {recipe_name}
        </h2>
        <ul className="mt-2">
          <h4 className="text-xl from-neutral-900">Ingredients:</h4>
          {ingredients.slice(0, 5).map((ingredient, index) => (
            <li className="text-gray-600 list-disc" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4 px-6">
        <h4 className="text-xl font-semibold text-black">Cooking Method:</h4>
        <p className="mt-2 text-gray-600">
          {cooking_method.slice(0, 200)}{" "}
          <span className="text-sky-700 text-lg">read more...</span>
        </p>
        <div className="flex gap-4 items-center">
          <div className="mt-1">
            <Rating readOnly style={{ maxWidth: 120 }} value={rating}></Rating>
          </div>
          <div>
            <button
              onClick={toastifying}
              disabled={favourite}
              className="btn-secondary disabled:font-serif disabled:font-semibold disabled:text-slate-400 disabled:border-orange-700 ">
              Favourite
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacipeList;
