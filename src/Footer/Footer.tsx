import { FaRegCopyright } from "react-icons/fa6";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerBar}>
      <div className={styles.copyright}>
        <span className={styles.copyrightIcon}>
          <FaRegCopyright />
        </span>
        <span>Made with ❤ in Berliiiiiin.</span>
      </div>
      <div className={styles.year}>2024</div>
    </div>
  );
}
