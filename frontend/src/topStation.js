import React, { Fragment } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";

const TopStation = () => {
  return (
    <Fragment>
      <Main Regular="Regular" Premium="Premium" Diesel="Diesel" />

      <Footer />
    </Fragment>
  );
};

export default TopStation;
