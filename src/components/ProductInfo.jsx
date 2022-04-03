import React from 'react';
import '@styles/ProductInfo.scss';

const ProductInfo=()=>{
    return(
        <>
			<img src="https://images.ecestaticos.com/K9alHH3S_4nMp0Imvq7ZJntk5f0=/0x0:1600x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe60%2Fc6f%2Fa12%2Fe60c6fa12d4cd27df51c9baec7ef6298.jpg" alt="shoes" />
			<div className="ProductInfo">
				<p>s/120,00</p>
				<p>Zapatillas Nike</p>
				<p>Calzado con la mas alta tecnologia ,para mayor comodidad de los deportistas</p>
				<button className="primary-button add-to-cart-button">
					<img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
					Añadir a la cesta
				</button>
			</div>
		</>

    );
}
export default ProductInfo;