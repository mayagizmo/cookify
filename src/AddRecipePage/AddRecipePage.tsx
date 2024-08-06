import { useId, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { FormLabel } from "../Utility/FormLabel.tsx";
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
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [newSource, setNewSource] = useState("");
  const [sourcesList, setSourcesList] = useState<Array<string>>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const recipeTitleId = useId();
  const ingredientsId = useId();
  const prepTimeId = useId();
  const cookTimeId = useId();
  const instructionsId = useId();
  const newSourceId = useId();

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
      ingredients: splitIngredients(ingredients),
      source: sourcesList,
    };
  }

  function resetForm() {
    setRecipeTitle("");
    setIngredients("");
    setInstructions("");
    setPrepTime("");
    setCookTime("");
    setSourcesList([]);
  }

  function handleAddRecipe(e: React.FormEvent) {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(false);

    postNewRecipe(buildPayload());
  }

  function handleAddReference(e: React.FormEvent) {
    e.preventDefault();

    setSourcesList((prevState) => [...prevState, newSource]);

    setNewSource("");
  }

  function handleDynamicInputChange(index: number, newValue: string) {
    setSourcesList(
      sourcesList.map((source, i) => (i === index ? newValue : source)),
    );
  }

  function handleDeleteReference(indexToDelete: number) {
    const newVal = sourcesList.filter((_, index) => index !== indexToDelete);

    setSourcesList(newVal);
  }

  return (
    <>
      <p className="mb-2 text-sm text-red-600">* indicates a required field</p>
      <form onSubmit={handleAddRecipe}>
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
          <FormLabel labelText="Recipe Name" required htmlFor={recipeTitleId} />

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
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
          <FormLabel labelText="Ingredients" required htmlFor={ingredientsId} />
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
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
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
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
          <FormLabel labelText="Prep Time" required htmlFor={prepTimeId} />
          <input
            className="input input-bordered flex-grow"
            name="prep-time"
            value={prepTime}
            id={prepTimeId}
            type="number"
            onChange={(e) => setPrepTime(e.target.value)}
            required
            min={0}
          />
        </div>
        <div className="flex flex-col md:items-center md:flex-row gap-2 mb-3">
          <FormLabel labelText="Cook Time" required htmlFor={cookTimeId} />
          <input
            className="input input-bordered flex-grow"
            name="cook-time"
            value={cookTime}
            id={cookTimeId}
            type="number"
            onChange={(e) => setCookTime(e.target.value)}
            required
            min={0}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
          <FormLabel
            labelText="References"
            required={false}
            htmlFor={newSourceId}
          />
          <aside className="flex gap-2 flex-grow">
            <input
              className="input input-bordered flex-grow"
              name="source"
              value={newSource}
              id={newSourceId}
              type="text"
              onChange={(e) => setNewSource(e.target.value)}
            />
            <button className="btn" onClick={handleAddReference}>
              Add
            </button>
          </aside>
        </div>
        {sourcesList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {sourcesList.map((source, index) => (
              <div
                className="flex flex-1 min-w-[calc(100%-0.5rem)] lg:min-w-[calc(50%-0.5rem)]"
                key={index}
              >
                <input
                  className="input input-bordered flex-grow"
                  name={source}
                  id={source}
                  value={source}
                  type="text"
                  onChange={(e) =>
                    handleDynamicInputChange(index, e.target.value)
                  }
                />
                <button
                  className="p-2"
                  type="button"
                  onClick={() => handleDeleteReference(index)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

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

function splitIngredients(ingredients: string) {
  return ingredients.split("\n").filter((item: string) => item);
}
