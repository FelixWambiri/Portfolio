import React from "react";

/** Icons **/
import Icon from "react-icons-kit";
import { github } from "react-icons-kit/fa/github";
import { linkedin } from "react-icons-kit/fa/linkedin";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/FelixWambiri"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={github} />
      </a>
      <a
        href="https://www.linkedin.com/in/felix-wambiri-843742126/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={linkedin} />
      </a>
    </div>
  );
};

export default Socials;
