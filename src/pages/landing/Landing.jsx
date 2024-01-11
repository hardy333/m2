import React, { useEffect } from "react";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ManageOrders from "../../components/ManageOrders";
import MiddleSections from "../../components/MiddleSections";
import Trends from "../../components/Trends";
import Navbar from "../../components/Navbar";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    console.log(AOS);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <MiddleSections />
      <ManageOrders />
      <Trends />
      <Footer />
    </>
  );
};

export default Landing;
