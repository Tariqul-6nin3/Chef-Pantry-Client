import React from "react";

const RacipeList = props => {
  const { recipe_picture, recipe_name, ingredients, cooking_method, rating } =
    props.singleRecipe;

  return (
    <div className="max-w-lg mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
      <img
        className="object-cover w-full h-56"
        src={recipe_picture}
        alt={recipe_name}
      />
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">{recipe_name}</h2>
        <ul className="mt-2">
          {ingredients.map((ingredient, index) => (
            <li className="text-gray-600" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-gray-600">{cooking_method}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm font-semibold text-yellow-600 mr-1">
            {rating}
          </span>
          <svg
            className="w-4 h-4 fill-current text-yellow-600"
            viewBox="0 0 20 20">
            <path d="M10 12.417L16.42 17l-1.58-7.23L20 7.076l-7.25-.62L10 0 7.25 6.456 0 7.076l4.16 3.694L2.58 17 10 12.417z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RacipeList;
