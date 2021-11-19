import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import ProjectMob from "@/components/ProjectMob";
import Stack from "@/components/Stack";
import Works from "@/components/Works";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Stack />
      <Project />
      <ProjectMob />
      <Experience />
    </Layout>
  );
}
