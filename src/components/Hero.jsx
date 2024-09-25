import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import img1 from "../assets/slider-overlay-01.jpg";
import img2 from "../assets/slider-overlay-02.jpg";
import img3 from "../assets/slider-overlay-03.jpg";
import img4 from "../assets/slider-overlay-04.jpg";
export function Hero() {
  const images = [img1, img2, img3, img4];
  return (
    <ImagesSlider className="h-[55rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-cor2  text-xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 tracking-wider to-neutral-400 py-4">
          {"Author's "} Delicious Sweets <br />
          <span className="text-primary">and Chocolate</span>
        </motion.p>
        <motion.p className="text-sm md:text-base text-white text-center mt-4">
          {"Discover our exclusive range of handcrafted treats and desserts,"}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
