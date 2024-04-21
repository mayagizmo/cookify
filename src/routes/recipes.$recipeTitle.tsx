import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recipes/$recipeTitle")({
  component: RecipePage,
});

function RecipePage() {
  const { recipeTitle } = Route.useParams();

  return <div>Hello /recipes: {recipeTitle}!</div>;
}
