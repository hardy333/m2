import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import classes from "./pricing.module.css";
import PricingCardsSection from "./PricingCardsSection";
import AutomateSection from "../blog/AutomateSection";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    console.log(AOS);
  }, []);

  return (
    <>
      <Navbar />
      <section className={classes.hero}>
        <div className={`container-small ${classes.hero__container}`}>
          <h1>Pricing plans that suit you</h1>
          <p>
            Choose either monthly or yearly subscription and enjoy <br /> continuous
            service and support
          </p>
        </div>
      </section>
      <PricingCardsSection />

      <section className={classes["choose-plan"]}>
        <div className={`container-small ${classes["choose-plan__container"]}`}>
          <h2>Difficulties choosing a plan?</h2>
          <button className="btn btn--outline" >Book a call</button>
        </div>
      </section>

      <AutomateSection />
      <Footer />
    </>
  );
};

export default Pricing;
