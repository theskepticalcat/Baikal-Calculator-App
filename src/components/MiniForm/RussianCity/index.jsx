import React, { useContext, useState} from 'react';
import miniArrowImg from '../../../assets/images/smallArrowDown.svg';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';


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
        <div onClick={() => onChangeItems()} className='item'>
            <div>{currentRussianCity} <img src={miniArrowImg} alt='open'/></div>

            {dropDown
                ?
                <div className='dropdown'>
                    {russianCities.russianCities.map(item => {
                        if (item.name !== currentRussianCity) {
                            return (
                                <div onClick={() => onOptionRussian(item)} key={item.id} className='dropdown__item'>
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

export default RussianCity;