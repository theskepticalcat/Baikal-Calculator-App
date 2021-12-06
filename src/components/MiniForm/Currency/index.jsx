import { observer } from 'mobx-react-lite';
import React, { useState, useContext } from 'react';
import { Context } from '../../../pages/_app';

import miniArrowImg from '../../../assets/images/smallArrowDown.svg';

import {Item, 
    DropDownMenu,
    DropDownItem, 
    SelectedItem
} from './styles';


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
        <Item onClick={() => onChangeItems()}>
            <SelectedItem>{currentCurrency} <img src={miniArrowImg} alt='open'/></SelectedItem>

            {dropDown === true
                ?
                <DropDownMenu>
                    {currency.currency.map(item => {
                        if(item.name !== currentCurrency) {
                            return (
                                <DropDownItem onClick={() => onOptionCurrency(item)} key={item.id}>
                                    <p>{item.name}</p>
                                </DropDownItem>
                            )
                        }
                    })}
                </DropDownMenu>
                :
                ''
            }
        </Item>
    );
});

export default Currency;