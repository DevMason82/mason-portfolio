import React from "react";

import RecipeCard from "@/components/recipeCard";
import { Recipe } from "@/model/recipeModel";

interface AllRecipesProps {
  recipes: Recipe[];
}

const AllRecipes: React.FC<AllRecipesProps> = ({ recipes }) => {
  return (
    <section className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {recipes.map((recipe: Recipe) => {
        const {
          id,
          name,
          ingredients,
          instructions,
          prepTimeMinutes,
          cookTimeMinutes,
          servings,
          difficulty,
          cuisine,
          caloriesPerServing,
          tags,
          userId,
          image,
          rating,
          reviewCount,
          mealType,
        } = recipe;

        return (
          <RecipeCard
            key={id}
            caloriesPerServing={caloriesPerServing}
            cookTimeMinutes={cookTimeMinutes}
            cuisine={cuisine}
            difficulty={difficulty}
            id={id}
            image={image}
            ingredients={ingredients}
            instructions={instructions}
            mealType={mealType}
            name={name}
            prepTimeMinutes={prepTimeMinutes}
            rating={rating}
            reviewCount={reviewCount}
            servings={servings}
            tags={tags}
            userId={userId}
          />
        );
      })}
      {/*<div>{JSON.stringify(recipes)}</div>*/}
    </section>
  );
};

export default AllRecipes;
