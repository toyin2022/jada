import { BiSolidQuoteAltRight } from "react-icons/bi";
import rashy from "../assets/testimonials-11-110x110.jpg";
import stone from "../assets/testimonials-07-110x110.jpg";
import Hugo from "../assets/testimonials-12-110x110.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <div className="h-[110vh] w-full py-12 flex flex-col gap-8">
      <div className="text-center">
        <p className="text-primary uppercase tracking-[0.3rem] text-[12px]">
          Testimonials
        </p>
        <div className="text-5xl relative text-white font-cor">
          <p>What our Buyers Say</p>
          <p className="text-white tehno text-[10rem] h-[1rem] absolute left-[25%] -top-16 font-dance text-white/5 ">
            testimonials
          </p>
        </div>
      </div>

      <div className="cont text-white">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{}}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slide change")}
          className="text-white"
        >
          <SwiperSlide>
            <div className="flex  items-center justify-center mt-12 flex-col">
              <div className="pattern  w-[70%] h-[20rem] relative flex items-center px-6 justify-center border border-primary">
                <div className="flex items-center justify-center flex-col">
                  <BiSolidQuoteAltRight className="text-primary text-6xl" />
                  <p className="text-2xl text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, ullam asperiores dignissimos, laboriosam vel eveniet,
                    consectetur hic modi qui exercitationem assumenda et vitae
                    iure. Voluptas accusantium ipsum culpa blanditiis hic.
                  </p>
                </div>
                <div className=" bg-black border border-primary w-7 h-7 absolute -bottom-4 left-[50%] rotate-45"></div>
              </div>
              <div className="flex flex-col gap-2 mt-10 ml-10 justify-center items-center">
                <img src={rashy} className="w-16 h-16 rounded-full" alt="" />
                <p className="text-lg">Stefanie Rashford</p>
                <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                  customer
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  items-center justify-center mt-12 flex-col">
              <div className="pattern  w-[70%] h-[20rem] relative flex items-center px-6 justify-center border border-primary">
                <div className="flex items-center justify-center flex-col">
                  <BiSolidQuoteAltRight className="text-primary text-6xl" />
                  <p className="text-2xl text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, ullam asperiores dignissimos, laboriosam vel eveniet,
                    consectetur hic modi qui exercitationem assumenda et vitae
                    iure. Voluptas accusantium ipsum culpa blanditiis hic.
                  </p>
                </div>
                <div className=" bg-black border border-primary w-7 h-7 absolute -bottom-4 left-[50%] rotate-45"></div>
              </div>
              <div className="flex flex-col gap-2 mt-10 ml-10 justify-center items-center">
                <img src={stone} className="w-16 h-16 rounded-full" alt="" />
                <p className="text-lg">Patric Stone</p>
                <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                  freelancer
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  items-center justify-center mt-12 flex-col">
              <div className="pattern  w-[70%] h-[20rem] relative flex items-center px-6 justify-center border border-primary">
                <div className="flex items-center justify-center flex-col">
                  <BiSolidQuoteAltRight className="text-primary text-6xl" />
                  <p className="text-2xl text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, ullam asperiores dignissimos, laboriosam vel eveniet,
                    consectetur hic modi qui exercitationem assumenda et vitae
                    iure. Voluptas accusantium ipsum culpa blanditiis hic.
                  </p>
                </div>
                <div className=" bg-black border border-primary w-7 h-7 absolute -bottom-4 left-[50%] rotate-45"></div>
              </div>
              <div className="flex flex-col gap-2 mt-10 ml-10 justify-center items-center">
                <img src={Hugo} className="w-16 h-16 rounded-full" alt="" />
                <p className="text-lg">Hugo James</p>
                <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                  manager
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
