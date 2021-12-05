import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import autocomplete from '../../../utils/autocomplete';

import './styles.scss';


const ChineseCityInput = observer(() => {
    const {chineseCities} = useContext(Context);

    const [currentChineseCity, setChineseCity] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const [list, setList] = useState(null);
    //const [isCorrect, setCorrect] = useState(false);     //стейт ошибки-напоминания


    //Показываем результаты:
    function showChineseResults(value) {
        setChineseCity(value);
        let shownItems = autocomplete(value, chineseCities.chineseCities);  //эл-нты, кот. выводим в дропдауне
        setDropDown(true);
        setList(shownItems);
    }

    //Выбор опции:
    function onItem(item) {
        setChineseCity(item.name);
        setDropDown(false);
    }


    return (
        <div className='item'>
            <input 
                value={currentChineseCity} 
                onChange={e => showChineseResults(e.target.value)}
                type='text'
                className='item__title'
            ></input>

            {dropDown &&
                <div className='dropdown'>
                {list.map(item => 
                    <div key={item.id} className='dropdown__item' onClick={() => onItem(item)}>
                        <input type='radio' className='dropdown__input' id='city-name'></input>
                        {item.name}
                    </div>
                )}
                </div>
            }
        </div>
    );
});

export default ChineseCityInput;