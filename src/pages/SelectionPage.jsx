import React, { useContext, useState } from 'react';
import SelectionInfo from '../components/SelectionInfo/SelectionInfo';

import './../styles/selectionPage.scss';
import './../styles/index.scss';

import coach from './../assets/images/coach.png';
import { Context } from '..';
import { observer } from 'mobx-react-lite';


const SelectionPage = observer(() => {
    const {furniture} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState('');  //объект выбранного айтема


    const select = (item) => {
        setSelectedItem(item);      //добавляем выбранный айтем в стейт для отображения
        furniture.setSelectedFurniture(item);     //в глобальное хранилище
    }


    return (
        <div className='page-wrapper'>
        <div className='selection'>
            
            <div className='selection__header'>
                <p>Выберите мебель, которую нужно<br></br>перевезти</p>
            </div>

            <form className='selection__search'>
                <input className='selection__search-input' placeholder='Введите название' type='text'></input>
                <button className='btn btn__search btn__blue' type='submit'>Поиск</button>
            </form>


            {/* Вывод всей мебели */}
            <div className='selection__wrap'>
                <div className='selection__items'>
                    {furniture.furniture.map(item => {
                        return (
                        <div key={item.id} className='selection__items-item'>
                            <img src={coach} alt="диван" />
                            <p className='item_name'>{item.name}</p>
                            <button onClick={() => select(item)} type='button' className='btn btn__blue btn__medium btn__white-active'>Выбрать</button>
                        </div>
                        )
                    })}
                </div>
                

                {/* Информация о выбранном элементе мебели */}
                <SelectionInfo selectedItem={selectedItem}/>
            </div>
        </div>
        </div>
    )
})

export default SelectionPage;
