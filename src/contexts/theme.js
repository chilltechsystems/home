import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
