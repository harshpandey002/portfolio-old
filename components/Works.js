import { useEffect, useState } from "react";
import styles from "@/styles/Works.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Works() {
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
  }, [inView]);

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

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          style={{
            transform: `translateY(${offsetY * 0.35 - 450}px) rotate(180deg)`,
          }}
          className={styles.heading}
        >
          <h1>
            <a id="work">Featured Works</a>
          </h1>
        </div>
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
              width="33%"
              height="35vh"
              src="https://gcdn.pbrd.co/images/iEdRPNhrIDHc.png?o=1"
            />
            <Box
              variants={item}
              width="33%"
              height="45vh"
              src="https://gcdn.pbrd.co/images/77GVE0hX4T3B.png?o=1"
            />
            {/* <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://gcdn.pbrd.co/images/f8WB4JKgUPcW.png?o=1"
            /> */}
            <Box
              variants={item}
              width="33%"
              height="35vh"
              src="https://gcdn.pbrd.co/images/f8WB4JKgUPcW.png?o=1"
            />
          </div>
          <div className={styles.bottom}>
            <Box
              variants={item}
              width="33%"
              height="45vh"
              src="https://gcdn.pbrd.co/images/9T0AB5MWDjYa.png?o=1"
            />
            {/* <Box
              variants={item}
              width="25%"
              height="45vh"
              src="https://gcdn.pbrd.co/images/aGaudXoqLun7.png?o=1"
            /> */}
            <Box
              variants={item}
              width="33%"
              height="35vh"
              src="https://gcdn.pbrd.co/images/fQ5NKyssw0Mh.png?o=1"
            />
            <Box
              variants={item}
              width="33%"
              height="45vh"
              src="https://gcdn.pbrd.co/images/d9nrFrSL5APV.png?o=1"
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
