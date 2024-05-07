import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductPage from "./Components/ProductPage";
import Home from "./Components/Home";
import ViewCart from "./Components/ViewCart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ViewCart" element={<ViewCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;