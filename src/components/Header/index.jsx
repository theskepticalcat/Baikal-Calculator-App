import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../pages/_app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import SendOptions from '../SendOptions';
import logo from '../../assets/images/Logo.png';

import {HeaderBlock, 
    LogoAndOptionsWrap, 
    BtnWhite
} from './styles';


const Header = observer(() => {
    const {options} = useContext(Context);
    const router = useRouter();

    return (
        <HeaderBlock>
            <LogoAndOptionsWrap>
                <Link href="/">
                    <Image src={logo} alt="Baikal" />
                </Link>

                {router.pathname === '/select' && options.selectedOptions !== {}
                ? 
                <SendOptions />
                :
                ''}
            </LogoAndOptionsWrap>

            <Link href="/contacts">
                <BtnWhite>Связаться</BtnWhite>
            </Link>
        </HeaderBlock>
    )
});

export default Header;