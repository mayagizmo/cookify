import cx from "classnames";
import { BsJournalPlus } from "react-icons/bs";
import { GiFoodTruck } from "react-icons/gi";

import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={cx(styles.headerBar, "container")}>
      <a href="/" className={styles.logo}>
        <span className={styles.foodTruckIcon}>
          <GiFoodTruck />
        </span>
        <span className={styles.name}>Cookify</span>
      </a>

      <a href="#" className={styles.addRecipeLink}>
        <BsJournalPlus />
      </a>
    </div>
  );
}
