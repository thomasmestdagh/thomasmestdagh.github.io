import { Inter_Tight } from "next/font/google";
import styles from "./Project.module.css";
import { ReactNode } from "react";
import PreviewBox from "./PreviewBox";
import TechList from "./TechList";

interface Props {
  name: string;
  screenshot: string;
  technologies: string[];
  url: string;
  flipped: boolean;
  children: ReactNode;
}

export default function Project({
  name,
  screenshot,
  technologies,
  url,
  flipped,
  children,
}: Props) {
  return (
    <div className={`${styles.project} ${flipped ? styles.flipped : ""}`}>
      <div>
        <PreviewBox imgSrc={screenshot} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{children}</p>
        <a href={url} className={styles.link}>
          check it out &rarr;
        </a>
        <TechList techs={technologies} />
      </div>
    </div>
  );
}
