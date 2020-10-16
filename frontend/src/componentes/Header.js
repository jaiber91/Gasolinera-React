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
import { Link } from 'react-router-dom'

const Header = ({ titulo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hideShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header-menu">
      <figure className="station-menu">
        <img src={gasStation} alt="Logo"></img>
        <h3>Gasolina MX</h3>
      </figure>
      <a className="icon-menu-burguer" onClick={hideShow}>
        {" "}
        <FontAwesomeIcon icon={faBars} />
      </a>
      <div className={`burguer-menu ${isVisible ? "is-active" : ""}`}>
        <ul>
          <li>
<<<<<<< HEAD
              <Link to="/">
               <span className="home">
=======
            <a>
              <span className="home">
>>>>>>> b272de861c90e26785dae1a0dc8064e9b40fcf8e
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
              </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/FindStation">
            <span className="find">
=======
            <a>
              <span className="find">
>>>>>>> b272de861c90e26785dae1a0dc8064e9b40fcf8e
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
                Find Station
            </Link>
              
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
