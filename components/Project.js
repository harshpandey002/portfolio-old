import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Project.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ThemeContext from "@/context/ThemeContext";

const source = [
  {
    one: "",
    two: "",
  },
  {
    one: "https://images.unsplash.com/photo-1636216713187-c5031b0a441d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjY4NQ&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635099065551-41a013869020?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjYyMQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1635589843460-c2b760341882?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjA0Mw&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1634588174678-4672a6bcd830?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjAxOQ&ixlib=rb-1.2.1&q=80&w=300",
    three:
      "https://images.unsplash.com/photo-1635939236098-855a6cf1c3e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjgzOQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1634433480491-07e21ad0af5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY0NQ&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1634113755405-4c34d7abcbb7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY2NA&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1634749724963-721227794e53?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NTk2Ng&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635425031670-4928f00e517c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NTk5Nw&ixlib=rb-1.2.1&q=80&w=300",
    three:
      "https://images.unsplash.com/photo-1634433480491-07e21ad0af5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY0NQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1635794275221-4d8cf075d461?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjgxODA4NA&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635362877765-9d6ac192b996?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjgxODA0Nw&ixlib=rb-1.2.1&q=80&w=300",
  },
];

export default function Project() {
  const [src, setSrc] = useState(source[0]);
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

  const mouseOver = (e, x) => {
    const fontColor = "black";
    const backgroundColor = "#F5F5F5";

    const style = {
      width: "35px",
      height: "35px",
      backgroundColor: "white",
      mixBlendMode: "difference",
    };

    switch (e.target.innerHTML) {
      case "Piggy":
        backgroundColor = "#131313";
        fontColor = "#ffffff";
        // style = {
        //   width: "35px",
        //   height: "35px",
        //   backgroundColor: "white",
        //   mixBlendMode: "difference",
        // };
        break;
      case "EduCompanion":
        break;
      case "Beyond Pinks":
        backgroundColor = "#ffffff";

        break;
      case "E-Medic":
        backgroundColor = "#131313";
        fontColor = "#ffffff";
        // style = {
        //   width: "35px",
        //   height: "35px",
        //   backgroundColor: "white",
        //   mixBlendMode: "difference",
        // };
        break;
      case "Protege":
        break;
    }

    e.target.style.color = fontColor;
    setFont(fontColor);
    setBackground(backgroundColor);
    setSrc(source[x]);
    setCursor({ style });
  };

  const mouseOut = (e) => {
    const style = {
      width: "5px",
      height: "5px",
    };

    e.target.style.color = "gray";
    setBackground("white");
    setFont("black");
    setSrc(source[0]);
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>
            <a id="projects">Featured Projects</a>
          </h3>
          <motion.ul
            ref={ref}
            variants={test}
            initial="initial"
            animate={animation}
            className={styles.links}
          >
            <motion.li
              variants={item}
              onMouseOver={(e) => mouseOver(e, 1)}
              onMouseOut={mouseOut}
            >
              Piggy
            </motion.li>
            <motion.li
              variants={item}
              onMouseOver={(e) => mouseOver(e, 2)}
              onMouseOut={mouseOut}
            >
              EduCompanion
            </motion.li>
            <motion.li
              variants={item}
              onMouseOver={(e) => mouseOver(e, 3)}
              onMouseOut={mouseOut}
            >
              Beyond Pinks
            </motion.li>
            <motion.li
              variants={item}
              onMouseOver={(e) => mouseOver(e, 4)}
              onMouseOut={mouseOut}
            >
              E-Medic
            </motion.li>
            <motion.li
              variants={item}
              onMouseOver={(e) => mouseOver(e, 5)}
              onMouseOut={mouseOut}
            >
              Protege
            </motion.li>
          </motion.ul>
        </div>
        {!!src.three ? <ThreeImage src={src} /> : <TwoImage src={src} />}
        {!src.one && <OneImage />}
      </div>
    </div>
  );
}

const TwoImage = ({ src }) => {
  return (
    <div className={styles.right}>
      {!!src.one && (
        <div className={styles.leftImage}>
          <img src={src.one} alt="" />
        </div>
      )}
      {!!src.two && (
        <div className={styles.rightImage}>
          <img src={src.two} alt="" />
        </div>
      )}
    </div>
  );
};

const ThreeImage = ({ src }) => {
  return (
    <div className={styles.right}>
      <div className={styles.one}>
        <img src={src.one} alt="" />
      </div>
      <div className={styles.two}>
        <img src={src.two} alt="" />
      </div>
      <div className={styles.three}>
        <img src={src.three} alt="" />
      </div>
    </div>
  );
};

const OneImage = () => {
  return (
    <div className={styles.right}>
      <div className={styles.OneImg}>
        <img
          src="https://images.unsplash.com/photo-1635868713754-22daa61bc2c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzI0NjMxMA&ixlib=rb-1.2.1&q=80&w=600"
          alt=""
        />
      </div>
    </div>
  );
};
