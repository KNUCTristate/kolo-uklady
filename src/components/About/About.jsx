import Section from "../Section/Section";
import aboutData from "../../data/about.json";
import "./About.css";

export default function About({ logoCircle }) {
  return (
    <Section
      id="about-us"
      title={aboutData.title}
      content={
        <div className="about-card">
          <img
            src={logoCircle}
            alt="Logo Koła Naukowego Układów Cyfrowych"
            className="logo-big"
          />

          {aboutData.paragraphs.map((text, index) => (
            <p key={index} style={{ fontWeight: 'bold' }}>{text}</p>
          ))}
        </div>
      }
    />
  );
}
