
import { MyContext } from '../context/CartContext';
import {useContext, useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import ItemCart from './ItemCart';

export default function Cart() {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { cart, emptyCart, getItemPrice } = useContext(MyContext);

    useEffect(() => { 

        const data = new Promise((res, rej) => {
            // setTimeout(() => { 
                
                res(cart)
                
            // }, 1000);
        })
       
        data
            .then((result) => {
                setProduct(result)
            })
            .catch(error => {
                setError(true);
               
            })
            .finally(() => {
                setLoading(false);
            })

    }, [cart]);

    
  return (
      <>
        <div>  
            <p className='text-center p-5'>{loading && 'Loading...'}</p>
            <p>{error && 'Error'}</p>
            
            {cart.length ?
                  product?.map(producto => <ItemCart key={producto.id} producto={producto} />):
                
                <>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                            <h3 className='text-center'>No hay productos en el carrito</h3>
                            <button type="button" className="btn btn-dark position-relative">
                                <Link to="/inicio" className="dropdown-item" href="#/">Ir a comprar</Link>
                            </button>
                    </div>      
                </>             
            }
              
            {cart.length && <>
                  <div className='d-grid gap-2 col-6 mx-auto text-center'>
                      <h3>Total : {getItemPrice()}</h3>     
                      <button type="button" className="btn btn-dark position-relative" onClick={emptyCart} >  Borrar Productos</button>
                      <button type="button" className="btn btn-dark position-relative" onClick={emptyCart} >  Finalizar Compra</button>     
                  </div>
                
            </>}
              
        </div>
      </>
  )
}
