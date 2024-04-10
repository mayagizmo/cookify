import { useId, useState } from "react";
import { FaSpinner } from "react-icons/fa";

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
    <form
      onSubmit={handleAddRecipe}
      className="border rounded-lg border-neutral-content p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={recipeTitleId} className="w-32">
          Recipe Name
        </label>

        <input
          className="input input-bordered flex-grow"
          id={recipeTitleId}
          name="recipe-title"
          value={recipeTitle}
          type="text"
          onChange={(e) => setRecipeTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={ingredientsId} className="w-32">
          Ingredients
        </label>
        <textarea
          className="textarea textarea-bordered flex-grow"
          autoComplete="on"
          placeholder="Please input the ingredients one on each line"
          id={ingredientsId}
          name="ingredients"
          value={ingredients}
          rows={5}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={prepTimeId} className="w-32">
          Prep Time
        </label>
        <input
          className="input input-bordered flex-grow"
          name="prep-time"
          value={prepTime}
          id={prepTimeId}
          type="number"
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={cookTimeId} className="w-32">
          Cook Time
        </label>
        <input
          className="input input-bordered flex-grow"
          name="cook-time"
          value={cookTime}
          id={cookTimeId}
          type="number"
          onChange={(e) => setCookTime(e.target.value)}
        />
      </div>

      <div className="text-center mb-2">
        <button className="btn btn-primary" type="submit">
          {isLoading ? (
            <span>
              <FaSpinner className="spinner" /> Submitting
            </span>
          ) : (
            "Add amazing new recipe"
          )}
        </button>
      </div>

      {isSuccess && (
        <div className="alert alert-success">
          Recipe is added successfully! 🚀
        </div>
      )}
      {isError && (
        <div className="alert alert-error">
          Recipe couldn&apos;t be added. Sorry! 😢
        </div>
      )}
    </form>
  );
}
