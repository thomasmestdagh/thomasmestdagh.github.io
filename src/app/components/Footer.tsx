import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <small className={styles.copyright}>
          © 2023 Thomas Mestdagh. All rights reserved.
        </small>
        <div className={styles.socials}>
          <a href="https://github.com/thomasmestdagh">
            <img src="/images/github.png" alt="github logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
