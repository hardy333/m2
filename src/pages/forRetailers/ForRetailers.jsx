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
    // window.location.reload()

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
    <section className="simple-cta-section">
      <button className="btn">Book a call</button>
    </section>
    <Footer />
    
    </>
  )
}

export default ForRetailers