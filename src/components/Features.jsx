import React from 'react'

const Features = () => {
  return (
    <section className="features">
        <div className="container-small features__container">
            <div className="feature-card" >
                    <div className="feature-card-circle" data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0" >Connect</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200" data-aos-offset="0" >Optimize</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" data-aos="fade-down"></div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0">Analyze</p>
            </div>
        </div>
    </section>
  )
}

export default Features