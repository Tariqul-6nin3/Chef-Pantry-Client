import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeAuthor from "./RecipeAuthor";
import RacipeList from "./RacipeList";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const allRecipe = recipe.recipe;

  console.log(allRecipe);
  return (
    <>
      <RecipeAuthor recipe={recipe}></RecipeAuthor>
      <div>
        {allRecipe.map(singleRecipe => (
          <RacipeList
            key={singleRecipe.id}
            singleRecipe={singleRecipe}></RacipeList>
        ))}
      </div>
    </>
  );
};

export default RecipeDetails;
