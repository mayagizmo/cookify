import { Link } from "@tanstack/react-router";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

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
