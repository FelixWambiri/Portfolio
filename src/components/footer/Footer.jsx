import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="footer-content">
            <p>
              © All Right Reserved By
              <a
                href="https://github.com/FelixWambiri"
                target="_blank"
                rel="noopener noreferrer"
              >
                FelixWambiri
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
