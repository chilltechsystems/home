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
      heading: "Quality that is Guaranteed",
      description: "Freezer and Deep Freezer specialist",
      src: banner_1,
    },
    {
      heading: "A Professional Service",
      description: "With a personal touch",
      src: banner_2,
    },
    {
      heading: "Keeping you cool, in every step",
      description:
        "Constantly striving to exceed each our client’s expectations",
      src: banner_3,
    },
    {
      heading: "Cool Your Summer, Warm Your Winter",
      description:
        "Wherever you want, we can set the room that you wish to cool.",
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
          <div key={index} className="relative flex z-10 h-36 md:h-auto">
            <img
              alt={`img_${index + 1}`}
              className="object-scale-down"
              src={banner.src}
            />
            <p className="absolute font-ubuntu top-1/4 md:top-1/3 left-4 font-bold text-lg md:text-5xl text-left w-1/2 text-blue-500 dark:text-yellow-200">
              {banner.heading}
            </p>
            <p className="font-lora px-10 absolute top-3/4 md:top-2/3 left-0 md:left-4 font-semibold text-sm md:text-3xl text-left w-10/12 md:w-1/2 text-gray-400 dark:text-blue-100">
              {banner.description}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Banner;
