"use client";
import React, { useState } from "react";
import Header from "../Layout/Feature/header";
import Footer from "../Layout/Feature/Footer";
import { IoMdSchool } from "react-icons/io";

const Page = () => {
  const [show, setShow] = useState(false);

  const data = [
    {
      id: "1",
      image: "/sd.png",
      School: "SDN 22 Dauh Puri",
      Description:
        "Sekolah Dasar Negri yang berada diJl. Mataram, Dauh Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
    {
      id: "2",
      image: "/Walaweee_1.1.1.png",
      School: "SMPK Thomas Aquino",
      Description:
        "Sekolah menengah pertama Katolik yang berada di Jl. Padang Tawang No.14, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali",
    },
    {
      id: "3",
      image: "/Skensaa_1.2.1.png",
      School: "SMK Negri 1 Denpasar",
      Description:
        "Sekolah Menengah Kejuruan yang berada di Jl. Cokroaminoto No.84, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
  ];
  return (
    <div className="relative bg-white">
      {show && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShow(false)}
              className="absolute z-10 -top-10 right-0 text-white text-3xl hover:text-gray-400 cursor-pointer  duration-300"
            >
              ✕
            </button>
            <img
              src="/319999918_493531042917763_5048063916269754568_n.jpg"
              alt=""
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
            />
          </div>
        </div>
      )}

      <Header />
      <div
        id="Sc01"
        className="z-0 text-white w-full h-[900px] lg:h-[700px] flex flex-col items-center justify-center bg-[linear-gradient(180deg,#000000,#ffff)]"
      >
        <div className="lg:grid flex flex-col lg:grid-cols-2 lg:w-[1080] xl:w-[1080px]  gap-x-30 space-y-5">
          <div className="w-full h-full flex flex-col justify-center lg:justify-center items-center lg:items-end">
            <div className="w-[300px] w-fit flex flex-col justify-center items-center space-y-[21px] ">
              <p className="text-[40px] font-bold">About Me</p>
              <img
                src="/319999918_493531042917763_5048063916269754568_n.jpg"
                alt="Profile"
                className="w-[150px] md:w-[250px] md:h-[250px] rounded-full cursor-pointer"
                onClick={() => setShow(true)}
              />
              <span className="flex flex-col justify-center items-center text-[15px] lg:text-[25px]">
                <table>
                  <tbody>
                    <tr className="">
                      <td>Nama</td>
                      <td className="px-5">:</td>
                      <td>I Gde Putu Wahyu Wijaya</td>
                    </tr>
                    <tr>
                      <td>Ttl</td>
                      <td className="px-5">:</td>
                      <td>Denpasar, 26 Mei 2008</td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-center lg:items-center lg:justify-start">
            <p className="text-[15px] lg:text-[23px] w-[250px] md:w-[300px] lg:w-[450px] text-center lg:text-start">
              Saya Sangat tertarik pada bidang pembuatan Website dan juga Sistem
              Digtal. Saya sangat minat dengan Teknologi Apa lagi tentang
              Komputer selain Itu saya suka juga hobi mencari Pengalaman baru
              mengenai. Dengan keterampilan saya dalam bidang komputer dan
              manajemen waktu yang baik, saya dapat menyelesaikan tugas dengan
              maksimal dan tepat waktu.
            </p>
          </div>
        </div>
      </div>

      <div
        id="Sc02"
        className="z-0 bg-white p-5 w-full min-h-[470px] font-jacqu text-[30px] flex flex-col space-y-10 justify-center  items-center"
      >
        <div className="w-full flex flex-col items-center font-bold">
          <span className="flex flex-col items-center justify-center text-black/60">
            <IoMdSchool />
            <p>Education</p>
          </span>
        </div>
        <div className=" h-[550px] sm:h-[850px] md:h-fit flex flex-col md:flex-row gap-5 w-full lg:w-[1030px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="
        group
        flex-1
        h-[260px]
        rounded-[25px]
        relative
        overflow-hidden
        transition-all
        duration-500
        hover:flex-[1.5]
      "
            >
              <img
                src={item.image}
                alt={item.School}
                className="absolute inset-0 w-full h-full object-cover scale-150"
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

      <div
        id="Sc03"
        className="b  z-0 my-5 w-full min-h-[200px] text-white bg-[#4E4E4E] flex flex-col items-center justify-center"
      >
        <div className=" h-full py-8 font-jacques ">
          <div className=" flex flex-col flex flex-col justify-start items-center">
            <p className="text-[50px]">Skill</p>
          </div>

          <div className="md:w-[720px] lg:w-[1024px] min-h-[290px] gap-y-8 grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full h-full flex flex-col justify-start items-center space-y-[20px]">
              <p className="text-[24px]">Soft Skill</p>
              <div>
                <ul className="list-disc text-[15px] space-y-[20px] font-normal">
                  <li className="h-[15px]">Adaption</li>
                  <li className="h-[15px]">Empati</li>
                  <li className="h-[15px]">Problem Solving</li>
                </ul>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-center space-y-[20px]">
              <p className="text-[24px]">Hard Skill</p>
              <div>
                <ul className=" list-disc text-[15px] space-y-[20px] font-normal">
                  <li className="h-[15px]">React</li>
                  <li className="h-[15px]">Laravel</li>
                  <li className="h-[15px]">UI/UX Desain</li>
                  <li className="h-[15px]">Mysql/PhpMyAdmin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Sc04"
        className="  z-0 w-full h-[620px] bg-white flex flex-col justify-center items-center"
      >
        <div className="text-[24px] font-jacques">Other Project</div>
        <div className="w-[261px] h-[250px] justify-center grid grid-cols font-jacques text-white">
          <div className="w-full h-[180px] flex flex-col justify-center items-center bg-[#EBEBEB] rounded-t-[25px]">
            <img src="/WIP.png" alt="" className="w-" />
          </div>
          <div className="pt-3 px-3 w-full h-[70px] rounded-b-[25px] bg-[linear-gradient(180deg,#6B6969,#D1CDCD)]">
            <div className="flex-col">
              <p className="text-[15px]">Comunity Discord</p>
              <p className="text-[8px]">
                Web for invited people join my discord server
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
