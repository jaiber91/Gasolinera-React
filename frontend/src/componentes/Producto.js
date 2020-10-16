import React from "react";
import "../style/gas.css";
import gasFuel from "../images/gasFuel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Producto = ({ product }) => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://gasolinerasmexico.herokuapp.com/api/stations"
    );
    const users = await datos.json();
    setEquipo(users.data);
  };

  return (
    <section>
      <section className="locagtion-map">
        <div className="background-location-map">
          <h1>Encuentra la mas cercana</h1>
          <div className="location-icon">
            <Link to="/FindStation">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Link>
          </div>
        </div>
      </section>

      <section className="options">
        <div className="background-options">
          <h1>Descubre la mejor opción</h1>
          <div className="frames">
            <figure className="frame1">
              <img src={gasFuel} alt="" />
              <h2>Regular</h2>
              <div>
                {equipo.map((item) => (
                  <h2 key={item._id}>{item.regular}</h2>
                ))}
              </div>
            </figure>
            <figure className="frame2">
              <img src={gasFuel} alt="" />
              <h2>Premium</h2>
              <div>
                {equipo.map((item) => (
                  <h2 key={item._id}>{item.premium}</h2>
                ))}
              </div>
            </figure>
            <figure className="frame3">
              <img src={gasFuel} alt="" />
              <h2>Diesel</h2>
              <div>
                {equipo.map((item) => (
                  <h2 key={item._id}>{item.diesel}</h2>
                ))}
              </div>
            </figure>
          </div>
          <div className="go-container">
           <Link to="/topStation">
            <button>
                Vamos a ello
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
           </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Producto;
