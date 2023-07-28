import { createContext } from "react";

const themeColors = {
  light: {
    primary: "black",
    background: "white",
    subBackground: "#e5e7eb",
    // Add other light theme colors here
  },
  dark: {
    primary: "white",
    background: "#121212",
    subBackground: "#4b5563",
    // Add other dark theme colors here
  },
};

const ThemeContext = createContext(themeColors);

export default ThemeContext;
