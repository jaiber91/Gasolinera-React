import React from "react";
import "../style/Header.css"

const Header = ({ titulo }) => {
    return (
        <nav className="Navbar">
            <h1>{titulo}</h1>
        </nav>

    )
}

export default Header;
