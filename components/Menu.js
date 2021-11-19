import styles from "@/styles/Menu.module.css";

export default function Menu({ isOpen }) {
  return (
    <div className={`${styles.container} ${isOpen && `${styles.active}`} `}>
      <div className={styles.content}>
        <ul className={styles.nav_links}>
          <li>Featured Works</li>
          <li>Projects</li>
          <li>Tech Stack</li>
          <li>Experience</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}
