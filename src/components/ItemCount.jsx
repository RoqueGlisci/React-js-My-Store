import React, { useState } from 'react'

export default function ItemCount({inicial, max, onAdd}) {
    
    const [count, setCount] = useState(inicial);

    const sumar = () => {
        count < max ? setCount(count + 1) : alert("no se puede agregar mas productos")
    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert("no se puede quitar mas productos")
    }
    const reset = () => {
        setCount(inicial);
    }

    return (
        <>
            <div className='pos'>
                <div className='btnStyle'>
                    <div className='pos'>
                        <button className='btn1' onClick={sumar}>+</button>
                        <h2 className='text-white'>{count}</h2>
                        <button className='btn1' onClick={restar}>-</button>
                    </div>
                    <div className='pos pt-2'>
                        <button className='btn2' onClick={reset}>Reset</button>
                        <button className='btn2' onClick={() => { onAdd(count); reset() }}>agregar al carrito</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
