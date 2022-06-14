// import Paleta1 from '../img/img_2.jpg'
// import { det } from '../productos';

import { useEffect, useState } from 'react';

import { ItemDetail } from './ItemDetail';
import Paleta1 from '../img/img_2.jpg';

export default function ItemDetailContainer() {
    const producDet = { id: 'a1', title: 'Bullpadel Hack', description: 'La nueva pala Hack 03 2022 es una pala de máxima potencia y alto rendimiento, diseñada para jugadores profesionales o avanzados, con marco 100% fibra de carbono.', price: 90000, stock: 3, pictureUrl_1: Paleta1 }
   
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
   
    
    useEffect(() => { 

        const det = new Promise((res, rej) => {
            setTimeout(() => {
                res(producDet);
                
            }, 2000);
        })
       
        det
            .then((result) => {
                // setPersonajes(result)
                setDetail(result)
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false); 
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);
    
    return (
        <>
            <div>
                <p className='text-center p-5'>{loading && 'Loading...'}</p>
                <p>{error && 'Error'}</p>
        
                {detail && <ItemDetail detail={detail} />}
            </div>

        </>
    
    );
}
