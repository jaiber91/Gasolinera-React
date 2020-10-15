import React from "react";
import "../style/gas.css";
import gasStation from "../images/gasStation.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="background-footer">
        <figure className="station-menu">
          <img src={gasStation} alt="Logo"></img>
          <h3>Gasolina MX</h3>
        </figure>
        <p>©2020</p>
      </div>
    </footer>
  );
};
export default Footer;
