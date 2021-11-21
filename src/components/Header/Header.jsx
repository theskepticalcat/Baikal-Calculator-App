import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../..';
import SendOptions from '../SendOptions/SendOptions';

import './header.scss';

import logo from '../../assets/images/Logo.png';



const Header = observer(() => {
    const{options} = useContext(Context);
    const location = useLocation();


    return (
        <div className='header' id='header'>

            <div className='header__logoAndOptions'>
                <Link to="/main">
                    <div className='header__logo'>
                        <img src={logo} alt="Baikal" />
                    </div>
                </Link>

                {location.pathname === '/select' && options.selectedOptions !== {}
                ? 
                <SendOptions />
                :
                ''}
            </div>

            <div className='header__btn'>
                <Link to="/contacts">
                    <button className='btn btn__white'>Связаться</button>
                </Link>
            </div>
        </div>
    )
})

export default Header;