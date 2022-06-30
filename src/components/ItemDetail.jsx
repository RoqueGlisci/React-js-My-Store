import React, { useState } from 'react'
import { useContext } from 'react';

import ItemCount from './ItemCount';
import {MyContext} from '../context/CartContext';
import {Link} from 'react-router-dom';

export const ItemDetail = ({ detail }) => {

    const { title, description, price, stock, pictureUrl } = detail;

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const { isInCart, addItem } = useContext(MyContext);
     
    const onAdd = (count) => {
        alert(`agregaste ${count} productos`);
        console.log(count);
        setMostrarItemCount(false);
        isInCart(detail.id);
        addItem(detail, count);
    }
   
    return (
        
        <>
            <div className='m-4'>
                <div className="container-fluid rounded-5 pt-5" style={{ backgroundColor: 'gray'}}>
                    <div className='row p-5'>
                        <div className='col-6'>
                            <img className='rounded-5' style={{width: '80%', height: '90%'}} src={pictureUrl} alt="" />
                        </div>
                        <div className='col-6'>
                            <h1 className='text-center pb-3 text-white'>{title}</h1>
                            <h3 className='text-white'> Descripcion :</h3>
                            <h3 className='pb-3 text-white'>{description}</h3>
                            <h3 className='pb-3 text-white'>Precios: ${price}</h3>
                            <h3 className='pb-3 text-white'>Stock: {stock}</h3>

                            {mostrarItemCount ?
                                <ItemCount inicial={1} max={stock} onAdd={onAdd} /> :
                                <button type="button" className="btn btn-dark position-relative" >
                                    <Link to="/inicio" className="dropdown-item" href="#/">Seguir Comprando</Link>
                                </button>}

                        </div>
                    </div>

                </div>
            </div>
            
        </>
    
    )
}
