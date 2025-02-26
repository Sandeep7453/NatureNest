import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import SectionCard from "./Components/SectionCard";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Form";
import Kedarnath from "./Components/Blog/Kedarnath"; 
import Neelkanth from "./Components/Blog/Neelkanth";

import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router basename="/NatureNest">  {/* ✅ Fix: basename added */}
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Section1 />
            <Section2 />
            <SectionCard />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kedarnath" element={<Kedarnath />} />
        <Route path="/neelkanth" element={<Neelkanth />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
