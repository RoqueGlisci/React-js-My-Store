// import React from 'react'
// import {Link} from 'react-router-dom';
import { MyContext } from '../context/CartContext';
import { useContext } from 'react';


export default function ItemCard({producto}) {
  const { id, count, title, price, pictureUrl } = producto;
  
  const { deleteItem } = useContext(MyContext);

  return (
    <div className='container p-3'>
      <div className='row p-3' style={{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "2rem" }}>

        <div className='col'>
          <img src={pictureUrl} style={{ height: "8rem", width: "13rem", borderRadius: "2rem" }} alt="" />
        </div>

        <div className='col text-white text-center'>
          <h4>{title}</h4>
          <h4>${price}</h4>
        </div>

        <div className='col text-white text-center'>
          <h4>cantidad : {count}</h4>
        </div>

        <div className='col text-center'>
          <button className='btn btn-dark position-relative' onClick={() => { deleteItem(id) }} >borrar</button>
          
        </div>
      </div>
    </div>
      
  )
}
