import { useContext } from "react";
import styles from "@/styles/Stack.module.css";
import ScrollTrigger from "react-scroll-trigger";
import ThemeContext from "@/context/ThemeContext";

export default function Stack() {
  const { setBackground, setFont } = useContext(ThemeContext);

  const handleColor = () => {
    setBackground("white");
    setFont("black");
  };

  return (
    <div className={styles.container}>
      <ScrollTrigger onEnter={handleColor}>
        <div className={styles.heading}>
          <h2>Technology Stack</h2>
        </div>
      </ScrollTrigger>
      <div className={styles.content}>
        <div className={styles.block}>
          <h3>Front-End</h3>
          <p>
            I use Nextjs for all my projects as it is the most advanced
            technology out there right now. Nextjs is a framework of Reactjs,
            which supports server side rendering make the website super fast and
            enhances user experience.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Back-End</h3>
          <p>
            I use Nodejs, Expressjs and Mongoose as my back-end technologies.
            They are most popular technologies for backend. Mongoose provides
            seemless integration with MongoDb which is a very secure database.
          </p>
        </div>
      </div>
    </div>
  );
}
