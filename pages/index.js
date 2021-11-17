import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import MobileProjects from "@/components/MobileProjects";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Projects />
      <MobileProjects />
    </Layout>
  );
}
