import React from "react";
import { FaClipboard, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar h-32 w-full text-white justify-between items-center flex px-8">
      <div className="flex flex-col cursor-pointer font-cor items-center justify-center leading-4">
        <p className="text-3xl text-primary">~</p>
        <p className="text-4xl ">Jada</p>
        <p className="text-xs">Dough and Delight</p>
      </div>
      <ul className="flex gap-5 cursor-pointer">
        <li className="text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/about">About us</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex gap-10 items-center cursor-pointer">
        <FaMagnifyingGlass className="text-primary" size={20} />
        <FaUser className="text-primary" size={20} />
        <div className="flex gap-1 items-center">
          <FaClipboard className="text-primary" size={20} />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
