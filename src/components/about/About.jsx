import React from "react";
import "./About.scss";

/** Component **/
import SkillBar from "../skillbar/SkillBar";

/** Images **/
import myImage from "../../images/me.jpg";

/** Constants **/
import { stacks } from "../../Constants";

const About = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me__text">
        <h2 className="about-me__text-header">Felix Mathia</h2>
        <h3 className="about-me__text-sub-header">
          Front-End Javascript developer
        </h3>
        <p>
          I am a Javascript Front-end Developer, with two years experience. I
          have experience working on multiple Projects within Andela. I have
          vast knowledge in Javascript, React, Redux, Typescript, Node,
          Firebase, HTML5, CSS3, Sass, cypress.
        </p>
      </div>
      <div>
        <img src={myImage} alt="my profile" className="about-me__image" />
      </div>
      <div>
        <h3 className="about-me__skills">My Skills</h3>
        {stacks.map((stack, i) => (
          <SkillBar
            stack={stack.stack}
            proficiency={stack.proficiency}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
