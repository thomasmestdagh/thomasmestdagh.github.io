import styles from "./About.module.css";
import ProgressBar from "./ProgressBar";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <img
          src="/images/portfolio-picture.jpg"
          alt="thomas mestdagh"
          className={styles.aboutImage}
          width="300"
          height="300"
        />
        <p className={styles.aboutJob}>Front-end Web Developer</p>
        <p className={styles.aboutName}>Thomas Mestdagh</p>
        <p className={styles.aboutParagraph}>
          Hi, i&apos;m Thomas. <br />
          I&apos;m a self-taught front end developer trying to land my first
          job. In my free time i love playing around with all things
          game-development so i try to gamify the web wherever i can. <br />
          <br />
          So if you are looking for a junior front end developer, don&apos;t
          hesitate to contact me.
        </p>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>skills</h3>
        <ProgressBar name="HTML" progress={90} />
        <ProgressBar name="CSS" progress={90} />
        <ProgressBar name="JavaScript" progress={85} />
        <ProgressBar name="React" progress={85} />
        <ProgressBar name="NextJs" progress={80} />
        <ProgressBar name="UI Design" progress={50} />
        <ProgressBar name="Figma" progress={60} />
      </div>
    </>
  );
}
