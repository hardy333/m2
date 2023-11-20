import React, { useState } from "react";
import classes from "./pricing.module.css";
import CheckSvg from "../../components/svgs/CheckSvg";
import Switch from "react-switch";

const PricingCardsSection = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <section className={`${classes["pricing-section"]}`}>
      <div className="container-small">
        <div className={`${classes["switches-container"]}`}>
          <div className={classes.price_switch_container}>
            <span>Monthly</span>
            <Switch
              className={classes.price_switch}
              uncheckedIcon={false}
              offHandleColor={"#6E0FF5"}
              onHandleColor={"#fff"}
              offColor="#fff"
              onColor="#6E0FF5"
              checkedIcon={false}
              onChange={handleChange1}
              checked={isChecked1}
            />
            <span>Yearly</span>
          </div>
          <div className={classes.price_switch_container}>
            <span>For Retailers</span>
            <Switch
              className={classes.price_switch}
              uncheckedIcon={false}
              offHandleColor={"#6E0FF5"}
              onHandleColor={"#fff"}
              offColor="#fff"
              onColor="#6E0FF5"
              checkedIcon={false}
              onChange={handleChange2}
              checked={isChecked2}
            />
            <span>For Vendors</span>
          </div>
        </div>

        <section className={`${classes["price-cards"]}`}>
          <PriceCard className="basic"  priceNumber={550} strokeColor={"#FF3360"} />
          <PriceCard className="supernova" priceNumber={1700} strokeColor={"#6E0FF5"}/>
          <PriceCard className="standard" priceNumber={990} strokeColor={"#406AFF"}/>
        </section>
      </div>
    </section>
  );
};

export default PricingCardsSection;

const PriceCard = ({priceNumber, strokeColor, className}) => {
  const c = "price-card--"+className
  
  return (
    <>
      <article className={`${classes["price-card"]} ${classes[c]}`} style={{border: `5px solid ${strokeColor}`}}>
        <h2>{priceNumber}$</h2>
        <ul>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
          <li>
            {" "}
            <CheckSvg delay={0} fill={strokeColor} />{" "}
            <span>Lorem ipsum loprem upsum</span>{" "}
          </li>
        </ul>
      </article>
    </>
  );
};
