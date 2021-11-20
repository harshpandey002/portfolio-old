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

  const stackOver = () => {
    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: "white",
      border: "1px solid lightgray",
    };
    const jsx = (
      <div className="img stack">
        <img src="https://gcdn.pbrd.co/images/NV30ov81wJCQ.png?o=1" alt="" />
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
            Collaborated remotely with this international company from spain.
            EduCompanion is a platform for learners which provides the exact
            pathway to excel in a perticular feild. As a freelance developer, I
            designed and developed Front-End of the platform.
          </p>
        </motion.div>
        <motion.div variants={item} className={styles.block}>
          <div className={styles.detail}>
            <h3>Beyond Pinks</h3>
            <p>Sep 2021 - Nov 2021</p>
          </div>
          <p>
            Designed and Developed a mentoring platform which solved the
            business problem of reserving slots for b2b. Beyond Pinks is a
            company situated in Hyderabad which focuses on Women Empowerment.
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
