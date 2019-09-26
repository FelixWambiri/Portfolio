import React from "react";
import "./Contacts.scss";

/** Components */
import Contact from "./Contact";

/** Contacts */
import { contacts } from "../../Constants";

const Contacts = () => {
  return (
    <div className="contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="row__header">
            <div className="row__header-text">
              <p className="line-one"></p>
              <h2>Contact</h2>
              <p className="line-one"></p>
            </div>
          </div>
        </div>
        <div className="row-content">
          {contacts.map((contact, index) => {
            return (
              <Contact
                key={index}
                icon={contact.icon}
                keyName={contact.key}
                info={contact.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
