import React from "react";

const Colnavbar = () => {
  const data = [
    { name: "About Me" },
    { name: "Education" },
    { name: "Skills" },
    { name: "Other" },
  ];
  return (
    <div className="w-full hover:bg-gray-800" >
        <ul className="w-full lg:hidden flex flex-col w-full text-[16px] hover:bg-gray-800text-white gap-x-[50px] font-jacques text-right">
          {data.map((item, index) => (
            <li key={index} className="w-full navbar cursor-pointer h-20 text-right flex flex-col justify-center items-end">
              {item.name}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Colnavbar;
