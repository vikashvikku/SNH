import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
