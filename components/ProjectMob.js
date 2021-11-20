import { useState, useContext, useEffect } from "react";
import styles from "@/styles/ProjectMob.module.css";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const projectjs = [
  {
    name: "Piggy",
    image: "https://gcdn.pbrd.co/images/IY3T3VQ35Bp0.png?o=1",
    desc: "lorem ipsum sonort sdfsd fds fsejdnfcwesurif hwensdiukfjc shdifuah frdyugfhbveru sfgeryhfb ",
  },
  {
    name: "EduCompanion",
    image: "https://gcdn.pbrd.co/images/gMD1SxB1XyPl.png?o=1",
    desc: "lorem ipsum sonort sdfsd fds fsejdnfcwesurif hwensdiukfjc shdifuah frdyugfhbveru sfgeryhfb ",
  },
  {
    name: "Beyond Pinks",
    image: "https://gcdn.pbrd.co/images/uQG5L6yuIZMu.png?o=1",
    desc: "lorem ipsum sonort sdfsd fds fsejdnfcwesurif hwensdiukfjc shdifuah frdyugfhbveru sfgeryhfb ",
  },
  {
    name: "E-Medic",
    image: "https://gcdn.pbrd.co/images/cL062BmA76zg.png?o=1",
    desc: "lorem ipsum sonort sdfsd fds fsejdnfcwesurif hwensdiukfjc shdifuah frdyugfhbveru sfgeryhfb ",
  },
  {
    name: "Protege",
    image: "https://gcdn.pbrd.co/images/HsW8sG90M19P.png?o=1",
    desc: "lorem ipsum sonort sdfsd fds fsejdnfcwesurif hwensdiukfjc shdifuah frdyugfhbveru sfgeryhfb ",
  },
];

export default function ProjectMob() {
  const { setBackground, setFont } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  });

  const test = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };

  const item = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: { duration: 0.5, type: "ease-out" },
    },
  };

  const handleScroll = () => {
    setBackground("#131313");
    setFont("lightgray");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Featured Projects</h2>
      </div>
      <motion.div
        ref={ref}
        initial="initial"
        animate={animation}
        className={styles.content}
      >
        {projectjs.map((project) => (
          <ProjectCard key={project} variants={item} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

const ProjectCard = ({ variants, project }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div variants={variants} className={styles.project}>
      <div className={styles.img}>
        <img src={project.image} alt={project.name} />
      </div>
      <div className={styles.desc}>
        <h2>{project.name}</h2>
        <p>{project.desc}</p>
      </div>
    </motion.div>
  );
};
