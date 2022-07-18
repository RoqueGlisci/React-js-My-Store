import {useState, useContext} from 'react';
import Swal from 'sweetalert2';
import { MyContext } from '../context/CartContext';

export default function ItemCount({inicial, max, onAdd}) {
    
    const [count, setCount] = useState(inicial);

    const sumar = () => {
        
        count < max ?
            setCount(count + 1) :
            Swal.fire({
                title: 'no se puede agregar mas productos',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
    }
    const restar = () => {
        // count > inicial ? setCount(count - 1) : alert("no se puede quitar mas productos")
        count > inicial && setCount(count - 1) 
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
