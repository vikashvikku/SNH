import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <section id="home">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
