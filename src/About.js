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
      className="h-5/6 w-full md:w-1/3 m-8 mt-16 p-4 flex flex-col gap-4 lg:p-20"
      style={neumorphInner(isDarkMode)}
    >
      <div className="h-1/6 font-ubuntu text-3xl lg:text-5xl font-bold text-blue-900 dark:text-blue-300 flex items-center">
        About Us
      </div>
      <div className="h-5/6 overflow-y-scroll md:overflow-hidden font-sourcesans">
        <div className="lg:text-xl font-semibold text-primaryDark dark:text-gray-100 space-y-4">
          <p className="">
            A renowned leader in the Air Conditioning, Cold room, Ice machine,
            Refrigerator and Deep freezer services in Kottayam. We provide a
            variety of services to accountably enhance the cooling services
            across Kerala.{" "}
          </p>
          <p className="">
            We majorly focus on corrective maintenance, repairs, preventive
            measures and installations of AC and other cooling equipments for
            industrial, commercial and domestic customers.
          </p>
          <p className="">
            It’s been a few months since Chilltech Cooling Systems has emerged
            and we have already made a prominent name in the cooling service
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
