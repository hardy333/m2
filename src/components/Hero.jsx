import React from 'react'

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
                <div className="box"></div>

            </div>
        </div>
    </section>
  )
}

export default Hero