import { createFileRoute } from "@tanstack/react-router";

import { AddRecipePage } from "../AddRecipePage/AddRecipePage.tsx";

export const Route = createFileRoute("/add-recipe")({
  component: () => (
    <>
      <h1 className="text-xl mb-4">Add a new recipe</h1>

      <AddRecipePage />
    </>
  ),
});
