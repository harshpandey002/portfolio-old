import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const smallTxt =
    "I’m an individual with solid design and development expertise. I build mordern websites with smooth animations and transitions.";
  const bigTxt = "UI / UX Designer. Web Developer. Freelancer.";
  let i = -1;
  const { setBackground, setFont, setCursor } = useContext(ThemeContext);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setBackground("");
      setFont("black");
    }
  }, [inView]);

  const image = [
    "https://gcdn.pbrd.co/images/IY3T3VQ35Bp0.png?o=1",
    "https://gcdn.pbrd.co/images/cL062BmA76zg.png?o=1",
    "https://gcdn.pbrd.co/images/NV30ov81wJCQ.png?o=1",
  ];

  const mouseOver = (n) => {
    const style = {
      width: "120px",
      height: "120px",
      mixBlendMode: "difference",
    };
    const jsx = (
      <div className="img hero">
        <img src={image[n]} alt="" />
      </div>
    );
    setCursor({ style, jsx });
  };

  const mouseOut = () => {
    const style = {};
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={ref} className={styles.top}>
          <div
            onMouseOver={() => mouseOver(0)}
            onMouseOut={mouseOut}
            className={styles.word}
          >
            <span>
              <h1>
                UI <span>/</span> UX
              </h1>
            </span>
          </div>
          <div
            onMouseOver={() => mouseOver(1)}
            onMouseOut={mouseOut}
            className={styles.word}
          >
            <span>
              <h1>Website</h1>
            </span>
          </div>
          <div
            onMouseOver={() => mouseOver(2)}
            onMouseOut={mouseOut}
            className={styles.word}
          >
            <span>
              <h1>Freelance</h1>
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.wrapper}>
            {smallTxt.split(" ").map((txt) => (
              <div key={i++} className={styles.overflow}>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div className={styles.bottom}>
//    <p className={styles.text}>
//      {smallTxt.split(" ").map((text) => (
//        <div key={i++}>
//          <p>{text}</p>
//        </div>
//      ))}
//    </p>
//  </div>;
