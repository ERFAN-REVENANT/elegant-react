import React from "react";
import "../public/tailwind.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Clients from "./components/Clients";
import Sale from "./components/Sale";
import FAQ from "./components/FAQ";
import LetsTalk from "./components/LetsTalk";

const App = () => {
  return (
    <div className="bg-primary">
      <Header></Header>
      <Section></Section>
      <Clients></Clients>
      <Sale></Sale>
      <FAQ></FAQ>
      <LetsTalk></LetsTalk>
    </div>
  );
};

export default App;
