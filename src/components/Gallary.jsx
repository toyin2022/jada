import { ParallaxBanner } from "react-scroll-parallax";
import parallax from "../assets/sign-bg.jpg";
import food1 from "../assets/g1.jpg";
import food2 from "../assets/g2.jpg";
import food3 from "../assets/g3.jpg";
import food4 from "../assets/g4.jpg";
import Button from "./ui/Button";

const Gallary = () => {
  return (
    <ParallaxBanner
      style={{ height: "100vh" }}
      layers={[
        { image: parallax, speed: -10 },
        {
          speed: 30,
          children: (
            <div className="absolute h-full w-full  text-white bg-gradient-to-b from-black/80 to-black/80  inset-0 flex items-center justify-center flex-col">
              <div className="w-full flex items-center flex-col justify-start">
                <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                  Gallery
                </p>
                <p className="text-5xl w-[45%] text-center font-cor">
                  “Our pastry chefs create sweets only with creativity and love”
                </p>
              </div>
              <div className="w-full flex px-10 gap-3 py-10">
                <div className="relative galcard overflow-hidden">
                  <img className="w-[18rem]" src={food1} alt="" />
                  <div className="galbox absolute top-6 left-6 rotate-12  w-[15rem] h-[15rem] bg-transparent border border-primary"></div>
                </div>
                <div className="relative galcard overflow-hidden top-10">
                  <img className="w-[18rem]" src={food2} alt="" />
                  <div className="galbox absolute top-6 left-6 rotate-12  w-[15rem] h-[15rem] bg-transparent border border-primary"></div>
                </div>
                <div className="relative galcard overflow-hidden">
                  <img className="w-[18rem]" src={food3} alt="" />
                  <div className="galbox absolute top-6 left-6 rotate-12  w-[15rem] h-[15rem] bg-transparent border border-primary"></div>
                </div>
                <div className="relative galcard overflow-hidden top-10">
                  <img className="w-[18rem]" src={food4} alt="" />
                  <div className="galbox absolute top-6 left-6 rotate-12  w-[15rem] h-[15rem] bg-transparent border border-primary"></div>
                </div>
              </div>
              <div className="mt-10 ">
                <Button text={"Read more"} />
              </div>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1] "
    />
  );
};

export default Gallary;
