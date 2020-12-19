import React from 'react'
import LandingSlider from '../../components/LandingSlider'
import HomeCategories from '../../components/HomeCategories'
import HomeProducts from '../../components/HomeProducts'
import {topSellerImgs,shirtsImgs,kitchenImgs,toysImgs} from '../../utils/productData'


function Home() {
    return (
        <div className="home bg-gray-100">
            <LandingSlider />
            <HomeCategories />
            <HomeProducts productsSlides={topSellerImgs} title={"Amazon Top Sellers"} />
            <HomeProducts productsSlides={shirtsImgs} title={"Men's Dress Shirts under $30"}/>
            <HomeProducts productsSlides={kitchenImgs} title={"Best Sellers in Kitchen"} />
            <HomeProducts productsSlides={toysImgs} title={"Stuffed Animals & Toys under $10"} />
    </div>
    )
}

export default Home
