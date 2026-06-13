import React from "react";
import Header from "../Layout/Feature/header";

const Page = () => {
  const data = [
    {
      id: "1",
      image: "/sd.png",
      image_name: "",
      School: "SDN 22 Dauh Puri",
      Description:
        "Sekolah Dasar Negri yang berada diJl. Mataram, Dauh Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
    { id: "", image: "", School: "", Description: "" },
    { id: "", image: "", School: "", Description: "" },
  ];
  return (
    <div>
      <Header />
      <div className="w-full h-[700px] flex flex-col items-center justify-center bg-[linear-gradient(180deg,#000000,#ffff)]">
        <div className="w-[300px] w-fit flex flex-col justify-center items-center space-y-[21px]">
          <img
            src="/319999918_493531042917763_5048063916269754568_n.jpg"
            alt=""
            className="w-[250px] h-[250px] rounded-full"
          />
          <span className="flex flex-col justify-center items-center">
            <p className="text-[40px] font-bold">About Me</p>
            <p className="w-[430px] text-center">
              My Name Is I Gde Putu Wahyu Wijaya Im born in Bali 2008. My Friend
              Call Me Wahyu
            </p>
          </span>
        </div>
      </div>

      <div className="w-full h-[400px] font-jacques text-[30px] flex flex-col justify-start items-center">
        <div className="w-full flex flex-col items-center">
          <p>Education</p>
        </div>
        <div className="w-[1193px] grid grid-cols-3 px-[25px] gap-x-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="group w-full h-[260px] rounded-[25px] relative overflow-hidden"
            >
              <img
                src={`${item.image}`}
                alt={``}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute font-jacques flex flex-col justify-center items-center text-white inset-0 duration-300 transition bg-[#0b0b0ba8] hover:bg-[#0b0b0b7e]">
                <span className="w-[209px] mt-8 flex flex-col justiyfy-center items-center">
                  <p className="text-[15px]">{item.School}</p>
                  <p className="text-[10px] text-center">{item.Description}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
