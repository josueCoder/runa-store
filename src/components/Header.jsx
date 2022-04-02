import React from 'react'
import '../styles/Header.scss';

const Header=()=>{
    return(
            <header className="header">
                <div className='header__banner-container'>
                    <h3 className='header__banner'>DELIVERY GRATIS DESDE S/. 100</h3>
                </div>
                <div>

                </div>
                <nav className='header-nav'>
                    <img src="" alt="menu" className="menu"/>
                    <div className="navbar-left">
                        <img src=" " alt="logo" className="logo"/>
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
                            <li className="navbar-right__email">artesaner@example.com</li>
                            <li className="navbar-right__shopping-cart">
                            <img className='navbar-right__icon-shopping' src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
                            <div>2</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

    );
}
export default Header;