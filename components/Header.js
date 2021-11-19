import { useContext } from "react";
import styles from "@/styles/Header.module.css";
import ThemeContext from "@/context/ThemeContext";

export default function Header() {
  const { setCursor, setBackground, setFont } = useContext(ThemeContext);

  const mouseOver = () => {
    const style = {
      width: "25px",
      height: "25px",
      mixBlendMode: "difference",
    };

    setBackground("");
    setFont("black");
    setCursor({ style });
  };

  const mouseOut = () => {
    const style = {};
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <h1>Harsh Pandey</h1>
        </div>

        <ul
          onMouseOut={mouseOut}
          onMouseOver={mouseOver}
          className={styles.nav_links}
        >
          <li name="Featured Works">Featured Works</li>
          <li name="Projects">Projects</li>
          <li name="Tech Stack">Tech Stack</li>
          <li name="Experience">Experience</li>
          <li name="Resume">Resume</li>
        </ul>
      </nav>
    </div>
  );
}
