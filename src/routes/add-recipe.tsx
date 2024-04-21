import { createFileRoute } from "@tanstack/react-router";

import { AddRecipePage } from "../AddRecipePage/AddRecipePage.tsx";

export const Route = createFileRoute("/add-recipe")({
  component: () => (
    <>
      <h1>Add a brand new recipe to the data base!</h1>

      <AddRecipePage />
    </>
  ),
});
