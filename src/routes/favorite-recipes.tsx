import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favorite-recipes")({
  component: () => <div>Favorite Recipes</div>,
});
