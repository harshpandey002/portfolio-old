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
            <img
              src="https://gcdn.pbrd.co/images/IY3T3VQ35Bp0.png?o=1"
              alt=""
            />
          </div>
          <div className={styles.desc}>
            <h2>Piggy</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident doloribus aspernatur laudantium sed pariatur aliquam,
              facilis tempora. Quaerat, architecto asperiores.
            </p>
          </div>
        </motion.div>
        <ScrollTrigger onEnter={handleScroll}>
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img
                src="https://gcdn.pbrd.co/images/gMD1SxB1XyPl.png?o=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h2>EduCompanion</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img
                src="https://gcdn.pbrd.co/images/uQG5L6yuIZMu.png?o=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h2>Beyond Pinks</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className={styles.project}>
            <div className={styles.img}>
              <img
                src="https://gcdn.pbrd.co/images/cL062BmA76zg.png?o=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h2>E-Medic</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident doloribus aspernatur laudantium sed pariatur aliquam,
                facilis tempora. Quaerat, architecto asperiores.
              </p>
            </div>
          </motion.div>
        </ScrollTrigger>

        <motion.div variants={item} className={styles.project}>
          <div className={styles.img}>
            <img
              src="https://gcdn.pbrd.co/images/HsW8sG90M19P.png?o=1"
              alt=""
            />
          </div>
          <div className={styles.desc}>
            <h2>Protege</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident doloribus aspernatur laudantium sed pariatur aliquam,
              facilis tempora. Quaerat, architecto asperiores.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
