import React, { useState } from 'react'

export default function ItemCount({inicial, max, onAdd}) {
    // const {inicial, max, onAdd}=props //ota forma
    
    //el count es el que va a mostar los cambios en el html y setCount donde se aolican los cambios 
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
            

            {/* <div className='text-center'>
                <h2>{count}</h2>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={reset}>Reset</button> */}
                {/* se ejecuta un callback que ejecuata la funcion para pasarle un parametro  */}
                {/* <button onClick={() => { onAdd(count); reset() }}>agregar al carrito</button>
            </div> */}
        </>
    )
}
