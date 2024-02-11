import { BsClipboardCheckFill } from "react-icons/bs";

import styles from "./SearchBar.module.scss";

export function SearchBar() {
  return (
    <form className={styles.inputForm}>
      <input
        type="text"
        className={styles.inputIngredient}
        placeholder="Mhmm... what do you need?"
        id="my-input"
      />

      <button className={styles.checkMark}>
        <BsClipboardCheckFill />
      </button>
    </form>
  );
}
