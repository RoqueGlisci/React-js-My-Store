import React from 'react'
import Item from './Item'

export default function ItemList({ personajes }) {

    return (
        <div className='container'>
        
            <div className='row justify-content-center'>
                {personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)}
            </div>
        </div>
       
    )
}
