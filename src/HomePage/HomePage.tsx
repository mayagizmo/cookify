import { AddRecipePage } from "../AddRecipePage/AddRecipePage.tsx";
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { SearchBar } from "../SearchBar/SearchBar.tsx";

export function HomePage() {
  return (
    <>
      <SearchBar />
      <AddRecipePage />
      <br />

      <section className="flex flex-wrap gap-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </section>
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
