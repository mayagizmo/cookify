import { useRef } from "react";
import { FaSpinner } from "react-icons/fa";

import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { useFavoriteRecipesStore } from "../favoriteRecipesStore.ts";
import { useFetchRecipes } from "../hooks/useFetchRecipes.tsx";

export function FavoriteRecipesPages() {
  const { recipes, isError, isLoading } = useFetchRecipes();

  const favorites = useFavoriteRecipesStore((state) => state.favorites);

  const copyFavoritesRef = useRef<Array<number>>(null);

  if (!copyFavoritesRef.current) {
    copyFavoritesRef.current = [...favorites];
  }

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
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes
        .slice(0, 4)
        .filter((recipe) => copyFavoritesRef.current?.includes(recipe.id))
        .map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            prepTime={recipe.prepTime}
            cookingTime={recipe.cookingTime}
            id={recipe.id}
            hasUndo
          />
        ))}
    </section>
  );
}
