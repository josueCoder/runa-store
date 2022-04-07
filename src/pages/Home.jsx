import React from 'react';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
import Nosotros from '../components/Nosotros';

const Home=()=>{

    return(
        
        <>
         <Header/>
         <main>
          <ProductList/>
          <Nosotros/>   
         </main>
         

         
         
        </>
    );
}
export default Home;