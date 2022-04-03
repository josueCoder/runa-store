import React from 'react'
import '@styles/Order.scss';

const Order=()=>{
    return(
        <div className="Order">
			<p>
				<span>03.25.22</span>
				<span>6 articulos</span>
			</p>
			<p>s/ 560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>

    );
}
export default Order;