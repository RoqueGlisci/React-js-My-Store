
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {

    const [produc, setProduc] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');
        setLoading(true)
        setTimeout(() => {
            if (id) {
                const q = query(productsCollection, where("category", "==", id)) 
                
                getDocs(q)
                    .then((snapshot) => {
                        setProduc(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
                    })
                    .catch((error) => {
                        setError(error)
                    })
                    .finally(() => {
                        setLoading(false)
                    });
                
            } else {
                getDocs(productsCollection)
                    .then((snapshot) => {
                        setProduc(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
                    })
                    .catch((error) => {
                        setError(error)
                    })
                    .finally(() => {
                        setLoading(false)
                    });

            }
        }, 2000);

    }, [id])
    
    
    return (
        
        <>
            <div className='text-center p-5'>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div> 

            <div>
                {produc && <ItemList productos={produc} />}
                
            </div>

        </>    
    );
}

