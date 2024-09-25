import choco from "../assets/choco.png";
import img3 from "../assets/shop-03-480x480.png";
import img4 from "../assets/shop-04-480x480.png";
import img5 from "../assets/shop-05-480x480.png";
import Button from "./ui/Button";
import Card from "./ui/discover/Card";

const Discover = () => {
  return (
    <div className="h-[110vh] py-4 flex flex-col items-center justify-between">
      <div className="crem1 w-full h-[10%] -mt-10 z-50 "></div>
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-primary uppercase tracking-[0.3rem] text-[12px]">
            Online Store
          </p>
          <div className="text-5xl relative text-white font-cor">
            <p> Discover Sweet Delicious</p>
            <p className="text-white  tehno text-[10rem] h-[1rem] absolute -top-16 font-dance text-white/5 ">
              products
            </p>
          </div>
        </div>
        <div className="h-full mt-4 w-[90%]  z-40 bg-black px-4 flex items-center justify-start">
          <Card
            title={"Milk Chocolate with peanuts"}
            price={"$43.3"}
            img={choco}
          />
          <Card title={"Pastry chef fantasy"} price={"$13.3"} img={img3} />
          <Card title={"Trufle with vanilla"} price={"$25.3"} img={img4} />
          <Card
            title={"Almond dark chocolate"}
            price={"$11.3"}
            img={img5}
            sale={true}
            slashedPrice={"$13.4"}
          />
        </div>
        <Button text={"Online Store"} />
      </div>
    </div>
  );
};

export default Discover;
