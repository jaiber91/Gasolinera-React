import React from "react";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
import Producto from "./components/Producto";
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
