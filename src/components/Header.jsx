import React,{useState,useContext} from 'react'

import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_runa_sale.png';
import AppContex from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';



const Header=()=>{
    const [toggle,setToggle]=useState(false);
    const {state}=useContext(AppContex);
    const handleToggle=()=>{
        setToggle(!toggle);
    }
    return(
            <header className="header">
                <div className='header__banner-container'>
                    <h3 className='header__banner'>DELIVERY GRATIS DESDE S/. 100</h3>
                </div>
                <div>

                </div>
                <nav className='header-nav'>
                    <img src={menu} alt="menu" className="menu"/>
                    <div className="navbar-left">
                        <img src={logo} alt="logo" className="nav-logo"/>
                        <ul>
                            <li>
                                <a href="/">Todo</a>
                            </li>
                            <li>
                                <a href="/">Productos</a>
                            </li>
                            <li>
                                <a href="/">Marcas</a>
                            </li>
                            <li>
                                <a href="/">Reviews</a>
                            </li>
                            <li>
                                <a href="/">Nosotros</a>
                            </li>
                            <li>
                                <a href="/">Otros</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li className="navbar-right__email" onClick={handleToggle}>
                                runastore@gmail.com
                            </li>
                            <li className="navbar-right__shopping-cart">
                            <img className='navbar-right__icon-shopping' src={shoppingCart} alt="shopping cart"/>
                                {state.cart.length > 0 ?<div>{state.cart.length}</div>:null}
                            </li>
                        </ul>
                    </div>
                    {toggle && <Menu/>}
                </nav>
            </header>

    );
}
export default Header;