import React from "react";
import { HeroImage } from "../../assets/images";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" w-full m-auto overflow-hidden bg-primary h-[740px] md:h-[680px]  flex items-center justify-center relative">
      <div className=" absolute  overflow-hidden top-0 left-0 w-full">
        <img
          className=" w-full h-[740px] md:h-[680px]  object-cover"
          src={HeroImage}
          alt="women"
        />
      </div>
      <div className=" w-[50%] md:w-[90%] m-auto">
        <div
          style={{
            background: "#2d98de",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: " 12px solid rgba(255, 255, 255, 0.3)",
          }}
          className="center flex-[2] w-[100%] flex flex-col items-center justify-center space-y-8 p-4 h-[350px] m-auto"
        >
          <div className=" w-full flex flex-col items-center space-y-4">
            <h2 className=" text-5xl md:text-4xl font-medium text-white">
              Stuck with questions?
            </h2>
            <h2 className=" text-5xl md:text-4xl font-medium text-white">
              get them answered{" "}
            </h2>
          </div>
          <div className=" w-[90%] search-box flex items-center bg-white p-3 px-4 rounded-3xl space-x-2">
            <AiOutlineSearch size={25} className=" text-primary" />
            <input
              className="w-full"
              type="search"
              placeholder="What's your question?"
            />
          </div>
        </div>
        {/* <div className="rigth flex-1 w-full md:hidden">
          <img
            className=" w-full object-cover h-[500px]"
            src={men}
            alt="women"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
