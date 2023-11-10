"use client";

import Link from "next/link";
import styles from "./NavMenu.module.css";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  }

  return (
    <nav className={styles.navMenu}>
      <div
        className={`${styles.nav} ${
          isOpen ? styles.navOpen : styles.navClosed
        }`}
      >
        {!isOpen ? (
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon />
          </button>
        ) : (
          <>
            <button
              className={styles.menuButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <XMarkIcon className={styles.listItemIcon} />
            </button>

            <ul className={styles.linkList}>
              <li className={styles.listItem}>
                <Link
                  className={styles.listItemLink}
                  href="#header"
                  onClick={handleScroll}
                >
                  <HomeIcon className={styles.listItemIcon} />
                  home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.listItemLink}
                  href="#about"
                  onClick={handleScroll}
                >
                  <UserIcon className={styles.listItemIcon} />
                  about me
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.listItemLink}
                  href="#projects"
                  onClick={handleScroll}
                >
                  <ComputerDesktopIcon className={styles.listItemIcon} />
                  projects
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.listItemLink}
                  href="#contact"
                  onClick={handleScroll}
                >
                  <EnvelopeIcon className={styles.listItemIcon} />
                  contact
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
