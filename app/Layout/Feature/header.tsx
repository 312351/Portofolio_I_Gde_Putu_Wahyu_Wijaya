import React, { useState } from "react";
import Navbar from "./navbar";
import { FaBars } from "react-icons/fa";

interface HeaderProps {
  navShow: boolean;
  setNavShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ navShow, setNavShow }: HeaderProps) => {
  return (
    <div className="fixed z-[90] w-full h-25 px-15 bg-black flex flex-row justify-between items-center">
      <div className="w-fit p-3 flex flex-row justify-center items-center space-x-5">
        <img src="/Moga Ngak Pecahh.png" alt="" className="w-15" />
        <span>
          <p className="font text-[24px] text-white font-jacques">Portofolio</p>
        </span>
      </div>
      <Navbar />
      <FaBars
        className="lg:hidden"
        size={16}
        color="white"
        onClick={() => setNavShow(true)}
      />
    </div>
  );
};

export default Header;
