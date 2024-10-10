import React from "react";
import { arrowUpRight, image5, saleitems1, saleitems2 } from "../constants";

const Sale = () => {
  return (
    <section className="hidden md:hidden flex-col items-center justify-center m-auto min-h-screen lg:hidden xl:flex">
      <h1 className="text-white font-lufga-medium text-center text-5xl mt-10">
        Get Ready to Save Big!
      </h1>
      <div className="grid grid-cols-4 items-center justify-center gap-5 p-10 min-h-screen mt-5 relative">
        {/* First Set: saleitems1 */}
        {saleitems1.map((item, index) => (
          <div
            key={item.id}
            className={`relative h-[340px] w-[340px] mx-auto ${
              index % 2 === 0 ? "rounded-full" : "rounded-[30px]"
            }`}
            style={{
              backgroundImage: `url(${image5})`, // Use image5 as the background
              backgroundSize: item.style.backgroundSize, // Scale background size
              backgroundPosition: item.style.backgroundPosition, // Random background position
            }}
          >
            <div className="flex flex-col justify-between p-10 h-full">
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
          </div>
        ))}

        {/* Second Set: saleitems2 */}
        {saleitems2.map((item, index) => (
          <div
            key={item.id}
            className={`relative h-[340px] w-[340px] mx-auto ${
              index % 2 === 0 ? "rounded-[30px]" : "rounded-full"
            }`}
            style={{
              backgroundImage: `url(${image5})`,
              backgroundSize: item.style.backgroundSize,
              backgroundPosition: item.style.backgroundPosition,
            }}
          >
            <div className="flex justify-center items-center h-full p-10">
              {item.text && (
                <div className="text-white text-xl font-bold font-lufga-light">
                  {item.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sale;
