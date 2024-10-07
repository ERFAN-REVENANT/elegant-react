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
    state: false,
  },
  {
    id: 2,
    text: "The women's clothing in our new collection isboth comfortable and stylish, ideal for bothcasual days and special occasions, all ataffordable prices.",
    state: false,
  },
  {
    id: 3,
    text: "Explore New Collection",
    state: true,
  },
];

export const modalCards = [
  {
    id: 1,
    name: "John Doe",
    text: "I was surprised by how versatile these pieces are. I can wear them both casually and formally without any issue. The quality is top-notch.",
    image: "https://via.placeholder.com/50",
    style: {
      top: "50%",
      left: "10%",
      transform: "translate(-50%, -50%) rotate(-15deg)",
      zIndex: 1,
      filter: "brightness(0.4)", // Darkens the card
    },
  },
  {
    id: 2,
    name: "Leon Korendovich",
    text: "The Lightweight Trench Coat is an essential for any season. It’s practical, stylish, and the fabric feels amazing. I’m thrilled with the purchase!",
    image: "https://via.placeholder.com/50",
    style: {
      top: "50%",
      left: "30%",
      transform: "translate(-50%, -50%) rotate(10deg)",
      zIndex: 2,
      filter: "brightness(0.4)", // Darkens the card
    },
  },
  {
    id: 3,
    name: "Eleanora Rivera",
    text: "The Neutral Oversize pieces are exactly what I was looking for—stylish, comfortable, and perfect for any occasion. The neutral tones make them easy to mix and match.",
    image: "https://via.placeholder.com/50",
    style: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(0deg)",
      zIndex: 3,
      filter: "brightness(1)", // Keep full brightness for the center card
    },
  },
  {
    id: 4,
    name: "Mirailda Volskih",
    text: "These Silk Dresses are exactly what I needed for both casual and luxurious settings. The colors are stunning.",
    image: "https://via.placeholder.com/50",
    style: {
      top: "50%",
      left: "70%",
      transform: "translate(-50%, -50%) rotate(-10deg)",
      zIndex: 1,
      filter: "brightness(0.4)", // Darkens the card
    },
  },
  {
    id: 5,
    name: "Jane Smith",
    text: "The materials feel luxurious, and the fit is perfect. I’ve gotten so many compliments every time I wear these pieces. Highly recommend!",
    image: "https://via.placeholder.com/50",
    style: {
      top: "50%",
      left: "90%",
      transform: "translate(-50%, -50%) rotate(15deg)",
      zIndex: 2,
      filter: "brightness(0.4)", // Darkens the card
    },
  },
];
