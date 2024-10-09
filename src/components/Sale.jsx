import React from "react";
import { arrowUpRight, image5, saleitems1, saleitems2 } from "../constants";

const Sale = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center m-auto mb-[200px]">
      <h1 className="text-white font-lufga-medium text-center text-5xl mt-10">
        Get Ready to Save Big!
      </h1>
      <div
        className="grid grid-cols-4 gap-5 p-10 bg-no-repeat bg-cover bg-top min-h-screen mt-10"
        style={{ backgroundImage: `url(${image5})` }}
      >
        {/* First Set: saleitems1 */}
        {saleitems1.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between  p-10 h-[340px] w-[340px] ${
              index % 2 === 0
                ? "rounded-full bg-gray-800 bg-opacity-75"
                : "rounded-[30px] bg-gray-800 bg-opacity-75"
            } mx-auto`}
          >
            {item.text && (
              <div className="text-white font-bold font-lufga-regular text-6xl">
                {item.text}
              </div>
            )}
            {item.text2 && (
              <div className="flex items-center gap-3 text-white font-lufga-extralight text-2xl mt-2">
                {item.text2}
                <img src={arrowUpRight} alt="arrow" className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}

        {/* Second Set: saleitems2 */}
        {saleitems2.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-center items-center p-4 h-[340px] w-[340px] ${
              index % 2 !== 0
                ? "rounded-full bg-gray-800 bg-opacity-75"
                : "rounded-[30px] bg-gray-800 bg-opacity-75"
            } mx-auto`}
          >
            {item.text && (
              <div className="text-white text-xl font-bold font-lufga-light">
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sale;
