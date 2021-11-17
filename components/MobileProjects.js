import styles from "@/styles/MobileProjects.module.css";
import MobileProjectCard from "./MobileProjectCard";

export default function MobileProjects() {
  return (
    <div className={styles.container}>
      <MobileProjectCard
        image="https://cdn.cuberto.com/cb/img/nana/face.jpg"
        name="EduCompanion"
      />
      <MobileProjectCard
        image="https://cdn.cuberto.com/cb/img/nana/face.jpg"
        name="BeyondPinks"
      />
      <MobileProjectCard
        image="https://cdn.cuberto.com/cb/img/nana/face.jpg"
        name="Hysea"
      />
    </div>
  );
}
