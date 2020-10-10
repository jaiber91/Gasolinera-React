import React, { Fragment } from 'react';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
//import Producto from "./componentes/Producto";
import Main from "./componentes/Main";
function App() {


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

export default App;
