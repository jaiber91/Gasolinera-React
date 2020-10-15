import React from "react";
import "../style/gas.css";
import gasStation from "../images/gasStation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHandHoldingUsd,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ titulo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hideShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header-menu">
      <figure className="station-menu">
        <img src={gasStation}></img>
        <h3>Gasolina MX</h3>
      </figure>
      <a className="icon-menu-burguer" href="#" onClick={hideShow}>
        {" "}
        <FontAwesomeIcon icon={faBars} />
      </a>
      <div className={`burguer-menu ${isVisible ? "is-active" : ""}`}>
        <ul>
          <li>
            <a href="#">
              <span className="home">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <span className="find">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Find Station
            </a>
          </li>
          <li>
            <a href="#">
              <span className="top">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </span>
              Top Station
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
