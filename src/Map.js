import React from "react";

const Map = () => {
  return (
    <div className="w-1/2">
      <div className="gmap_canvas">
        <iframe
          title="map"
          className="gmap_iframe"
          width="100%"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=kidangoor&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
        <a href="https://www.bgmi.org/">BGMI</a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}",
        }}
      />
    </div>
  );
};

export default Map;
