import React, { useState } from "react";
import "./Header.scss";

/** Third Party libraries **/
import { Link } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

/** components **/
import Hero from "./Hero";

const Header = () => {
  const [isTop, setTop] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isTopLevel = currPos.y > -300;

    if (isTopLevel !== isTop) {
      setTop(isTopLevel);
    }
  });

  return (
    <>
      <header id="home">
        <div className={isTop ? "header" : "header scrollBcg"}>
          <div className="logo">Mathia</div>
          <ul className="main-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Hero />

        <svg
          id="curve"
          data-name="Layer 1"
          xlmns="https://www.w3.org/2000/svg"
          viewBox="0 0 1416.99 174.01"
          fill="#74c044"
        >
          <path
            className="cls-1"
            d="M0, 280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0-135.53)"
          ></path>
        </svg>
      </header>
    </>
  );
};

export default Header;
