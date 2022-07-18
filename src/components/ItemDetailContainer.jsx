
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

import { doc, getDoc, getFirestore} from 'firebase/firestore';

export default function ItemDetailContainer() {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const { id } = useParams(); 
    
    useEffect(() => { 
        
        const db = getFirestore();
        const productRef = doc(db, 'productos', id);
        setTimeout(() => {
            getDoc(productRef)
                .then((snapshot) => {
                    setDetail({ ...snapshot.data(), id: snapshot.id });
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                }); 
        }, 1000);    
    }, [id]);
    
    return (
        <>
            <div className=''>
                {loading && <p className='position-absolute top-50 start-50 translate-middle text-white'>Loading...</p>}
                <p>{error && 'Error'}</p>

                {detail && <ItemDetail detail={detail} id={id}/> }
                
            </div>

        </>
    
    );
}
