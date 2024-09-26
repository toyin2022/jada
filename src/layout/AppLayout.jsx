import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
