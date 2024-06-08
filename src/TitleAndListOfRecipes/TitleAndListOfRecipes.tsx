import { Link } from "@tanstack/react-router";

import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { ApiRecipe } from "../types.ts";

interface TitleAndListOfRecipesProps {
  title: string;
  recipes: Array<ApiRecipe>;
  link: string;
}

export function TitleAndListOfRecipes({
  title,
  recipes,
  link,
}: TitleAndListOfRecipesProps) {
  return (
    <>
      <h2 className="text-2xl font-bold m-4 text-primary">
        <Link to={link}>{title}</Link>
      </h2>
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.slice(0, 4).map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            prepTime={recipe.prepTime}
            cookingTime={recipe.cookingTime}
            id={recipe.id}
          />
        ))}
      </section>
    </>
  );
}
