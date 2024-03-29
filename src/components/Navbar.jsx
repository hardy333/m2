import React from "react";
import MarlinLogoSvg from "./svgs/MarlinLogoSvg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="home-link" data-aos="fade-right">
          <MarlinLogoSvg />
          <svg
            className="marlin-text"
            id="Layer_3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 261.18 75.99"
          >
            <defs></defs>
            {/*  */}
            <path
              id="marlin-letter-m"
              class="cls-1"
              d="m67.15,6.16c-4.1-4.11-9.05-6.16-14.85-6.16-6.92,0-12.13,2.3-15.63,6.9C33.15,2.3,27.93,0,21,0c-5.79,0-10.74,2.05-14.85,6.16C2.05,10.26,0,15.21,0,21v54.99h10.7V21c0-2.88,1-5.32,3.01-7.33,2.01-2.01,4.44-3.01,7.29-3.01s5.28,1,7.29,3.01c2.01,2.01,3.01,4.45,3.01,7.33v54.99h10.7V21c0-2.88,1.01-5.32,3.01-7.33,2.01-2.01,4.44-3.01,7.29-3.01s5.33,1,7.34,3.01c2.01,2.01,3.01,4.45,3.01,7.33v54.99h10.66V21c0-5.79-2.06-10.74-6.16-14.84Z"
            />
            {/*  */}
            <path
              id="marlin-letter-a"
              class="cls-1"
              d="m125.39,33.07c-4.91-4.92-10.84-7.38-17.77-7.38s-12.85,2.46-17.77,7.38c-4.91,4.92-7.37,10.85-7.37,17.77s2.46,12.85,7.37,17.77c4.92,4.92,10.85,7.38,17.77,7.38,6.32,0,11.14-1.76,14.46-5.28,0,1.97,0,3.72,0,5.28h10.68v-25.15c0-6.92-2.46-12.85-7.38-17.77Zm-7.55,28.03c-2.79,2.8-6.2,4.19-10.22,4.19s-7.43-1.39-10.26-4.19c-2.79-2.82-4.19-6.24-4.19-10.26s1.4-7.39,4.19-10.21c2.83-2.83,6.25-4.24,10.26-4.24s7.4,1.41,10.22,4.24c2.82,2.82,4.24,6.23,4.24,10.21s-1.42,7.44-4.24,10.26Z"
            />
            {/*  */}
            <path
              id="marlin-letter-r"
              class="cls-1"
              d="m160.76,25.69c-5.33,0-9.87,1.88-13.62,5.64-3.7,3.75-5.58,8.29-5.63,13.62v31.04h10.69v-31.04c.03-2.39.86-4.41,2.49-6.07,1.66-1.66,3.68-2.49,6.07-2.49h7.77v-10.7h-7.77Z"
            />
            {/*  */}
            <rect
              id="marlin-letter-l"
             class="cls-1" x="175.08" width="10.7" height="75.99" />

            {/*  */}
            <path
              class="cls-1"
              id="marlin-letter-i-bottom"
              d="m197.87,25.69v50.3h10.7V25.69h-10.7Z"
            />

            {/*  */}
            <path
              class="cls-1"
              id="marlin-letter-n"
              d="m254.98,31.89c-4.13-4.13-9.1-6.2-14.89-6.2s-10.8,2.07-14.93,6.2c-4.13,4.14-6.2,9.11-6.2,14.94v29.16h10.7v-29.16c0-2.89,1-5.34,3.01-7.38,2.04-2.04,4.51-3.06,7.42-3.06s5.34,1.02,7.38,3.06c2.01,2.04,3.01,4.49,3.01,7.38v29.16h10.7v-29.16c0-5.83-2.07-10.8-6.2-14.94Z"
            />
            {/* letter i top "dott" part */}
            <path
              class="cls-1"
              id="marlin-letter-i-top"
              d="m209.35,13.91c0,1.71-.61,3.15-1.83,4.32-.21.21-.43.41-.66.57-1.05.82-2.26,1.22-3.62,1.22s-2.61-.41-3.66-1.22c-.23-.17-.45-.36-.66-.57-1.19-1.2-1.79-2.64-1.79-4.32s.6-3.09,1.79-4.28c.43-.43.88-.78,1.37-1.05.88-.5,1.86-.74,2.95-.74s2.04.24,2.91.74c.49.27.94.62,1.37,1.05,1.22,1.16,1.83,2.59,1.83,4.28Z"
            />
          </svg>
        </Link>
        <ul className="navbar__list">
          <li data-aos="fade-in " data-aos-delay={4 * 100 + 450}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/#what-is-marlin"
            >
              What is Marlin
            </NavLink>
          </li>
          <li data-aos="fade-in " data-aos-delay={5 * 100 + 450}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/for-retailers"
            >
              For Retailers
            </NavLink>
          </li>
          <li data-aos="fade-in " data-aos-delay={6 * 100 + 450}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/for-vendors"
            >
              For Vendors
            </NavLink>
          </li>
          <li data-aos="fade-in " data-aos-delay={7 * 100 + 450}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li data-aos="fade-in " data-aos-delay={8 * 100 + 450}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
        <button className="btn btn--outline" data-aos="fade-left">
          Book a call
        </button>
      </div>
    </header>
  );
};

export default Navbar;
