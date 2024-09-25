import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({ text }) => {
  return (
    <div className="px-7 flex text-primary hover:text-white items-center but transition gap-4 py-5 border border-primary hover:border-white rounded-full">
      <p>{text}</p> <GoArrowRight className="buticon" />
    </div>
  );
};

export default Button;
