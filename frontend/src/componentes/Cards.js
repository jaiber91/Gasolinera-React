import React, { useState, useEffect } from 'react'
import "../style/Cards.css"

const Cards = () => {


    const [stations, setEstations] = useState([])
    useEffect(() => {
        obtenerDatos()//se ejecuta esta función
    }, [])//los corchetes es para llamar a obtenerDatos

    const obtenerDatos = async () => {
        const data = await fetch("https://gasolinerasmexico.herokuapp.com/api/stations");//obtengo los datos en formato JSON
        const estaciones = await data.json() //transformo los datos
        setEstations(estaciones.data)
    }
    return (

        <div className="cards_all">

            {
                stations.map(estacion => (
                    <div className="cards_regular-info">
                        <p className="cards_regular-title">{estacion.name}</p>
                        <p> Price <br /> ${estacion.regular} </p>
                    </div>


                ))
            }

        </div>
    );

}

export default Cards;