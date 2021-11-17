import { useEffect, useState, useContext } from "react";
import styles from "@/styles/Header.module.css";
import { Spiral as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import ThemeContext from "@/context/ThemeContext";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const { setCursor } = useContext(ThemeContext);

  useEffect(() => {
    const style = {};
    if (isOpen) {
      document.body.style.overflow = "hidden";
      style = {
        backgroundColor: "white",
        mixBlendMode: "difference",
      };
    } else {
      document.body.style.overflow = "initial";
    }
    setCursor({ style });
  }, [isOpen]);

  const mouseOver = () => {
    const style = {
      width: "35px",
      height: "35px",
    };

    if (isOpen) {
      style = {
        width: "35px",
        height: "35px",
        backgroundColor: "white",
        mixBlendMode: "difference",
      };
    }

    const jsx = <div className="test">{isOpen ? <></> : <p>Menu</p>}</div>;

    setCursor({ style, jsx });
  };

  const mouseOverlay = () => {
    const style = {
      width: "35px",
      height: "35px",
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
    if (isOpen) {
      style = {
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        mixBlendMode: "difference",
      };
    }
    setCursor({ style });
  };

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <h1>Sevic</h1>
        </div>
        <div
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          className={styles.menu}
        >
          <Hamburger
            duration={0.8}
            size={26}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>

      <div
        onClick={() => {
          setOpen(false);
        }}
        onMouseOver={mouseOverlay}
        onMouseOut={mouseOut}
        className={`${styles.overlay} ${isOpen && `${styles.active}`}`}
      />
      <Menu isOpen={isOpen} />
    </div>
  );
}
