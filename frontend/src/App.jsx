import React from "react";
import Index from "./components/Index/Index";

import Q1 from "./Ques/Q1";
import Q2 from "./Ques/Q2";
import Q3 from "./Ques/Q3";
import Q4 from "./Ques/Q4";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/about/What_is_breastcare" element={<Q1 />}/>
          <Route path="/about/Who_is_it_for" element={<Q2 />}/>
          <Route path="/about/Why_breastcare" element={<Q3 />}/>
          <Route path="/about/Data_privacy" element={<Q4 />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
