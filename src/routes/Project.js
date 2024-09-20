import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from '../components/MainImg2';
import DynamicCard from '../components/DynamicCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading='MY PROJECTS' desc='Some of my recent projects'/>
      <DynamicCard/>
      <Footer/>
    </div>
  )
}

export default Project