import { useId, useState } from "react";

import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [freeTextSearch, setFreeTextSearch] = useState("");

  const freeTextSearchId = useId();

  function handleSearch() {
    console.log("Search submitted.");
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSearch}>
      <input
        className={styles.searchField}
        type="text"
        name="freeTextSearch"
        value={freeTextSearch}
        id={freeTextSearchId}
        onChange={(e) => setFreeTextSearch(e.target.value)}
      />
      <select
        className={styles.searchField}
        id="ingredients"
        name="ingredients"
      >
        <option value="mushrooms">Mushrooms</option>
        <option value="spinach">Spinach</option>
        <option value="cheese">Cheese</option>
        <option value="mascarpone">Mascapone</option>
      </select>
      <select className={styles.searchField} id="category" name="category">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="cocktails">Cocktails</option>
      </select>
      <select className={styles.searchField} name="rating">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <select name="time" className={styles.searchField}>
        <option value="below30">-30</option>
        <option value="above30">30+</option>
        <option value="above60">60+</option>
      </select>
      <button className={styles.searchSubmitButton} type="submit">
        Search
      </button>
    </form>
  );
}
