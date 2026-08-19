import React from "react";
import "./Section.css";

const Section = ({ id, title, content, isContact = false }) => (
  <section id={id} className={`section ${isContact ? 'contact-section' : ''}`}>
    <h2>{title}</h2>
    <p className={isContact ? 'contact-box' : ''}>{content}</p>
  </section>
);

export default Section;
