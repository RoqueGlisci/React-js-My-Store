
import { useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext({});

export default function CartContext({ children }) {
    
    const [cart, setCart] = useState([])
    
    //Metodo some - ItemDetail - detecta si el producto que se agrega ya esta en el carrito o no. Retorna booleano
    const isInCart = (id) => { 
        return cart.some(x => x.id === id)
    }
    
    //ItemDetail - agrega el producto al cart, sin pisar agregados anteriores y si es duplicado aumenta cantidad
    const addItem = (item, count) => { 
        const newItem = {
            ...item,
            count
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].count += count
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    } 
    
    //Vacia el carrito - cart - boton
    const emptyCart = () => { 
        setCart([])//lo setea a un array vacio 
    }
    
    //Metodo filter - cart - mediante el id retorna un nuevo array sin el producto seleccionado
    const deleteItem = (id) => { 
        return setCart(cart.filter(x => x.id !== id))
    }
    
    //Metodo Reduce - CartWidget - retorna la cantidad total de unidades que nuestro state cart
    const getItemQty = () => { 
        
        return cart.reduce((acc, x) => acc += x.count, 0)
    }
    
    //Metodo reduce - cart - retorna el precio total del carrito 
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.price, 0)
    }

  return (
    <MyContext.Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>
        {children}
    </MyContext.Provider>
  )
}
