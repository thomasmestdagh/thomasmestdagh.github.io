import styles from "./Pacman.module.css";

export default function Pacman() {
  return (
    <div className={styles.container}>
      {/* Pacman */}
      <p className={styles.score}>Score: 0</p>
      <div className={styles.spaceShip}>
        <img src="./images/pacman.svg" alt="" />
      </div>

      <svg className={styles.svgItem}>
        <line
          id="line"
          x1="50"
          y1="50"
          x2="200"
          y2="200"
          stroke-dasharray="3,10"
          className={styles.dottedLine}
        />
        <ellipse
          id="outer-circle"
          cx="0"
          cy="0"
          rx="30"
          ry="30
            "
          className={styles.outerCircle}
        ></ellipse>
        <ellipse
          id="inner-circle"
          cx="0"
          cy="0"
          rx="1"
          ry="1"
          className={styles.innerCircle}
        ></ellipse>
        <ellipse
          id="pellet"
          cx="100"
          cy="100"
          rx="5"
          ry="5"
          className={styles.pellet}
        ></ellipse>
      </svg>
    </div>
  );
}
