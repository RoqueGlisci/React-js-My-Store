
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { producDet } from '../productos';

export default function ItemDetailContainer() {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const { id } = useParams(); 
    
    useEffect(() => { 

        const data = new Promise((res, rej) => {
            setTimeout(() => {
                res(producDet);
                
            }, 2000);
        })
       
        data
            .then((result) => {
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
