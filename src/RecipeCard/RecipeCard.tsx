import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export function RecipeCard() {
  function handleClick() {
    console.log("Redirect to recipe page");
  }

  return (
    <article
      className="card card-compact basis-[calc(25%-0.75rem)] bg-base-300 shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      <figure>
        <img src="/assets/images/spinatlasagne.jpg" alt="spinach lasaga" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Title of the dish
          <span className="badge badge-secondary">Breakfast</span>
        </h2>
        <div className="flex">
          <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar />
        </div>
        <span>90 min</span>
        <footer>#dinner #lunch #spinach #mushroomies #oven</footer>
      </div>
    </article>
  );
}
