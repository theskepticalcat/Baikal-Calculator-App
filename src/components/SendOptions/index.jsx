import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Image from 'next/image';

import arrowRightSvg from './../../assets/images/arrow-right-grey.svg';
import penSvg from './../../assets/images/pen.svg';

import { Options, 
    OptionsPen 
} from './styles';


const SendOptions = () => {
    const {options} = useContext(Context);
    const [active, setActive] = useState(false);

    const onActive = () => {
        setActive(true);
        const optionsArea = document.getElementById('options');
        optionsArea.classList.add('options__active');
    }

    return (
        <Options onClick={onActive} id='options'>
            {/* <p>{selectedOptions.from}</p> */}
            <Image src={arrowRightSvg} alt="/"/>
            {/* <p>{`${selectedOptions.to}, `}</p>
            <p>{selectedOptions.currency}</p> */}

            {active === true && <OptionsPen><img src={penSvg} alt='change'/></OptionsPen>}
        </Options>
    )
}

export default SendOptions;
