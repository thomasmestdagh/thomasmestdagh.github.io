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
        FITAI is a landing page for a fictional fitness company. <br />
        The website scales well on all devices and relies on only HTML, CSS, and
        JavaScript. I had a lot of fun making this because it took me back to
        that moment when I first started learning web development.
      </Project>
      <Project
        name="PERSONAL WEBSITE"
        screenshot="images/portfolio-website.png"
        technologies={[
          "html",
          "css",
          "javascript",
          "react",
          "nextjs",
          "typescript",
        ]}
        url="#"
        flipped={true}
      >
        This website was built using Nextjs, Typescript, and React and it&apos;s
        the website that is used to showcase my skills and the projects I&apos;m
        currently working on. Don&apos;t forget to play some Pacman while
        you&apos;re here.
      </Project>
      <Project
        name="QUICK TODO"
        screenshot="images/quick-todo.png"
        technologies={[
          "html",
          "css",
          "javascript",
          "react",
          "typescript",
          "vite",
        ]}
        url="https://quick-todo-react.netlify.app/"
        flipped={false}
      >
        A simple todo-list app with drag and drop functionality built in React.
        The app doesn't have a backend so it uses localstorage to store the todo
        data when a change occurs.
      </Project>
    </div>
  );
}
