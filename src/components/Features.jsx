import React from 'react'

const Features = ({bgColor=null}) => {
  return (
    <section className="features" style={{background: bgColor}}>
        <div className="container-small features__container">
            <div className="feature-card" >
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)": "white"}} data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0" >Connect</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)": "white"}} data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200" data-aos-offset="0" >Optimize</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)": "white"}} data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0">Analyze</p>
            </div>
        </div>
    </section>
  )
}

export default Features