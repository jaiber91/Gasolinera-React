import React from 'react'
import "../style/gas.css"

const Baner = ({ Regular, Premium, Diesel }) => {
    return (
        <section>
            <section className="banner">
            <div className="background-image-banner">
                <div className="opacity-banner"></div>
            </div>
        </section>
         <div className="title">
            <h1>¿Buscas Precios?</h1>
            <p>Información instantanea y actualizada de las estaciones de combustible del país</p>
        </div>
        </section>
    );
}

export default Baner;