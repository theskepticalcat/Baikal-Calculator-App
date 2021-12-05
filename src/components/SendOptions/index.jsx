import React, { useContext, useState } from 'react';
import { Context } from '../..';

import './styles.scss';

import arrowRightSvg from './../../assets/images/arrow-right-grey.svg';
import penSvg from './../../assets/images/pen.svg';

const SendOptions = () => {
    const {options} = useContext(Context);
    const [active, setActive] = useState(false);

    const onActive = () => {
        setActive(true);
        const optionsArea = document.getElementById('options');
        optionsArea.classList.add('options__active');
    }

    return (
         <div onClick={onActive} className='options' id='options'>
            <p>{options.selectedOptions.from}</p>
            <div><img src={arrowRightSvg} alt="/" /></div>
            <p>{`${options.selectedOptions.to}, `}</p>
            <p>{options.selectedOptions.currency}</p>

            {active === true && <div className='options__pen'><img src={penSvg} alt='change'/></div>}
        </div>
    )
}

export default SendOptions;
