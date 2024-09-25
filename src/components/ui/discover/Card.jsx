import React from "react";

import Button from "../Button";

const Card = ({ img, price, title, slashedPrice, sale, onclick }) => {
  return (
    <div className="card  min-h-[60vh] w-[20rem] overflow-hidden">
      <div className="relative h-[17rem] overflow-hidden w-[17rem]">
        <div className="flex h-full w-full z-[1] gap-5 overflow-hidden flex-wrap p-2 pt-8 rota1">
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
          <div className="h-[1px] w-[1px] bg-primary z-[1] rounded-full"></div>
        </div>
        <img src={img} className="absolute top-0 z-[1000]" alt="" />
        {sale ? (
          <div className="absolute top-8 right-8 h-10 w-10 bg-red rounded-full  text-center flex items-center justify-center text-white">
            <p className="text-xs">sale</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" addcart bg-inherit z-[300] flex items-center justify-center -translate-y-16 py-3 gap-3 flex-col">
        <div className="adbut">
          <Button text="Add to Cart" />
        </div>
        <div className="flex text-white items-center justify-center flex-col ">
          <p className="text-xl">{title}</p>
          <div className="flex gap-4">
            <p className="line-through text-white/50">{slashedPrice}</p>
            <p className="text-primary">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
