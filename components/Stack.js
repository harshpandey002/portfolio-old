import { useContext, useEffect } from "react";
import styles from "@/styles/Stack.module.css";
import ScrollTrigger from "react-scroll-trigger";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Stack() {
  const { setBackground, setFont, setCursor } = useContext(ThemeContext);

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

  const handleColor = () => {
    setBackground("white");
    setFont("black");
  };

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

  const stackOver = () => {
    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: "white",
      border: "1px solid lightgray",
    };
    const jsx = (
      <div className="img stack">
        <img src="https://gcdn.pbrd.co/images/VzFj9aFziE29.png?o=1" alt="" />
      </div>
    );
    setCursor({ style, jsx });
  };

  const stackOut = () => {
    const style = {};
    setCursor({ style });
  };

  return (
    <div
      onMouseOver={stackOver}
      onMouseOut={stackOut}
      className={styles.container}
    >
      <ScrollTrigger onEnter={handleColor}>
        <div className={styles.heading}>
          <h2>
            <a id="stack">Technology Stack</a>
          </h2>
        </div>
      </ScrollTrigger>
      <motion.div
        ref={ref}
        variants={test}
        initial="initial"
        animate={animation}
        className={styles.content}
      >
        <motion.div variants={item} className={styles.block}>
          <h3>Front-End</h3>
          <p>
            I use Nextjs for all of my projects since it is currently the most
            advanced technology available. Nextjs is a Reactjs framework that
            enables the server-side rendering, which speeds up the website and
            improves the user experience.
          </p>
        </motion.div>
        <motion.div variants={item} className={styles.block}>
          <h3>Back-End</h3>
          <p>
            My back-end technologies include Nodejs, Expressjs, and Mongoose.
            They are the most widely used backend technology. Mongoose
            integrates seamlessly with MongoDb, which is a highly secure
            database.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
