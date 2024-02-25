import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import styles from "./RecipeCard.module.css";

export function RecipeCard() {
  function handleClick() {
    console.log("Redirect to recipe page");
  }

  return (
    <article className={styles.card} onClick={handleClick}>
      <h2 className={styles.dishTitle}>Title of the dish</h2>
      <div className={styles.dishImage}>
        <img
          src="/assets/images/spinatlasagne.jpg"
          alt="spinach lasaga"
          width={200}
        />
      </div>
      <div className={styles.dishRating}>
        <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar />
      </div>
      <div className={styles.prepTime}>90 min</div>
      <div className={styles.hashtags}>
        #dinner #lunch #spinach #mushroomies #oven
      </div>
    </article>
  );
}
