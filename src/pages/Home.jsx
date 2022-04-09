import React from 'react';
import ProductList from '@containers/ProductList';
import Nosotros from '../components/Nosotros';
import Reviews from '../components/Reviews';

const Home=()=>{

    return(
        
        <>
     
        <ProductList/>
        <Nosotros/>
        <Reviews/>
        </>
    );
}
export default Home;