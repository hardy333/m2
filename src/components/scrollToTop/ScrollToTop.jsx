import React from 'react'
import styles from "./scroll-top-top.module.css"
console.log(styles)
// import { FaArrowUp } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {
  return (
    <a href="#" className={`${styles["scroll-to-top-btn"]}`}>
      <GoArrowUp />
    </a>
  )
}

export default ScrollToTop  