import React from "react";

const Map = () => {
  return (
    <div className="w-full md:w-2/3 h-full flex items-center justify-center">
      <iframe
        title="map"
        className="h-2/3 max-w-sm md:max-w-full w-full"
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
