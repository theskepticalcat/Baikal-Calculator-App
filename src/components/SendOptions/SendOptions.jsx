import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

import './sendOptions.scss';
import arrowRightSvg from './../../assets/images/arrow-right-grey.svg';
import penSvg from './../../assets/images/pen.svg';

const SendOptions = () => {
    const [active, setActive] = useState(false);

    const selectedOptions = JSON.parse(localStorage.getItem('selectItem'));



    const onActive = () => {
        setActive(true);
        const optionsArea = document.getElementById('options');
        optionsArea.classList.add('options__active');
    }

    return (
         <div onClick={onActive} className='options' id='options'>
            <p>{selectedOptions.from}</p>
            <div><img src={arrowRightSvg} alt="/" /></div>
            <p>{`${selectedOptions.to}, `}</p>
            <p>{selectedOptions.currency}</p>

            {active === true && <div className='options__pen'><img src={penSvg} alt='change'/></div>}
        </div>
    )
}

export default SendOptions;
