
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';

export const MyContext = createContext({});

export default function CartContext({ children }) {
    
    const [cart, setCart] = useState([])

    useEffect(() => {
        getCartFromLocalStorage(); 
    }, []); 

    const isInCart = (id) => { 
        return cart.some(x => x.id === id)
    }
    
    const addItem = (item, count, id) => { 
        const newItem = {
            ...item,
            count,
            id
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            const x = auxArray[productIndex].count += count
            if (x > newItem.stock) {
                Swal.fire('No se puede comprar mas productos. Llego a su limite')
            } else {
                setCart(auxArray)
                setCartInLocalStorage(auxArray)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `agregaste ${count} producto`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
            
        } else {
            setCart([...cart, newItem])
            setCartInLocalStorage([...cart, newItem])
            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Agregaste ${count} producto`,
                    showConfirmButton: false,
                    timer: 2000
                })
        }
    } 
    
    const emptyCart = () => { 
        setCart([])
        setCartInLocalStorage([])
    }
    
    const deleteItem = (id) => { 
        let newAux = cart.filter(x => x.id !== id)
        setCart(newAux)
        setCartInLocalStorage(newAux)
        
    }
    
    const getItemQty = () => { 
        
        return cart.reduce((acc, x) => acc += x.count, 0)
    }
    
    const getItemPrice = () => {

        return cart.reduce((acc, x) => acc += x.count * x.price, 0)
    }

    const getCartFromLocalStorage = () => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }
    const setCartInLocalStorage = ( cart ) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

  return (
    <MyContext.Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice, getCartFromLocalStorage}}>
        {children}
    </MyContext.Provider>
  )
}
