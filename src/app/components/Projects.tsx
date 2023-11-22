import styles from "./Projects.module.css";
import Project from "./Project";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Project
        name="FITAI"
        screenshot="images/fitai.png"
        technologies={["html", "css", "javascript"]}
        url="https://statuesque-truffle-a91c8c.netlify.app/"
        flipped={false}
      >
        FITAI is a landing page for a fictional fitness company. The website is
        optimized for all devices and focuses on accessibility.
      </Project>
      <Project
        name="DRAWIT"
        screenshot="images/chatter.jpg"
        technologies={["html", "css", "javascript", "react"]}
        url="#"
        flipped={true}
      >
        A simple drawing application i built using the canvas API for all the
        drawing and React to manage state. The app allows the user to download
        their drawing as a png file or save the project using localstorage.
      </Project>
    </div>
  );
}
