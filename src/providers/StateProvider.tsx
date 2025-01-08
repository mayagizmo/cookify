import { useEffect } from "react";

import { useFavoriteRecipesStore } from "../favoriteRecipesStore.ts";

export function StateProvider() {
  const initState = useFavoriteRecipesStore((state) => state.initState);

  useEffect(() => {
    const lsFavoriteRecipes = localStorage.getItem("favoriteRecipes");

    if (!lsFavoriteRecipes) {
      return;
    }

    console.log("lsFavoriteRecipes=", lsFavoriteRecipes);

    initState(JSON.parse(lsFavoriteRecipes));
  }, [initState]);

  return <></>;
}
