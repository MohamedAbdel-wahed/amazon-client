import React,{createContext,useReducer} from 'react'
import {cartReducer} from '../reducers/cart'


export const CartContext= createContext()

function CartContextProvider({children}) {

  const [cartState, dispatch] = useReducer(cartReducer, {products: [], totalCount: 0, totalPrice: 0})

 return (
  <CartContext.Provider value={{cartState, dispatch}}>
     {children}
  </CartContext.Provider>
 )
}

export default CartContextProvider
