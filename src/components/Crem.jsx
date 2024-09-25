import { IoDocumentTextOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { GiHeartDrop } from "react-icons/gi";
import { PiFlowerTulipThin } from "react-icons/pi";
import { PiFlowerLotus } from "react-icons/pi";

const Crem = () => {
  return (
    <div className="crem flex items-center justify-between text-white flex-col h-[100vh] w-full bg-black ">
      <div className="crem1 w-full h-[10%] -mt-10 z-50 "></div>
      <div className=" h-4/5 w-full flex justify-between items-center px-12">
        <div className="left flex flex-col justify-start w-[27%] gap-10">
          <div className="">
            <p className="text-3xl font-cor2">
              Our patisserie produces
              <span className="text-primary"> unique sweets</span> for lovers of
              yummy
            </p>
          </div>
          <div className="">
            <p>
              Curabitur tortor ante, vestibulum vel lacus id, semper malesuada
              sem. Sed sit amet tortor augue. Integer magna neque
            </p>
          </div>
          <div className="flex gap-4 cursor-pointer items-center font-mulish">
            <IoDocumentTextOutline className="text-primary" size={30} />
            <p className="hover:text-primary">Download Price</p>
          </div>
          <div className="read flex items-center cursor-pointer gap-4 text-primary">
            <p className="uppercase tracking-wider">read more</p>
            <GoArrowRight className="readicon" size={25} />
          </div>
        </div>
        <div className="right flex justify-end flex-col gap-10 w-[30%]">
          <div className="flex gap-6 items-center">
            <PiFlowerLotus className="text-primary" size={60} />
            <div className="">
              <p className="text-white">Natural Organic Product</p>
              <p className="text-white/60">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <GiHeartDrop className="text-primary" size={60} />
            <div className="">
              <p className="text-white">Natural Organic Product</p>
              <p className="text-white/60">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <PiFlowerTulipThin className="text-primary" size={60} />
            <div className="">
              <p className="text-white">Natural Organic Product</p>
              <p className="text-white/60">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="crem2 w-full h-[10%] z-50 -mb-12"></div>
    </div>
  );
};

export default Crem;
