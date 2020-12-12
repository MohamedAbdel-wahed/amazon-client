import React from 'react'
import LandingSlider from '../components/LandingSlider'
import HomeCategories from '../components/HomeCategories'
import HomeProducts from '../components/HomeProducts'
import {topSellerImgs,shirtsImgs,kitchenImgs,toysImgs} from '../utils/productData'


function Home() {
    return (
        <div className="home">
            <LandingSlider />
            <HomeCategories />
            <HomeProducts productsSlides={topSellerImgs} />
            <HomeProducts productsSlides={shirtsImgs} />
            <HomeProducts productsSlides={kitchenImgs} />
            <HomeProducts productsSlides={toysImgs} />
    </div>
    )
}

export default Home
