import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'

function Header() {

    const { cartState }= useContext(CartContext)
    const { totalCount }= cartState 

    return (
        <nav className="header w-full h-16 flex items-center px-3 xs:px-6 sm:px-5 :md:px-8 bg-black select-none">
            <Link exact='true' to="/" className="header__logo pt-2">
                <img src="/images/svg/logo.svg" className="w-16 xs:w-24" alt="amazon-logo"/>
            </Link>
            <div className="header__search mx-5 lg:mx-8 hidden sm:flex items-center flex-1">
                <input type="text" className="flex-1 px-3 py-1 border-2 border-white focus:border-yellow-600 focus:outline-none"/>
                <button className="p-2 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-600 focus:outline-none">
                    <img src="/images/svg/search.svg" className="w-5" alt="search-icon"/>
                </button>
            </div>
            <div className="header__items flex items-center justify-evenly ml-auto sm:ml-0">
                <Link to="/login" className="flex flex-col px-2 xs:px-3 py-1 border border-black hover:border-white">
                    <span className="text-xs tracking-wide text-gray-300">Hello,</span>
                    <span className="font-bold text-xs xs:text-base text-white">Sign In</span>
                </Link>
                <Link to="#" className="flex flex-col px-2 xs:px-3 py-1 border border-black hover:border-white">
                    <span className="text-xs tracking-wide text-gray-300">Returns</span>
                    <span className="font-bold text-xs xs:text-base text-white">& Orders</span>
                </Link>
                <Link to="/shopping-cart" className="flex flex-col items-center px-2 xs:px-3 border border-black hover:border-white">
                    <span className="text-xs xs:text-base font-bold text-yellow-600">{totalCount && totalCount }</span>
                    <span>
                        <img src="/images/svg/cart.svg" className="w-6" alt="cart"/>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Header
