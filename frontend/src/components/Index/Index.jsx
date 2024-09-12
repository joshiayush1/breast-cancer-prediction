import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import History from "../History/History";
import Articles from "../Articles/Articles";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <History />
      <Articles />
      <Faq />
      <Contact />
    </>
  );
};

export default Index;
