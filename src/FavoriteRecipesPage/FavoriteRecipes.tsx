import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { APIResponse } from "../HomePage/HomePage.tsx";
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { API_BASE } from "../constants.ts";
import { ApiRecipe } from "../types.ts";

export function FavoriteRecipesPages() {
  const [recipeIds, setRecipeIds] = useState<Array<number>>([]);
  const [recipes, setRecipes] = useState<Array<ApiRecipe>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("favoriteRecipes") || "[]";
    setRecipeIds(JSON.parse(value));
  }, []);
  console.log(recipeIds.length);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE}/recipes`);

        if (response.ok) {
          const data: APIResponse = await response.json();
          setIsError(false);

          setRecipes(data.recipes);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    void fetchRecipes();
  }, []);

  if (isLoading) {
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
    <div>
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes
          .slice(0, 4)
          .filter((recipe) => recipeIds.includes(recipe.id))
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              prepTime={recipe.prepTime}
              cookingTime={recipe.cookingTime}
              id={recipe.id}
            />
          ))}
      </section>
    </div>
  );
}
