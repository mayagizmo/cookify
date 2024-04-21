import { useEffect, useState } from "react";

import { RecipeCard, RecipeProps } from "../RecipeCard/RecipeCard.tsx";

interface APIResponse {
  recipes: Array<RecipeProps>;
}

export function HomePage() {
  const [recipes, setRecipes] = useState<Array<RecipeProps>>([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(
          "https://cookify-cloudflare.windesign.workers.dev/recipes",
        );
        console.log("Response status: ", response.status);

        if (response.ok) {
          console.log("Promise resolved and HTTP status is successful");
          const data: APIResponse = await response.json();
          setIsError(false);

          setRecipes(data.recipes);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("my fetch error is=", error);
        // Output e.g.: "Fetch Error: 404, Not found"
        setIsError(true);
      }
    }
    void fetchRecipes();
  }, []);

  console.log("IsError: ", isError);

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

      {isError && (
        <div className="alert alert-error">
          There seems to be a problem. Sorry! 😢
        </div>
      )}
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
