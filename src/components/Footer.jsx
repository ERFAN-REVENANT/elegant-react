import React from "react";
import {
  elegant,
  footerTitles,
  footerLinks,
  footerIcons,
  arrowUp,
} from "../constants";

const Footer = () => {
  return (
    <footer className="bg-secondary flex px-[60px] py-[90px] justify-between font-lufga-medium text-white">
      {/* First Section: Logo and Slogan */}
      <div className="">
        <img className="mb-3" src={elegant} width={100} alt="" />
        <p className="text-white">Elevate Your Style Today!</p>
      </div>

      {/* Second Section: Titles, Links, and Social Icons */}
      <div className="flex space-x-16">
        {footerTitles.map((title, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{title}</h3>

            {/* Render links for the first two columns */}
            {index < 2 && (
              <ul>
                {footerLinks[index].map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.url} className="opacity-70 font-lufga-light">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Render social media icons for the "Contact us" column */}
            {index === 2 && (
              <div className="flex space-x-4">
                {footerIcons.map((icon, iconIndex) => (
                  <a
                    href={icon.url}
                    key={iconIndex}
                    className=" border-white rounded-full border-2 border-opacity-20 p-3"
                  >
                    <img src={icon.icon} alt={icon.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button>
        <img
          src={arrowUp}
          className="bg-[#010101] rounded-full p-5"
          width={60}
          alt=""
        />
      </button>
    </footer>
  );
};

export default Footer;
