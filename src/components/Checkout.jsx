import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/CartContext';

import { addDoc, collection, getFirestore } from 'firebase/firestore'

export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");
    const [aux, setAux] = useState(false);

    const [idCompra, setIdCompra] = useState("");
    const db = getFirestore();
    const orderCollection = collection(db, 'orders')

    const { cart, getItemPrice, emptyCart } = useContext(MyContext);

    function handleClick() {
        if (!name || !email || !cel) return alert("Complete todos los campos");

        const order = {
            buyer: { name, email, cel },
            items: cart,
            total: getItemPrice()
        }

        addDoc(orderCollection, order).then(({ id }) => {
            setIdCompra(id)
        })
        
        setAux(true)
        emptyCart();
    }
    
  return (
      <div>
          {!aux &&
              <>
              <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-5 text-center mt-4'>
                        <h3 className=''>Completa para termina su compra </h3>              
                        <input className='w-100 m-2' onChange={(e) => setName(e.target.value)} placeholder='nombre' type="text" required></input>             
                        <input className='w-100 m-2' onChange={(e) => setCel(e.target.value)} placeholder='celular' type="tel" required></input>              
                        <input className='w-100 m-2' onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" required></input>              
                        <button type="button" className="btn btn-dark position-relative m-2" onClick={() => handleClick()}>Terminar compra</button>  
                    </div>
                  </div>
              </div>
              
            </>
          }
          {aux &&
              <>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-5 text-center m-4'>
                            <p> Felicidades su compra a finalizado </p>
                            <p>Su codigo de compra es : {idCompra}</p>
                            <button type="button" className="btn btn-dark position-relative">
                            <Link to="/inicio" className="dropdown-item" href="#/">Regresar a la tienda</Link>
                            </button>
                        </div>   
                    </div>       
                </div>
              </>    
          }
    </div>
  )
}
