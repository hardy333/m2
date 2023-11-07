import React from 'react'
import MarlinLogoSvg from './MarlinLogoSvg'
import fb from "./fb.png"
import insta from "./insta.png"
import youtube from "./youtube.png"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container-small footer__container'>
        <a href="#" className='footer__logo' data-aos="fade-in" >
        <MarlinLogoSvg />
        </a>
        <ul className='footer__links' data-aos="fade-in" data-aos-delay={200}>
            <li>
                <a href="#">
                    <img src={fb} alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                <img src={insta} alt="" />

                </a>
            </li>
            <li>
                <a href="#">
                <img src={youtube} alt="" />

                </a>
            </li>
         
        </ul>
        <p data-aos="fade-in" data-aos-delay={400}>All rights reserved Copyright &copy; Marlin 2023.</p>
        </div>
    </footer>
  )
}

export default Footer