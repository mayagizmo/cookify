import { RecipeCard, RecipeProps } from "../RecipeCard/RecipeCard.tsx";

export interface TitleAndListOfRecipesProps {
  title: string;
  recipes: Array<RecipeProps>;
}
export function TitleAndListOfRecipes({
  title,
  recipes,
}: TitleAndListOfRecipesProps) {
  return (
    <>
      <h2 className="text-2xl font-bold m-4 text-primary">{title}</h2>
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.slice(0, 4).map((recipe) => (
          <RecipeCard
            key={recipe.title}
            title={recipe.title}
            prepTime={recipe.prepTime}
            cookingTime={recipe.cookingTime}
          />
        ))}
      </section>
    </>
  );
}
