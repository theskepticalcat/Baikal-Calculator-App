import React, { useContext, useState} from 'react';
import miniArrowImg from '../../../assets/images/smallArrowDown.svg';
import { Context } from '../../../pages/_app';
import { observer } from 'mobx-react-lite';

import { DropDown, 
    Item, 
    SelectedItem,
    DropdownItem
} from './styles';


const RussianCity = observer(() => {
    const{russianCities} = useContext(Context);
    const [currentRussianCity, setRussianCity] = useState(russianCities.russianCities[0].name);
    const [dropDown, setDropDown] = useState(false);


    //Выпадающее меню:
    function onChangeItems() {
        dropDown === false ? setDropDown(true) : setDropDown(false);
    }

    //Закрываем по клику на опцию -> в стейт:
    function onOptionRussian(item) {
        setRussianCity(item.name);
        setDropDown(false);
    }

    return (
        <Item>
            <SelectedItem>{currentRussianCity} <img src={miniArrowImg} alt='open'/></SelectedItem>

            {dropDown
                ?
                <DropDown>
                    {russianCities.russianCities.map(item => {
                        if (item.name !== currentRussianCity) {
                            return (
                                <DropdownItem onClick={() => onOptionRussian(item)} key={item.id}>
                                    <p>{item.name}</p>
                                </DropdownItem>
                            )
                        }
                    })}
                </DropDown>
                :
                ''
            }
        </Item>
    );
});

export default RussianCity;