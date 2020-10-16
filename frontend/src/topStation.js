<<<<<<< HEAD
import React, { Fragment } from 'react';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
//import Producto from "./componentes/Producto";
import Main from "../componentes/Main";

//el fragment remplaza el Div, y esto evita que tengamos divs vacios y sin ninguna función

function App() {

    // const consultarAPI = async () => {
    //   const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    //   const frase = await api.json
    //   frase.then(resultado => console.log(resultado))
    // }

    const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
=======
import React, { Fragment } from "react";
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
>>>>>>> b272de861c90e26785dae1a0dc8064e9b40fcf8e

const TopStation = () => {

    return (
        <Fragment>
            <Header
                titulo="Gasolinera Mexico"
            />

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
