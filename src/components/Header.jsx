import React,{useState,useContext} from 'react'

import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_runa_sale.png';
import AppContex from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';



const Header=()=>{
    const [toggle,setToggle]=useState(false);
    const [toggleOrders,setToggleOrders]=useState(false);
    const {state}=useContext(AppContex);
    const handleToggle=()=>{
        setToggle(!toggle);
    }
    return(
            <header className="header">
                <div className='header__banner-container'>
                    <h3 className='header__banner'>DELIVERY GRATIS DESDE S/. 100</h3>
                </div>
                
                <nav className='header-nav'>
                    <img src={menu} alt="menu" className="header-nav__menu"/>
                    <div className="navbar-left">
                        <img src={logo} alt="logo" className="nav-left__logo"/>
                        <ul className='navbar-left__menu-container'>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Todo</a>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Productos</a>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Marcas</a>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Reviews</a>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Nosotros</a>
                            </li>
                            <li className='navbar-left__menu-item'>
                                <a className='navbar-left__menu-item-link' href="/">Otros</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul className='navbar-right__menu-container'>
                            <li className="navbar-right__email" onClick={handleToggle}>
                                runastore@gmail.com
                            </li>
                            <li className="navbar-right__shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
                            <img className='navbar-right__icon-shopping' src={shoppingCart} alt="shopping cart"/>
                                {state.cart.length > 0 ?<div>{state.cart.length}</div>:null}
                            </li>
                        </ul>
                    </div>
                    {toggle && <Menu/>}
                    {toggleOrders && <MyOrder/>}
                </nav>
            </header>

    );
}
export default Header;