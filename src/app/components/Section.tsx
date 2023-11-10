import { ReactNode } from "react";

import styles from "./Section.module.css";

interface Props {
  id: string;
  title: string;
  bgColor: string;
  children: ReactNode;
}

export default function Section({ id, title, bgColor, children }: Props) {
  return (
    <section
      id={id}
      className={styles.section}
      style={{ backgroundColor: bgColor }}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
