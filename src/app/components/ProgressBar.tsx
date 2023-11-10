"use client";

import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

interface Props {
  name: string;
  progress: number;
}

export default function ProgressBar({ name, progress }: Props) {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    setTimeout(() => setProg(progress), 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <span className={styles.name}>{name}</span>
        <span className={styles.percent}>{`${progress}%`}</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressValue}
          style={{ width: `${prog}%` }}
        ></div>
      </div>
    </div>
  );
}
