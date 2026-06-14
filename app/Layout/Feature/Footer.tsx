
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full xl:h-[228px] bg-black flex flex-col justify-center items-center pt-5">
      <div className="lg:w-[1020px] xl:w-[1280px]  h-[188px] flex flex-col lg:grid lg:grid-cols-2 justify-center items-center">
        <div className=" w-full h-full flex flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <img src="/Moga Ngak Pecahh.png" alt="" className="w-15" />
            <span>
              <p className="font text-[24px] text-white font-jacques">
                Portofolio
              </p>
            </span>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center md:items-center text-gray-300">
            <p className="text-[18px] lg:text-[21px] underline ">Social Media</p>
            <div className="flex flex-col space-y-3">
              <span className="flex flex-row items-center justify-center space-x-[5px]">
                <FaInstagram size={25} />
                <a href="">Wahyu Wijaya</a>
              </span>
            </div>
        </div>
      </div>

      <hr className="text-white w-[90%]" />
      <div className=" w-full h-fit text-white flex flex-row justify-center items-center">
        <p className="text-[8px] md:text-[12px] lg:text-[21px]">© 2026 I Gde Putu Wahyu Wijaya.  All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
