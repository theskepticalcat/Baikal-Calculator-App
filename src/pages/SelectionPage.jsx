import React, { useContext, useState } from 'react';
import SelectionInfo from '../components/SelectionInfo/SelectionInfo';

import './../styles/selectionPage.scss';

import coach from './../assets/images/coach.png';
import { Context } from '..';
import { observer } from 'mobx-react-lite';


const SelectionPage = observer(() => {
    const {furniture} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState('');  //объект выбранного айтема


    const select = (item) => {
        setSelectedItem(item);      //добавляем выбранный айтем в стейт для отображения
        localStorage.setItem('selectedItem', JSON.stringify(item));
    }


    return (
        <div>
        <div className='selection__header'>
            <p>Выберите мебель, которую нужно<br></br>перевезти:</p>
            <p>Затем заполните следующие<br></br>поля выбранного элемента:</p>
        </div>
        
        <div className='selection'>

            {/* Вывод всей мебели */}
            <div className='selection__wrap'>
                <form className='selection__search'>
                    <input className='selection__search--input' placeholder='Введите название' type='text'></input>
                    <button className='btn btn__search btn__blue' type='submit'>Поиск</button>
                </form>

                <div className='selection__items'>
                    {furniture.furniture.map(item => {
                        return (
                        <div key={item.id} className='selection__items--item'>
                            <img src={coach} alt="диван" />
                            <p className='selection__items--name'>{item.name}</p>
                            <button onClick={() => select(item)} type='button' className='btn btn__blue btn__medium btn__white-active'>Выбрать</button>
                        </div>
                        )
                    })}
                </div>
            </div>

            {/* Информация о выбранном элементе мебели */}
            <SelectionInfo selectedItem={selectedItem}/>
        </div>
        </div>
    )
})

export default SelectionPage;