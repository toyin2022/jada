import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import parallax from "../assets/video-bg.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Videos = () => {
  return (
    <ParallaxBanner
      style={{ height: "90vh" }}
      layers={[
        { image: parallax, speed: -10 },
        {
          speed: 30,
          children: (
            <div className="absolute bg-gradient-to-b from-black/60 to-black/60  inset-0 flex items-center justify-center flex-col gap-5">
              <h1 className="text-8xl relative font-cor2 leading-[5rem] text-center w-4/5 text-white font-thin">
                Watch our video
              </h1>
              <AiOutlinePlayCircle className="text-primary text-8xl font-light hover:text-white cursor-pointer" />
            </div>
          ),
        },
      ]}
      className="aspect-[2/1] "
    />
  );
};

export default Videos;
