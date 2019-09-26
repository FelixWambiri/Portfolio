/** Icons */
import { home } from "react-icons-kit/fa/home";
import { phone } from "react-icons-kit/fa/phone";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { gg } from "react-icons-kit/fa/gg";
import { code } from "react-icons-kit/fa/code";
import { wrench } from "react-icons-kit/fa/wrench";

export const stacks = [
  { stack: "Javascript", proficiency: 90 },
  { stack: "React", proficiency: 90 },
  { stack: "Redux", proficiency: 90 },
  { stack: "Typescript", proficiency: 80 },
  { stack: "Node", proficiency: 80 },
  { stack: "HTML5/CSS3/Sass", proficiency: 80 },
  { stack: "Cypress", proficiency: 70 },
  { stack: "Firebase", proficiency: 70 }
];

export const contacts = [
  {
    icon: home,
    key: "Location",
    info: "Nairobi, Kenya"
  },
  {
    icon: phone,
    key: "Phone",
    info: "(+254) 706 386 160"
  },
  {
    icon: envelopeO,
    key: "EMAIL",
    info: "mathiafelix19@gmail.com"
  },
  {
    icon: gg,
    key: "SOCIAL MEDIA:",
    info: "123, New York, USA"
  }
];

export const offeredServices = [
  {
    service: "Front End Web DevelopMent",
    icon: code,
    description:
      "I took part in building the Andela website. Most of the work was focussed on authentic translation of mockups to implementation.This was largely done using HTML5 and CSS3, and a little bit of PHP and wordpress"
  },
  {
    service: "Back End Web DevelopMent",
    icon: code,
    description:
      "I have worked on Greenhouse < > Hubspot microservices and integrations. This made it easier for the company to track talent leads in the  marketing funnel and to provide the Talent development with more information to be able to better evaluate a candidate. This was primarily focussed on Javascript - Node"
  },
  {
    service: "Testing",
    icon: wrench,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni error fuga id aut ipsum voluptatibus asperiores reprehenderit tenetur! Dolorum, porro."
  }
];
