import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'
import {getProducts} from '../actions/cart'
import CartProduct from '../components/CartProduct'
import {cartProducts} from '../utils/cartData'
import "../styles/ShoppingCart.css"


function ShoppingCart() {

    const { cartState, dispatch }= useContext(CartContext)
    const { products }= cartState

  useEffect(()=>{
      dispatch(getProducts(cartProducts))
    // eslint-disable-next-line
   },[])

    return (
        <div className="shopping__cart bg-white flex mx-6 py-6 shadow-md rouned-sm overflow-hidden select-none">
            <div className="flex-1 px-8 overflow-hidden">
                <div className="flex items-center">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="w-full" alt="offer_banner"/>
                </div>
                <div className="my-5">
                    <h1 className="border-b border-gray-300 px-4 py-3 text-gray-700 font-bold tracking-wide text-2xl">Your Shopping Basket</h1>
                </div>
                <div className="flex flex-col pb-36 overflow-auto h-full">
                  <div>
                      {products.length>0 ? products.map((product)=>(
                          <CartProduct key={product.id} product={product} />
                      )) : <div className="mt-20 text-center">
                                <h1 className="font-bold text-3xl text-gray-400">No Products in The Basket Yet.. </h1>
                                <Link to="#" className="inline-block text-blue-600 my-3 tracking-wide hover:text-yellow-600 hover:underline ml-4">shop now</Link>
                           </div>}
                  </div>
                </div>
            </div>
            <div className="w-3/12 px-4">
                    
            </div>
        </div>
    )
}

export default ShoppingCart
