import React from 'react'
import LandingSlider from '../components/LandingSlider'
import HomeCategories from '../components/HomeCategories'
import HomeProducts from '../components/HomeProducts'


function Home() {
    return (
        <div className="home">
            <LandingSlider />
            <HomeCategories />
            <HomeProducts />
    </div>
    )
}

export default Home
