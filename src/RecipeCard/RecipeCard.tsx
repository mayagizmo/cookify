import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export function RecipeCard() {
  function handleClick() {
    console.log("Redirect to recipe page");
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl" onClick={handleClick}>
      <figure>
        <img
          src="/assets/images/spinatlasagne.jpg"
          alt="spinach lasaga"
          width={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title of the dish</h2>
        <div className="badge badge-secondary">Breakfast</div>
        <div>
          <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar />
        </div>
        <div>90 min</div>
        <div>#dinner #lunch #spinach #mushroomies #oven</div>
      </div>
    </div>
  );
}
