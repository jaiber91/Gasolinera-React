import React from 'react'
import "../style/Main.css"

const Main = ({ Regular, Premium, Diesel }) => {
    return (
        <main className="cards">
            <div className="cards_regular">
                <h1>{Regular} </h1>
            </div>
            <div className="cards_premium">
                <h1> {Premium} </h1>
            </div>
            <div className="cards_diesel">
                <h1> {Diesel} </h1>
            </div>
        </main>







    );
}

export default Main;