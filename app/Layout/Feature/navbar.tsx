import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {


  return (
    <div>
      <span>
        <ul className="hidden lg:flex w-fit text-[16px] text-white gap-x-[50px] font-jacques">
          <li
            className="navbar cursor-pointer"
          >
            About Me
          </li>

          <li
            className="navbar cursor-pointer"
          >
            Education
          </li>

          <li
            className="navbar cursor-pointer"
          >
            Skills
          </li>

          <li
            className="navbar cursor-pointer"
          >
            Other
          </li>
        </ul>

        <FaBars className="lg:hidden" size={16} color="white" />
      </span>
    </div>
  );
};

export default Navbar;
