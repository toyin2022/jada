import { useEffect, useState } from "react";
import man from "../assets/sign-person.png";
import sign from "../assets/sign.png";
import { chocolateQuotes } from "../utils/quotes";
const Misson = () => {
  const [quote, setquote] = useState({
    quoter: "Charles M. Schulz",
    quote:
      "All you need is love. But a little chocolate now and then doesn’t hurt. It’s the simple pleasures, like savoring a piece of chocolate, that remind us life is sweet.",
  });

  function genQuote() {
    const rand = Math.floor(Math.random() * chocolateQuotes.length);
    setquote(chocolateQuotes[rand]);
  }

  useEffect(() => {
    setInterval(() => {
      genQuote();
    }, 20000);
  }, [quote]);

  return (
    <div className="h-[110vh] misson w-full text-white relative">
      <div className="absolute w-[40%] z-50 right-[5%] top-32 flex flex-col gap-2">
        <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
          Our Mission
        </p>
        <p className="text-3xl font-mulish tracking-wider">
          {`"${quote?.quote}"`}
        </p>
        <div className="mt-20 flex gap-5">
          <div className="">
            <p className="text-lg">{quote?.quoter}</p>
            <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
              pastry chef
            </p>
          </div>
          <img src={sign} alt="signature" />
        </div>
      </div>
      <img
        src={man}
        className="absolute h-[90%] left-[30%] top-12 scale-110"
        alt="a man"
      />
    </div>
  );
};

export default Misson;
