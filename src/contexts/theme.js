import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
    } else {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
