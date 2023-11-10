import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
