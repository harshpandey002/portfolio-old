import { useContext, useState } from "react";
import styles from "@/styles/Header.module.css";
import ThemeContext from "@/context/ThemeContext";
import { Spiral as Hamburger } from "hamburger-react";
import Menu from "./Menu";

export default function Header() {
  const { setCursor, setBackground, setFont } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

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
          <li name="Resume">Contact</li>
        </ul>

        <div className={`${styles.menu} ${isOpen && `${styles.color}`} `}>
          <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
        </div>
        <Menu isOpen={isOpen} />
      </nav>
      <div
        onClick={() => setIsOpen(false)}
        className={`${styles.overlay} ${isOpen && `${styles.active}`} `}
      />
    </div>
  );
}
