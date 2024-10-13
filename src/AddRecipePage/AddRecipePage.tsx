import { FormEvent, useId, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { FormInput } from "../Utility/FormInput.tsx";
import { FormLabel } from "../Utility/FormLabel.tsx";
import { FormMultiInput } from "../Utility/FormMultiInput.tsx";
import { API_BASE } from "../constants.ts";

interface RecipePayload {
  title: string;
  prepTime: number;
  cookingTime: number;
  instructions: string;
  ingredients: Array<string>;
  images?: string;
  source?: Array<string>;
}

export function AddRecipePage() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState<Array<string>>([]);
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [newSource, setNewSource] = useState("");
  const [sourcesList, setSourcesList] = useState<Array<string>>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const instructionsId = useId();

  async function postNewRecipe(data: RecipePayload) {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      setIsSuccess(true);
      resetForm();
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
      ingredients: ingredientsList,
      source: sourcesList,
    };
  }

  function resetForm() {
    setRecipeTitle("");
    setIngredientsList([]);
    setInstructions("");
    setPrepTime("");
    setCookTime("");
    setSourcesList([]);
  }

  function handleAddRecipe(e: FormEvent) {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(false);

    postNewRecipe(buildPayload());
  }

  return (
    <>
      <p className="mb-2 text-sm text-red-600">* indicates a required field</p>
      <form onSubmit={handleAddRecipe}>
        <FormInput
          labelText="Recipe Title"
          requiredLabel
          name="recipe-title"
          value={recipeTitle}
          type="text"
          onChange={(e) => setRecipeTitle(e.target.value)}
          requiredField
        />

        <FormMultiInput
          stateValue={ingredient}
          setStateValue={setIngredient}
          stateList={ingredientsList}
          setStateList={setIngredientsList}
          labelText="Ingredients"
          requiredLabel
          name="ingredients"
        />
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3 mt-2">
          <FormLabel
            labelText="Instructions"
            required={false}
            htmlFor={instructionsId}
          />
          <textarea
            className="textarea textarea-bordered flex-grow"
            autoComplete="on"
            placeholder="How to prepare the food?"
            id={instructionsId}
            name="instructions"
            value={instructions}
            rows={5}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <FormInput
          labelText="Prep Time"
          requiredLabel
          name="prep-time"
          value={prepTime}
          type="number"
          onChange={(e) => setPrepTime(e.target.value)}
          requiredField
          min={0}
        />

        <FormInput
          labelText="Cook Time"
          requiredLabel
          name="cook-time"
          type="number"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          requiredField
          min={0}
        />
        <FormMultiInput
          stateValue={newSource}
          setStateValue={setNewSource}
          stateList={sourcesList}
          setStateList={setSourcesList}
          labelText="References"
          requiredLabel={false}
          name="source"
        />

        <div className="text-center mb-2 mt-4">
          <button className="btn btn-primary" type="submit">
            {isLoading ? (
              <span>
                <FaSpinner className="spinner inline" /> Submitting recipe
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
    </>
  );
}
