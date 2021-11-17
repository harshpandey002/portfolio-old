import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollContainer from "@/components/ScrollContainer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        {/* <ScrollContainer> */}
        <Component {...pageProps} />
        {/* </ScrollContainer> */}
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
