import React from "react";

const neumorphInner = {
  borderRadius: "37px",
  background: "#3b82f6",
  boxShadow: "inset 13px 13px 26px #316ccc,inset -13px -13px 26px #4598ff",
};

const Tile = ({ title, services }) => {
  return (
    <div
      id="services"
      style={neumorphInner}
      className="p-4 px-8 h-96 space-y-10"
    >
      <div className="font-bold text-white ">{title}</div>
      <ul className="h-full space-y-2 font-semibold text-lg text-gray-100">
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
    <div className="h-full py-2 w-full space-y-2">
      <div className="text-3xl font-semibold text-blue-100">
        Services we provide...
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4">
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
