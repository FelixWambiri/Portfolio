import React from "react";
import "./Services.scss";

/** Componets */
import Services from "./Service";

/** Icons */
import { offeredServices } from "../../Constants";

const Contacts = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="row__header">
            <div className="row__header-text">
              <p className="line-one"></p>
              <h2>What I offer</h2>
              <p className="line-one"></p>
            </div>
          </div>
        </div>
        <div className="services-row">
          {offeredServices.map((service, index) => {
            return (
              <Services
                key={index}
                service={service.service}
                icon={service.icon}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
