import React from 'react';
import './header.scss';
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/main">
                <div className='header__logo'>
                    <img src={logo} alt="Baikal" />
                </div>
            </Link>

            <div className='header__btn'>
                <Link to="/contacts">
                    <button className='btn__white'>Связаться</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;