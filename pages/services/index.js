import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Services.module.css";
import { motion } from "framer-motion";
import ThemeContext from "@/context/ThemeContext";

const source = [
  {
    one: "",
    two: "",
  },
  {
    one: "https://images.unsplash.com/photo-1636216713187-c5031b0a441d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjY4NQ&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635099065551-41a013869020?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjYyMQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1635589843460-c2b760341882?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjA0Mw&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1634588174678-4672a6bcd830?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjAxOQ&ixlib=rb-1.2.1&q=80&w=300",
    three:
      "https://images.unsplash.com/photo-1635939236098-855a6cf1c3e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NjgzOQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1634433480491-07e21ad0af5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY0NQ&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1634113755405-4c34d7abcbb7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY2NA&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1634749724963-721227794e53?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NTk2Ng&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635425031670-4928f00e517c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5NTk5Nw&ixlib=rb-1.2.1&q=80&w=300",
    three:
      "https://images.unsplash.com/photo-1634433480491-07e21ad0af5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjc5MDY0NQ&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    one: "https://images.unsplash.com/photo-1635794275221-4d8cf075d461?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjgxODA4NA&ixlib=rb-1.2.1&q=80&w=300",
    two: "https://images.unsplash.com/photo-1635362877765-9d6ac192b996?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjgxODA0Nw&ixlib=rb-1.2.1&q=80&w=300",
  },
];

export default function Services() {
  const [src, setSrc] = useState(source[0]);
  const { setBackground, setFont, setCursor } = useContext(ThemeContext);

  useEffect(() => {
    setBackground("white");
  }, []);

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
      case "Website Development":
        backgroundColor = "#131313";
        fontColor = "#ffffff";
        // style = {
        //   width: "35px",
        //   height: "35px",
        //   backgroundColor: "white",
        //   mixBlendMode: "difference",
        // };
        break;
      case "UI/UX Design":
        break;
      case "Business Consulting":
        backgroundColor = "#ffffff";

        break;
      case "Digital Marketing":
        backgroundColor = "#131313";
        fontColor = "#ffffff";
        // style = {
        //   width: "35px",
        //   height: "35px",
        //   backgroundColor: "white",
        //   mixBlendMode: "difference",
        // };
        break;
      case "Something Else":
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
      width: "10px",
      height: "10px",
    };

    e.target.style.color = "gray";
    setBackground("white");
    setFont("black");
    setSrc(source[0]);
    setCursor({ style });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3>Our Services</h3>
            <ul className={styles.links}>
              <li onMouseOver={(e) => mouseOver(e, 1)} onMouseOut={mouseOut}>
                Website Development
              </li>
              <li onMouseOver={(e) => mouseOver(e, 2)} onMouseOut={mouseOut}>
                UI/UX Design
              </li>
              <li onMouseOver={(e) => mouseOver(e, 3)} onMouseOut={mouseOut}>
                Business Consulting
              </li>
              <li onMouseOver={(e) => mouseOver(e, 4)} onMouseOut={mouseOut}>
                Digital Marketing
              </li>
              <li onMouseOver={(e) => mouseOver(e, 5)} onMouseOut={mouseOut}>
                Something Else
              </li>
            </ul>
          </div>
          {!!src.three ? <ThreeImage src={src} /> : <TwoImage src={src} />}
        </div>
      </div>
    </Layout>
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
