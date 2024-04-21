import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { RecipeCard, RecipeProps } from "../RecipeCard/RecipeCard.tsx";

interface APIResponse {
  recipes: Array<RecipeProps>;
}

export function HomePage() {
  const [recipes, setRecipes] = useState<Array<RecipeProps>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://cookify-cloudflare.windesign.workers.dev/recipes",
        );

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
      {isLoading && (
        <div className="alert alert-info">
          <FaSpinner className="spinner" /> Loading fingerlicking good recipes
          for you. Just one more tummy growl away.
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
