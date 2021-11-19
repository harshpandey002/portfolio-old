import styles from "@/styles/Menu.module.css";
import Link from "next/link";

export default function Menu({ isOpen }) {
  return (
    <div className={`${styles.container} ${isOpen && `${styles.active}`} `}>
      <div className={styles.content}>
        <ul className={styles.nav_links}>
          <li>
            <Link href="/#work">Featured Work</Link>
          </li>

          <li>
            <Link href="/#stack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
