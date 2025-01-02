import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";

export interface RecipeCardProps {
  title: string;
  prepTime: number;
  cookingTime: number;
  id: number;
}
export function RecipeCard({
  title,
  prepTime,
  cookingTime,
  id,
}: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [recipeIds, setRecipeIds] = useState<Array<number>>([]);

  const handleToggleFavoritesHeart = () => {
    const currentFavRecipeSet = new Set(
      JSON.parse(localStorage.getItem("favoriteRecipes") || "[]"),
    );

    if (!isFavorite) {
      currentFavRecipeSet.add(id);
    } else {
      currentFavRecipeSet.delete(id);
    }

    const stringyfiedFavoriteRecipes = JSON.stringify(
      Array.from(currentFavRecipeSet),
    );
    localStorage.setItem("favoriteRecipes", stringyfiedFavoriteRecipes);

    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const value = localStorage.getItem("favoriteRecipes") || "[]";
    setRecipeIds(JSON.parse(value));
    const currentFavs = JSON.parse(value);
    if (currentFavs.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  return (
    <Link
      to="/recipe/$recipeIdName"
      params={{
        recipeIdName: `${String(id)}-${title.replace(/\s/g, "-")}`,
      }}
      key={id}
    >
      <article className="card card-compact basis-[calc(25%-0.75rem)] bg-base-300 shadow-xl cursor-pointer hover:bg-base-200">
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
    </Link>
  );
}
