import React from "react";
import { sectionContent, arrowUpRight, sectionText } from "../constants";

const Section = () => {
  return (
    <section className="items-center justify-center text-center pointer-events-none">
      {/* Header */}
      <h1 className="relative text-white font-lufga-bold text-[5rem] xl:text-[25rem] leading-[19rem] z-4">
        Elegant
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center z-1 gap-4">
        {sectionContent.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center [&>img]:odd:rounded-full [&>img]:even:rounded-[50px]"
          >
            {item.src ? (
              <img
                src={item.src}
                alt=""
                className="h-[300px] w-[300px] object-cover pointer-events-none rounded-full bg-[#18181b] p-3"
              />
            ) : (
              <div
                className={`text-white gap-4 h-[300px] w-[300px] flex flex-col items-center justify-center font-lufga-light rounded-full text-[1.5rem] border-[#18181b] border-[12px] ${item.bg}`}
              >
                <img src={arrowUpRight} width={30} height={30} alt="" />
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Section Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5 font-lufga-light">
        {sectionText.map((item) => (
          <div
            key={item.id}
            className="bg-[#18181b] w-full max-w-[470px] h-[200px] p-9 text-left rounded-[35px] flex items-center"
          >
            {item.state ? (
              <div className="flex items-center justify-center m-auto gap-2 text-xl text-white">
                {item.text}
                <img src={arrowUpRight} width={30} height={30} alt="" />
              </div>
            ) : (
              <div className="text-lg text-opacity-50 text-white">
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="[&>span]:text-yellow-400 text-white text-opacity-70 w-full max-w-[42rem] text-xl font-lufga-light m-auto my-[140px]">
        At Elegant, we believe that <span>fashion is an art</span> form — one
        that should reflect individuality, confidence, and timeless beauty. Our
        journey began with a simple idea: to create clothing that not only fits
        your body but also <span>complements your spirit.</span>
      </div>
    </section>
  );
};

export default Section;
