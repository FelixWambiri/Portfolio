import React from "react";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="menu-container">
      <p className="menu-container__header">Mathia</p>
      <div className="menu-trigger">
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
