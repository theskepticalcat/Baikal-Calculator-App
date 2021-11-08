import React, { useContext } from 'react';
import SelectionInfo from '../components/SelectionInfo/SelectionInfo';

import './../styles/selectionPage.scss';
import './../styles/index.scss';

import coach from './../assets/images/coach.png';
import { Context } from '..';


const SelectionPage = () => {
    const {furniture} = useContext(Context);

    return (
        <div className='selection'>
            <div className='selection__header'>
                <p>Выберите мебель, которую нужно<br></br>перевезти</p>
                <p>Затем заполните следующие<br></br>поля выбранного элемента:</p>
            </div>

                <form className='selection__search'>
                    <input className='selection__search-input' placeholder='Введите название' type='text'></input>
                    <button className='btn btn__search btn__blue' type='submit'>Поиск</button>
                </form>

            <div className='wrapper'>
                <div className='selection__items'>
                    {furniture.furniture.map(item => {
                        return (<div key={item.id} className='selection__items-item'>
                            <img src={coach} alt="диван" />
                            <p>{item.name}</p>
                            <button type='button' className='btn btn__blue btn__medium btn__white-active'>Выбрать</button>
                        </div>)
                    })}
                </div>

                <SelectionInfo />
            </div>
        </div>
    )
}

export default SelectionPage;
