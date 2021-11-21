import { useContext, useEffect } from "react";
import styles from "@/styles/ProjectMob.module.css";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const projectjs = [
  {
    name: "Piggy",
    image: "https://gcdn.pbrd.co/images/IY3T3VQ35Bp0.png?o=1",
    desc: "Piggy is a money tracking application. This app helps user to track the flow of money with the help of budget feature. This app also motivates user to save money by displaying future projections of account balance with accurate calcutaions based on transactions by user.",
  },
  {
    name: "EduCompanion",
    image: "https://gcdn.pbrd.co/images/gMD1SxB1XyPl.png?o=1",
    desc: "A platform for learners where they get exact pathway to excel in the field of their choice. This app list out all the skills, job details, salary, etc. along with exact courses they need to learn in order to master the feild.",
  },
  {
    name: "Beyond Pinks",
    image: "https://gcdn.pbrd.co/images/uQG5L6yuIZMu.png?o=1",
    desc: "A mentoring platform for women where they can book meetings with mentors who have 10 years of corporate leadership expertise and experience. This app provides a very smooth experience from signing up, to booking slot with the mentor.",
  },
  {
    name: "E-Medic",
    image: "https://gcdn.pbrd.co/images/cL062BmA76zg.png?o=1",
    desc: "A concept design for an application where patients can interact with doctors instantly and download the prescription once the payment is completed.",
  },
  {
    name: "Protege",
    image: "https://gcdn.pbrd.co/images/HsW8sG90M19P.png?o=1",
    desc: "A chatting platform for college students where a junior can get instant help with their senior, who is registered in that platform as a mentor.",
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
      y: 100,
    },
    animate: {
      y: 0,
      transition: { duration: 0.8, type: "ease-out" },
    },
  };

  const handleScroll = () => {
    setBackground("#131313");
    setFont("lightgray");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          <a id="projects">Featured Projects</a>
        </h2>
      </div>
      <motion.div
        ref={ref}
        variants={test}
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
