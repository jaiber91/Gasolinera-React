import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Mapa from "./componentes/mapa";
function FindStation() {
  return (
    <>
<<<<<<< HEAD
      <Mapa
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCE3vxzOVAM8YnMdNmLoSLJG5TN6cqPqPg`}
        containerElement={<div style={{ height: "70vh" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
        loadingElement={<p>Cargando</p>}
      />

=======
      <Header></Header>
      <Mapa></Mapa>
>>>>>>> b272de861c90e26785dae1a0dc8064e9b40fcf8e
      <Footer></Footer>
    </>
  );
}
export default FindStation;
