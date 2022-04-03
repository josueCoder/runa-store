import React from 'react';
import '@styles/ShoppingCartItem.scss';


const ShoppingCartItem=()=>{

    return(
        <div className="ShoppingCartItem">
			<figure>
				<img src="https://images.ecestaticos.com/K9alHH3S_4nMp0Imvq7ZJntk5f0=/0x0:1600x900/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe60%2Fc6f%2Fa12%2Fe60c6fa12d4cd27df51c9baec7ef6298.jpg" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
		</div>

    );
}
export default ShoppingCartItem;