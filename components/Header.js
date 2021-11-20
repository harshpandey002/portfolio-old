import { useContext, useState } from "react";
import styles from "@/styles/Header.module.css";
import ThemeContext from "@/context/ThemeContext";
import { Spiral as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import Link from "next/link";

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

  const logoOver = (e) => {
    e.target.style.color = "white";
    const style = {
      width: "85px",
      height: "85px",
    };

    const jsx = (
      <div className="img name">
        <img src="https://gcdn.pbrd.co/images/B3oH3HGGrckK.jpg?o=1" alt="" />
      </div>
    );

    setCursor({ style, jsx });
  };

  const logoOut = (e) => {
    e.target.style.color = "";

    const style = {};

    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <nav>
        <div className={`${styles.white} ${isOpen && `${styles.opacity}`}`}>
          <h1 onMouseOver={logoOver} onMouseOut={logoOut}>
            Harsh Pandey
          </h1>
        </div>
        <div className={`${styles.logo} ${!isOpen && `${styles.opacity}`}`}>
          <h1>Harsh Pandey</h1>
        </div>

        <ul
          onMouseOut={mouseOut}
          onMouseOver={mouseOver}
          className={styles.nav_links}
        >
          <li>
            <Link href="/#work">Featured Work</Link>
          </li>

          <li>
            <Link href="/#stack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/#project">Projects</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
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
