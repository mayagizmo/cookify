import { Link } from "@tanstack/react-router";

import { RecipeCard, RecipeCardProps } from "../RecipeCard/RecipeCard.tsx";

export interface TitleAndListOfRecipesProps {
  title: string;
  recipes: Array<RecipeCardProps>;
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
          <Link
            to="/recipe/$recipeIdName"
            params={{
              recipeIdName: `${String(recipe.id)}-${recipe.title.replace(/\s/g, "-")}`,
            }}
            key={recipe.title}
          >
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              prepTime={recipe.prepTime}
              cookingTime={recipe.cookingTime}
              id={recipe.id}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
