import React from "react";

const neumorphInner = {
  borderRadius: "37px",
  background: "#3b82f6",
  boxShadow: `inset 6px 6px 12px #2d64bd,
  inset -6px -6px 12px #49a0ff`,
};

const About = () => {
  return (
    <div className="h-5/6 w-full m-8 mt-16 p-4 lg:p-20" style={neumorphInner}>
      <div className="h-1/6 text-3xl lg:text-5xl font-bold text-blue-300 flex items-center">
        About Us
      </div>
      <div className="h-5/6 overflow-auto">
        <div className="lg:text-3xl font-semibold text-gray-100 space-y-10">
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
