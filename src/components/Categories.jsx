import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Categories() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const categoriesCollection = collection(db, 'categoria');

        getDocs(categoriesCollection).then((snapshot) => {
            setCategory(snapshot.docs.map((doc) => doc.data().name)) 
        });

    }, []);
  return (
      <>
          {category.map((el) => (
              <li className='' key={el}>
                  <Link to={'/producto/' + el} className="dropdown-item">{el}</Link>
              </li>
          ))}
      </>
  )
}