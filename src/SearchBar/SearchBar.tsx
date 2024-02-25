import { useId, useState } from "react";
import { CgOptions } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);
  const [freeTextSearch, setFreeTextSearch] = useState("");

  const freeTextSearchId = useId();

  function handleSearch() {
    console.log("Search submitted.");
  }

  function toggleFilters() {
    setShowFilters(true);
  }

  return (
    <div>
      {showFilters ? (
        <div>The search bar and the additional filters here</div>
      ) : (
        <div className={styles.searchBarContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
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
          </form>
          <span>
            <CgOptions />
          </span>
        </div>
      )}
    </div>
  );
}
