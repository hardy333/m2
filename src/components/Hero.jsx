import React from 'react'
import p1 from "../assets/p1.png"


const Hero = () => {
  return (
    <section className="hero">
        <div className="container-small hero__container flex-container">
            <div>
                <h1>
                გაამარტივე და დააჩქარე <br />კომუნიკაცია რითეილერებსა   <br />
                <span style={{color: "var(--color-primary)"}}>
                და ვენდორებს შორის

                </span>
                </h1>
                <button className="btn">გატესტე ფუნქციონალი</button>
                
            </div>

            <div className='box-container'>
                <div className="box hero-box">
                  <img src={p1} className='hero-img' alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero