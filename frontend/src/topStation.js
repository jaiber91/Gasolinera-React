import React, { Fragment } from "react";
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"

const TopStation = () => {

    return (
        <Fragment>

            <Main
                Regular="Regular"
                Premium="Premium"
                Diesel="Diesel"

            />


            <Footer />


        </Fragment>
    );
}

export default TopStation;
