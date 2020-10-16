import React from "react";
import Footer from "./componentes/Footer";
import Baner from "./componentes/Baner";
import Producto from "./componentes/Producto";
function App() {
  return (
    <>
      <Baner Regular="Regular" Premium="Premium" Diesel="Diesel" />
      <Producto></Producto>
      <Footer />
    </>
  );
}

export default App;
