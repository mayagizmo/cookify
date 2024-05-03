import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { RecipeProps } from "../RecipeCard/RecipeCard.tsx";
import { TitleAndListOfRecipes } from "../TitleAndListOfRecipes/TitleAndListOfRecipes.tsx";

interface APIResponse {
  recipes: Array<RecipeProps>;
}

export function HomePage() {
  const [recipes, setRecipes] = useState<Array<RecipeProps>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const popularRecipes = recipes;
  const rareRecipes = recipes;

  const sections = [
    {
      title: "Recently Added",
      recipes,
    },
    {
      title: "Most cooked this month",
      recipes: popularRecipes,
    },
    {
      title: "It has been a while",
      recipes: rareRecipes,
    },
  ];

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
      {sections.map((section) => (
        <TitleAndListOfRecipes
          key={section.title}
          title={section.title}
          recipes={section.recipes}
        />
      ))}

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
