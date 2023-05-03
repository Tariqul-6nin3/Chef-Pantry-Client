import React from "react";

const RecipeAuthorCard = props => {
  const {
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
  } = props.recipe;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-visible md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={chef_picture}
            alt={chef_name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {years_of_experience} years of experience
          </div>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">{chef_name}</h2>
          <p className="mt-2 text-gray-600">{likes} likes on our platform</p>
          <p className="mt-2 text-gray-600">
            {number_of_recipes} recipes published
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">
              View Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeAuthorCard;
