//rfce
//rfc
import Paleta1 from '../img/img_2.jpg'
import Paleta2 from '../img/img_3.jpg'
import Paleta3 from '../img/img_4.jpg'
import Paleta4 from '../img/img_5.jpg'


import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer({ greeting, name }) {
    
    // const [personajes, setPersonajes] = useState([])

    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // setTimeout(() => {
        //     fetch("https://rickandmortyapi.com/api/character")
        //         .then(res => res.json())
        //         .catch(error => console.error("Error: ", error))
        //         .then(res => setPersonajes(res.results))
        //         .finally(res => setLoading(false))
        // }, 2000);
        

        const load = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    { id: 'a1', title: 'Bullpadel Hack', description: 'none', price: 90000, pictureUrl: Paleta1},
                    { id: 'a2', title: 'Bullpadel Proline', description: 'none', price: 60000, pictureUrl: Paleta2},
                    { id: 'a3', title: 'Bullpadel Universe', description: 'none', price: 30000, pictureUrl: Paleta3},
                    { id: 'a4', title: 'Bullpadel Libra', description: 'none', price: 23000, pictureUrl: Paleta4}
                ]);
                
            }, 2000);
        })

            load
                .then((result) => {
                    // setPersonajes(result)
                    setProductos(result)
                })
                .catch((error) => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [])
    
    // console.log(personajes.map(personaje => personaje.name));
    // console.log(personajes);

    return (
        // <h1>{`Hola ${name} ${greeting}`}</h1>
        <>
            <div className='text-center p-5'>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div> 

            <div>
                {/* <ItemList personajes={personajes} /> */}
                <ItemList productos={productos} />
            </div>

        </>    
    );
}

// -----otra forma-------
// export default function ItemListContainer({ props }) {
//     return (
//         <h1>{props.greeting}</h1>
//     );
// }
