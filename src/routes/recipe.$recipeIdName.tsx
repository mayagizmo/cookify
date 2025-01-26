import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";

import { API_BASE } from "../constants.ts";
import type { ApiRecipe } from "../types.ts";
import { useFavoriteRecipesStore } from "../favoriteRecipesStore.ts";

export const Route = createFileRoute("/recipe/$recipeIdName")({
  component: RecipeDetailsPage,
});

function RecipeDetailsPage() {
  const { recipeIdName } = Route.useParams();
  const [recipeId] = recipeIdName.split("-");
  const [recipe, setRecipe] = useState<ApiRecipe>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isFavorite = useFavoriteRecipesStore((state) =>
    state.favorites.includes(Number(recipeId)),
  );

  const addToFavoriteRecipes = useFavoriteRecipesStore(
    (state) => state.addFavorite,
  );
  const removeFromFavoriteRecipes = useFavoriteRecipesStore(
    (state) => state.removeFavorite,
  );

  const handleToggleFavoritesHeart = () => {
    if (!isFavorite) {
      addToFavoriteRecipes(Number(recipeId));
    } else {
      removeFromFavoriteRecipes(Number(recipeId));
    }
  };

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE}/recipes/${recipeId}`);

        if (response.ok) {
          const data = (await response.json()) as { recipe: ApiRecipe };
          setIsError(false);

          setRecipe(data.recipe);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    void fetchRecipes();
  }, [recipeId]);

  if (isLoading || !recipe) {
    return (
      <div className="alert alert-info">
        <FaSpinner className="spinner" /> Loading fingerlicking good recipes for
        you. Just one more tummy growl away.
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-error">
        There seems to be a problem. Sorry! 😢
      </div>
    );
  }

  return (
    <div className="card card-compact bg-base-300 shadow-xl m-1 p-4">
      <h1 className="text-2xl font-bold m-4">
        <button
          className="pr-2"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault(); // Prevents the Link from triggering
            handleToggleFavoritesHeart(); // This handles the button click
          }}
        >
          {isFavorite ? <GoHeartFill /> : <GoHeart />}
        </button>
        {recipe.title}
      </h1>
      <div className="divider divider-neutral">Time</div>
      <div className="flex gap-2 justify-between">
        <div>
          <div className="font-bold">Prep Time</div>
          <div>{recipe.prepTime} mins</div>
        </div>
        <div>
          <div className="font-bold">Cooking Time</div>
          <div>{recipe.cookingTime} mins</div>
        </div>
        <div>
          <div className="font-bold">Total Time </div>
          <div>{recipe.prepTime + recipe.cookingTime} mins</div>
        </div>
      </div>
      <div className="divider divider-neutral">Ingredients</div>
      <div className="px-4">
        <ul className="list-disc">
          {recipe.ingredients.map((ingredient: string) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="divider divider-neutral">Instructions</div>

      {recipe.instructions ? (
        <div>{recipe.instructions}</div>
      ) : (
        <div>
          Sorry, there are no instructions for this recipe. You can give it a
          try anyways! 🍳
        </div>
      )}
    </div>
  );
}
