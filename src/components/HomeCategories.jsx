import React from 'react'
import {Link} from 'react-router-dom'
import {homeCategories} from '../utils/cardData'


function HomeCategory() {
 return (
  <div className="home__categories relative z-20 mx-3 xxs:mx-1 xs:mx-6 sm:mx-3 md:mx-6 lg:mx-10 grid xxs:grid-cols-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xxs:gap-2 xs:gap-4 sm:gap-2 md:gap-4 lg:gap-6 select-none mb-8">
      {homeCategories.map(({id,title,img})=>{
          return (
            <div key={id} className={`category px-2 xs:px-4 sm:px-2 md:px-4 ${id===1 && 'hidden sm:block order-3'}  ${id===5 && 'hidden sm:block order-1'} ${title ? 'py-3' : 'pt-4 pb-6'} bg-white border border-gray-100 shadow-sm rounded-md`}>
                    <div className={`pb-1 flex items-center ${title && 'h-12'}`}>
                        <h1 className="text-base lg:text-lg xl:text-xl font-bold xs:my-1">{title}</h1>
                    </div>
                    <div className={title ? 'my-1' : 'mt-1 mb-1'}>
                        <img src={img} className="w-full h-36 sm:h-56 lg:h-56 xl:h-72 object-cover" alt="category_image"/>
                    </div>
                    {
                        title 
                        ? ( <div className="mt-4 pb-0">
                                <Link to="#" className="text-sm xl:text-base tracking-wide ml-1 text-blue-500 hover:underline hover:text-yellow-600 ">shop now</Link>
                            </div>)
                        : ( <div className="mt-6 flex justify-center">
                                <button className="px-6 xl:px-12 py-1 text-sm xl:text-base border border-yellow-500 tracking-wide bg-gradient-to-l from-yellow-200 to-white rounded-sm text-gray-700 focus-within:border-2 focus:outline-none">sign in securely</button>
                            </div>)
                    }
                   
            </div>
          )
      })}
  </div>
 )
}

export default HomeCategory
