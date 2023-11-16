import React from 'react'
import p1 from "../assets/p1-min.png"
import ill1 from "../assets/ill1.png"
import BigDotsSvg from './svgs/BigDotsSvg'
import StarsSvg from './svgs/StarsSvg'


const Hero = () => {
  return (
    <section className="hero">
        <div className="container-small hero__container flex-container">
            <div>
                <h1 data-aos="fade-down" data-aos-delay={400}>
                Simplifying and cheapening <br /> communications between
                  <br />
                <span style={{color: "var(--color-primary)"}}>
                retailers and their vendors

                </span>
                </h1>
                <button style={{padding: "12px 60px", fontSize:"18px"}} className="btn" data-aos="fade-up" data-aos-delay={400}>Try it out</button>
                
            </div>

            <div className='box-container'>
                <div className="box hero-box" style={{height:"500px"}} data-aos="fade-left" data-aos-delay={400}>
                  <BigDotsSvg className="hero-svg-big-dotts" />
                  <StarsSvg className="hero-svg-stars"/>
                  <img style={{widt: "100%"}} src={ill1} className='hero-img' alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero