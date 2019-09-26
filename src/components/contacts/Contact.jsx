import React from "react";
import PropTypes from "prop-types";
import "./Contact.scss";

/** Icons */
import Icon from "react-icons-kit";

/** Components */
import Socials from "./Socials";

const Contact = ({ icon, keyName, info }) => {
  return (
    <div className="content">
      <div className="content__single-item">
        <Icon icon={icon} size={40} />
        <h2>{keyName}</h2>
        {keyName === "SOCIAL MEDIA:" ? <Socials /> : <p>{info}</p>}
      </div>
    </div>
  );
};

Contact.propTypes = {
  icon: PropTypes.object.isRequired,
  keyName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default Contact;
