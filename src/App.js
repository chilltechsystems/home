import { useContext } from "react";
import "./App.css";
import Map from "./Map";
import Nav from "./Nav";
import About from "./About";
import Services from "./Services";
import { ThemeContext } from "./contexts/theme";
import Banner from "./Banner";

function App() {
  const [isDarkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-primaryLight dark:bg-primaryDark">
        <div className="h-24">
          <Nav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        </div>
        {/* content goes here */}
        <div className="flex justify-center items-center">
          <Banner />
        </div>
        <div
          id="about"
          className="flex h-screen justify-center items-center py-10"
        >
          <About />
        </div>
        <div
          id="services"
          className="pt-20 flex justify-center items-center p-10"
        >
          <Services />
        </div>
        <div className="flex flex-col md:flex-row-reverse h-screen justify-between items-center py-10 md:p-10">
          <Map />
        </div>
        <div className="flex h-screen justify-center items-center p-10">
          <h1 className="font-bold text-5xl">Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
