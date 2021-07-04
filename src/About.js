import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

const neumorphInner = (isDarkMode) => ({
  borderRadius: "22px",
  background: isDarkMode
    ? "linear-gradient(145deg, #283848, #2f4256)"
    : "linear-gradient(145deg, #d4d8d9, #fdffff)",
  boxShadow: isDarkMode
    ? `inset 6px 6px 12px #1d2a36,
  inset -6px -6px 12px #3b526a`
    : `inset 6px 6px 12px #9ea1a1,
  inset -6px -6px 12px #ffffff`,
});

const About = () => {
  const [isDarkMode] = useContext(ThemeContext);

  return (
    <div
      className="h-5/6 w-full m-8 mt-16 p-4 lg:p-20"
      style={neumorphInner(isDarkMode)}
    >
      <div className="h-1/6 text-3xl lg:text-5xl font-bold text-blue-900 dark:text-blue-300 flex items-center">
        About Us
      </div>
      <div className="h-5/6 overflow-hidden">
        <div className="lg:text-3xl font-semibold text-primaryDark dark:text-gray-100 space-y-10">
          <p className="">
            There are many reasons to confidently choose Chilltech as your
            provider of cold room, Air conditioner, Refrigerator, Deep freezer,
            Ice machine services both commercial and residential.{" "}
          </p>
          <p className="">
            Chilltech is a trusted name in the field of air conditioning
            installation, maintenance, and repair. We are proud of our
            reputation for putting clients first and getting the job done right
            the first time, every time.
          </p>
          <p className="">
            Services right to your home or where you want us to. You also have
            the option to pay by Cash on Delivery, from your E-wallets, or by
            online payments using Internet banking, Credit cards or Debit cards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
