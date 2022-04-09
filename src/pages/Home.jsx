import React from 'react';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
import Nosotros from '../components/Nosotros';
import Reviews from '../components/Reviews';

const Home=()=>{

    return(
        
        <>

          <Reviews/>
          <ProductList/>
          <Nosotros/>   

         

         
         
        </>
    );
}
export default Home;