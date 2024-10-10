import React, { Fragment } from "react";
import { arrowUpRight, image6, contact } from "../constants";

const Letstalk = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center m-auto mt-[150px]">
      <h1 className="text-white font-lufga-medium text-center text-5xl mt-10">
        Let’s Talk
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 items-center gap-3 justify-center min-h-screen w-full">
        {contact.map((item, index) => {
          const isMiddle = index === 1;
          const isLast = index === contact.length - 1;

          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-10 h-[600px] w-full max-w-[450px] mx-auto ${
                item.field ? "bg-opacity-30 backdrop-blur-md" : ""
              } ${
                isLast
                  ? "rounded-[30px] block" // Last Div: 30px border radius and always visible
                  : isMiddle
                  ? "lg:rounded-tl-[30px] lg:rounded-br-[30px] lg:rounded-tr-[150px] lg:rounded-bl-[150px] hidden lg:flex" // Middle Div: rounded corners
                  : "rounded-[30px] hidden lg:block" // First Div: 30px border radius, hide for below lg
              }`}
              style={{
                backgroundImage: `url(${image6})`,
                backgroundSize: item.style?.backgroundSize,
                backgroundPosition: item.style?.backgroundPosition,
              }}
            >
              {item.field && (
                <div className="text-white font-bold font-lufga-regular text-2xl flex flex-col h-full">
                  <Fragment>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="bg-[#725e45] bg-opacity-80 backdrop-blur-md px-5 py-3 rounded-lg w-full"
                      />
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Email"
                        className="bg-[#725e45] bg-opacity-80 backdrop-blur-md px-5 py-3 rounded-lg w-full"
                      />
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Message"
                        className="bg-[#725e45] bg-opacity-80 backdrop-blur-md px-5 py-3 rounded-lg w-full"
                      />
                    </div>
                  </Fragment>
                  <div className="flex justify-between mt-auto">
                    <button className="flex items-center gap-4">
                      Send <img src={arrowUpRight} width={30} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Letstalk;
