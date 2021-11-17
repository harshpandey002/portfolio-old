import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const heroText =
    "We create highly responsive applications with the remarkable aesthetics that deliver a spectrum of result oriented digital experience.";
  let i = -1;
  const { setBackground } = useContext(ThemeContext);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setBackground("");
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={ref} className={styles.top}>
          <div className={styles.heading}>
            <div>
              <h1>
                <span style={{ color: "#5c5c5c" }}>UI/UX Design.</span>{" "}
                <span style={{ color: "#9c9c9c" }}>Website Development.</span>{" "}
              </h1>
            </div>
            <div>
              <h1>
                <span style={{ color: "#9c9c9c" }}>Branding.</span>{" "}
                <span style={{ color: "#727272" }}>Business Consulting.</span>{" "}
              </h1>
            </div>
          </div>

          <div className={styles.squareImg}>
            {/* <img
              src="https://images.unsplash.com/photo-1634153570366-deda92ecf625?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTQyNjExMw&ixlib=rb-1.2.1&q=80&w=500"
              alt=""
            /> */}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.rectangleImg}>
            {/* <img
              src="https://images.unsplash.com/photo-1632810746169-429fce9489fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTQyNjEwOQ&ixlib=rb-1.2.1&q=80&w=700"
              alt=""
            /> */}
          </div>

          <p className={styles.text}>
            {heroText.split(" ").map((text) => (
              <div key={i++}>
                <p>{text}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
