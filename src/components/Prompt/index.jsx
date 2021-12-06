import React from 'react';
import blueArrowUp from '../../assets/images/blue-arrow-up.svg';
import Image from 'next/image';

import {PromptItem, 
    PromptDescription
} from './styles';

function Prompt({active, setActive}) {

    return (
        <PromptItem className={active === true ? 'prompt active' : 'prompt notActive'}>
            <PromptDescription>Для начала заполните поля выше</PromptDescription>
            <Image src={blueArrowUp} alt='arrow'/>
        </PromptItem>
    )
}

export default Prompt;
