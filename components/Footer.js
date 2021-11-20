import { useContext } from "react";
import styles from "@/styles/Footer.module.css";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ThemeContext from "@/context/ThemeContext";

export default function Footer() {
  const { setCursor } = useContext(ThemeContext);

  const mouseOver = (n) => {
    const style = {
      width: "35px",
      height: "35px",
      backgroundColor: "white",
      mixBlendMode: "difference",
    };

    setCursor({ style });
  };

  const mouseOut = () => {
    const style = {};
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          <a id="contact">Harsh Pandey</a>
        </h1>
      </div>
      <div
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        className={styles.right}
      >
        <div className={styles.icons}>
          <AiFillGithub
            onClick={() =>
              window.open("https://github.com/harshpandey002", "_blank")
            }
          />
          <FaLinkedinIn
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/harsh-kumar-pandey-5ab9071aa/",
                "_blank"
              )
            }
          />
          <AiFillInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/harshpandey_002/",
                "_blank"
              )
            }
          />
        </div>
        <div className={styles.email}>
          <a href="mailto: coding.harsh@gmail.com">coding.harshp@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
