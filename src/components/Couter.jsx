import React from "react";
import CountUp from "react-countup";

const Couter = () => {
  return (
    <div className="h-[60vh] font-cor2 w-full flex items-center justify-center text-white ">
      <div className="flex px-7 w-full justify-around  items-center">
        <div className="flex w-[20%] justify-between items-center gap-5">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-8xl  text-primary">
              <CountUp end={230} />
            </p>
            <p className="text-2xl">Pastry Shops</p>
          </div>
          <div className="line w-[1px] h-[10rem] bg-primary " />
        </div>
        <div className="flex w-[20%] justify-between items-center gap-5">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-8xl  text-primary">
              <CountUp end={26} delay={1} />
            </p>
            <p className="text-2xl">Candies Collections</p>
          </div>
          <div className="line w-[1px] h-[10rem] bg-primary " />
        </div>
        <div className="flex w-[20%] justify-between items-center gap-5">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-8xl  text-primary">
              <CountUp end={14} delay={1} />
            </p>
            <p className="text-2xl">Years of Experience</p>
          </div>
          <div className="line w-[1px] h-[10rem] bg-primary " />
        </div>
        <div className="flex w-[20%] justify-between items-center gap-5">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-8xl  text-primary">
              <CountUp end={80} delay={1} />
            </p>
            <p className="text-2xl">Creative Pastry Chefs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couter;
