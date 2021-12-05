import { observer } from 'mobx-react-lite';
import React, { useState, useContext } from 'react';
import { Context } from '../../..';

import miniArrowImg from '../../../assets/images/smallArrowDown.svg';
import './styles.scss';

const Currency = observer(() => {
    const{currency} = useContext(Context);
    const [currentCurrency, setCurrentCurrency] = useState(currency.selectedCurrency.name);
    const [dropDown, setDropDown] = useState(false);

    //Выпадающее меню:
    function onChangeItems() {
        dropDown === false ? setDropDown(true) : setDropDown(false);
    }

    //Выбранный айтем:
    function onOptionCurrency(item) {
        setCurrentCurrency(item.name);
        currency.setSelectedCurrency(item);     //в глобал.хранилище
    }


    return (
        <div onClick={() => onChangeItems()} className='item'>
            <div>{currentCurrency} <img src={miniArrowImg} alt='open'/></div>

            {dropDown === true
                ?
                <div className='dropdown'>
                    {currency.currency.map(item => {
                        if(item.name !== currentCurrency) {
                            return (
                                <div onClick={() => onOptionCurrency(item)} key={item.id} className='dropdown__item'>
                                <input className='dropdown__input' type="radio"/>
                                    <p className='dropdown__label'>{item.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                :
                ''
            }
        </div>
    );
});

export default Currency;