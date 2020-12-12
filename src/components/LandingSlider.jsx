import React,{useState,useEffect} from 'react'
import {landingSlides} from '../utils/slideData'
import '../styles/LandingSlider.css'


function LandingSlider() {

 const [current,setCurrent]= useState(0)
 const length= landingSlides.length

 const nextSlide= ()=> current===length-1 ? setCurrent(0) : setCurrent(current+1)

 useEffect(()=>{
     setTimeout(nextSlide,7000)
    // eslint-disable-next-line
 },[current])


 return (
  <div className="landing__slider flex w-full h-40 xs:h-56 sm:h-76 md:h-96 lg:h-108 xl:h-116 2xl:h-124 -mb-14 xs:-mb-24 sm:-mb-36 md:-mb-48 lg:-mb-56 xl:-mb-72">
     {landingSlides.map((slide,index)=>{ 
      return (
       <div key={index} className={index===current ? 'slide activeSlide' : 'slide'}>
         {index===current && (<img src={slide} className="w-full h-full object-cover" alt="slide_image"/>)}
       </div>
      )
     })}
  </div>
 )
}

export default LandingSlider
