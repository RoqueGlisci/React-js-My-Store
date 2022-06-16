import React from 'react'
import {Link} from 'react-router-dom';

// export default function Item({ personaje }) {
export default function Item({ producto }) {
    
    // const { name, image, species, status } = personaje
    const { id, title, description, price, pictureUrl } = producto
    

    return ( 
        // <div className="card" style={{ width: "15rem", margin: "1rem" }}>
        //     <img src={image} className="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{name}</h5>
        //         <p className="card-text">
        //             Especie: {species} 
        //             <br />
        //             Estado: {status}  
        //         </p>
        //         <a href="#/" className="btn btn-primary">Ver Detalles</a>
        //     </div>
        // </div>
        
        <div className="card" style={{ width: "15rem", margin: "1rem" }}>
            <img src={pictureUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    Descripcion: {description}
                    <br />
                    Precio: ${price}
                </p>
                <Link to={"/detail/" + id} href="#/" className="btn btn-primary bg-dark">Ver Detalles</Link>
            </div>
        </div>
    ) 
}
