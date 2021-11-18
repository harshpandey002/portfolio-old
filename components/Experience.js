import styles from "@/styles/Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Experience</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <div>
            <h3>EduCompanion</h3>
          </div>
          <p>
            I use Nextjs for all my projects as it is the most advanced
            technology out there right now. Nextjs is a framework of Reactjs,
            which supports server side rendering make the website super fast and
            enhances user experience.
          </p>
        </div>
        <div className={styles.block}>
          <div>
            <h3>Beyond Pinks</h3>
          </div>
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
