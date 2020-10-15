import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Mapa from "./componentes/map";
import Baner from "./componentes/Baner";
import Producto from "./componentes/Producto";
function App() {
  return (
    <>
      <Header titulo="Gasolinera Mexico" />
      <Baner Regular="Regular" Premium="Premium" Diesel="Diesel" />
      <Mapa
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCE3vxzOVAM8YnMdNmLoSLJG5TN6cqPqPg`}
        containerElement={<div style={{ height: "70vh" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
        loadingElement={<p>Cargando</p>}
      />
      <Producto></Producto>
      <Footer />
    </>
  );
}

export default App;
