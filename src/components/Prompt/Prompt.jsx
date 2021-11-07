import React from 'react';
import './prompt.scss';
import blueArrowUp from '../../assets/images/blue-arrow-up.svg';

function Prompt({active, setActive}) {

    return (
        <div className={active === true ? 'prompt active' : 'prompt notActive'}>
            <p>Для начала заполните поля выше</p>
            <img src={blueArrowUp} alt='/'/>
        </div>
    )
}

export default Prompt;
