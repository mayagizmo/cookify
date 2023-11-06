import { BsFillTrash3Fill } from "react-icons/bs";

import styles from "./ShoppingItem.module.scss";

export function ShoppingItem() {
  return (
    <label>
      <div className={styles.entireItem}>
        <span className={styles.checkBox}>
          <input type="checkbox" />
        </span>
        <span className={styles.itemName}>Mushroomies</span>
        <span className={styles.trashCan}>
          <BsFillTrash3Fill />
        </span>
      </div>
    </label>
  );
}
