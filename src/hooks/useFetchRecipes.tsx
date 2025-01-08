import { useEffect, useState } from "react";

import { API_BASE } from "../constants.ts";
import { ApiRecipe } from "../types.ts";

export function useFetchRecipes() {
  interface APIResponse {
    recipes: Array<ApiRecipe>;
  }

  const [recipes, setRecipes] = useState<Array<ApiRecipe>>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE}/recipes`);

        if (response.ok) {
          const data: APIResponse = await response.json();
          setIsError(false);

          setRecipes(data.recipes);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    void fetchRecipes();
  }, []);

  return { recipes, isError, isLoading };
}
