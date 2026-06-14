import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const data = [
    { name: "About Me", link: "#Sc01" },
    { name: "Education", link: "#Sc02" },
    { name: "Skills", link: "#Sc03" },
    { name: "Other", link: "#Sc04" },
  ];

  return (
    <div>
      <span>
        <ul className="hidden lg:flex w-fit text-[16px] text-white gap-x-[50px] font-jacques">
          {data.map((item, index) => (
            <li key={index} className="navbar cursor-pointer">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
