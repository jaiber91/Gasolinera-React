import React, { Fragment } from "react";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";

const TopStation = () => {
  return (
    <Fragment>
      <Main Regular="Regular" Premium="Premium" Diesel="Diesel" />

      <Footer />
    </Fragment>
  );
};

export default TopStation;
