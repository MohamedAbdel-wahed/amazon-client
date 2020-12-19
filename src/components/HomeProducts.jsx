import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick"
import '../styles/HomeProducts.css'



function HomeProducts({productsSlides,title}) {

  const NextArrow= ({onClick})=>{
     return (<button className="arrow next" onClick={onClick}>
                <img src="/images/svg/arrow.svg" className="w-8" alt="next_arrow"/>
            </button>)
  }

  const PrevArrow= ({onClick})=>{
    return (<button className="arrow prev" onClick={onClick}>
                <img src="/images/svg/arrow.svg" className="w-8" alt="prev_arrow"/>
           </button>)
  }

  const tablet= {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
       }
  }

  const settings = {
        infinite: false,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 6,
        responsive: [tablet],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

 return (
   <div className="home__products h-80 flex flex-col my-6 mx-10 bg-white shadow-md rounded-sm">
       <h1 className="m-6 text-xl font-bold text-gray-700">{title}</h1>
       <Slider {...settings} className="w-full">
          {productsSlides.map(({id,img})=>(
             <div key={id} className="flex justify-center focus:outline-none cursor-pointer">
                <Link to={`/details/${id}`}>
                    <img src={img} className="w-11/12 h-56 transform scale-100 hover:scale-105 translate-y-0 hover:-translate-y-3 rotate-0 hover:-rotate-6 transition-all duration-500 ease-out object-scale-down" alt="product_image"/>
                </Link>
             </div>
          ))}
       </Slider>
   </div>
 )
}

export default HomeProducts
