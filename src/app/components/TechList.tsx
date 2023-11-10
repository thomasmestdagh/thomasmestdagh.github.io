import styles from "./TechList.module.css";

interface Props {
  techs: string[];
}

const skillsData = [
  {
    name: "html",
    imgSrc: "/images/html.png",
    tooltip: "HTML",
  },
  {
    name: "css",
    imgSrc: "/images/css.png",
    tooltip: "CSS",
  },
  {
    name: "javascript",
    imgSrc: "/images/javascript.png",
    tooltip: "JavaScript",
  },
  {
    name: "react",
    imgSrc: "/images/react.png",
    tooltip: "React",
  },
  {
    name: "nextjs",
    imgSrc: "/images/nextjs.png",
    tooltip: "NextJS",
  },
];

export default function TechList({ techs }: Props) {
  return (
    <div className={styles.techList}>
      {techs.map((tech) => {
        const skillObject = skillsData.find(
          (skillData) => skillData.name === tech
        );

        return skillObject ? (
          <div className={styles.iconBox}>
            <span className={styles.iconTooltip}>{skillObject.tooltip}</span>
            <img className={styles.icon} src={skillObject?.imgSrc} />
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
}
