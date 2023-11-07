import React from 'react'
import p1 from "../assets/p1-min.png"


const Hero = () => {
  return (
    <section className="hero">
        <div className="container-small hero__container flex-container">
            <div>
                <h1 data-aos="fade-down">
                Simplifying and cheapening <br /> communications between
                  <br />
                <span style={{color: "var(--color-primary)"}}>
                retailers and their vendors

                </span>
                </h1>
                <button className="btn" data-aos="fade-up">Try it out</button>
                
            </div>

            <div className='box-container'>
                <div className="box hero-box" data-aos="fade-left">
                  <img src={p1} className='hero-img' alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero