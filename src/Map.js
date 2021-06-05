import React from "react";

const Map = () => {
  return (
    <div className="w-full md:w-1/2 h-full flex items-center">
      <iframe
        title="map"
        className="h-1/2"
        width="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=kidangoor&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      />
    </div>
  );
};

export default Map;
