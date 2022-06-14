import React from 'react'


export const ItemDetail = ({ detail }) => {

    const { title, description, price, stock, pictureUrl_1 } = detail;
    

    return (
        
        <>
            <div className='m-4'>
                <div className="container-fluid rounded-5 pt-5" style={{ backgroundColor: 'gray'}}>
                    <div className='row p-5'>
                        <div className='col'>
                            <img className='rounded-5' src={pictureUrl_1} alt="" />
                        </div>
                        <div className='col'>
                            <h1 className='text-center pb-3 text-white'>{title}</h1>
                            <h3 className='text-white'> Descripcion :</h3>
                            <h3 className='pb-3 text-white'>{description}</h3>
                            <h3 className='pb-3 text-white'>Precios: ${price}</h3>
                            <h3 className='pb-3 text-white'>Stock: {stock}</h3>
                            <button type="button" className="btn btn-primary btn-lg">Comprar</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    
    )
}
