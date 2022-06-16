import React from 'react'
import ItemCount from './ItemCount';

export const ItemDetail = ({ detail }) => {

    const { title, description, price, stock, pictureUrl_1 } = detail;
    
    //la funcion onAdd es donde se va a pasar la cantidad
    const onAdd = (count) => {
        alert(`agregaste ${count} productos`)
    }

    return (
        
        <>
            <div className='m-4'>
                <div className="container-fluid rounded-5 pt-5" style={{ backgroundColor: 'gray'}}>
                    <div className='row p-5'>
                        <div className='col-6'>
                            <img className='rounded-5' style={{width: '80%', height: '90%'}} src={pictureUrl_1} alt="" />
                        </div>
                        <div className='col-6'>
                            <h1 className='text-center pb-3 text-white'>{title}</h1>
                            <h3 className='text-white'> Descripcion :</h3>
                            <h3 className='pb-3 text-white'>{description}</h3>
                            <h3 className='pb-3 text-white'>Precios: ${price}</h3>
                            <h3 className='pb-3 text-white'>Stock: {stock}</h3>
                            <ItemCount inicial={1} max={9} onAdd={onAdd} /> 
                            <button type="button" className="btn btn-primary btn-lg ">Comprar</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    
    )
}
