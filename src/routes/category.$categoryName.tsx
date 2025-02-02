import { createFileRoute, Link } from "@tanstack/react-router";
import { FaSpinner } from "react-icons/fa";

import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { useFetchRecipes } from "../hooks/useFetchRecipes.tsx";

export const Route = createFileRoute("/category/$categoryName")({
  component: CategoryPage,
});

function CategoryPage() {
  const { categoryName } = Route.useParams();
  const { recipes, isError, isLoading } = useFetchRecipes();

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
  console.log("recipes: ", recipes);

  return (
    <>
      <div className="text-2xl font-bold m-4 text-primary capitalize flex justify-between">
        <h2>{categoryName}</h2>
        <span>({recipes.length})</span>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <Link
            to="/recipe/$recipeIdName"
            params={{
              recipeIdName: `${String(recipe.id)}-${recipe.title.replace(/\s/g, "-")}`,
            }}
            key={recipe.id}
          >
            <RecipeCard
              title={recipe.title}
              prepTime={recipe.prepTime}
              cookingTime={recipe.cookingTime}
              id={recipe.id}
              hasUndo
            />
          </Link>
        ))}
      </section>
    </>
  );
}
