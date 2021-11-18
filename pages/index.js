import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import Works from "@/components/Works";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Stack />
      <Project />
      <Experience />
      <div className={styles.resume}>
        <button>Resume</button>
      </div>
      {/* <Contact /> */}
    </Layout>
  );
}
