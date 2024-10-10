import React, { useState } from "react";
import { elegant, header, shoppingCart } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleCloseMenu = () => setMenuOpen(false); // Function to close the menu after clicking a link

  return (
    <header className="flex items-center justify-between p-6 sm:p-10">
      {/* Logo Section */}
      <div>
        <img
          src={elegant}
          width={100}
          className="pointer-events-none"
          alt="Logo"
        />
      </div>

      {/* Hamburger Icon for Small Devices */}
      <div className="sm:hidden flex">
        <button onClick={handleMenuToggle} className="text-white">
          {menuOpen ? (
            <AiOutlineClose size={30} /> // Close icon when the menu is open
          ) : (
            <AiOutlineMenu size={30} /> // Hamburger icon when the menu is closed
          )}
        </button>
      </div>

      {/* Navigation Links and Shopping Cart */}
      <div className="hidden sm:flex items-center font-lufga-regular text-white space-x-4 lg:space-x-8">
        {/* Reduced space between links for smaller screens */}
        {header.map((item, i) => (
          <li
            className="list-none font-lufga-light tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-sm md:text-base"
            // Smaller font for sm, normal for md and larger
            key={i}
          >
            {item.title}
            {i !== header.length - 1 && (
              <span className="mx-2 md:mx-4 lg:mx-8 opacity-40"> | </span>
              // Smaller spacing between pipe dividers on small screens
            )}
          </li>
        ))}
      </div>

      {/* Shopping Cart Icon */}
      <div className="hidden sm:block">
        <img
          src={shoppingCart}
          className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          alt="Shopping Cart"
        />
      </div>

      {/* Mobile Menu (only visible when the menu is open) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 sm:hidden">
          <ul className="text-white text-center">
            {header.map((item, i) => (
              <li
                onClick={handleCloseMenu} // Close menu after clicking a link
                className="mb-6 font-lufga-light tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-lg"
                key={i}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
