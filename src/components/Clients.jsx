import React from "react";
import { frame1, modalCards } from "../constants";

const Clients = () => {
  return (
    <section className="">
      <h1 className="text-white font-lufga-medium text-center text-5xl w-[32rem] m-auto">
        We have already more than 12k clients
      </h1>
      <div className="relative p-10 md:p-20 h-[500px] w-full z-10">
        {" "}
        {/* Ensure z-index on parent */}
        {modalCards.map((modal, index) => (
          <div
            key={index}
            className={`absolute text-white p-8 rounded-[25px] w-[27rem] h-[16rem] transition-transform duration-300 hover:scale-105 bg-modal-bg font-normal flex flex-col justify-between`}
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
