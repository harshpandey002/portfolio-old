import styles from "@/styles/MobileProjectCard.module.css";

export default function MobileProjectCard({ image, name }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
    </div>
  );
}
