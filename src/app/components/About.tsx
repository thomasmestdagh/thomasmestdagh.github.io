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
          Hi, I'm Thomas. 👋
          <br />
          I'm a self-taught front-end developer passionate about creating great
          user experiences. <br />
          Infusing web projects with elements of playfulness is my forte. <br />
          My journey is marked by continuous learning and experimentation,
          driven by a desire to gamify the web. <br />
          Through personal projects, I've honed my skills and cultivated a knack
          for problem-solving. <br />
          I'm looking forward to contribute my creativity and determination to
          your team. <br />
          Let's embark on this journey together, shaping great digital
          experiences along the way.
        </p>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>skills</h3>
        <ProgressBar name="HTML" progress={90} />
        <ProgressBar name="CSS" progress={90} />
        <ProgressBar name="JavaScript" progress={85} />
        <ProgressBar name="React" progress={85} />
        <ProgressBar name="TypeScript" progress={85} />
        <ProgressBar name="NextJs" progress={80} />
        <ProgressBar name="Angular" progress={70} />
        <ProgressBar name="Figma" progress={60} />
      </div>
    </>
  );
}
