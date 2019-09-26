import React from "react";
import "./Hero.scss";

// Components
import WelcomeMessage from "../animations/WelcomeMessage";
import DescriptionText from "../animations/DescriptionText";

const Hero = () => {
  return (
    <div className="hero-text-box">
      <WelcomeMessage />
      <DescriptionText />
    </div>
  );
};

export default Hero;
