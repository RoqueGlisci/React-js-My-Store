
import React, { useState } from 'react'
import { useContext } from 'react';

import ItemCount from './ItemCount';
import {MyContext} from '../context/CartContext';
import {Link} from 'react-router-dom';

export const ItemDetail = ({ detail, id }) => {

    const { title, description, price, stock, pictureUrl } = detail;

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const { isInCart, addItem, getCartFromLocalStorage } = useContext(MyContext);
     
    const onAdd = (count) => {
        isInCart(detail.id);
        addItem(detail, count, id);
        getCartFromLocalStorage()
        
        setMostrarItemCount(false);     
    }
    
    return (
        <>
            <div className='m-4 ' >
                <div className="container rounded-5 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='row justify-content-center p-4'>
                        <div className='col-xl-6 col-md-10 '>
                            <img className='rounded-5 rounded mx-auto d-block w-100' src={pictureUrl} alt="" />
                        </div>
                        <div className='col-xl-4 col-md-10 pt-4 mx-auto d-block'>
                            <h1 className='text-center pb-3 text-white fs-4'>{title}</h1>
                            <h3 className='text-white fs-4'> Descripcion :</h3>
                            <h3 className='pb-3 text-white  fs-6'>{description}</h3>
                            <h3 className='pb-3 text-white fs-4'>Precios: ${price}</h3>
                            <h3 className='pb-3 text-white fs-4'>Stock: {stock}</h3>

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
