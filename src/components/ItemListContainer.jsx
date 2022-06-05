//rfce
//rfc
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer({ greeting, name }) {
    
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .catch(error => console.error("Error: ", error))
            .then(res => setPersonajes(res.results))
        
    }, [])
    
    // console.log(personajes.map(personaje => personaje.name));
    console.log(personajes);
    return (
        // <h1>{`Hola ${name} ${greeting}`}</h1>
        <div>
            <ItemList personajes={personajes} />
        </div>        
    );
}

// -----otra forma-------
// export default function ItemListContainer({ props }) {
//     return (
//         <h1>{props.greeting}</h1>
//     );
// }
