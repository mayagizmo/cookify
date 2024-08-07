import { createFileRoute } from "@tanstack/react-router";

import { AddRecipePage } from "../AddRecipePage/AddRecipePage.tsx";
import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/add-recipe")({
  component: () => (
    <>
      <PageHeading title="Add a new recipe" />

      <AddRecipePage />
    </>
  ),
});
