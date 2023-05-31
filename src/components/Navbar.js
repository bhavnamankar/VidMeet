import React from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <div className="bg-black/100">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        <div className="flex items-center pt-6 ">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2 ">VidMeet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
