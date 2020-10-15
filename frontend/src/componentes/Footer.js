import React from 'react'
import "../style/gas.css"
import gasStation from '../images/gasStation.png'

const Footer = () => {
<<<<<<< HEAD
    return (

        <footer className="footer">
            <p> 2020 </p>
            <div className="footer_curve"></div>

        </footer>



=======
    return(
        <footer className="footer-container">
            <div className="background-footer">
                <figure className="station-menu">
                    <img src= {gasStation}></img>
                    <h3>Gasolina MX</h3>
                </figure>
                <p>©2020</p>
            </div>
        </footer>  
>>>>>>> 220c5fafbf9295cc7e945b2a1fd26147fcc79918
    );
}
export default Footer;