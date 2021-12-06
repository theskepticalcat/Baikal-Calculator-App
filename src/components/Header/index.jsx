import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../pages/_app';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SendOptions from '../SendOptions';
import './styles.scss';

import logo from '../../assets/images/Logo.png';


const Header = observer(() => {
    const{options} = useContext(Context);
    const router = useRouter();


    return (
        <div className='header' id='header'>

            <div className='header__logoAndOptions'>
                <Link href="/">
                    <div className='header__logo'>
                        <img src={logo} alt="Baikal" />
                    </div>
                </Link>

                {router.pathname === '/select' && options.selectedOptions !== {}
                ? 
                <SendOptions />
                :
                ''}
            </div>

            <div className='header__btn'>
                <Link href="/contacts">
                    <button className='btn btn__white'>Связаться</button>
                </Link>
            </div>
        </div>
    )
})

export default Header;