import { useId, useState } from "react";
import { CgClose, CgOptions } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);
  const [freeTextSearch, setFreeTextSearch] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const freeTextSearchId = useId();
  const ingredientsId = useId();
  const mealId = useId();
  const timeId = useId();

  const ingredientOptions = [
    "Mushrooms",
    "Spinach",
    "Pasta",
    "Rice",
    "Tofu",
    "Tomatoes",
  ];
  const mealOptions = ["Breakfast", "Lunch", "Dinner", "Desert", "Cocktails"];

  const timeOptions = [
    "<30min",
    "<60min",
    "<90min",
    "<120min",
    "Too much work",
  ];

  function handleSearch() {
    console.log("Search submitted.");
  }

  function toggleFilters() {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchBarContainer}>
      <div className={styles.searchForm}>
        <button type="submit" className={styles.searchSubmitButton}>
          <FaMagnifyingGlass />
        </button>

        <input
          className={styles.freeTextInput}
          type="text"
          id={freeTextSearchId}
          placeholder="Search recipes"
          value={freeTextSearch}
          onChange={(e) => setFreeTextSearch(e.target.value)}
        />
        <button
          type="button"
          className={styles.toggleFilterButton}
          onClick={toggleFilters}
        >
          {showFilters ? <CgClose /> : <CgOptions />}
        </button>
      </div>

      {showFilters && (
        <div className={styles.advancedSearch}>
          <hr className={styles.horizontalLine} />
          <select
            className={styles.selectDropdown}
            id={mealId}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealOptions.map((value) => (
              <option value={selectedMeal} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            className={styles.selectDropdown}
            id={ingredientsId}
            onChange={(e) => setSelectedIngredient(e.target.value)}
          >
            {ingredientOptions.map((value) => (
              <option value={selectedIngredient} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            className={styles.selectDropdown}
            id={timeId}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {timeOptions.map((value) => (
              <option value={selectedTime} key={value}>
                {value}
              </option>
            ))}
          </select>

          <button className={styles.advancedSearchSubmitButton} type="submit">
            Apply filter
          </button>
        </div>
      )}
    </form>
  );
}
