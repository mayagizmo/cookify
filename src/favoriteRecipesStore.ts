import { create } from "zustand";

// TODO: replace using localStorage with https://zustand.docs.pmnd.rs/middlewares/persist#persisting-a-state

interface FavoriteRecipesStore {
  favorites: Array<number>; // needs to contain a list of recipe IDs
  initState: (lsState: FavoriteRecipesStore["favorites"]) => void;
  addFavorite: (id: number) => void; //needs to add id to list of favorites
  removeFavorite: (id: number) => void; //needs to remove id of list of favorites
}

export const useFavoriteRecipesStore = create<FavoriteRecipesStore>((set) => ({
  favorites: [],

  initState: (lsState: FavoriteRecipesStore["favorites"]) =>
    set({ favorites: lsState }),

  addFavorite: (id: number) =>
    set((state) => {
      const newValue = [...state.favorites, id];

      localStorage.setItem("favoriteRecipes", JSON.stringify(newValue));

      return { favorites: newValue };
    }),

  removeFavorite: (id: number) =>
    set((state) => {
      const newValue = state.favorites.filter((item) => item !== id);

      localStorage.setItem("favoriteRecipes", JSON.stringify(newValue));

      return { favorites: newValue };
    }),
}));
