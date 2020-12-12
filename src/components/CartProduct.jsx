import React,{useState,useEffect,useContext} from 'react'
import {CartContext} from '../contexts/CartContext'
import {removeProduct,addProduct} from '../actions/cart'

function CartProduct({product}) {

   const {id,title,img,price,quantity,rating}= product

   const { cartState, dispatch }= useContext(CartContext)
   const {products}= cartState

   const [quan,setQuan]= useState(quantity)
   const [err,setErr]= useState(null)

   const handleQuantityChange= (e)=> {
      const value= e.target.value
      if(value>0 && !isNaN(value)){
         setErr(null)
         setQuan(value)
      }else {
         setErr('value must be a number and greater than 0')
      }
   }

   useEffect(()=>{
      const newProduct= {...product, quantity: quan}
      dispatch(addProduct(newProduct))
    // eslint-disable-next-line
   },[quan])


   const remove= (removed_id)=> {
      const newProductsList= products && products.filter(product=>product.id!==removed_id)
      dispatch(removeProduct(newProductsList))
   }

 return (
  <div className="flex mx-4 pt-2 pb-6 border-b border-gray-300">
      <div className="pt-2">
         <img src={img} className="w-40" alt="cart_item"/>
      </div>
      <div className="ml-14">
         <h1 className="mt-1 pr-36 text-lg text-gray-800 leading-tight">{title}</h1>
         <div className="mt-2 flex items-baseline">
            <div className="text-sm">
               <span className="font-semibold text-gray-700">Price: &nbsp;</span>
               <span className="text-gray-600 font-bold">$ </span>
               <span className="text-yellow-900">{price}</span>
            </div>
            <div className="ml-3 block">
               <label className="ml-3 font-semibold text-gray-700 text-sm">Quantity: </label>
               <input type="number" className={`select-none w-20 px-3 py-1 bg-gray-200 text-sm text-gray-700 ${err ? 'border-red-400': 'focus:border-gray-400'} font-semibold border-2 border-gray-200 rounded-lg focus:outline-none`} onChange={handleQuantityChange} value={quan} />
               <span className="ml-2 text-xs text-red-500">{err && err}</span>
            </div>
         </div>
         <div className="mt-1 text-gray-700 font-semibold">🌟🌟🌟🌟</div>
         <div className="mt-4 text-gray-700 font-semibold">
            <button onClick={()=> remove(id)} className="px-4 py-1.5 tracking-wider text-xs font-semibold bg-gradient-to-r to-white focus:outline-none rounded-lg border transition-all duration-300 ease-out from-yellow-200 hover:from-yellow-300 border-yellow-400 text-gray-500">Remove from basket</button>
         </div>
      </div>
  </div>
 )
}

export default CartProduct
