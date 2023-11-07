import React from "react";
import CheckSvg from "./CheckSvg";

const MiddleSections = () => {
  const delayInterval = 300
  
  
  return (
    <>
      {/* 1 */}
      <section className="middle-section " id="what-is-marlin">
        <div className="container-small flex-container middle-section__container">
          <div data-aos="fade-right">
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
          <div className="box-container" data-aos="fade-left">
            <div className="box"></div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="middle-section">
        <div
          className="container-small flex-container middle-section__container
        flex-container--reverse
        
        
        "
        >
          <div data-aos="fade-left">
            <h2>Who it’s for?</h2>
            <p>
              If you are FMCG Retailer with dozens of markets or if you are FMCG
              distributor servicing chain retailers, Marlin is here for your
              rescue. Manage relationships more efficiently, way faster.
            </p>
          </div>
          <div className="box-container" data-aos="fade-right">
            <div className="box"></div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="middle-section  how-it-works">
        <div
          className="container-small flex-container middle-section__container
       
        
        
        "
        
        >
          <div data-aos="fade-right">
            <h2>How it works?</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay={500}>
                <CheckSvg delay={800} delayInterval={delayInterval} />
                
                <div className="p-container"  >
                  <p className="top" data-aos-off="fade-in" data-aos-off-delay="500">Smooth integration</p>
                  <p className="bottom" data-aos-off="fade-in" data-aos-off-delay={2*delayInterval} >
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>  
              </li>
              <li data-aos="fade-left" data-aos-delay={500}>
                <CheckSvg delay={1000} />
                <div className="p-container"  >
                  <p className="top" data-aos-off="fade-in" data-aos-off-delay={3*delayInterval}>Smooth integration</p>
                  <p className="bottom" data-aos-off="fade-in" data-aos-off-delay={4*delayInterval}>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>
              </li>
              <li data-aos="fade-right" data-aos-delay={500}>
                <CheckSvg delay={1200} />
                <div className="p-container"  >
                  <p className="top" data-aos-off="fade-in" data-aos-off-delay={5*delayInterval}>Smooth integration</p>
                  <p className="bottom" data-aos-off="fade-in" data-aos-off-delay={6*delayInterval}>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-container" data-aos="fade-down-left">
            <div className="box"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSections;
