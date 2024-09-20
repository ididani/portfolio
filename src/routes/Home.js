import React from "react";
import Navbar from "../components/Navbar";
import MainImg from "../components/MainImg";
import Footer from "../components/Footer";
import DynamicCard from "../components/DynamicCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainImg />
      <DynamicCard/>
      <Footer />
    </div>
  );
};

export default Home;
