import { useEffect, useState, useContext } from "react";
import styles from "@/styles/Works.module.css";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";

export default function Works() {
  const { setBackground } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [theme, ThemeInView] = useInView();

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  });

  useEffect(() => {
    if (ThemeInView) {
      setBackground("#cad9c3");
    }
  }, [ThemeInView]);

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
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "ease-out" },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={theme} className={styles.scroller} />
        <Parallax y={[-35, 20]}>
          <div className={styles.heading}>
            <h1>Our Works</h1>
          </div>
        </Parallax>
        <motion.div
          ref={ref}
          variants={test}
          initial="initial"
          animate={animation}
          className={styles.boxes}
        >
          <div className={styles.top}>
            <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://source.unsplash.com/random/500x401"
            />
            <Box
              variants={item}
              width="30%"
              height="35vh"
              src="https://source.unsplash.com/random/500x411"
            />
            <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://source.unsplash.com/random/500x410"
            />
            <Box
              variants={item}
              width="30%"
              height="35vh"
              src="https://source.unsplash.com/random/500x421"
            />
          </div>
          <div className={styles.bottom}>
            <Box
              variants={item}
              width="30%"
              height="35vh"
              src="https://source.unsplash.com/random/520x412"
            />
            <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://source.unsplash.com/random/520x402"
            />
            <Box
              variants={item}
              width="30%"
              height="35vh"
              src="https://source.unsplash.com/random/501x402"
            />
            <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://source.unsplash.com/random/502x402"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const Box = ({ width, height, src, variants }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={variants}
      style={{ width, height }}
      className={styles.img}
    >
      <img
        style={{ transform: `translateY(${offsetY * 0.15 - 80}px)` }}
        src={src}
        alt=""
      />
    </motion.div>
  );
};
