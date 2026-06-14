import { link } from "fs";

const Colnavbar = () => {
  const data = [
    { name: "About Me",link:"#Sc01" },
    { name: "Education",link:"#Sc02" },
    { name: "Skills",link:"#Sc03" },
    { name: "Other",link:"#Sc04" },
  ];
  return (
    <div className="w-[65%] h-full bg-black hover:bg-gray-800" >
        <ul className="w-full lg:hidden flex flex-col w-full text-[16px] hover:bg-gray-800text-white gap-x-[50px] font-jacques ">
          {data.map((item, index) => (
            <li key={index} className="px-5 w-full navbar cursor-pointer h-25 flex flex-col justify-center start">
              <a href={item.link} className="w-full h-full flex flex-row items-center justify-start">{item.name}</a>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Colnavbar;
