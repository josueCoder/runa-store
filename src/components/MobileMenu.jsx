import React from 'react';
import '../styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul className='mobile-menu__menu-container' >
                <li className='mobile-menu__menu-item'>
                    <p>Todo</p>
                </li>
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/">Productos</a>
                </li>
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/">Marcas</a>
                </li>
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/">Reviews</a>
                </li>
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/">Nosotros</a>
                </li>
                
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/">Otros</a>
                </li>
                </ul>

                <ul>
                <li className='mobile-menu__menu-item'>
                    <a className='mobile-menu__menu__link' href="/account">Mi Cuenta</a>
                </li>
                </ul>

                <ul className='mobile-menu__menu-close-container'>
                    <li className='mobile-menu-close__menu-item'>
                        <a className='mobile-menu-close__menu__link--email' href="/account" >runastore@gmail.com</a>
                    </li>
                    <li className='mobile-menu-close__menu-item'>
                        <a className='mobile-men-close__menu__link' href="/signup" >cerrar sesion</a>
                    </li>
                </ul>
        </div>
    );
}

export default MobileMenu;