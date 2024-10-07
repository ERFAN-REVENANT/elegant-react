import React from "react";
import "../public/tailwind.css";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="bg-primary">
      <Header></Header>
      <Section></Section>
    </div>
  );
};

export default App;
