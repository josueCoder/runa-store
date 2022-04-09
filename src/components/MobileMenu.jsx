import React from 'react';
import '../styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div class="mobile-menu">
            <ul>
                <li>
                    <p>Todo</p>
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

                <ul>
                <li>
                    <a href="/account">Mi Cuenta</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" class="email">runastore@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">cerrar sesion</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;