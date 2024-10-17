import { createFileRoute } from "@tanstack/react-router";

import { FavoriteRecipesPages } from "../FavoriteRecipesPage/FavoriteRecipes.tsx";
import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/favorite-recipes")({
  component: () => (
    <>
      <PageHeading title="Favorite Recipes" />

      <FavoriteRecipesPages />
    </>
  ),
});
