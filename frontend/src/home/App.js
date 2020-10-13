import React, { Fragment } from 'react';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Producto from "./componentes/Producto";
import Baner from "./componentes/Baner";

function App() {
    return (
        <Fragment>
             
            
            <Header
                titulo="Gasolinera Mexico"
            />

            <Baner
                Regular="Regular"
                Premium="Premium"
                Diesel="Diesel"
            />

            <Producto/>

            <Footer />


        </Fragment>
    );



}

export default App;
