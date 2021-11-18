import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Have a query?</h1>
      </div>

      <div className={styles.content}>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Query" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
