import { BsClipboardCheckFill } from "react-icons/bs";

import styles from "./SearchBar.module.scss";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <form className={styles.inputForm}>
        <input
          name="inputIngredient"
          className={styles.inputIngredient}
          type="text"
          placeholder="Mhmm... what do you need?"
        />
      </form>
      <span className={styles.checkMark}>
        <BsClipboardCheckFill />
      </span>
    </div>
  );
}
