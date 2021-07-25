import React from "react";

const neumorphInner = {
  borderRadius: "4px",
  background: "#3b82f6",
  boxShadow: `inset 6px 6px 12px,
  inset -6px -6px 12px`,
};

const Map = () => {
  return (
    <div className="w-full md:w-2/3 h-full flex items-center justify-center">
      <iframe
        title="map"
        style={neumorphInner}
        className="h-2/3 max-w-sm md:max-w-full w-full"
        width="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.031662336047!2d76.6051746!3d9.6803639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae68709178764beb!2sChilltech%20Cooling%20Systems!5e0!3m2!1sen!2sin!4v1627212847280!5m2!1sen!2sin"
      />
    </div>
  );
};

export default Map;
