import { useEffect, useContext } from "react";
import styles from "@/styles/Experience.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import ThemeContext from "@/context/ThemeContext";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const { setBackground, setFont, setCursor } = useContext(ThemeContext);

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
    setBackground("white");
    setFont("black");
  };

  const btnOver = () => {
    const style = {
      width: "85px",
      height: "85px",
    };

    const jsx = (
      <div className="img name">
        <img src="https://gcdn.pbrd.co/images/0FH1nTlCYqJe.png?o=1" alt="" />
      </div>
    );

    setCursor({ style, jsx });
  };

  const btnOut = () => {
    const style = {};
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <ScrollTrigger onEnter={handleScroll}>
        <div className={styles.heading}>
          <h2>
            <a id="experience">Experience</a>
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
          <div className={styles.detail}>
            <h3>EduCompanion</h3>
            <p>Jul 2021 - Oct 2021</p>
          </div>
          <p>
            I use Nextjs for all my projects as it is the most advanced
            technology out there right now. Nextjs is a framework of Reactjs,
            which supports server side rendering make the website super fast and
            enhances user experience.
          </p>
        </motion.div>
        <motion.div variants={item} className={styles.block}>
          <div className={styles.detail}>
            <h3>Beyond Pinks</h3>
            <p>Sep 2021 - Nov 2021</p>
          </div>
          <p>
            I use Nodejs, Expressjs and Mongoose as my back-end technologies.
            They are most popular technologies for backend. Mongoose provides
            seemless integration with MongoDb which is a very secure database.
          </p>
        </motion.div>
      </motion.div>
      <button
        onMouseOut={btnOut}
        onMouseOver={btnOver}
        onClick={() => window.open("https://bit.ly/3HAo7zf", "blank")}
        className={styles.resume}
      >
        Resume
      </button>
    </div>
  );
}
