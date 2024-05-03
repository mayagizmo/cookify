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
        const response = await fetch("https://cookify-go.fly.dev/recipes");

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
      <h2 className="text-2xl font-bold m-4 text-primary">Recently Added</h2>
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
      <h2 className="text-2xl font-bold m-4 text-primary">
        Most cooked this month
      </h2>
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
      <h2 className="text-2xl font-bold m-4 text-primary">
        It has been a while..
      </h2>
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
