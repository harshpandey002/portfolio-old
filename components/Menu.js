import { useContext } from "react";
import styles from "@/styles/Menu.module.css";
import ThemeContext from "@/context/ThemeContext";
import Link from "next/link";

export default function Menu({ isOpen }) {
  const { setCursor } = useContext(ThemeContext);

  const mouseOver = () => {
    const style = {
      width: "35px",
      height: "35px",
      backgroundColor: "white",
      mixBlendMode: "difference",
    };

    setCursor({ style });
  };

  const mouseOut = () => {
    const style = {
      width: "10px",
      height: "10px",
      backgroundColor: "white",
      mixBlendMode: "difference",
    };

    setCursor({ style });
  };

  return (
    <div className={`${styles.container} ${isOpen && `${styles.active}`}`}>
      <div className={styles.content}>
        <div
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          className={styles.left}
        >
          <p>Menu</p>
          <ul className={styles.nav_links}>
            <Link href="/" passHref>
              <li>
                <div className={styles.flow} name="Home">
                  Home
                </div>
              </li>
            </Link>
            <li>
              <div className={styles.flow} name="Work">
                Work
              </div>
            </li>
            <li>
              <div className={styles.flow} name="About">
                About
              </div>
            </li>
            <Link href="/services" passHref>
              <li>
                <div className={styles.flow} name="Services">
                  Services
                </div>
              </li>
            </Link>
            <li>
              <div className={styles.flow} name="Contact">
                Contact
              </div>
            </li>
          </ul>
        </div>
        <div
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          className={styles.right}
        >
          <p>Social</p>
          <ul className={styles.social_links}>
            <li>
              <div className={styles.slow} name="Facebook">
                Facebook
              </div>
            </li>
            <li>
              <div className={styles.slow} name="Instagram">
                Instagram
              </div>
            </li>
            <li>
              <div className={styles.slow} name="LinkedIn">
                LinkedIn
              </div>
            </li>
            <li>
              <div className={styles.slow} name="Dribble">
                Dribble
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        className={styles.email}
      >
        <p>Get in Touch</p>
        <p className={styles.link}>info@sevic.com</p>
      </div>
    </div>
  );
}
