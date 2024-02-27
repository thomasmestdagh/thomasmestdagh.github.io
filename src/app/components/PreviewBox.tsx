import styles from "./PreviewBox.module.css";

interface Props {
  imgSrc: string;
  link: string;
}

export default function PreviewBox({ imgSrc, link }: Props) {
  return (
    <div className={styles.previewBox}>
      <a className={styles.link} href={link}>
        <img className={styles.image} src={imgSrc} alt="" />
      </a>
    </div>
  );
}
