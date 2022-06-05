import React from 'react'

export default function Item({personaje}) {
    const { name, image, species, status } = personaje
    

    return ( 
        <div className="card" style={{ width: "15rem", margin: "1rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Especie: {species} 
                    <br />
                    Estado: {status}  
                </p>
                <a href="#/" className="btn btn-primary">Ver Detalles</a>
            </div>
        </div>
    ) 
}
