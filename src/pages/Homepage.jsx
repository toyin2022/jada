import { Hero } from "../components/Hero";
import Crem from "../components/Crem";
import Para from "../components/Para";
import Discover from "../components/Discover";
import Videos from "../components/Videos";
import Couter from "../components/Couter";
import Misson from "../components/Misson";
import Testimonial from "../components/Testimonial";
import Gallary from "../components/Gallary";

const Homepage = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Crem />
      <Para />
      <Discover />
      <Videos />
      <Couter />
      <Misson />
      <Testimonial />
      <Gallary />
    </div>
  );
};

export default Homepage;
