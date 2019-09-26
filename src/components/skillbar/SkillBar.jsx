import React from "react";
import PropTypes from "prop-types";
import "./SkillBar.scss";

const SkillBar = ({ stack, proficiency }) => {
  return (
    <div className="skillbar">
      <p className="skillbar__title">{stack}</p>
      <p className="skillbar__percent">{proficiency}%</p>
      <div className="skillbar__bar">
        <div
          className="skillbar__child"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  stack: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired
};

export default SkillBar;
