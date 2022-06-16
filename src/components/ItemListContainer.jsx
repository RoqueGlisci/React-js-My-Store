//rfce
//rfc
import Paleta1 from '../img/img_2.jpg'
import Paleta2 from '../img/img_3.jpg'
import Paleta3 from '../img/img_4.jpg'
import Paleta4 from '../img/img_5.jpg'
import Clazado1 from '../img/img_z1.jpg'
import Clazado2 from '../img/img_z2.jpg'
import Clazado3 from '../img/img_z3.jpg'
import Clazado4 from '../img/img_z4.jpg'



import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {
    
    // const [personajes, setPersonajes] = useState([])

    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { categories } = useParams(); 

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
                if (categories === 'paleta') {
                    res([
                        { id: '1', categories: 'paleta', title: 'Bullpadel Hack', description: 'none', price: 90000, pictureUrl: Paleta1 },
                        { id: '2', categories: 'paleta', title: 'Bullpadel Proline', description: 'none', price: 60000, pictureUrl: Paleta2 },
                        { id: '3', categories: 'paleta', title: 'Bullpadel Universe', description: 'none', price: 30000, pictureUrl: Paleta3 },
                        { id: '4', categories: 'paleta', title: 'Bullpadel Libra', description: 'none', price: 23000, pictureUrl: Paleta4 }
                    ])

                } else if (categories === 'calzado') {
                    res([
                        { id: '5', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 63000, pictureUrl: Clazado1 },
                        { id: '6', categories: 'calzado', title: 'BULLPADEL VERTEX', description: 'none', price: 43000, pictureUrl: Clazado2 },
                        { id: '7', categories: 'calzado', title: 'BULLPADEL FLOW', description: 'none', price: 33000, pictureUrl: Clazado3 },
                        { id: '8', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 53000, pictureUrl: Clazado4 }
                    ])

                } else {

                    res([

                        { id: '1', categories: 'paleta', title: 'Bullpadel Hack', description: 'none', price: 90000, pictureUrl: Paleta1 },
                        { id: '2', categories: 'paleta', title: 'Bullpadel Proline', description: 'none', price: 60000, pictureUrl: Paleta2 },
                        { id: '3', categories: 'paleta', title: 'Bullpadel Universe', description: 'none', price: 30000, pictureUrl: Paleta3 },
                        { id: '4', categories: 'paleta', title: 'Bullpadel Libra', description: 'none', price: 23000, pictureUrl: Paleta4 },
                        { id: '5', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 63000, pictureUrl: Clazado1 },
                        { id: '6', categories: 'calzado', title: 'BULLPADEL VERTEX', description: 'none', price: 43000, pictureUrl: Clazado2 },
                        { id: '7', categories: 'calzado', title: 'BULLPADEL FLOW', description: 'none', price: 33000, pictureUrl: Clazado3 },
                        { id: '8', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 53000, pictureUrl: Clazado4 }

                    ]);
                }
 
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
        
    }, [categories])
    
    // console.log(personajes.map(personaje => personaje.name));
    // console.log(personajes);

    return (
        
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
