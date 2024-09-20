import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from '../components/MainImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading='CONTACT ME' desc='Lets chat'/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact