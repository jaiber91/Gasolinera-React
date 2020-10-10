import React from 'react'

const Producto = (productos) => {
    const { nombre, precio, id } = productos

    return (
        <div>
            <h2> {nombre} </h2>
        </div>
    );
}

export default Producto;