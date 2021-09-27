import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navber">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;