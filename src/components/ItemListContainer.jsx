
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { categories } = useParams(); 

    useEffect(() => {

        const load = new Promise((res, rej) => {
            
            setTimeout(() => {
                if (categories === 'paleta') {
                    res([
                        { id: '1', categories: 'paleta', title: 'Bullpadel Hack', description: 'none', price: 90000, pictureUrl: "../img/img_2.jpg" },
                        { id: '2', categories: 'paleta', title: 'Bullpadel Proline', description: 'none', price: 60000, pictureUrl: "../img/img_3.jpg" },
                        { id: '3', categories: 'paleta', title: 'Bullpadel Universe', description: 'none', price: 30000, pictureUrl: "../img/img_4.jpg" },
                        { id: '4', categories: 'paleta', title: 'Bullpadel Libra', description: 'none', price: 23000, pictureUrl: "../img/img_5.jpg" }
                    ])

                } else if (categories === 'calzado') {
                    res([
                        { id: '5', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 63000, pictureUrl: "../img/img_z1.jpg" },
                        { id: '6', categories: 'calzado', title: 'BULLPADEL VERTEX', description: 'none', price: 43000, pictureUrl: "../img/img_z2.jpg" },
                        { id: '7', categories: 'calzado', title: 'BULLPADEL FLOW', description: 'none', price: 33000, pictureUrl: "../img/img_z3.jpg" },
                        { id: '8', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 53000, pictureUrl: "../img/img_z4.jpg" }
                    ])

                } else {

                    res([

                        { id: '1', categories: 'paleta', title: 'Bullpadel Hack', description: 'none', price: 90000, pictureUrl: "../img/img_2.jpg" },
                        { id: '2', categories: 'paleta', title: 'Bullpadel Proline', description: 'none', price: 60000, pictureUrl: "../img/img_3.jpg" },
                        { id: '3', categories: 'paleta', title: 'Bullpadel Universe', description: 'none', price: 30000, pictureUrl: "../img/img_4.jpg" },
                        { id: '4', categories: 'paleta', title: 'Bullpadel Libra', description: 'none', price: 23000, pictureUrl: "../img/img_5.jpg" },
                        { id: '5', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 63000, pictureUrl: "../img/img_z1.jpg" },
                        { id: '6', categories: 'calzado', title: 'BULLPADEL VERTEX', description: 'none', price: 43000, pictureUrl: "../img/img_z2.jpg" },
                        { id: '7', categories: 'calzado', title: 'BULLPADEL FLOW', description: 'none', price: 33000, pictureUrl: "../img/img_z3.jpg" },
                        { id: '8', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'none', price: 53000, pictureUrl: "../img/img_z4.jpg" }

                    ]);
                }
 
            }, 2000);
        })

            load
                .then((result) => {
                    setProductos(result)
                })

                .catch((error) => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false)
                })
        
    }, [categories])

    return (
        
        <>
            <div className='text-center p-5'>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div> 

            <div>
                <ItemList productos={productos} />
            </div>

        </>    
    );
}

