"use client";

import Button from "./Button";
import styles from "./Header.module.css";
import Link from "next/link";
import Pacman from "./Pacman";

interface Props {
  id: string;
}

export default function Header({ id }: Props) {
  function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header id={id} className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello I&apos;m{" "}
          <span className={styles.titleName}>Thomas Mestdagh</span>
          <br className={styles.lineBreak} />
          I&apos;m a Front-end Web Developer
        </h1>
      </div>
      {/* <Pacman /> */}
      <div className={styles.scrollButton}>
        <Link className={styles.aboutLink} href="#about" onClick={handleScroll}>
          <img src="./images/arrow-down.svg" alt="" />
        </Link>
      </div>
    </header>
  );
}
