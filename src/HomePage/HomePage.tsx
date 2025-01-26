import { FaSpinner } from "react-icons/fa";

import { TitleAndListOfRecipes } from "../TitleAndListOfRecipes/TitleAndListOfRecipes.tsx";
import { useFetchRecipes } from "../hooks/useFetchRecipes.tsx";
import type { ApiRecipe } from "../types.ts";

export interface APIResponse {
  recipes: Array<ApiRecipe>;
}

export function HomePage() {
  const { recipes, isError, isLoading } = useFetchRecipes();
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
