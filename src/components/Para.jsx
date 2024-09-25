import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import parallax from "../assets/parallax_02.jpg";

const Para = () => {
  return (
    <ParallaxBanner
      style={{ height: "90vh" }}
      layers={[
        { image: parallax, speed: -10 },
        {
          speed: 30,
          children: (
            <div className="absolute bg-gradient-to-b from-black/60 to-black/60  inset-0 flex items-center justify-center">
              <h1 className="text-8xl relative font-cor2 leading-[5rem] text-center w-4/5 text-white font-thin">
                Made with love <br />
                <span className="text-primary"> unique sweets</span> for gourmet
              </h1>
              <div className="absolute w-[15rem] h-[15rem] rota bg-transparent border border-primary"></div>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1] "
    />
  );
};

export default Para;
