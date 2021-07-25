import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

// const neumorphInner = {
//   borderRadius: "8px",
//   background: `linear-gradient(145deg, #3575dd, #3f8bff)`,
//   boxShadow: `2px 2px 4px #2857a5`,
// };

const neumorphInner = (isDarkMode) => ({
  borderRadius: "5px",
  background: isDarkMode
    ? "linear-gradient(145deg, #283848, #2f4256)"
    : "linear-gradient(145deg, #d4d8d9, #fdffff)",
  boxShadow: isDarkMode ? `2px 2px 4px #1d2a36` : `2px 2px 4px #9ea1a1`,
});

const Tile = ({ title, services }) => {
  const [isDarkMode] = useContext(ThemeContext);

  return (
    <div style={neumorphInner(isDarkMode)} className="p-4 px-8 h-96 space-y-10">
      <div className="font-bold text-3xl">{title}</div>
      <ul className="h-full space-y-2 font-semibold text-xl ">
        {services?.map((service, index) => (
          <li key={index} className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-14.243L7.757 12 12 16.243 16.243 12 12 7.757z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  return (
    <div className="h-full py-2 w-full space-y-10 font-sourcesans">
      <div className="text-5xl md:text-7xl font-semibold font-lora text-primaryDark dark:text-blue-100 ">
        Services we provide...
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4 text-primaryDark dark:text-blue-100">
        <Tile
          title={"AC Services"}
          services={[
            "AC Repair service ",
            "AC Installation service ",
            "AC Uninstallation service ",
            "AC Piping service",
            "AC Gas filling service",
            "AC AMC service",
          ]}
        />
        <Tile
          title={"REFRIGERATOR SERVICES"}
          services={[
            "Refrigerator Installation",
            "Refrigerator Servicing",
            "Refrigerator Repair",
          ]}
        />
        <Tile
          title={"ICE MACHINE SERVICES"}
          services={[
            "Ice machine Installation",
            "Ice machine Servicing",
            "Ice machine Repairing",
          ]}
        />
        <Tile
          title={"DEEP FREEZER SERVICES"}
          services={[
            "Deep freezer Installation",
            "Deep freezer Servicing",
            "Deep freezer Repairing",
          ]}
        />
        <Tile
          title={"CHILLER SERVICES"}
          services={[
            "Chiller Installation",
            "Chiller Servicing",
            "Chiller Repairing",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
