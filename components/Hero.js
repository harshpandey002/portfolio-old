import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const smallTxt =
    "I’m an individual with solid design and development expertise. I build mordern websites with premium animations and transitions.";
  const bigTxt = "UI / UX Designer. Web Developer. Freelancer.";
  let i = -1;
  const { setBackground, setFont } = useContext(ThemeContext);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setBackground("");
      setFont("black");
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={ref} className={styles.top}>
          <div className={styles.word}>
            <span>
              <h1>UI / UX</h1>
            </span>
          </div>
          <div className={styles.word}>
            <span>
              <h1>Website</h1>
            </span>
          </div>
          <div className={styles.word}>
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
