import React from "react";
import "./Map.css";

export default function MapSection() {
  return (
    <div className="map-container">
      <h2><b>Nasza lokalizacja</b></h2>
      <div className="map-wrapper">
        <iframe
          title="Lokalizacje Koła Naukowego"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.1701596518005!2d21.01111476440601!3d52.21903459766269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce91dd158b3%3A0x188bc853d7b6b561!2sWydzia%C5%82%20Elektroniki%20i%20Technik%20Informacyjnych%2C%20Politechnika%20Warszawska!5e0!3m2!1spl!2spl!4v1787740498900!5m2!1spl!2spl"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}