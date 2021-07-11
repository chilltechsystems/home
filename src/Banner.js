import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "./styles/carousel.css";

import banner_1 from "./assets/banners/banner_1.jpg";
import banner_2 from "./assets/banners/banner_2.jpg";
import banner_3 from "./assets/banners/banner_3.jpg";
import banner_4 from "./assets/banners/banner_4.jpg";
import banner_5 from "./assets/banners/banner_5.jpg";

function Banner() {
  const banners = [
    {
      label: "Services Cold fridge",
      src: banner_1,
    },
    {
      label: "Services household fridge",
      src: banner_2,
    },
    {
      label: "Services Ice Maker",
      src: banner_3,
    },
    {
      label: "Services Window A/C",
      src: banner_4,
    },
    {
      label: "Services Wall A/C",
      src: banner_5,
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={true}
      showStatus={false}
      showThumbs={false}
      // showArrows={false}
      dynamicHeight={true}
    >
      {banners.map((banner) => {
        return (
          <div className="relative flex h-full z-10">
            <img className="" src={banner.src} />
            <p className="absolute top-1/3 left-4 font-bold text-xl w-1/2 md:text-5xl text-white">
              {banner.label}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Banner;
