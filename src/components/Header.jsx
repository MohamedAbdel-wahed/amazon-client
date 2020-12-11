import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <nav className="header w-full h-16 flex items-center px-4 lg:px-8 bg-black">
            <Link exact to="/" className="header__logo pt-2">
                <img src="/images/svg/logo.svg" className="w-24" alt="amazon-logo"/>
            </Link>
            <div className="header__search mx-5 lg:mx-8 flex items-center flex-1">
                <input type="text" className="flex-1 px-3 py-1 border-2 border-white focus:border-yellow-600 focus:outline-none"/>
                <button className="p-2 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-600 focus:outline-none">
                    <img src="/images/svg/search.svg" className="w-5" alt="search-icon"/>
                </button>
            </div>
            <div className="header__items flex items-center justify-evenly">
                <Link to="#" className="flex flex-col px-3 py-1 border border-black hover:border-white">
                    <span className="text-xs tracking-wide text-gray-300">Hello,</span>
                    <span className="font-bold text-sm text-white">Sign In</span>
                </Link>
                <Link to="#" className="flex flex-col px-3 py-1 border border-black hover:border-white">
                    <span className="text-xs tracking-wide text-gray-300">Returns</span>
                    <span className="font-bold text-sm text-white">& Orders</span>
                </Link>
                <Link to="/shopping-cart" className="flex flex-col items-center px-3 py-1 border border-black hover:border-white">
                    <span className="text-sm font-bold text-yellow-600">0</span>
                    <span>
                        <img src="/images/svg/cart.svg" className="w-5" alt="cart"/>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Header
