import React from 'react'
import NavBar from '../components/NavBar'
import Header from "../components/Header";
import Comidas from "../components/Comidas";
import QuienesSomos from "../components/QuienesSomos";
import Footer from "../components/Footer";
import Banner from '../components/Banner';

const index = () => {
  return (
    <div>
      
      <NavBar />
      <Banner/>
      <Header/>
      <Comidas/>
      <QuienesSomos/>
      <Footer/>
      
    </div>
  )
}

export default index
