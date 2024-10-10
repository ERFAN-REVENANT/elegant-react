import React from "react";
import { frame1, modalCards } from "../constants";

const Clients = () => {
  return (
    <section className="mb-[90px]">
      <h1 className="text-white font-lufga-medium text-center text-xl md:text-5xl md:w-[32rem] m-auto ">
        We have already more than 12k clients
      </h1>
      <div className="relative p-10 md:p-20 h-[500px] w-full z-10 overflow-hidden">
        {" "}
        {/* Ensure z-index on parent */}
        {modalCards.map((modal, index) => (
          <div
            key={index}
            className={`absolute text-white p-8 rounded-[25px] w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[16rem] pointer-events-none bg-modal-bg font-normal flex flex-col justify-between`}
            style={{
              ...modal.style,
              position: "absolute", // Ensure cards are absolute
            }}
          >
            <p className="mb-6 text-md">{modal.text}</p>
            <div className="flex items-center mt-6">
              <img
                src={modal.image}
                alt={modal.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg">{modal.name}</h4>
                <div className="text-yellow-400">
                  <img src={frame1} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
