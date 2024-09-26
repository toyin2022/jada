import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import blog1 from "../assets/blog_01.jpg";
import blog2 from "../assets/blog_02.jpg";

const Footer = () => {
  return (
    <div className="footer h-[100vh] w-full flex items-center justify-center">
      <div className="w-[90%] h-full">
        <div className="h-[90%]  w-full flex justify-between items-center gap-5">
          <div className="w-[25%] text-white h-[60%] py-7  flex flex-col justify-between gap-5 ">
            <div className="flex flex-col cursor-pointer font-cor  justify-center leading-4">
              <p className="text-3xl text-primary">~</p>
              <p className="text-4xl ">Jada</p>
              <p className="text-xs text-primary">Dough and Delight</p>
            </div>
            <div className="">
              <p>
                Etiam consequat sem ullamcorper, euismod metus sit amet,
                tristique justo. Vestibulum mattis, nisi ut.
              </p>
            </div>
            <div className="flex gap-8">
              <FaTwitter className="text-primary hover:text-white transition cursor-pointer" />
              <FaFacebook className="text-primary hover:text-white transition cursor-pointer" />
              <FaInstagram className="text-primary hover:text-white transition cursor-pointer" />
              <FaYoutube className="text-primary hover:text-white transition cursor-pointer" />
            </div>
          </div>
          <div className="w-[25%] text-white h-[60%] py-7  flex flex-col justify-between gap-5 ">
            <div className="flex flex-col cursor-pointer font-cor  justify-center leading-4">
              <p className="text-3xl mt-8 text-primary">Explore</p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-3 items-center ">
                <div className="">
                  <MdPhone className="text-primary hover:text-white transition cursor-pointer text-3xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                    Phone
                  </p>
                  <p>930943040</p>
                </div>
              </div>
              <div className="flex gap-3 items-center ">
                <div className="">
                  <MdLocationPin className="text-primary hover:text-white transition cursor-pointer text-3xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                    Our Location
                  </p>
                  <p>abdul street</p>
                </div>
              </div>
              <div className="flex gap-3 items-center ">
                <div className="">
                  <MdMail className="text-primary hover:text-white transition cursor-pointer text-3xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                    Email:
                  </p>
                  <p>abdul@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] text-white h-[60%] py-7  flex flex-col justify-between gap-5 ">
            <p className="text-3xl mt-8 text-primary">Latest Posts</p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 cursor-pointer hover:text-primary items-center">
                <div className="">
                  <img src={blog1} alt="" />
                </div>
                <div className="">
                  <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                    Craft foods
                  </p>
                  <p>Lorem ipsum, adipisicing elit.</p>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:text-primary items-center">
                <div className="">
                  <img src={blog2} alt="" />
                </div>
                <div className="">
                  <p className="tracking-[0.5rem] uppercase text-primary text-[10px]">
                    Craft foods
                  </p>
                  <p>Lorem ipsum, adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10%] text-center w-full">
          <p className="text-primary">
            Like-themes{" "}
            <span className="text-white"> © All Rights Reserved - 2020 - </span>
            Purchase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
