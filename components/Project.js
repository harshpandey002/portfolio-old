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
    one: "https://gcdn.pbrd.co/images/77GVE0hX4T3B.png?o=1",
    two: "https://gcdn.pbrd.co/images/iEdRPNhrIDHc.png?o=1",
  },
  {
    one: "https://gcdn.pbrd.co/images/YBEyPw37XaNu.png?o=1",
    two: "https://gcdn.pbrd.co/images/0avLfa6ptZxi.png?o=1",
    three: "https://gcdn.pbrd.co/images/0naEnsad1BTk.png?o=1",
  },
  {
    one: "https://gcdn.pbrd.co/images/aGaudXoqLun7.png?o=1",
    two: "https://gcdn.pbrd.co/images/9T0AB5MWDjYa.png?o=1",
  },
  {
    one: "https://gcdn.pbrd.co/images/fQ5NKyssw0Mh.png?o=1",
    two: "https://gcdn.pbrd.co/images/mrOiLZtymoKy.png?o=1",
    three: "https://gcdn.pbrd.co/images/f8WB4JKgUPcW.png?o=1",
  },
  {
    one: "https://gcdn.pbrd.co/images/d9nrFrSL5APV.png?o=1",
    two: "https://gcdn.pbrd.co/images/phkXjLNvCHwj.png?o=1",
  },
];

export default function Project() {
  const [src, setSrc] = useState(source[0]);
  const { setBackground, setFont, setCursor } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

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
      transition: { duration: 0, type: "tween" },
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
        break;
      case "EduCompanion":
        backgroundColor = "#131313";
        fontColor = "#ffffff";
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

  const handleOpen = (e) => {
    mouseOut(e);
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>
            <a id="project">Featured Projects</a>
          </h3>
          <motion.ul
            onClick={handleOpen}
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
        {/* {!src.one && <OneImage />} */}
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
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

// const OneImage = () => {
//   return (
//     <div className={styles.right}>
//       <div className={styles.leftImage}>
//         <img
//           src="https://images.unsplash.com/photo-1636216713187-c5031b0a441d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjY4NQ&ixlib=rb-1.2.1&q=80&w=300"
//           alt=""
//         />
//       </div>
//       <div className={styles.rightImage}>
//         <img
//           src="https://images.unsplash.com/photo-1635099065551-41a013869020?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjYyMQ&ixlib=rb-1.2.1&q=80&w=300"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

const Popup = ({ isOpen, setIsOpen }) => {
  const { setCursor } = useContext(ThemeContext);

  const mouseOver = () => {
    const style = {
      width: "30px",
      height: "30px",
    };
    const jsx = (
      <div className="test">
        <p>Close</p>
      </div>
    );

    setCursor({ style, jsx });
  };

  const mouseOut = () => {
    const style = {};

    setCursor({ style });
  };

  const handleClose = () => {
    mouseOut();
    setIsOpen(false);
  };

  return (
    <div
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={handleClose}
      className={`${styles.modal} ${isOpen && `${styles.open}`} `}
    >
      <div className={styles.worker}>
        <img src="https://gcdn.pbrd.co/images/huskiyaAViod.png?o=1" alt="" />
      </div>
      <div className={styles.info}>
        <h2>This page is under development.</h2>
      </div>
    </div>
  );
};
