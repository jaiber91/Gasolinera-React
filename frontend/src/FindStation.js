import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Mapa from "./componentes/map";
function FindStation() {
  return (
    <>
      <Header></Header>
      <Mapa
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCE3vxzOVAM8YnMdNmLoSLJG5TN6cqPqPg`}
        containerElement={<div style={{ height: "70vh" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
        loadingElement={<p>Cargando</p>}
      />
      <Footer></Footer>
    </>
  );
}
export default FindStation;
