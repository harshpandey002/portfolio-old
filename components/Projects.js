import { useState } from "react";
import styles from "@/styles/Projects.module.css";
import BeyondPinks from "./Projects/BeyondPinks";
import EduCompanion from "./Projects/EduCompanion";
import Hysea from "./Projects/Hysea";
import ScrollTrigger from "react-scroll-trigger";

export default function Projects() {
  const [project, setProject] = useState("");

  return (
    <div className={styles.container}>
      {project == "EduCompanion" && <EduCompanion />}
      {project == "BeyondPinks" && <BeyondPinks />}
      {project == "Hysea" && <Hysea />}
      <div className={styles.flex}>
        <ScrollTrigger onEnter={() => setProject("EduCompanion")}>
          <div className={styles.black} />
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setProject("BeyondPinks")}>
          <div />
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setProject("Hysea")}>
          <div />
        </ScrollTrigger>
      </div>
    </div>
  );
}
