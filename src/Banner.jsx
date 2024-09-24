import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles/carousel.css";

import banner_1 from "./assets/banners/banner_1.png";
import banner_2 from "./assets/banners/banner_2.png";
import banner_3 from "./assets/banners/banner_3.png";
import banner_5 from "./assets/banners/banner_5.png";

function Banner() {
  const banners = [
    {
      title: "DEEP FREEZER",
      heading: "Quality that is Guaranteed",
      description: "Freezer and Deep Freezer specialist",
      src: banner_1,
    },
    {
      title: "REFRIGERATOR",
      heading: "A Professional Service",
      description: "With a personal touch",
      src: banner_2,
    },
    {
      title: "ICE MACHINE",
      heading: "Keeping you cool, in every step",
      description:
        "Constantly striving to exceed each our client’s expectations",
      src: banner_3,
    },
    {
      title: "WINDOW A/C",
      heading: "Cost- effective cooling solutions",
      description: "",
      src: banner_3,
    },
    {
      title: "SPLIT A/C",
      heading: "Cool Your Summer, Warm Your Winter",
      description:
        "A split Air conditioner consists of an outdoor and an indoor unit. The outdoor unit is installed on or near the exterior wall of the room that you wish to cool.",
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
      showArrows={false}
      dynamicHeight={true}
      showIndicators={false}
    >
      {banners.map((banner, index) => {
        return (
          <div key={index} className="relative flex z-10 h-48 md:h-yoxl">
            <img
              alt={`img_${index + 1}`}
              className="object-scale-down"
              src={banner.src}
            />
            <div className="absolute top-1/4 md:top-1/3 left-4 flex flex-col w-full md:pl-10 gap-1 md:gap-4">
              <p className=" font-ubuntu font-bold text-xl md:text-7xl text-left text-white dark:text-gray-700">
                {banner.title}
              </p>
              <p className=" font-ubuntu font-bold text-sm md:text-3xl text-left w-6/12 md:w-full text-gray-400 ">
                {banner.heading}
              </p>
              <p className="font-lora font-semibold text-xs md:text-xl text-left w-7/12 md:w-1/2 text-black opacity-50 ">
                {banner.description}
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Banner;
