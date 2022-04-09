import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SliderOne from '../assets/slider/banner1.png';
import SliderTwo from '../assets/slider/banner2.png';
import SliderThree from '../assets/slider/banner3.png';
import ProductList from '@containers/ProductList';
import Nosotros from '../components/Nosotros';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img src={SliderOne} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={SliderTwo} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={SliderThree} alt="Image 2"/>
                </SplideSlide>
            </Splide>
            <ProductList/>
            <Nosotros/>
            <Reviews/>
        </>
    );
}
export default Home;
