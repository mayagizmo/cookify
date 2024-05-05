import { useId, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface RecipePayload {
  title: string;
  prepTime: number;
  cookingTime: number;
  instructions: string;
  ingredients: Array<string>;
}

export function AddRecipePage() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const recipeTitleId = useId();
  const ingredientsId = useId();
  const prepTimeId = useId();
  const cookTimeId = useId();
  const instructionsId = useId();

  async function postNewRecipe(data: RecipePayload) {
    try {
      const response = await fetch("https://cookify-go.fly.dev/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  function buildPayload(): RecipePayload {
    return {
      title: recipeTitle,
      prepTime: Number(prepTime),
      cookingTime: Number(cookTime),
      instructions,
      ingredients: splitIngredients(ingredients),
    };
  }

  function resetForm() {
    setRecipeTitle("");
    setIngredients("");
    setInstructions("");
    setPrepTime("");
    setCookTime("");
  }

  function handleAddRecipe(e: React.FormEvent) {
    setIsSuccess(false);
    setIsError(false);
    e.preventDefault();
    // 1. set isLoading to true
    setIsLoading(true);
    // 2.1 send API request
    postNewRecipe(buildPayload());

    //setIsError(false);
    //setIsSuccess(false);
    resetForm();
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
          required
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={ingredientsId} className="w-32">
          Ingredients
        </label>
        <textarea
          className="textarea textarea-bordered flex-grow"
          autoComplete="on"
          placeholder="Input the ingredients one on each line"
          id={ingredientsId}
          name="ingredients"
          value={ingredients}
          rows={5}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={instructionsId} className="w-32">
          Instructions
        </label>
        <textarea
          className="textarea textarea-bordered flex-grow"
          autoComplete="on"
          placeholder="How to prepare the food?"
          id={instructionsId}
          name="instructions"
          value={instructions}
          rows={5}
          onChange={(e) => setInstructions(e.target.value)}
          required
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
          required
          min={1}
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
          required
          min={1}
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

function splitIngredients(ingredients: string) {
  return ingredients.split("\n").filter((item: string) => item);
}
