import React from 'react'
import Item from './Item'

// export default function ItemList({ personajes }) {
export default function ItemList({ productos }) {

    // return (
    //     <div className='container'>
        
    //         <div className='row justify-content-center pt-5'>
    //             {personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)}
    //         </div>
    //     </div>
       
    // )

    return (
        <div className='container'>

            <div className='row justify-content-center pt-5'>
                {productos?.map(producto => <Item key={producto.id} producto={producto} />)}
            </div>
        </div>

    )
}
