import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";
import Image from "next/image";
import styles from "@/styles/Hysea.module.css";

export default function Hysea() {
  const { setBackground } = useContext(ThemeContext);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setBackground("#cfd6ce");
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={ref} className={styles.heading}>
          <h1>Hysea</h1>
        </div>

        <Box src="https://source.unsplash.com/random/420x301" name="one" />
        <Box src="https://source.unsplash.com/random/440x320" name="two" />
        <Box src="https://source.unsplash.com/random/405x316" name="three" />
        <Box src="https://source.unsplash.com/random/434x342" name="four" />
        <Box src="https://source.unsplash.com/random/420x341" name="five" />
      </div>
    </div>
  );
}

export const Box = ({ src, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
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
      scale: 0.7,
      y: 100,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, type: "ease" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={test}
      initial="initial"
      animate={animation}
      className={`${styles.img} ${styles[name]} `}
    >
      <Image src={src} layout="fill" alt="" />
    </motion.div>
  );
};
