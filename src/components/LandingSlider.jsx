import React,{useState,useEffect} from 'react'
import {landingSlides} from '../utils/slideData'
import '../styles/LandingSlider.css'


function LandingSlider() {

 const [current,setCurrent]= useState(0)
 const length= landingSlides.length

 const nextSlide= ()=> current===length-1 ? setCurrent(0) : setCurrent(current+1)

 useEffect(()=>{
     setTimeout(nextSlide,7000)
 },[current])


 return (
  <div className="landing__slider flex w-full h-88 md:h-112 -mb-40">
     {landingSlides.map((slide,index)=>{ 
      return (
       <div key={index} className={index===current ? 'slide activeSlide' : 'slide'}>
         {index===current && (<img src={slide} className="w-full h-full" alt="slide_image"/>)}
       </div>
      )
     })}
  </div>
 )
}

export default LandingSlider
