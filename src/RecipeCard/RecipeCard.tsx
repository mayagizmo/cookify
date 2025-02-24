import { useNavigate } from "@tanstack/react-router";
import cx from "classnames";
import { useState, MouseEvent } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";

import { useFavoriteRecipesStore } from "../favoriteRecipesStore.ts";

export interface RecipeCardProps {
  title: string;
  prepTime: number;
  cookingTime: number;
  id: number;
  hasUndo: boolean;
}

export function RecipeCard({
  title,
  prepTime,
  cookingTime,
  id,
  hasUndo,
}: RecipeCardProps) {
  const isFavorite = useFavoriteRecipesStore((state) =>
    state.favorites.includes(id),
  );
  const navigate = useNavigate({ from: "/favorite-recipes" });
  const [showUndo, setShowUndo] = useState(false);

  const addToFavoriteRecipes = useFavoriteRecipesStore(
    (state) => state.addFavorite,
  );
  const removeFromFavoriteRecipes = useFavoriteRecipesStore(
    (state) => state.removeFavorite,
  );

  function handleNavigateToFavoriteRecipe(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();

    navigate({
      to: "/recipe/$recipeIdName",
      params: {
        recipeIdName: `${String(id)}-${title.replace(/\s/g, "-")}`,
      },
    });
  }

  const handleToggleFavoritesHeart = () => {
    if (!isFavorite) {
      addToFavoriteRecipes(id);
    } else {
      removeFromFavoriteRecipes(id);
    }
    if (hasUndo) {
      setShowUndo(!showUndo);
    }
  };

  return (
    <div onClick={handleNavigateToFavoriteRecipe} className="relative" key={id}>
      <article
        className={cx(
          "card card-compact basis-[calc(25%-0.75rem)] shadow-xl cursor-pointer bg-base-300 hover:bg-base-200",
          showUndo && "blur-sm",
        )}
      >
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <span className="badge badge-secondary">Breakfast</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault(); // Prevents the Link from triggering
                handleToggleFavoritesHeart(); // This handles the button click
              }}
            >
              {isFavorite ? <GoHeartFill /> : <GoHeart />}
            </button>
          </h2>
          <div className="flex">
            <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar />
          </div>
          <span>{prepTime + cookingTime} min</span>
          <footer>#dinner #lunch #spinach #mushroomies #oven</footer>
        </div>
      </article>
      {showUndo && (
        <p
          className="absolute inset-0 flex justify-center items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggleFavoritesHeart();
          }}
        >
          <button className="btn btn-primary">Re-Add Recipe</button>
        </p>
      )}
    </div>
  );
}
