import React, { useContext } from "react";
import chillTechTabloidLight from "./assets/chillTechTabloidLight.png";
import chillTechTabloidDark from "./assets/chillTechTabloidDark.png";
import { ThemeContext } from "./contexts/theme";

const WelcomeBanner = () => {
  const [isDarkMode, setDarkMode] = useContext(ThemeContext);

  const chillTechTabloid = isDarkMode
    ? chillTechTabloidDark
    : chillTechTabloidLight;

  return (
    <div className="w-full h-full flex flex-col md:px-10">
      <div className="flex justify-center">
        <img
          alt="logo"
          className="h-48 w-full md:h-56 md:w-2/3"
          src={chillTechTabloid}
        ></img>
      </div>
    </div>
  );
};

export default WelcomeBanner;
