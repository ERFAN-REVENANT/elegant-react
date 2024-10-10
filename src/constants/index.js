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
export { default as frame1 } from "../assets/Frame 1.png";
export { default as shoppingCart } from "../assets/Shopping cart.png";
import facebook from "../assets/Facebook.png";
import mail from "../assets/mail.png";
import youtube from "../assets/YouTube.png";
import instagram from "../assets/Instagram.png";

import U1 from "../assets/U1.png";
import U2 from "../assets/U2.png";
import U3 from "../assets/U3.png";
import U4 from "../assets/U4.png";
import U5 from "../assets/U5.png";

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
    image: U3,
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
    image: U5,
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
    image: U1,
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
    image: U4,
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
    image: U2,
    style: {
      top: "50%",
      left: "90%",
      transform: "translate(-50%, -50%) rotate(15deg)",
      zIndex: 2,
      filter: "brightness(0.4)", // Darkens the card
    },
  },
];

export const saleitems1 = [
  {
    id: 1,
    text: "",
    text2: "",
    link: "#",
    style: { backgroundPosition: "0% 0%", backgroundSize: "450%" },
  },
  {
    id: 2,
    text: "",
    text2: "",
    link: "#",
    style: { backgroundPosition: "32% 05%", backgroundSize: "450%" },
  },
  {
    id: 3,
    text: "",
    text2: "",
    link: "#",
    style: { backgroundPosition: "63% 03%", backgroundSize: "450%" },
  },
  {
    id: 4,
    text: "Fall Sale 50% Off",
    text2: "Shop Now",
    link: "#",
    style: { backgroundPosition: "100% 05%", backgroundSize: "450%" },
  },
];

export const saleitems2 = [
  { id: 1, style: { backgroundPosition: "05% 55%", backgroundSize: "450%" } },
  { id: 2, style: { backgroundPosition: "32% 56%", backgroundSize: "450%" } },
  { id: 3, style: { backgroundPosition: "62% 55%", backgroundSize: "450%" } },
  { id: 4, style: { backgroundPosition: "91% 53%", backgroundSize: "450%" } },
];

export const faqData = [
  {
    number: "01",
    title: "What payment methods do you accept?",
    description:
      "We accept credit cards, debit cards, PayPal, and other payment gateways.",
  },
  {
    number: "02",
    title: "How long does shipping take?",
    description:
      "Shipping typically takes 5-7 business days. Expedited options are available.",
  },
  {
    number: "03",
    title: "What is your return policy?",
    description:
      "You can return items within 30 days of purchase for a full refund or exchange.",
  },
  {
    number: "04",
    title: "How do I track my order?",
    description:
      "You will receive a tracking link via email once your order has shipped.",
  },
  {
    number: "05",
    title: "Do you offer international shipping?",
    description: "Yes, we ship internationally. Additional fees may apply.",
  },
  {
    number: "06",
    title: "How can I contact customer support?",
    description:
      "You can reach us via the contact form on our website or by calling our hotline.",
  },
  {
    number: "07",
    title: "How do I know which size to order?",
    description:
      "We offer a detailed size guide to help you select the right size.",
  },
  {
    number: "08",
    title: "Can I change or cancel my order after it has been placed?",
    description: "Yes, but only within 24 hours of placing the order.",
  },
];

export const contact = [
  { id: 1, style: { backgroundPosition: "0% 25%", backgroundSize: "250%" } },
  { id: 2, style: { backgroundPosition: "70% 25%", backgroundSize: "250%" } },
  {
    id: 3,
    field: true,
    style: { backgroundPosition: "0% 55%", backgroundSize: "510%" },
  },
];

// src/constants.js
export const footerTitles = ["Pages", "Legal information", "Contact us"];

export const footerLinks = [
  [
    { name: "Home", url: "/home" },
    { name: "New Collection", url: "/new-collection" },
    { name: "Catalog", url: "/catalog" },
    { name: "Delivery", url: "/delivery" },
  ],
  [
    { name: "Privacy policy", url: "/privacy-policy" },
    { name: "Terms & conditions", url: "/terms-conditions" },
  ],
];

export const footerIcons = [
  { name: "Mail", icon: mail, url: "mailto:example@mail.com" },
  { name: "Facebook", icon: facebook, url: "https://facebook.com" },
  { name: "Instagram", icon: instagram, url: "https://instagram.com" },
  { name: "YouTube", icon: youtube, url: "https://youtube.com" },
];
