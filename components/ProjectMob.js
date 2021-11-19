import { useContext, useEffect } from "react";
import styles from "@/styles/ProjectMob.module.css";
import ScrollTrigger from "react-scroll-trigger";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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

  // TODO change names
  const test = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.04, staggerDirection: 1 },
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
    <ScrollTrigger onEnter={handleScroll}>
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
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img src="https://source.unsplash.com/random/600x450" alt="" />
            </div>
            <div className={styles.desc}>
              <h2>Project name</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img src="https://source.unsplash.com/random/601x420" alt="" />
            </div>
            <div className={styles.desc}>
              <h2>Project name</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img src="https://source.unsplash.com/random/601x440" alt="" />
            </div>
            <div className={styles.desc}>
              <h2>Project name</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img src="https://source.unsplash.com/random/611x450" alt="" />
            </div>
            <div className={styles.desc}>
              <h2>Project name</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ScrollTrigger>
  );
}
