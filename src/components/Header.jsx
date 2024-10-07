import React from "react";
import { elegant, header, shoppingCart } from "../constants";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <div>
        <img
          src={elegant}
          width={100}
          className="pointer-events-none"
          alt="Logo"
        />
      </div>
      <div className="flex font-lufga-regular text-white">
        {header.map((item, i) => (
          <li
            className="list-none font-lufga-light tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            key={i}
          >
            {item.title}
            {i !== header.length - 1 && (
              <span className="mx-8 opacity-40 "> | </span>
            )}
          </li>
        ))}
      </div>
      <div>
        <img
          src={shoppingCart}
          className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          alt="Shopping Cart"
        />
      </div>
    </div>
  );
};

export default Header;
