import React,{useState,useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_runa_sale.png';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { NavLink } from 'react-router-dom';



const Header=()=>{
    const [ toggleDesktop, setToggleDesktop ] = useState(false);
	const [ toggleMobile, setToggleMobile ] = useState(false);
    const [toggleOrders,setToggleOrders]=useState(false);
    const { state:{cart} } = useContext(AppContext);
    
    const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}

	const verifyCart = (cartNumber) => {
		if ((cartNumber) && (cartNumber > 9)) {
		  return "+9";
		} else {
			return cartNumber;
		}
	}
    
    
   
    return(
            <header className="header">
                <div className='header__banner-container'>
                    <h3 className='header__banner'>DELIVERY GRATIS DESDE S/. 100</h3>
                </div>
                
                <nav className='header-nav'>
                    <img src={menu} alt="menu" className="header-nav__menu" 
                    onClick={handleClickMobile}
                    />
                    <div className="navbar-left">
                        <figure className='nav-left__logo-container'>
                            <img src={logo} alt="logo" className="nav-left__logo"/>
                        </figure>
                        <ul className='navbar-left__menu-container'>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/">Todo</NavLink>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/productos">Productos</NavLink>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/">Marcas</NavLink>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/">Reviews</NavLink>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <NavLink className='navbar-left__menu-item-link' to="/">Otros</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul className='navbar-right__menu-container'>
                            <li className="navbar-right__email" 
                                onClick={handleClickDesktop}>
                                runastore@gmail.com
                            </li>
                            <li className="navbar-right__shopping-cart" 
                                onClick={()=>setToggleOrders(!toggleOrders)}
                            >
                            <img className='navbar-right__icon-shopping' src={shoppingCart} alt="shopping cart"/>
                            {cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
                            </li>
                        </ul>
                    </div>
                    {toggleDesktop && <Menu/>}
                    {toggleMobile && <MobileMenu/>}
                    {toggleOrders &&
                        <MyOrder
                            toggleOrders={toggleOrders}
                            setToggleOrders={setToggleOrders}
                        />}
                </nav>
            </header>

    );
}
export default Header;