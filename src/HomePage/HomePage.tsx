import { AddRecipePage } from "../AddRecipePage/AddRecipePage.tsx";
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { SearchBar } from "../SearchBar/SearchBar.tsx";

export function HomePage() {
  return (
    <>
      <SearchBar />
      <AddRecipePage />
      <br />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
