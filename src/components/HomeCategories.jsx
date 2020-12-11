import React from 'react'
import {Link} from 'react-router-dom'
import {homeCategories} from '../utils/cardData'


function HomeCategory() {
 return (
  <div className="home__categories mx-6 grid grid-cols-2 gap-6 select-none mb-8">
      {homeCategories.map(({id,title,img})=>{
          return (
            <div key={id} className={`category h-100 px-4 ${title ? 'py-3' : 'pt-4 pb-6'} bg-white border border-gray-100 shadow-sm rounded-sm`}>
                    <div className="my-1">
                        <h1 className="text-xl font-bold my-1">{title}</h1>
                    </div>
                    <div className={title ? 'my-1' : 'mt-8 mb-1'}>
                        <img src={img} className="h-56 object-contain" alt="category_image "/>
                    </div>
                    {
                        title 
                        ? ( <div className="mt-4">
                                <Link to="#" className="text-sm tracking-wide ml-1 text-blue-500 hover:underline hover:text-yellow-600 ">shop now</Link>
                            </div>)
                        : ( <div className="mt-6 flex justify-center">
                                <button className="px-6 py-1 text-sm bg-gradient-to-l from-yellow-200 to-white rounded-sm ring-1 focus:ring-2 ring-yellow-500 text-gray-700 focus:outline-none">sign in securely</button>
                            </div>)
                    }
                   
            </div>
          )
      })}
  </div>
 )
}

export default HomeCategory
