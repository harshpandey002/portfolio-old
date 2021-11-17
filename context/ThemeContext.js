import Cursor from "@/components/Cursor";
import { createContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("");
  const [cursor, setCursor] = useState({});
  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
        cursor,
        setCursor,
        font,
        setFont,
      }}
    >
      <Cursor cursor={cursor} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
