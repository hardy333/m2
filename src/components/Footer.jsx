import React from 'react'
import MarlinLogoSvg from './MarlinLogoSvg'
import fb from "./fb.png"
import insta from "./insta.png"
import youtube from "./youtube.png"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container-small footer__container'>
        <a href="#" className='footer__logo'>
        <MarlinLogoSvg />
        </a>
        <ul className='footer__links'>
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
        <p>Bla bla bla all rights reserved. 2023</p>
        </div>
    </footer>
  )
}

export default Footer