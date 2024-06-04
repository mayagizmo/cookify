import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export interface RecipeProps {
  title: string;
  prepTime: number;
  cookingTime: number;
  id: number;
  instructions: string;
  ingredients: Array<string>;
}

export function RecipeCard({ title, prepTime, cookingTime }: RecipeProps) {
  function handleClick() {
    console.log("Redirect to recipe page");
  }

  return (
    <article
      className="card card-compact basis-[calc(25%-0.75rem)] bg-base-300 shadow-xl cursor-pointer hover:bg-base-200"
      onClick={handleClick}
    >
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
  );
}
