import React from 'react'
import "../style/Main.css"
import Cards from "./Cards"

const Main = ({ Regular, Premium, Diesel }) => {

    return (
        <main className="cards">


            {

                <div >
                    <h1 className="cards_regular">{Regular} </h1>
                    <Cards />
                </div>
            }
        </main>







    );
}

export default Main;