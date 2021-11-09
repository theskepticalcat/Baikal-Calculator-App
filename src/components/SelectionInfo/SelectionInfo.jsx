import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import './selectionInfo.scss';
import './../../styles/index.scss';

import selectedItem from './../../assets/images/coach.png';
import add from './../../assets/images/blue-add.svg';
import reduce from './../../assets/images/blue-reduce.svg';



const SelectionInfo = observer((item) => {
    const {furniture} = useContext(Context);
    const [isSelected, setSelected] = useState(item);   //стэйт отображения выбранного айтема мебели

    
    const newSelectedItem = furniture.furniture.filter(i =>     //нашли айтем, имя в котором = выбранному айтему
        i.name === item.selectedItem
    )
    console.log(newSelectedItem[0]);    //вытащили первый эл-нт, в кот. об-кт целиком с выбранным именем
    //а теперь его надо куда-то дальше передать, чтобы отобразить на странице с выбранными товарами


    return (
        <div>
        {isSelected === item
            ? 
            <div className='info__empty'>
                <p>Вы не выбрали пока ни одного элемента.</p>
            </div>
            :
            <div className='info'>
                <div className='info__selected-item'>
                    <img src={selectedItem} alt='/' />
                    <p>{item.selectedItem}</p>
                </div>


                <div className='info__quantity'>
                    <p>Кол-во:</p>
                    <div className='info__quantity-btns'>
                        <button type='button'><img src={reduce} alt='-' /></button>
                        <p className='info__quantity-amount'>1</p>
                        <button type='button'><img src={add} alt='+' /></button>
                    </div>
                </div>

                <div className='info__specifications'>
                    <div className='info__specifications-item'><p>25 м3</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Общая масса нетто, кг</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Общая масса брутто, кг</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Стоимость одной единицы</p></div>
                </div>

                <form>
                    <button className='btn btn__blue btn__submit'>Сбросить</button>
                    <button className='btn btn__blue btn__submit'>Добавить</button>
                </form>
            </div>
        }
        </div>
    )
})

export default SelectionInfo;