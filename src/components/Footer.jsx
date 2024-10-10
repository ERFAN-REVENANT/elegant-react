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
    <footer className="bg-secondary flex flex-col items-center md:flex-row md:justify-between px-5 md:px-[60px] py-[90px] font-lufga-medium text-white">
      {/* First Section: Logo and Slogan */}
      <div className="flex flex-col items-center mb-5 md:mb-0 md:items-start">
        <img className="mb-3" src={elegant} width={100} alt="Logo" />
        <p className="text-white text-center">Elevate Your Style Today!</p>
      </div>

      {/* Second Section: Titles, Links, and Social Icons */}
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-16">
        {footerTitles.map((title, index) => (
          <div key={index} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-left">{title}</h3>

            {/* Render links for the first two columns */}
            {index < 2 && (
              <ul className="flex flex-col items-center md:items-start">
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
                    className="border-white rounded-full border-2 border-opacity-20 p-3"
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
      <button className="mt-5 md:mt-0">
        <img
          src={arrowUp}
          className="bg-[#010101] rounded-full p-5"
          width={60}
          alt="Scroll to top"
        />
      </button>
    </footer>
  );
};

export default Footer;
