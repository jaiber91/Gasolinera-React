import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "80vh",
};
function Mapa() {
  useEffect(() => {
    obtenerDatos();
  }, []);

  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState({});
  const onSelect = (item) => {
    setSelectedStation(item);
  };

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://gasolinerasmexico.herokuapp.com/api/stations"
    );
    const estados = await datos.json();
    setStations(estados.data);
  };

  // Google Map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCE3vxzOVAM8YnMdNmLoSLJG5TN6cqPqPg",
    libraries,
  });
  if (loadError) {
    return "Error";
  }
  if (!isLoaded) {
    return "Cargando";
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5.3}
        center={{ lat: 25.0, lng: -102.0 }}
      >
        {stations.map((item) => (
          <Marker
            key={item._id}
            position={{
              lat: parseFloat(item.location.longitud),
              lng: parseFloat(item.location.latitud),
            }}
            onClick={() => {
              onSelect(item);
            }}
          />
        ))}
        {selectedStation.location && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedStation.location.longitud),
              lng: parseFloat(selectedStation.location.latitud),
            }}
            clickable={true}
            onCloseClick={() => setSelectedStation({})}
          >
            <div>
              <p>
                <strong>{selectedStation.name}</strong>
              </p>
              <i>{selectedStation.estado.long_name}</i>
              <p>
                <strong>Regular: </strong>
                {selectedStation.regular} $
              </p>
              <p>
                <strong>Premium: </strong>
                {selectedStation.premium} $
              </p>
              <p>
                <strong>Diesel: </strong>
                {selectedStation.diesel} $
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
export default Mapa;
