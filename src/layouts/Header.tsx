import { LuShoppingCart } from "react-icons/lu";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Shopping List</h1>

      <span className={styles.icon}>
        <LuShoppingCart />
      </span>
      <small className={styles.headerSubtitle}>
        Shopping ingredients for tasty food
      </small>
    </header>
  );
}
