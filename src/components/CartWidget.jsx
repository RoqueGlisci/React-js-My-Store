//rfce
//rfc

import { useContext } from 'react'
import {MyContext} from '../context/CartContext';

export default function CartWidget() {
    
    const {getItemQty} = useContext(MyContext)
    
    return (
        <>

            {/* usando bootstrap icons */}
            <i className="bi bi-cart3 pe-4" style={{color: "white", fontSize: "1.5rem"}}></i>
            
            <span style={{color: "white", fontSize:"1.5rem" }}>{getItemQty()}</span>
            
        </>
        
    )
}

