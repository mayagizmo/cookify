import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; 2023 Made with <span className={styles.heart}>❤</span> in Berlin
    </footer>
  );
}
