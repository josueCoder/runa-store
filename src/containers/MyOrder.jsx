import React,{useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';

import  flechita from'@icons/flechita.svg';

const MyOrder = () => {
	const {state}=useContext(AppContext);
	const sumaTotal=()=>{
		const reducer=(accumalator,currentValue)=>accumalator+currentValue.price;
		const suma=state.cart.reduce(reducer,0);
		return suma;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">Mi Pedido</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product=>(
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>s/.{sumaTotal()}</p>
				</div>
				<button className="primary-button">
					Verificar
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
