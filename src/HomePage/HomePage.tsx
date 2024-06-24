import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { TitleAndListOfRecipes } from "../TitleAndListOfRecipes/TitleAndListOfRecipes.tsx";
import { ApiRecipe } from "../types.ts";

export interface APIResponse {
  recipes: Array<ApiRecipe>;
}

export function HomePage() {
  const [recipes, setRecipes] = useState<Array<ApiRecipe>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const popularRecipes = recipes;
  const rareRecipes = recipes;

  const sections = [
    {
      title: "Recently Added",
      recipes,
      link: "/recently-added",
    },
    {
      title: "Most cooked this month",
      recipes: popularRecipes,
      link: "/most-cooked",
    },
    {
      title: "It has been a while",
      recipes: rareRecipes,
      link: "/long-time",
    },
  ];

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://cookify-backend.windesign.workers.dev/recipes",
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
    <>
      {sections.map((section) => (
        <TitleAndListOfRecipes
          key={section.title}
          title={section.title}
          recipes={section.recipes}
          link={section.link}
        />
      ))}

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
