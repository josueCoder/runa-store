import React,{useState} from 'react';
import '@styles/ProductItem.scss';
import AddToCart from '@icons/bt_add_to_cart.svg'

const ProductItem=()=>{
	const [cart,setCart]=useState([]);
	const handleClick=()=>{
		setCart([]);
	}
    return(
        <div className="ProductItem">
			<img src="https://images.ecestaticos.com/K9alHH3S_4nMp0Imvq7ZJntk5f0=/0x0:1600x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe60%2Fc6f%2Fa12%2Fe60c6fa12d4cd27df51c9baec7ef6298.jpg" alt="" />
			<div className="product-info">
				<div>
					<p>s/120,00</p>
					<p>Zapatillas Nike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={AddToCart} alt="icon add cart " />
				</figure>
				
			</div>
		</div>



    );
}
export default ProductItem;