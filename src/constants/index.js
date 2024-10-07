// Importing images using default imports
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

// Exporting images and additional objects
export { default as image5 } from "../assets/5.jpg";
export { default as image6 } from "../assets/6.jpg";
export { default as arrowUpRight } from "../assets/Arrow up-right.png";
export { default as arrowUp } from "../assets/Arrow up.png";
export { default as chevronDown } from "../assets/Chevron down.png";
export { default as chevronUp } from "../assets/Chevron up.png";
export { default as elegant } from "../assets/elegant.png";
export { default as facebook } from "../assets/Facebook.png";
export { default as frame1 } from "../assets/Frame 1.png";
export { default as mail } from "../assets/mail.png";
export { default as shoppingCart } from "../assets/Shopping cart.png";
export { default as youtube } from "../assets/YouTube.png";

// Header array
export const header = [
  { id: 1, title: "Home" },
  { id: 2, title: "New Collection" },
  { id: 3, title: "Catalog" },
  { id: 4, title: "Delivery" },
  { id: 5, title: "Contact Us" },
];

// Section content array with additional object
export const sectionContent = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: "catalog", text: "See Catalog", bg: "bg-[#53a826]" }, // Additional object with text
  { id: 3, src: image3 },
  { id: 4, src: image4 },
];

export const sectionText = [
  {
    id: 1,
    text: "Here you will find everything you need. Our collection is constantly expanding to suit your unique style.",
    state: false
  },
  {
    id: 2,
    text: "The women's clothing in our new collection isboth comfortable and stylish, ideal for bothcasual days and special occasions, all ataffordable prices.",
    state: false
  },
  {
    id: 3,
    text: "Explore New Collection",
    state: true
  },
];
