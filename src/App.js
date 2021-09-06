import { useContext } from "react";
import "./App.css";
import Map from "./Map";
import Nav from "./Nav";
import About from "./About";
import Services from "./Services";
import { ThemeContext } from "./contexts/theme";
import Banner from "./Banner";
import WelcomeBanner from "./WelcomeBanner";

function App() {
  const [isDarkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-primaryLight dark:bg-primaryDark">
        <div className="h-24 md:h-16">
          <Nav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        </div>
        {/* content goes here */}
        <div
          id="about"
          className="flex h-48 md:h-64 justify-center items-center"
        >
          <WelcomeBanner />
        </div>
        <div
          style={{
            background: "#1e3c72" /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #2a5298, #1e3c72)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #2a5298, #1e3c72)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          }}
          className="flex flex-col justify-between items-center gap-8 border-t border-b border-blue-700 bg-blue-200 dark:bg-white"
        >
          <Banner />
          <a
            href="https://wa.me/919539907670"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-blue-500 dark:bg-yellow-100 hover:bg-yellow-300 hover:border-opacity-0 dark:hover:bg-yellow-200 text-whatsapp hover:text-yellow-800 
                rounded-lg transition duration-500 text-xl font-bold animate-bounce flex justify-center items-center"
          >
            <p className="py-2 px-3 font-lora">Enquire Now</p>
            <p className="py-2 pr-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
                  fill="rgba(62,179,74,1)"
                />
              </svg>
            </p>
          </a>
        </div>
        <div id="about" className="flex h-screen justify-center items-center">
          <About />
        </div>
        <div className="bg-attachedbanner flex justify-center items-center h-48 md:h-96 bg-fixed shadow-inner bg-no-repeat bg-top"></div>
        <div id="services" className="flex justify-center items-center p-10">
          <Services />
        </div>
        <div className="flex h-yoxl justify-center items-center p-10">
          <iframe
            title="google-reviews"
            src="https://widget.taggbox.com/67920"
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              border: "none",
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse h-screen justify-between items-center py-10 md:p-10">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
