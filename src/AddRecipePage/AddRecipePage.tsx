import { useId, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import styles from "./AddRecipePage.module.css";

export function AddRecipePage() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const recipeTitleId = useId();
  const ingredientsId = useId();
  const prepTimeId = useId();
  const cookTimeId = useId();

  function splitIngredients(ingredients: string) {
    return ingredients.split("\n").filter((item: string) => item);
  }

  function handleAddRecipe(e: React.FormEvent) {
    e.preventDefault();
    console.log("Recipe Title: ", recipeTitle);
    console.log("ingredients: ", ingredients);
    console.log("Split ingreds: ", splitIngredients(ingredients));
    // 1. set isLoading to true
    setIsLoading(true);
    // 2.1 send API request
    // 2.2 if successful: set isSuccess to true
    // 2.3 if unsuccessful set isError to true
    // 3. set isLoading to false
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleAddRecipe} className={styles.container}>
      <div className={styles.formControl}>
        <label htmlFor={recipeTitleId}>Recipe Name</label>

        <input
          className={styles.inputAddRecipe}
          id={recipeTitleId}
          name="recipe-title"
          value={recipeTitle}
          type="text"
          onChange={(e) => setRecipeTitle(e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor={ingredientsId}>Ingredients</label>
        <textarea
          className={styles.inputAddRecipe}
          autoComplete="on"
          placeholder="Please input the ingredients one on each line"
          id={ingredientsId}
          name="ingredients"
          value={ingredients}
          rows={5}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor={prepTimeId}>Prep Time</label>
        <input
          className={styles.inputAddRecipe}
          name="prep-time"
          value={prepTime}
          id={prepTimeId}
          type="number"
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor={cookTimeId}>Cook Time</label>
        <input
          className={styles.inputAddRecipe}
          name="cook-time"
          value={cookTime}
          id={cookTimeId}
          type="number"
          onChange={(e) => setCookTime(e.target.value)}
        />
      </div>
      <button className={styles.submitButton} type="submit">
        {isLoading ? (
          <span>
            <FaSpinner className="spinner" /> Submitting
          </span>
        ) : (
          "Add amazing new recipe"
        )}
      </button>

      {isSuccess && (
        <p className={styles.successMessage}>
          Recipe is added successfully! 🚀
        </p>
      )}
      {isError && (
        <p className={styles.errorMessage}>
          Recipe couldn&apos;t be added. Sorry! 😢
        </p>
      )}
    </form>
  );
}
