// import Paleta1 from '../img/img_2.jpg'
// import { det } from '../productos';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from './ItemDetail';
import Paleta1 from '../img/img_2.jpg';
import Paleta2 from '../img/img_3.jpg';
import Paleta3 from '../img/img_4.jpg';
import Paleta4 from '../img/img_5.jpg';
import Clazado1 from '../img/img_z1.jpg';
import Clazado2 from '../img/img_z2.jpg';
import Clazado3 from '../img/img_z3.jpg';
import Clazado4 from '../img/img_z4.jpg';

export default function ItemDetailContainer() {
    const producDet = [
        { id: '1', categories: 'paleta', title: 'Bullpadel Hack', description: 'La nueva pala Hack 03 2022 es una pala de máxima potencia y alto rendimiento, diseñada para jugadores profesionales o avanzados, con marco 100% fibra de carbono.', price: 90000, stock: 3, pictureUrl_1: Paleta1 },
        { id: '2', categories: 'paleta', title: 'Bullpadel Proline', description: 'La nueva pala de pádel BULLPADEL K4 PRO 2017, concebida para jugadores que buscan una pala con máxima precisión.', price: 90000, stock: 6, pictureUrl_1: Paleta2 },
        { id: '3', categories: 'paleta', title: 'Bullpadel Universe', description: 'La nueva pala de pádel Bullpadel Universe, concebida para jugadores que buscan una pala con máxima precisión.', price: 30000, stock: 7, pictureUrl_1: Paleta3},
        { id: '4', categories: 'paleta', title: 'Bullpadel Libra', description: 'Muy ligera, cómoda y manejable, especialmente diseñada para jugadores amateurs y ocasionales. Balance: Bajo. Núcleo exterior: Polyglass. Núcleo interior: Evalastic. Jugador: Adulto ocasional.', price: 23000, stock: 9, pictureUrl_1: Paleta4 },
        { id: '5', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'concebida para jugadores profesionales o avanzados que buscan un calzado flexible y ligero que permita movimientos rápidos, garantizando una mayor estabilidad y tracción.', price: 63000, stock: 8, pictureUrl_1: Clazado1 },
        { id: '6', categories: 'calzado', title: 'BULLPADEL VERTEX', description: 'zapatilla diseñada para jugadores profesionales o avanzados que buscan un calzado adaptado a un nivel alto de juego.', price: 43000, stock: 4, pictureUrl_1: Clazado2 },
        { id: '7', categories: 'calzado', title: 'BULLPADEL FLOW', description: 'ideada para jugadoras profesionales o avanzadas que buscan un calzado ligero que favorezca la reacción rápida, garantizando a la vez, estabilidad y tracción.', price: 33000, stock: 8, pictureUrl_1: Clazado3 },
        { id: '8', categories: 'calzado', title: 'BULLPADEL HACK HYBRID', description: 'Zapatilla seleccionada por Paquito Navarro, está concebida para jugadores profesionales o avanzados.', price: 53000, stock: 4, pictureUrl_1: Clazado4 }
    ]
   
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const { id } = useParams(); 
    
    useEffect(() => { 

        const det = new Promise((res, rej) => {
            setTimeout(() => {
                res(producDet);
                
            }, 2000);
        })
       
        det
            .then((result) => {
                // setPersonajes(result)
                setDetail(result.find(item => item.id === id))
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false); 
            })
            .finally(() => {
                setLoading(false);
            })

    }, [id]);
    
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
