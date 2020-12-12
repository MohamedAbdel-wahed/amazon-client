import React from 'react'
import Slider from "react-slick"
import '../styles/HomeProducts.css'



function HomeProducts({productsSlides}) {

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
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [tablet],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

 return (
   <div className="home__products w-full h-72 my-6 mx-auto flex items-center bg-white">
       <Slider {...settings} className="mx-6 w-full">
          {productsSlides.map(({id,img})=>(
             <div key={id} className="flex justify-center focus:outline-none cursor-pointer">
                  <img src={img} className="w-full h-40 xs:mx-6 object-scale-down" alt="product_image"/>
             </div>
          ))}
       </Slider>
   </div>
 )
}

export default HomeProducts
