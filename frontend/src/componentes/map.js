import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map() {
  const [estado, setEstados, setSelectedStation, selectedStation] = useState(
    []
  );
  useEffect(() => {
    obtenerDatos();
    // const listener = (e) => {
    //   if (e.key === "Escape") {
    //     setSelectedStation(null);
    //   }
    // };
    // window.addEventListener("keydown", listener);

    // return () => {
    //   window.removeEventListener("keydown", listener);
    // };
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://gasolinerasmexico.herokuapp.com/api/stations"
    );
    const users = await datos.json();
    setEstados(users.data);
  };

  return (
    <GoogleMap defaultZoom={5.3} defaultCenter={{ lat: 25.0, lng: -102.0 }}>
      {estado.map((gasStation) => (
        <Marker
          key={gasStation.id}
          position={{
            lat: parseFloat(gasStation.location.longitud),
            lng: parseFloat(gasStation.location.latitud),
          }}
          onClick={() => {
            setSelectedStation(gasStation);
          }}
        />
      ))}
      {selectedStation && (
        <InfoWindow>
          position=
          {{
            lat: parseFloat(selectedStation.location.longitud),
            lng: parseFloat(selectedStation.location.latitud),
          }}
          onCloseClick=
          {() => {
            selectedStation(null);
          }}
          <div>
            <p>
              <strong>{selectedStation.name}</strong>
            </p>
            <p>
              <i>{selectedStation.estado}</i>
            </p>
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
  );
}
export default withScriptjs(withGoogleMap(Map));
