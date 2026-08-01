import React from "react";
import "./Section.css";

const Section = ({ id, title, content }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    <p style={{ fontWeight: 'bold' }}>{content}</p>
  </section>
);

export default Section;
