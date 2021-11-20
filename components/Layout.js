import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  const { background, font } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: background,
        color: font,
        transition: "background-color 0.3s",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Harsh Pandey ",
  description:
    "I'm an individual with solid design and development expertise. I build mordern websites with smooth animations and transitions.",
  keywords: "UI/UX, Website, Freelance, Portfolio, Front-End",
};

export default Layout;
