import React from "react";
import PropTypes from "prop-types";
import "./Service.scss";

/** Icons **/
import Icon from "react-icons-kit";

const Services = ({ icon, service, description }) => {
  return (
    <div className="item-one">
      <div className="item-one__single-service">
        <div className="item-one__service-icon">
          <Icon icon={icon} size={30} />
        </div>
        <div className="item-one__service-content">
          <h3>{service}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  icon: PropTypes.object.isRequired,
  service: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Services;
