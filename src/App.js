import React from "react";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Productdetail from "./components/pages/Productdetail";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:quntaty" element={<Productdetail />} />
        
      </Routes>
     
     
    </>
  );
};

export default App;
