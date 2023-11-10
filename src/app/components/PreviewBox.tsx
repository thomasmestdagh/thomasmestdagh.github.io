import styles from "./PreviewBox.module.css";

interface Props {
  imgSrc: string;
}

export default function PreviewBox({ imgSrc }: Props) {
  return (
    <div className={styles.previewBox}>
      <img className={styles.image} src={imgSrc} alt="" />
    </div>
  );
}
