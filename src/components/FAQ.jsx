import React, { useState } from "react";
import { chevronDown, chevronUp, faqData } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[150px]">
      <h1 className="text-white font-lufga-medium text-center text-5xl w-[32rem] m-auto mb-10 ">
        FAQ
      </h1>
      <div className="w-full max-w-3xl">
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-300 overflow-hidden rounded-xl mb-4 ${
              activeIndex === i ? "bg-modal-bg" : "bg-[#18181b]"
            }`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer font-lufga-medium text-white"
              onClick={() => toggle(i)}
            >
              <h3 className="flex gap-3 items-center text-xl">
                <span>{item.number}</span>
                {item.title}
              </h3>
              <img
                src={activeIndex === i ? chevronUp : chevronDown}
                alt="Toggle Icon"
                className="w-5 h-5"
              />
            </div>
            <div
              className={`transition-max-height duration-800 ease-in-out overflow-hidden ${
                activeIndex === i ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="p-4 font-lufga-light text-white bg-modal-bg">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
