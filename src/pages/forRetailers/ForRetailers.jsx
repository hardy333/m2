import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import ForRetailersHero from './Hero';
import ForRetailersMiddleSections from './MiddleSections';
import Footer from '../../components/Footer';

// css
import "./for-retailers.css"
import Features from '../../components/Features';

const ForRetailers = () => {
  useEffect(() => {

    AOS.init({
      once: true, 
    });
    console.log(AOS)
    
  },[])
  
  return (
    <>
    <Navbar />
    <ForRetailersHero />
    <Features bgColor="white"/>
    <ForRetailersMiddleSections />
    <Footer />
    
    </>
  )
}

export default ForRetailers