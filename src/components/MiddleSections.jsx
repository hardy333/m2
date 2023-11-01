import React from "react";
import CheckSvg from "./CheckSvg";

const MiddleSections = () => {
  return (
    <>
      {/* 1 */}
      <section className="middle-section " id="what-is-marlin">
        <div className="container-small flex-container middle-section__container">
          <div>
            <h2>What is Marlin?</h2>
            <p>
              Marlin is a digital platform that connects FMCG retailers to their
              vendors and helps them manage orders, order statuses, product
              catalogs, available stocks, special offers and much more, in a
              single space.
            </p>
            <p>
              Last but not least, Marlin provides a single view of Service Level
              Analytics for both businesses so that they can actually use it.
            </p>
          </div>
          <div className="box-container">
            <div className="box"></div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="middle-section ">
        <div
          className="container-small flex-container middle-section__container
        flex-container--reverse
        
        
        "
        >
          <div>
            <h2>Who it’s for?</h2>
            <p>
              If you are FMCG Retailer with dozens of markets or if you are FMCG
              distributor servicing chain retailers, Marlin is here for your
              rescue. Manage relationships more efficiently, way faster.
            </p>
          </div>
          <div className="box-container">
            <div className="box"></div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="middle-section ">
        <div
          className="container-small flex-container middle-section__container
       
        
        
        "
        >
          <div>
            <h2>How it works?</h2>
            <ul>
              <li>
                <CheckSvg />

                <div className="p-container">
                  <p className="top">Smooth integration</p>
                  <p className="bottom">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>
              </li>
              <li>
                <CheckSvg />
                <div className="p-container">
                  <p className="top">Smooth integration</p>
                  <p className="bottom">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>
              </li>
              <li>
                <CheckSvg />
                <div className="p-container">
                  <p className="top">Smooth integration</p>
                  <p className="bottom">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-container">
            <div className="box"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSections;
