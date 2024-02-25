import styles from "./CategoryPage.module.css";
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx";
import { SearchBar } from "../SearchBar/SearchBar.tsx";

export function CategoryPage() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.container}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}
