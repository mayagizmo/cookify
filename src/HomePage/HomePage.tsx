import { useEffect, useState } from "react";

import { RecipeCard, RecipeProps } from "../RecipeCard/RecipeCard.tsx";

interface APIResponse {
  recipes: Array<RecipeProps>;
}

export function HomePage() {
  const [recipes, setRecipes] = useState<Array<RecipeProps>>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(
        "https://cookify-cloudflare.windesign.workers.dev/recipes",
      );
      const data: APIResponse = await response.json();

      setRecipes(data.recipes);
    }
    void fetchRecipes();
  }, []);

  return (
    <>
      <section className="flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.title}
            title={recipe.title}
            prepTime={recipe.prepTime}
            cookingTime={recipe.cookingTime}
            thumbnail={recipe.thumbnail}
          />
        ))}
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
